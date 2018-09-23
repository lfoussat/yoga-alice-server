const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')
const auth = require('./auth/local.js')
const db = require('./db-sql.js')

const app = express()

/* MIDDLEWARES */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(auth.tokenParser)

const awaitRoute = routeHandler => async (req, res, next) => {
  try {
    const result = await routeHandler(req, res)
    if (result !== undefined) {
      res.json(result)
    }
  } catch (err) {
    next(err)
  }
}

/* MULTER SET UP - IMAGE UPLOAD & ACCESS */
const uploadDir = path.join(__dirname, 'public/images/inspirations')
const staticDir = path.join(__dirname, 'public/images')

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => { // accepts only images
    const ext = path.extname(file.originalname).toLowerCase()
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      req.fileValidationError = 'Invalid file type'
      return cb(new Error('Invalid file type'), false)
    }
    cb(null, true)
  },
  limits: { // limited at 5 Mo
    fileSize: 5000000
  }
}).single('draftImageUrl')

// images - authorize Access
app.use('/images', express.static(staticDir)) // module to access images
app.use('/images/inspirations', express.static(uploadDir)) // module to access images

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Access-Token')
  next()
})

/* ROUTES FOR INSPIRATIONS - GET, ADD, UPDATE, DELETE */

app.get('/fo/inspirations', async (req, res) => { // get all inpirations
  console.log('coucou')
  const inspirations = await db.getInspirations()
  console.log(inspirations)
  const publishedInspirations = inspirations
      .filter(i => i.publicationDate !== null)
      .map(i => {
        return {
          id: i.id,
          title: i.title,
          smallDescription: i.smallDescription,
          color: i.color
        }
      })
    console.log(publishedInspirations)

    res.json(publishedInspirations)
  // gestion des erreurs .catch(err => console.error(error))
})

app.get('/bo/inspirations', auth.requireToken, async (req, res) => { // get all inpirations
  console.log(req.token.id)
  const inspirations = await db.getUserInspirations(req.token.id)

  res.json(inspirations)
})

// app.get('/:side/inspirations', async (req, res) => { // get all inpirations
//   const side = req.params.side
//   const inspirations = await db.getInspirations()

//   if (side === 'bo') {
//     //auth.requireToken()
//     res.json(inspirations)
//   } else if (side === 'fo') {
//     const publishedInspirations = inspirations
//       .filter(i => i.publicationDate !== null)
//       .map(i => {
//         return {
//           id: i.id,
//           title: i.title,
//           smallDescription: i.smallDescription,
//           color: i.color
//         }
//       })

//     res.json(publishedInspirations)
//   }
//   // gestion des erreurs .catch(err => console.error(error))
// })
  const id = Number(req.params.id)
  const side = req.params.side
  let inspiration = {}

  if (side === 'bo') {
    inspiration = await db.getInspirationByIdForBO(id)
  } else if (side === 'fo') {
    inspiration = await db.getInspirationById(id)
  }

  res.json(inspiration)
})

app.post('/inspirations', auth.requireToken, awaitRoute(async req => { // create an inspiration
  const title = req.body.title
  const userId = req.token.id
  console.log(userId)
  const params = {
    title: title,
    color: '#f1f7ed',
    image_url: 'default.jpeg',
    small_description: '',
    description: '',
    draft_title: title,
    draft_color: '#f1f7ed',
    draft_image_url: 'default.jpeg',
    draft_small_description: '',
    draft_description: '',
    is_draft: true,
    user_id: userId
  }
  const { id } = await db.createInspiration(params)

  return { id }
}))
// userId: req.token.id

app.post('/inspirations/:id', async (req, res, next) => { // update an inspiration
  upload(req, res, (err) => {
    if (err) {
      console.log('there is an error', err)
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.json({ error: 'file too big' })
      }
      if (req.fileValidationError) {
        return res.json({ error: 'Invalid type file' })
      }
    }

    const id = Number(req.params.id)
    const { draftTitle, draftSmallDescription, draftDescription, draftColor, isDraft } = req.body
    const params = {
      draft_title: draftTitle,
      draft_small_description: draftSmallDescription,
      draft_description: draftDescription,
      draft_color: draftColor,
      is_draft: isDraft,
      modification_date: new Date()
    }

    if (isDraft === 'true') { // save as draft
      if (req.file) {
        params['draft_image_url'] = req.file.originalname
      }

      db.updateInspiration(id, params)
        .then(() => res.json('ok'))
        .catch(next)
    } else if (isDraft === 'false') { // publish
      if (req.file) {
        params['image_url'] = req.file.originalname
        params['draft_image_url'] = req.file.originalname
      } else if (req.body.draftImageUrl) {
        params['image_url'] = req.body.draftImageUrl
      }
      params.title = draftTitle
      params['small_description'] = draftSmallDescription
      params['description'] = draftDescription
      params['color'] = draftColor
      params['publication_date'] = new Date()

      db.updateInspiration(id, params)
        .then(() => res.json('ok'))
        .catch(next)
    }
  })
})

app.delete('/inspirations/:id', awaitRoute(async (req, res) => { // delete an inspiration
  const id = Number(req.params.id)
  await db.deleteInspiration(id)

  return 'deleted'
}))

/* END OF ROUTES FOR INSPIRATIONS */

/* HANDLE ERRORS */
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).json({ error: err.message })
  } else {
    res.status(404).json({ error: 'Not Found' })
  }
})

app.listen(5300, () => console.log(`j'écoute sur le port 5300`))
