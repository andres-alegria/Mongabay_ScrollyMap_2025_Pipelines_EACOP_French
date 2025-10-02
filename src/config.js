const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/mongabay/cmfgilapc000p01sd9z7878oo',
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,
  showMarkers: false,
  theme: 'mongabay',
  intro: {
    title: 'Clearing the Way',
    subtitle:
      'Satellite data show that hundreds of square kilometers of bush and farmland have been cleared along the route of the controversial East African Crude Oil Pipeline.',
    date: 'Sept. 18 2025',
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
  footer: 'Cartography by Andrés Alegría | Edited by Terna Gyuse',
  chapters: [

    // chapter 1
    {
      id: 'chapter 1',
      alignment: 'left',
      hidden: false,
      title: 'Weaving a dangerous web',
      description: "New oil pipelines are putting some of the planet’s last biodiversity strongholds — and many Indigenous lands — at risk.",
       legend: [
        {
          title: 'Global network of oil/gas pipelines',
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
          title: 'Oil/Gas Pipeline',
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
      description: "The East African Crude Oil Pipeline (EACOP) will run 1,443 kilometers (897 miles) from Uganda's newly developed oil fields on Lake Albert to the Tanzanian port of Tanga.",
             legend: [
        {
          title: 'Existing pipelines',
          fromLayer: 'Pipelines existing',
        },
             {
          title: 'Under construction or proposed pipelines',
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
      title: 'Where pipelines meet critical ecosystems',
      description: "Construction and operation of oil infrastructure risks irreversible damage to critical wildlife habitat, water bodies and farmland.The pipeline and its 2-km (1.2-mi) buffer zone are impacting more than 100,000 people and dozens of formal protected areas, starting with the wellheads and feeder lines in and around Murchison Falls National Park.",
             legend: [
        {
          title: 'Critical areas based on the Global Safety Net Initiative (GSN)',
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
      title: 'Protected areas under threat',
      description: "By July 2025, nine wellpads and 38 km (23.6 mi) of roads had been constructed in the park. Campaigners have reported disturbances to elephants and other wildlife in the park and raised fears over a pipeline crossing the Nile River in a Ramsar-listed wetland that is a refuge for endangered species like the shoebill stork (<i>Balaeniceps rex</i>).",
             legend: [
        {
          title: 'Protected areas affected by EACOP',
          color: '#bdeaaf',
        },
         ],
       sources: 'Earth Insight',
     images: [
        {
          src: 'photo2.jpg', 
          position: 'top',
          title: 'Shoebill storks',
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
      title: 'National treasure',
      description: "Every year, more than 100,000 tourists visit Murchison Falls National Park, Uganda's oldest and largest protected area, to see elephants, lions, giraffes and numerous endemic species, generating income for the government and nearby communities.",
             legend: [
        {
          title: 'Murchison Falls National Park',
     // fromLayer: 'wdpas-2025-Murchison',
            border: '#c3a7c5',
        },
         ],
     sources: 'Satellite image from Copernicus',       
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
      title: 'Worrying footprint',
      description: "Unnecessary risk.",
           legend: [
        {
          title: 'Tilenga Feeder Pipeline Trajectory',
          icon: 'pipeline',
        },
         ],
      sources: 'Satellite image from Copernicus',
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
      title: 'Unnecessary risk',
      description: "This East African pipeline dispossesses thousands of people, threatens vital water supplies and puts sensitive ecosystems at risk — its carbon footprint will be 25 times the combined annual emissions of Tanzania and Uganda.",
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
