const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/mongabay/cmfgilapc000p01sd9z7878oo',
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,
  showMarkers: false,
  theme: 'mongabay',
  intro: {
    title: 'Ouverture du passage',
    subtitle:
      'Les données satellites montrent que des centaines de kilomètres carrés de brousse et de terres agricoles ont été défrichés le long du tracé du controversé oléoduc d’Afrique de l’Est.',
    date: '18 sept. 2025',
    social: [
      {
        name: 'twitter',
        src: 'twitter.svg',
        href: 'https://x.com/Mongabay',
      },
      {
        name: 'facebook',
        src: 'facebook.svg',
        href: 'https://www.facebook.com/Mongabay/',
      },
    ],
  },
  logos: [
    {
      name: 'mongabay',
      src: 'mongabaylogo.png',
      width: '140',
      href: 'https://news.mongabay.com',
    },
  ],
  alignment: 'left',
  footer: "Cartographie d'Andrés Alegría | Edité par Terna Gyuse",
  chapters: [

    // chapter 1
    {
      id: 'chapter 1',
      alignment: 'left',
      hidden: false,
      title: 'Le tissage d’une toile dangereuse',
      description: "Les nouveaux oléoducs mettent en péril certains des derniers bastions de biodiversité (et des terres autochtones) de la planète.",
       legend: [
        {
          title: 'Un réseau mondial d’oléoducs et de gazoducs',
          fromLayer: 'Pipelines existing',
        },
      ],
      sources: 'Global Energy Monitor',
      location: {
        center: [31.5, 1.25],
        zoom: 1.8,
        pitch: 0.0,
        bearing: 0,
      },
      images: [
        {
          src: 'Photo1.jpg',
          position: 'top',
          title: 'Oléoduc/gazoduc',
          author: 'R. Naik',
        },
      ],
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'Pipeline_icons',
          opacity: 0,
        },
        {
          layer: 'Satellite_2025',
          opacity: 0,
        },
                  {
          layer: 'Satellite_2023',
          opacity: 0,
        },
        {
          layer: 'wdpas-2025-Murchison',
          opacity: 0,
        },
               {
          layer: 'wdpas-2025-Murchison fill',
          opacity: 0,
        },
        {
          layer: 'GSN-climate-stabilization',
          opacity: 0,
        },
        {
          layer: 'GSN-potential-corridors',
          opacity: 0,
        },
        {
          layer: 'wdpas-2025',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity',
          opacity: 0,
        },
        {
          layer: 'GSN-large-mammals',
          opacity: 0,
        },
          {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },  
          {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },  
          {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },  
         {
          layer: 'wdpas-2025 color threatend',
          opacity: 0,
        },
      ],
        onChapterExit: [
          {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },  
          {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },  
      ],
    
    },


    // chapter 2
    {
      id: 'chapter 2',
      alignment: 'left',
      hidden: false,
      title: 'EACOP',
      description: "L’oléoduc d’Afrique de l’Est (EACOP) s’étendra sur 1 443 km, depuis les champs pétrolifères nouvellement développés du lac Albert jusqu’au port tanzanien de Tanga.",
             legend: [
        {
          title: 'Oléoducs existants',
          fromLayer: 'Pipelines existing',
        },
             {
          title: 'Construction d’oléoducs prévue ou en cours',
          fromLayer: 'Pipelines under construction',
        },
         ],
      location: {
        center: [36.0, -2.8],
        zoom: 4.2,
        pitch: 0.0,
        bearing: 0,
      },
     
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
                  {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },  
          {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },  
      ],
        onChapterExit: [
        {
          layer: 'Pipeline_icons',
          opacity: 0,
        },
        {
          layer: 'Satellite_2025',
          opacity: 0,
        },
                  {
          layer: 'Satellite_2023',
          opacity: 0,
        },
        {
          layer: 'wdpas-2025-Murchison',
          opacity: 0,
        },
                     {
          layer: 'wdpas-2025-Murchison fill',
          opacity: 0,
        },
        {
          layer: 'GSN-climate-stabilization',
          opacity: 0,
        },
        {
          layer: 'GSN-potential-corridors',
          opacity: 0,
        },
        {
          layer: 'wdpas-2025',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity',
          opacity: 0,
        },
        {
          layer: 'GSN-large-mammals',
          opacity: 0,
        },
          {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },  
         {
          layer: 'wdpas-2025 color threatend',
          opacity: 0,
        },          
      ],
    
    },


    // chapter 3
    {
      id: 'chapter 3',
      alignment: 'left',
      hidden: false,
      title: 'Quand les oléoducs rencontrent des écosystèmes cruciaux',
      description: "La construction et l’exploitation des infrastructures pétrolières risquent de causer des dommages irréversibles aux habitats naturels essentiels, aux plans d’eau et aux terres agricoles. L’oléoduc et sa zone tampon de 2 km affectent plus de 100 000 personnes ainsi que des dizaines d’aires protégées officielles, avec un impact particulièrement marqué au niveau des têtes de puits et des conduites d’amenée situées dans et autour du parc national Murchison Falls.",
             legend: [
        {
          title: 'Aires cruciales selon l’initiative Global Safety Net (GSN)',
          color: '#006a54',
        },
         ],
      sources: 'GSN',
      location: {
        center: [31.506, -1.5],
        zoom: 5.6,
        pitch: 0.0,
        bearing: 0,
      },
     
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'GSN-climate-stabilization',
          opacity: 1,
        },
        {
          layer: 'GSN-potential-corridors',
          opacity: 1,
        },
        {
          layer: 'wdpas-2025',
          opacity: 1,
        },
        {
          layer: 'GSN-intact-wilderness-areas',
          opacity: 1,
        },
        {
          layer: 'GSN-high-biodiversity',
          opacity: 1,
        },
        {
          layer: 'GSN-large-mammals',
          opacity: 1,
        },
      ],
        onChapterExit: [
                  {
          layer: 'wdpas-2025 color threatend',
          opacity: 0,
        },
      ],
    
    },
    

    // chapter 4
    {
      id: 'chapter 4',
      alignment: 'left',
      hidden: false,
      title: 'Des aires protégées menacées',
      description: "En juillet 2025, neuf sites de forage et 38 km de routes avaient été construits dans le parc. Les militants ont signalé des perturbations chez les éléphants et d’autres animaux sauvages dans le parc et ont exprimé leurs inquiétudes concernant le passage de l’oléoduc sur le Nil, dans une zone humide inscrite à la convention de Ramsar, qui sert de refuge à des espèces menacées telles que le bec-en-sabot du Nil (<i>Balaeniceps rex</i>).",
             legend: [
        {
          title: 'Aires protégées affectées par l’EACOP',
          color: '#bdeaaf',
        },
         ],
       sources: 'Earth Insight',
     images: [
        {
          src: 'photo2.jpg', 
          position: 'top',
          title: 'Bec-en-sabot du Nil',
          author: 'K. Marino',
        },
      ],  
      location: {
        center: [31.506, -1.5],
        zoom: 5.6,
        pitch: 0.0,
        bearing: 0,
      },
     
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
         {
          layer: 'GSN-climate-stabilization',
          opacity: 0,
        },
        {
          layer: 'GSN-potential-corridors',
          opacity: 0,
        },
        {
          layer: 'wdpas-2025',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity',
          opacity: 0,
        },
        {
          layer: 'GSN-large-mammals',
          opacity: 0,
        },
      ],
        onChapterExit: [
            {
          layer: 'wdpas-2025 color threatend',
          opacity: 1,
        },
                         {
          layer: 'wdpas-2025-Murchison',
          opacity: 0,
        },
                     {
          layer: 'wdpas-2025-Murchison fill',
          opacity: 0,
        },
                {
          layer: 'Satellite_2025',
          opacity: 0,
        },
                  {
          layer: 'Satellite_2023',
          opacity: 0,
        },
      ],
    
    },
    
        
    // chapter 5
    {
      id: 'chapter 5',
      alignment: 'left',
      hidden: false,
      title: 'Un trésor national',
      description: "Chaque année, ce sont plus de 100 000 touristes qui visitent le parc national Murchison Falls, l’aire protégée la plus vaste et la plus ancienne d’Ouganda, pour y voir des éléphants, des lions, des girafes, et d’autres espèces endémiques, générant ainsi des revenus pour le gouvernement et les communautés voisines.",
             legend: [
        {
          title: 'Parc national Murchison Falls',
     // fromLayer: 'wdpas-2025-Murchison',
            border: '#c3a7c5',
        },
         ],
     sources: 'Image satellite capturée par le programme Copernicus',       
      location: {
        center: [31.45, 2.175],
        zoom: 10.75,
        pitch: 0.0,
        bearing: 0,
      },
     
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
                          {
          layer: 'wdpas-2025 color',
          opacity: 0,
        },
                 {
          layer: 'wdpas-2025-Murchison',
          opacity: 1,
        },
                     {
          layer: 'wdpas-2025-Murchison fill',
          opacity: 0.2,
        },
                  {
          layer: 'Satellite_2023',
          opacity: 1,
        },
      ],
        onChapterExit: [
                 {
          layer: 'Satellite_2025',
          opacity: 1,
        },
             {
          layer: 'Pipeline_icons',
          opacity: 0,
        },
      ],
    
    },
    
      
    // chapter 6
    {
      id: 'chapter 6',
      alignment: 'left',
      hidden: false,
      title: 'Une empreinte inquiétante',
      description: "Un risque inutile.",
           legend: [
        {
          title: 'Trajectoire de l’oléoduc d’amenée de Tilenga',
          icon: 'pipeline',
        },
         ],
      sources: 'Image satellite capturée par le programme Copernicus',
      location: {
        center: [31.45, 2.175],
        zoom: 10.75,
        pitch: 0.0,
        bearing: 0,
      },
     
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
                          {
          layer: 'wdpas-2025 color',
          opacity: 0,
        },
                 {
          layer: 'wdpas-2025-Murchison',
          opacity: 1,
        },
                     {
          layer: 'wdpas-2025-Murchison fill',
          opacity: 0.2,
        },
                  {
          layer: 'Satellite_2023',
          opacity: 0,
        },
      ],
        onChapterExit: [
                      {
          layer: 'Pipeline_icons',
          opacity: 1,
        },
                 {
          layer: 'Satellite_2025',
          opacity: 1,
        },
      ],
    
    },
       
   
   
      
    // chapter 7
    {
      id: 'chapter 7',
      alignment: 'left',
      hidden: false,
      title: 'Un risque inutile',
      description: "L’oléoduc d’Afrique de l’Est dépossède des milliers de personnes, menace des réserves d’eau vitales et met en danger des écosystèmes fragiles. On estime que son empreinte carbone sera équivalente à 25 fois les émissions totales actuelles de la Tanzanie et de l’Ouganda.",
      location: {
        center: [31.506, -1.5],
        zoom: 5.6,
        pitch: 0.0,
        bearing: 0,
      },
     
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'Pipeline_icons',
          opacity: 0,
        },
        {
          layer: 'Satellite_2025',
          opacity: 0,
        },
                  {
          layer: 'Satellite_2023',
          opacity: 0,
        },
        {
          layer: 'wdpas-2025-Murchison',
          opacity: 0,
        },
               {
          layer: 'wdpas-2025-Murchison fill',
          opacity: 0,
        },
        {
          layer: 'GSN-climate-stabilization',
          opacity: 0,
        },
        {
          layer: 'GSN-potential-corridors',
          opacity: 0,
        },
        {
          layer: 'wdpas-2025',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity',
          opacity: 0,
        },
        {
          layer: 'GSN-large-mammals',
          opacity: 0,
        },
          {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },  
         {
          layer: 'wdpas-2025 color threatend',
          opacity: 0,
        },
      ],
        onChapterExit: [
      ],
    },
       
       
   

  ],
};
