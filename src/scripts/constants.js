/** 
 *  INDEX
 *  
 *  1   
 * appData
 * 
 *  2   
 * products
 */
/* 1. APP DATA
________________________________________________________ */
const appData =
{
  title: "Histoires d'atelier",
  subtitle: "création",
  categories: [
    {
      name: "papeterie",
      id: 0,
      link: "papeterie",
      highlight: true,
      img: "/img/categories/papeterie.jpg",
      descr: "Faire-part, invitations, menus, noms de tables, plans de tables, marque-places, cartes de remerciements, livret de cérémonie et panneau de bienvenue signalétique. Retrouvez toute notre papeterie par ici.",
      subCategories: [
        {
          id: 0,
          name: "faire-part",
          link: "faire-part"
        },
        {
          id: 1,
          name: "papeterie décorative",
          link: "papeterie-decorative"
        }
      ]
    },
    {
      name: "wedding design",
      id: 1,
      link: "wedding-design",
      highlight: true,
      img: "/img/categories/wedding-design.jpg",
      descr: "Décoration, création d’ambiance, sélection d’accessoires, papeterie décorative, coordination, installation, démontage. Nous imaginons avec vous toute la décoration de votre mariage.",
      subCategories: []
    },
    {
      name: "professionnels",
      id: 2,
      link: "professionnels",
      highlight: true,
      img: "/img/categories/professionnels.png",
      descr: "Stylisme photo, mise en scène produit, décoration évènementielle. Nous mettons en valeur vos produits à travers des shooting photos sur mesure (set design) et votre image, lors de vos événements d’entreprises (event design).",
      subCategories: [
        {
          id: 0,
          name: "set design",
          link: "set-design"
        },
        {
          id: 1,
          name: "event design",
          link: "event-design"
        }
      ]
    },
    {
      name: "l'atelier",
      id: 3,
      link: "atelier",
      highlight: false,
      img: "",
      subCategories: []
    },
    {
      name: "contact",
      id: 4,
      link: "contact",
      highlight: false,
      img: "",
      subCategories: []
    }
  ],
  homePage: {
    quote: "Chez Histoires d’atelier, nous sommes attachées à l’artisanat, au savoir-faire et au made in France",
    latelier: "L'atelier",
    latelierdescr: "Depuis plus de 11 ans, Histoires d’atelier propose ses services en Anjou et dans les Pays de La Loire pour votre mariage ou vos événements, avec à cœur de créer avec vous votre histoire. Nous pouvons créer et installer toute la décoration de votre événement, jusqu’au moindre détail grâce à la création de papeterie décorative. Nous proposons aussi nos services en Set design, pour les entreprises à la recherche d’un professionnel qui saura imaginer un univers autour d’un sujet à photographier.",
    services: "Nos prestations",
    whatsNew: "Notre actualité",
    followInsta: "@histoiresdatelier",
    followUs: "Suivez-nous"
  },
  values: {
    title: "Nos valeurs",
    items: [
      "made in france",
      ".",
      "artisanat",
      ".",
      "qualité"
    ]
  },
  testimonies: [
    {
      date: "avril 2022",
      id: "0",
      author: "Émilie & Clément",
      subject: "À propos du faire-part",
      message: "Nous nous sommes tout de suite sentis à l’écoute et à l’aise avec Stéphanie. Nous sommes ravis d’avoir fait appel à Histoires d’atelier pour la réalisation de nos faire-part."
    },
    {
      date: "mai 2022",
      id: "1",
      author: "Sailor & Lula",
      subject: "À propos du faire-part",
      message: "Note that the development build is not optimized. To create a production build, use npm run build. Note that the development build is not optimized. To create a production build, use npm run build."
    }
  ],
  advice: [
    {
      id: "1",
      title: "Pourquoi imprimer un faire part ?",
      body: "Votre faire-part est le premier élément que les invités decouvriront avant d'assister à votre mariage, il permet de leur dévoiler l'univers que vous avez choisi pour ce grand jour."
    },
    {
      id: "2",
      title: "Mais qu'est-ce qu'un faire part ?",
      body: "C'est une carte qui annonce la nouvelle de votre union et qui, de nos jours, sert aussi d'invitation au mariage. À l'origine un faire-part servait, comme son nom l'indique, à faire part de la bonne nouvelle et à annoncer le mariage à venir aux proches des mariés."
    },
    {
      id: "3",
      title: "Quelle est son utilité ?",
      body: "Envoyer votre faire-part permet de créer un souvenir qui restera au-delà du mariage. Il vous permet d'exprimer votre créativité et votre personnalité. Il transmet des informations pratiques à vos invités et a donc un role à jouer dans l'organisation de votre événement. Vous vous faites plaisir en le realisant et vous faites plaisir à vos proches avec qui vous partagez votre joie."
    },
    {
      id: "4",
      title: "Quand devez-vous l'envoyer ?",
      body: "Entre 4 mois et 6 mois avant votre mariage. C'est suffisamment proche de la date pour que vos invités se projettent et suffisamment tôt pour recevoir leurs reponses et permettre à votre traiteur de s'organiser."
    },
    {
      id: "5",
      title: "Quand contacter le créateur ?",
      body: "Dans l'ideal, 2 à 3 mois avant l'envoi pour prendre le temps de valider chaque étape de creation. Votre histoire est la source d'inspiration d'histoires datelier. Un certain nombre d'emotions s'exprime à travers elle et notre role est de les retranscrire sur des papiers de qualité, de belles textures et dans des nuances de couleurs tres raffinées."
    }
  ],
  contact: {
    address: "rue du comte de Tourville<br> 49100, ANGERS",
    mail: "contact@histoiresdatelier.fr",
    whatsApp: "+33 6 55 44 22 11",
    instgram: "https://www.instagram.com/histoiresdatelier/",
    facebook: "https://www.facebook.com/HistoiresdAtelier"
  },
  footer: {
    visitCard: [
      "Créatrice de papeterie",
      ".",
      "Décoratrice événementielle",
      ".",
      "Set Designer pour les professionnels"
    ],
    sitemap: [
      "PLAN DU SITE",
      "Papeterie",
      "Wedding design",
      "Professionnels",
      "L'atelier",
      "Contact"
    ],
    infos: [
      "INFORMATIONS",
      "Politique de confidentialité",
      "CGV"
    ],
    address: [
      "L'ATELIER",
      "91 rue de la Chalouère",
      "49 100 Angers"
    ],
    contact: [
      "CONTACT",
      "contact@histoiresdatelier.com"
    ]
  },
  controller: [
    {
      id: 0,
      divID: "everything",
      icon: "fa-solid fa-infinity",
      name: "Tous",
      link: ""
    },
    {
      id: 1,
      divID: "mariage",
      icon: "fa-solid fa-champagne-glasses",
      name: "Mariage",
      link: "mariage"
    },
    {
      id: 2,
      divID: "naissance",
      icon: "fa-solid fa-baby-carriage",
      name: "Naissance",
      link: "naissance"
    },
    {
      id: 3,
      divID: "bapteme",
      icon: "fa-solid fa-church",
      name: "Baptême",
      link: "bapteme"
    },
    {
      id: 4,
      divID: "surmesure",
      icon: "fa-solid fa-compass-drafting",
      name: "Sur-mesure",
      link: "sur-mesure"
    },
    {
      id: 5,
      divID: "advice",
      icon: "fa-solid fa-lightbulb",
      name: "conseils",
      link: "conseils"
    }
  ]
}
/* 2. PRODUCTS
________________________________________________________ */
const products = {
  faireParts :
  [
    {
      id: "0",
      name: "article 1",
      category: "naissance",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/naissance/1.webp",
        "/img/products/fairepart/naissance/2.webp",
        "/img/products/fairepart/naissance/3.webp",
        "/img/products/fairepart/naissance/4.webp",
        "/img/products/fairepart/naissance/5.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "1",
      name: "article 2",
      category: "naissance",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/naissance/2.webp",
        "/img/products/fairepart/naissance/6.webp",
        "/img/products/fairepart/naissance/7.webp",
        "/img/products/fairepart/naissance/8.webp",
        "/img/products/fairepart/naissance/1.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "2",
      name: "article 3",
      category: "naissance",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/naissance/3.webp",
        "/img/products/fairepart/naissance/1.webp",
        "/img/products/fairepart/naissance/2.webp",
        "/img/products/fairepart/naissance/5.webp",
        "/img/products/fairepart/naissance/4.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "3",
      name: "article 4",
      category: "naissance",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/naissance/4.webp",
        "/img/products/fairepart/naissance/7.webp",
        "/img/products/fairepart/naissance/8.webp",
        "/img/products/fairepart/naissance/6.webp",
        "/img/products/fairepart/naissance/5.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "4",
      name: "article 5",
      category: "naissance",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/naissance/5.webp",
        "/img/products/fairepart/naissance/2.webp",
        "/img/products/fairepart/naissance/3.webp",
        "/img/products/fairepart/naissance/4.webp",
        "/img/products/fairepart/naissance/6.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "5",
      name: "article 6",
      category: "bapteme",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/bapteme/6.webp",
        "/img/products/fairepart/bapteme/5.webp",
        "/img/products/fairepart/bapteme/4.webp",
        "/img/products/fairepart/bapteme/3.webp",
        "/img/products/fairepart/bapteme/2.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "6",
      name: "article 7",
      category: "bapteme",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/bapteme/7.webp",
        "/img/products/fairepart/bapteme/5.webp",
        "/img/products/fairepart/bapteme/4.webp",
        "/img/products/fairepart/bapteme/3.webp",
        "/img/products/fairepart/bapteme/2.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "7",
      name: "article 8",
      category: "bapteme",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/bapteme/8.webp",
        "/img/products/fairepart/bapteme/5.webp",
        "/img/products/fairepart/bapteme/4.webp",
        "/img/products/fairepart/bapteme/3.webp",
        "/img/products/fairepart/bapteme/2.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "8",
      name: "article 9",
      category: "bapteme",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/bapteme/2.webp",
        "/img/products/fairepart/bapteme/5.webp",
        "/img/products/fairepart/bapteme/4.webp",
        "/img/products/fairepart/bapteme/3.webp",
        "/img/products/fairepart/bapteme/2.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "9",
      name: "article 10",
      category: "bapteme",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/bapteme/4.webp",
        "/img/products/fairepart/bapteme/5.webp",
        "/img/products/fairepart/bapteme/4.webp",
        "/img/products/fairepart/bapteme/3.webp",
        "/img/products/fairepart/bapteme/2.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "10",
      name: "article 11",
      category: "mariage",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/1.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "11",
      name: "article 12",
      category: "mariage",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "12",
      name: "article 13",
      category: "mariage",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "13",
      name: "article 14",
      category: "mariage",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/8.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "14",
      name: "article 15",
      category: "mariage",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/2.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "15",
      name: "article 16",
      category: "mariage",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/1.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "16",
      name: "article 17",
      category: "mariage",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/3.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "17",
      name: "article 18",
      category: "mariage",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "18",
      name: "article 19",
      category: "bapteme",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/2.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "19",
      name: "article 20",
      category: "bapteme",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "20",
      name: "article 21",
      category: "bapteme",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/8.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "21",
      name: "article 22",
      category: "bapteme",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/2.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "22",
      name: "article 23",
      category: "bapteme",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/3.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "23",
      name: "article 24",
      category: "naissance",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "24",
      name: "article 25",
      category: "naissance",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/4.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "25",
      name: "article 26",
      category: "naissance",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "26",
      name: "article 27",
      category: "naissance",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "27",
      name: "article 28",
      category: "naissance",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/8.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "28",
      name: "article 29",
      category: "naissance",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "29",
      name: "article 30",
      category: "mariage",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/8.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "30",
      name: "article 31",
      category: "mariage",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/1.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "31",
      name: "article 32",
      category: "bapteme",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/2.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "32",
      name: "article 33",
      category: "bapteme",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/4.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/1.webp",
        "/img/products/fairepart/mariage/2.webp",
        "/img/products/fairepart/mariage/3.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "33",
      name: "article 34",
      category: "bapteme",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/1.webp",
        "/img/products/fairepart/mariage/2.webp",
        "/img/products/fairepart/mariage/3.webp",
        "/img/products/fairepart/mariage/4.webp",
        "/img/products/fairepart/mariage/5.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "34",
      name: "article 35",
      category: "bapteme",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/8.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/4.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "35",
      name: "article 36",
      category: "mariage",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/8.webp",
        "/img/products/fairepart/mariage/7.webp",
        "/img/products/fairepart/mariage/6.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/4.webp"
      ],
      highlighted: true,
      selected: false
    },
    {
      id: "36",
      name: "article 37",
      category: "bapteme",
      format: "8cm x 11cm",
      paper: "Old Mill",
      typography: "arnoPro",
      pattern: "fleurs",
      price: "5",
      verso: false,
      fold: false,
      descr: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      img: [
        "/img/products/fairepart/mariage/3.webp",
        "/img/products/fairepart/mariage/2.webp",
        "/img/products/fairepart/mariage/1.webp",
        "/img/products/fairepart/mariage/5.webp",
        "/img/products/fairepart/mariage/8.webp"
      ],
      highlighted: true,
      selected: false
    },
  ],
  accessories:
  [
    {
      name: "envelop",
      price: "1",
      class: "fa-solid fa-envelope-open",
      descr: "Ajouter une enveloppe",
      img: "/img/products/accessories/envelop.webp",
      purchased: false
    },
    {
      name: "fleurs",
      price: "1",
      class: "fa-solid fa-sun",
      descr: "Ajouter des fleurs",
      img: "/img/products/accessories/flowers.webp",
      purchased: false
    },
    {
      name: "ribbon",
      price: "1",
      class: "fa-solid fa-ribbon",
      descr: "Ajouter un ruban",
      img: "/img/products/accessories/ribbon.jpg"
,      purchased: false
    },
    {
      name: "card",
      price: "1",
      class: "fa-solid fa-address-card",
      descr: "Ajouter un carton réponse",
      img: "/img/products/accessories/card.webp",
      purchased: false
    }
  ],
  weddingDesign : {
    img: [
      "/img/products/weddingDesign/wedding-design_1.webp",
      "/img/products/weddingDesign/wedding-design_2.webp",
      "/img/products/weddingDesign/wedding-design_3.webp",
      "/img/products/weddingDesign/wedding-design_4.webp",
      "/img/products/weddingDesign/wedding-design_5.webp",
      "/img/products/weddingDesign/wedding-design_1.webp",
      "/img/products/weddingDesign/wedding-design_2.webp",
      "/img/products/weddingDesign/wedding-design_3.webp",
      "/img/products/weddingDesign/wedding-design_4.webp",
      "/img/products/weddingDesign/wedding-design_5.webp",
      "/img/products/weddingDesign/wedding-design_1.webp",
      "/img/products/weddingDesign/wedding-design_2.webp"
    ]
  }
}


export { appData, products }