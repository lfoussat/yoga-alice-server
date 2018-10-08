
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('home_blocs').del()
    .then(() => {
      // Inserts seed entries
      return knex('home_blocs').insert([
        {
          id: 1,
          created_at: new Date(),
          ref: 'about_me',
          title: 'À propos de moi ...',
          content: 'Bonjour, je m’appelle Alice. Je suis professeur de yoga certifiée yoga alliance 200h, en yoga vinyasa « Vanda Scaravelli ». Mon souhait est d\'offrir des cours créatifs et bienveillants dans le respect des corps et des personnalités de chacun.',
          image_url: 'pose1.jpg',
          btn_text: 'En savoir plus',
          btn_link: 'yoga-alice',
          draft_title: 'À propos de moi ...',
          draft_content: 'Bonjour, je m’appelle Alice. Je suis professeur de yoga certifiée yoga alliance 200h, en yoga vinyasa « Vanda Scaravelli ». Mon souhait est d\'offrir des cours créatifs et bienveillants dans le respect des corps et des personnalités de chacun.',
          draft_image_url: 'pose1.jpg',
          draft_btn_text: 'En savoir plus',
          draft_btn_link: 'yoga-alice',
          is_draft: false,
        },
        {
          id: 2,
          created_at: new Date(),
          ref: 'mosaiq_up',
          title: 'Stages',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit finibus, faucibus velit sed, fermentum eros. Aliquam consequat efficitur turpis. Suspendisse vel blandit ante, id placerat tortor. Nunc viverra pulvinar tellus ac tempor. Duis consequat arcu vel arcu pretium auctor. Aliquam sit amet interdum diam. Vestibulum diam nulla, lacinia vitae dignissim quis, posuere ut sapien. Nullam aliquam purus eu est porttitor faucibus. Duis in nibh turpis.',
          image_url: 'cours-cadre.jpg',
          btn_text: 'En savoir plus',
          btn_link: 'stages',
          draft_title: 'Stages',
          draft_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit finibus, faucibus velit sed, fermentum eros. Aliquam consequat efficitur turpis. Suspendisse vel blandit ante, id placerat tortor. Nunc viverra pulvinar tellus ac tempor. Duis consequat arcu vel arcu pretium auctor. Aliquam sit amet interdum diam. Vestibulum diam nulla, lacinia vitae dignissim quis, posuere ut sapien. Nullam aliquam purus eu est porttitor faucibus. Duis in nibh turpis.',
          draft_image_url: 'cours-cadre.jpg',
          draft_btn_text: 'En savoir plus',
          draft_btn_link: 'stages',
          is_draft: false,
        },
        {
          id: 3,
          created_at: new Date(),
          ref: 'mosaiq_down',
          title: 'Shiatsu',
          content: 'Je suis diplômée en shiatsu traditionnel auprès de Bernard Bouheret. Je vous reçois donc à mon domicile (prévoyez 1h30 sur place). Le shiatsu est une technique manuelle japonaise favorisant la bonne circulation énergétique dans le corps. Il est particulièrement recommandé en cas : - Prévenir l’anxiété, stress - Soulager les maux de dos, tensions - Soutenir le corps en cas de fatigue, épuisement  - Prévenir les troubles du sommeil  - Prévenir les maux digestifs',
          image_url: 'stage-session-cadre.jpg',
          btn_text: 'En savoir plus',
          btn_link: 'shiatsu',
          draft_title: 'Shiatsu',
          draft_content: 'Je suis diplômée en shiatsu traditionnel auprès de Bernard Bouheret. Je vous reçois donc à mon domicile (prévoyez 1h30 sur place). Le shiatsu est une technique manuelle japonaise favorisant la bonne circulation énergétique dans le corps. Il est particulièrement recommandé en cas : - Prévenir l’anxiété, stress - Soulager les maux de dos, tensions - Soutenir le corps en cas de fatigue, épuisement  - Prévenir les troubles du sommeil  - Prévenir les maux digestifs',
          draft_image_url: 'stage-session-cadre.jpg',
          draft_btn_text: 'En savoir plus',
          draft_btn_link: 'shiatsu',
          is_draft: false,
        },
        {
          id: 4,
          created_at: new Date(),
          ref: 'colored_banner',
          title: 'Cours',
          content: 'Je propose un yoga intuitif et bienveillant, inspiré de mes différentes pratiques ( vinyasa, shiatsu, qi gong, mindfullness). Mes cours sont basés sur les principes fondamentaux de l\'énergétique chinoise (adaptation de la pratique en fonction de l\'heure de la journée, et de la saison) et soutenue par des exercices de méditation en pleine conscience. Mon envie ? Révéler l\'intelligence naturelle de votre corps, et vous faire prendre conscience de vos possibilités infinies.',
          image_url: '',
          btn_text: 'En savoir plus',
          btn_link: 'cours',
          draft_title: 'Cours',
          draft_content: 'Je propose un yoga intuitif et bienveillant, inspiré de mes différentes pratiques ( vinyasa, shiatsu, qi gong, mindfullness). Mes cours sont basés sur les principes fondamentaux de l\'énergétique chinoise (adaptation de la pratique en fonction de l\'heure de la journée, et de la saison) et soutenue par des exercices de méditation en pleine conscience. Mon envie ? Révéler l\'intelligence naturelle de votre corps, et vous faire prendre conscience de vos possibilités infinies.',
          draft_image_url: '',
          draft_btn_text: 'En savoir plus',
          draft_btn_link: 'cours',
          is_draft: false,
        }
      ])
    })
}
