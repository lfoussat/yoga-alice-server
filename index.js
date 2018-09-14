const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')

const db = require('./db-sql.js')

const app = express()

/* MIDDLEWARES */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/* MULTER SET UP - IMAGE UPLOAD & ACCESS*/
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
}).single('picture')

// images - authorize Access
app.use('/images', express.static(staticDir)) // module to access images
app.use('/images/inspirations', express.static(uploadDir)) // module to access images

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
// // for authentication
//   res.header('Access-Control-Allow-Credentials', 'true') // important

/* ROUTES FOR INSPIRATIONS - GET, ADD, UPDATE, DELETE */
app.get('/inspirations', (req, res) => { // get all inpirations
  console.log('je demande les inspi')
  db.getInspirations()
    .then(inspirations => {
      console.log(inspirations)
      res.json(inspirations)
    })
    .catch(err => res.status(500).end(err.message))
})

app.get('/inspirations/:id', async (req, res) => { // get one inspiration
  const inspirations = await db.getInspirations()
  const id = Number(req.params.id)
  const inspiration = inspirations.find(inspiration => inspiration.id === id)

  res.json(inspiration)
})

app.post('/inspirations', async (req, res) => { // create an inspiration
  upload(req, res, async (err) => {
    if (err) {
      console.log('there is an error', err)
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.json({ error: 'File too big' })
      }
      if (req.fileValidationError) {
        return res.json({ error: 'Invalid type file' })
      }
    }

    const inspiration = req.body
    console.log(inspiration)

    inspiration.createdAt = Date.now()
    inspiration.picture = req.file ? req.file.filename : 'default.jpg'

    await db.addInspiration(inspiration)
      .then(() => res.json('ok'))
      .catch(err => res.status(500).end(err.message))
  })
})

app.post('/inspirations/:id', async (req, res, next) => { //update an inspiration
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

    console.log(req.params.id)

    const inspirationId = Number(req.params.id)
    const inspirationInfo = req.body
    console.log(inspirationInfo)
    const newPicture = req.file

    db.updateInspirationInfo(inspirationId, inspirationInfo, newPicture)
      .then(() => res.json('ok'))
      .catch(next)
  })
})

app.delete('/inspirations/:id', async (req, res) => { // delete an inspiration
  let inspirations = await db.getInspirations()
  console.log(inspirations)
  const id = Number(req.params.id)
  console.log(id)
  const inspirationIndex = inspirations.findIndex(inspiration => inspiration.id === id)
  console.log(inspirationIndex)
  // rm file
  inspirations = inspirations.slice(0, inspirationIndex).concat(inspirations.slice(inspirationIndex + 1))
  console.log(inspirations)
  res.json(inspirations)
})

/* END OF ROUTES FOR INSPIRATIONS */

app.listen(5300, () => console.log(`j'écoute sur le port 5300`))
