exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('inspirations')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('inspirations').insert([
        {
          id: 1,
          created_at: new Date(),
          title: 'Agir... ou laisser faire... que choisir ?',
          small_description:
            '" Yoga is an effortless dance between breath and gravity" - Vanda Scaravelli',
          description: `Cette méditation est plutôt une inspiration qui oriente profondément ma pratique sur et hors de mon tapis en ce moment....
          La recherche de l'effort juste, de la fluidité apaisante, guide en ce moment ma pratique. A quel moment tenir, à quel moment lâcher, à quel moment l'effort devient il inutile, à quel moment il est vital, et puis après tout , qu'est ce que l'effort? La rivière a t'elle besoin de chercher l'effort pour couler?

J'observe en moi, et chez les personnes qui croisent ma route, une valorisation inconsciente de la tension. Etre toujours actif, réactif, pro actif...agir, agir agir...parfois jusqu'à s'aigrir, se durcir. il faut même agir pour se détendre, pour se déstresser. Il faut, je dois...tout le temps..Trouver une solution immédiate aux problèmes, réparer, changer.....ne pas tolérer l'inconfort, la souffrance inacceptable. Le soucis, est que cela souvent ne marche pas, voulo  ir changer ce qui est en nous, et souvent la source d'une souffrance et d'une frustration.  N'avez-vous jamais vécu cette situation, ou pris dans une profonde angoisse ou stress, un ami bienveillant vous dit " mais enfin la vie est belle, bouge toi un peu et tout ira bien...ou encore " mais détends toi voyons!"
 Toutes ces injonctions nous blessent, elles nous blessent plus qu'elles nous soutiennent car si nous le pouvions, cela fait longtemps que nous nous serions détendus.

Alors que faire? Souffrir sans rien faire et se laisser aller...?
non...certainement pas.
Mais peut être commencer par observer, observer nos schémas, nos réactions, nos attitudes, nos intentions. Les observer, et puis les accueillir. Les accueillir comme on accueille un ami qui souffre. Pas un accueil conditionnel, qui consisterait à dire, je t'aimerais quand tu auras modifier si ou ça. Un accueil aimant, simple.

Souffrance tu es là, douleur tu es là, frustration tu es là...et je te fais une place..puis respirer, relâcher, écouter...quel est l'écho en moi?
Prendre son temps, prendre son espace, et explorer.

 Quel valeur donnons nous à la non action? A l'observation? La patience? La contemplation? Le Lâcher prise, n'est pas un abandon, le lâcher prise est une décision consciente.
Celle de se mettre en retrait pour prendre le temps d'observer, prendre le temps de se laisser traverser par la vie...puis voir émerger des choses inattendues. L'hiver est le moment propice pour se mettre volontairement un peu en retrait, et savourer...

 Le lâcher prise, c'est peut être s'autoriser à danser sans effort une valse avec le souffle et la gravité.
`,
          image_url: `default.jpg`,
          color: '#D3F6DB',
          draft_title: 'Agir... ou laisser faire... que choisir ?',
          draft_small_description:
            '" Yoga is an effortless dance between breath and gravity" - Vanda Scaravelli',
          draft_description: `Cette méditation est plutôt une inspiration qui oriente profondément ma pratique sur et hors de mon tapis en ce moment....
          La recherche de l'effort juste, de la fluidité apaisante, guide en ce moment ma pratique. A quel moment tenir, à quel moment lâcher, à quel moment l'effort devient il inutile, à quel moment il est vital, et puis après tout , qu'est ce que l'effort? La rivière a t'elle besoin de chercher l'effort pour couler?

J'observe en moi, et chez les personnes qui croisent ma route, une valorisation inconsciente de la tension. Etre toujours actif, réactif, pro actif...agir, agir agir...parfois jusqu'à s'aigrir, se durcir. il faut même agir pour se détendre, pour se déstresser. Il faut, je dois...tout le temps..Trouver une solution immédiate aux problèmes, réparer, changer.....ne pas tolérer l'inconfort, la souffrance inacceptable. Le soucis, est que cela souvent ne marche pas, voulo  ir changer ce qui est en nous, et souvent la source d'une souffrance et d'une frustration.  N'avez-vous jamais vécu cette situation, ou pris dans une profonde angoisse ou stress, un ami bienveillant vous dit " mais enfin la vie est belle, bouge toi un peu et tout ira bien...ou encore " mais détends toi voyons!"
 Toutes ces injonctions nous blessent, elles nous blessent plus qu'elles nous soutiennent car si nous le pouvions, cela fait longtemps que nous nous serions détendus.

Alors que faire? Souffrir sans rien faire et se laisser aller...?
non...certainement pas.
Mais peut être commencer par observer, observer nos schémas, nos réactions, nos attitudes, nos intentions. Les observer, et puis les accueillir. Les accueillir comme on accueille un ami qui souffre. Pas un accueil conditionnel, qui consisterait à dire, je t'aimerais quand tu auras modifier si ou ça. Un accueil aimant, simple.

Souffrance tu es là, douleur tu es là, frustration tu es là...et je te fais une place..puis respirer, relâcher, écouter...quel est l'écho en moi?
Prendre son temps, prendre son espace, et explorer.

 Quel valeur donnons nous à la non action? A l'observation? La patience? La contemplation? Le Lâcher prise, n'est pas un abandon, le lâcher prise est une décision consciente.
Celle de se mettre en retrait pour prendre le temps d'observer, prendre le temps de se laisser traverser par la vie...puis voir émerger des choses inattendues. L'hiver est le moment propice pour se mettre volontairement un peu en retrait, et savourer...

 Le lâcher prise, c'est peut être s'autoriser à danser sans effort une valse avec le souffle et la gravité.
`,
          draft_image_url: `default.jpg`,
          draft_color: '#D3F6DB',
          is_draft: false,
          publication_date: new Date(),
          modification_date: new Date(),
          user_id: 1
        }
      ])
    })
}
