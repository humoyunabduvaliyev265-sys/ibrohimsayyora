import { CelestialBodyData } from '../types';

export const CELESTIAL_BODIES: CelestialBodyData[] = [
  {
    id: 'sun',
    nameUz: 'Quyosh',
    nameEn: 'The Sun',
    type: 'star',
    typeLabelUz: 'Yulduz (Sariq pakana G2V)',
    taglineUz: 'Quyosh tizimining qudratli markazi va hayot manbai',
    descriptionUz: "Quyosh — Quyosh tizimining markazidagi yagona yulduz bo'lib, butun tizim massasining 99.86 foizini tashkil etadi. U asosan vodorod va geliydan iborat plazma shari hisoblanadi. Uning qa'rida har soniyada yuz beradigan termoyadroviy reaksiyalar natijasida yorug'lik va cheksiz energiya ajralib chiqadi.",
    diameterKm: 1392700,
    massKg: '1.989 × 10³⁰ kg (Yer massasidan 333,000 baravar katta)',
    distanceFromSunAu: 0,
    distanceFromSunKm: 0,
    orbitalPeriodDays: 0,
    rotationPeriodHours: 648, // ~27 days
    avgTempC: 5500,
    minTempC: 4000,
    maxTempC: 15000000, // Core temp
    moonsCount: 0,
    moonsList: [],
    gravityMps2: 274, // ~28g
    atmosphereCompositionUz: [
      'Vodorod (H₂): 73.46%',
      'Geliy (He): 24.85%',
      'Kislorod (O): 0.77%',
      'Uglerod (C): 0.29%',
      'Temir (Fe), Neon, Azot: ~0.63%'
    ],
    funFactsUz: [
      'Quyosh ichiga 1.3 millionta Yer sayyorasi sig\'ishi mumkin.',
      'Quyoshdan chiqayotgan yorug\'lik Yerga yetib kelishi uchun taxminan 8 daqiqa 20 soniya vaqt talab etiladi.',
      'Quyoshning markaziy harorati 15 million daraja Selsiyga yetadi.',
      'U har soniyada 600 million tonna vodorodni geliyga aylantiradi.'
    ],
    missions: [
      { name: 'Parker Solar Probe', year: '2018-hozirgacha', agency: 'NASA', descriptionUz: 'Quyosh tojiga tarixdagi eng yaqin masofadan kirib borgan birinchi kosmik kema.' },
      { name: 'SOHO', year: '1995-hozirgacha', agency: 'ESA / NASA', descriptionUz: 'Quyosh faolligi va quyosh shamolini 24/7 rejimida uzluksiz kuzatuvchi stansiya.' }
    ],
    internalLayers: [
      { nameUz: 'Yadro (Core)', nameEn: 'Core', depth: '0 - 175,000 km', descriptionUz: 'Termoyadroviy sintez kechadigan, harorati 15 mln °C bo\'lgan o\'ta zich markaz.', color: '#ffffff' },
      { nameUz: 'Radiatsion zona', nameEn: 'Radiative Zone', depth: '175,000 - 490,000 km', descriptionUz: 'Fotonlar asrlar davomida asta-sekin yuzaga intiladigan qatlam.', color: '#ffb703' },
      { nameUz: 'Konvektiv zona', nameEn: 'Convection Zone', depth: '490,000 - 696,000 km', descriptionUz: 'Issiq plazma qaynab yuzaga chiqadigan va sovigan plazma pastga tushadigan qatlam.', color: '#fb8500' },
      { nameUz: 'Fotosfera (Sirt)', nameEn: 'Photosphere', depth: 'Qalinligi ~400 km', descriptionUz: 'Biz ko\'radigan quyosh yuzasi, harorati 5,500 °C.', color: '#ffd166' }
    ],
    visual: {
      baseRadius: 7.0,
      distanceAuVisual: 0,
      realDistanceScale: 0,
      orbitSpeed: 0,
      rotationSpeed: 0.002,
      axialTiltDeg: 7.25,
      color: '#ffaa00',
      isEmissive: true,
      emissiveColor: '#ff9900',
      emissiveIntensity: 2.2,
      hasAtmosphereGlow: true,
      atmosphereColor: '#ffdd55'
    }
  },
  {
    id: 'mercury',
    nameUz: 'Merkuriy',
    nameEn: 'Mercury',
    type: 'terrestrial',
    typeLabelUz: 'Ichki qoyatosh sayyora',
    taglineUz: 'Quyoshga eng yaqin va eng tez aylanuvchi mittivoy sayyora',
    descriptionUz: "Merkuriy — Quyosh tizimidagi eng kichik va Quyoshga eng yaqin sayyora. U Quyosh atrofida atigi 88 kunda to'liq aylanib chiqadi. Atmosferasi deyarli yo'qligi sababli, kunduzi va kechasi harorat farqi Quyosh tizimida eng keskin hisoblanadi (kunduzi +430°C, kechasi -180°C).",
    diameterKm: 4879,
    massKg: '3.301 × 10²³ kg (Yer massasining 5.5 foizi)',
    distanceFromSunAu: 0.39,
    distanceFromSunKm: 57910000,
    orbitalPeriodDays: 88,
    rotationPeriodHours: 1407.6, // 58.6 days
    avgTempC: 167,
    minTempC: -180,
    maxTempC: 430,
    moonsCount: 0,
    moonsList: [],
    gravityMps2: 3.7, // ~0.38g
    atmosphereCompositionUz: [
      'Kislorod (O₂): 42%',
      'Natriy (Na): 29%',
      'Vodorod (H₂): 22%',
      'Geliy (He): 6%',
      'Kaliy (K): 0.5% (O\'ta siyrak ekzosfera)'
    ],
    funFactsUz: [
      'Merkuriyda bir kun (quyosh chiqishidan keyingisigacha) 176 Yer kuniga teng.',
      'U Quyosh tizimidagi eng zich ikkinchi sayyora bo\'lib, markazida ulkan temir yadro joylashgan.',
      'Merkuriy qutblaridagi chuqur kraterlarga quyosh nuri tushmaydi, shuning uchun u yerda suv muzi mavjud.',
      'Uning kraterlari dunyoga mashhur yozuvchilar, bastakorlar va shoirlar nomi bilan atalgan (masalan, Alisher Navoiy krateri).'
    ],
    missions: [
      { name: 'MESSENGER', year: '2004-2015', agency: 'NASA', descriptionUz: 'Merkuriy orbitasida to\'liq xaritalashtirish ishlarini olib borgan birinchi zond.' },
      { name: 'BepiColombo', year: '2018-hozirgacha', agency: 'ESA / JAXA', descriptionUz: 'Merkuriy magnit maydoni va tuzilishini o\'rganish uchun yuborilgan zamonaviy missiya.' }
    ],
    internalLayers: [
      { nameUz: 'Temir yadro', nameEn: 'Metallic Core', depth: 'Radiusi ~2,000 km', descriptionUz: 'Sayyora hajmining 85% qismini egallovchi erigan va qattiq temir-nikel yadro.', color: '#9d0208' },
      { nameUz: 'Silikat mantiya', nameEn: 'Silicate Mantle', depth: 'Qalinligi ~400 km', descriptionUz: 'Toshli va silikat mineral qatlami.', color: '#8d99ae' },
      { nameUz: 'Qobiq (Crust)', nameEn: 'Crust', depth: 'Qalinligi ~35 km', descriptionUz: 'Kraterlar bilan qoplangan zich qotgan qobiq.', color: '#adb5bd' }
    ],
    visual: {
      baseRadius: 0.9,
      distanceAuVisual: 12,
      realDistanceScale: 0.39,
      orbitSpeed: 0.04,
      rotationSpeed: 0.005,
      axialTiltDeg: 0.034,
      color: '#a8a29e'
    }
  },
  {
    id: 'venus',
    nameUz: 'Venera',
    nameEn: 'Venus',
    type: 'terrestrial',
    typeLabelUz: 'Ichki qoyatosh sayyora',
    taglineUz: 'Qalin zaharli bulutlar ostidagi eng issiq osmon go\'zali',
    descriptionUz: "Venera — Yerning 'egizagi' deb ataluvchi sayyora, biroq uning sharoiti haqiqiy do'zaxni eslatadi. Qalin karbonat angidrid atmosferasi va sulfat kislotali bulutlar tufayli kuchli issiqxona effekti hosil bo'lib, sirt harorati +465°C ga yetadi — bu hatto qo'rg'oshinni eritib yuborishga qodir.",
    diameterKm: 12104,
    massKg: '4.867 × 10²⁴ kg (Yer massasining 81.5 foizi)',
    distanceFromSunAu: 0.72,
    distanceFromSunKm: 108200000,
    orbitalPeriodDays: 224.7,
    rotationPeriodHours: -5832.5, // 243 days retrograde
    avgTempC: 464,
    minTempC: 438,
    maxTempC: 482,
    moonsCount: 0,
    moonsList: [],
    gravityMps2: 8.87, // ~0.90g
    atmosphereCompositionUz: [
      'Karbonat angidrid (CO₂): 96.5%',
      'Azot (N₂): 3.5%',
      'Sulfat kislotali bulutlar (H₂SO₄)',
      'Suv bug\'i va argon: iz miqdorda'
    ],
    funFactsUz: [
      'Venera o\'z o\'qi atrofida soat strelkasiga teskari (Quyosh g\'arbdan chiqib sharqqa botadi) aylanadi.',
      'Venerada bir kun (243 Yer kuni) uning bir yilidan (225 Yer kuni) uzunroq davom etadi.',
      'Venera sirtidagi atmosfera bosimi Yerdagidan 92 baravar yuqori (okeanning 900 m chuqurligidagi bosim bilan teng).',
      'Tong va oqshomda osmonda eng yorqin ko\'ringani sababli uni xalq orasida Tong yulduzi yoki Zuhro deb atashadi.'
    ],
    missions: [
      { name: 'Venera-13', year: '1981', agency: 'Sovet Ittifoqi', descriptionUz: 'Venera sirtiga qo\'nib, birinchi rangli fotosuratlarni va tovush yozuvlarini Yerga uzatgan.' },
      { name: 'Magellan', year: '1989-1994', agency: 'NASA', descriptionUz: 'Radar yordamida Venera sirtining 98 foizini batafsil xaritalashtirgan.' }
    ],
    internalLayers: [
      { nameUz: 'Temir-nikel yadro', nameEn: 'Metallic Core', depth: 'Radiusi ~3,200 km', descriptionUz: 'Yer yadrosiga o\'xshash qattiq va yarim suyuq markaz.', color: '#b7094c' },
      { nameUz: 'Toshli mantiya', nameEn: 'Rocky Mantle', depth: 'Qalinligi ~3,000 km', descriptionUz: 'Yuqori bosim ostidagi silikat minerallardan iborat erigan mantiya.', color: '#c77dff' },
      { nameUz: 'Bazalt qobiq', nameEn: 'Basaltic Crust', depth: 'Qalinligi ~50 km', descriptionUz: 'Vulkanik faollik natijasida yuzaga kelgan qattiq bazalt jinslar.', color: '#ffb703' }
    ],
    visual: {
      baseRadius: 1.5,
      distanceAuVisual: 18,
      realDistanceScale: 0.72,
      orbitSpeed: 0.025,
      rotationSpeed: -0.002,
      axialTiltDeg: 177.3,
      color: '#e0a96d',
      hasAtmosphereGlow: true,
      atmosphereColor: '#ffd166'
    }
  },
  {
    id: 'earth',
    nameUz: 'Yer',
    nameEn: 'Earth',
    type: 'terrestrial',
    typeLabelUz: 'Ichki qoyatosh sayyora',
    taglineUz: 'Bizning moviy maskanimiz — hayot qaynagan yagona sayyora',
    descriptionUz: "Yer — Quyosh tizimidagi hayot mavjud bo'lgan birdan-bir ma'lum sayyora. Sirtining 71 foizi suyuq suv bilan qoplangan. Kislorodga boy atmosferasi, magnitosferasi va qulay harorati millionlab biologik turlarning rivojlanishi uchun tengsiz sharoit yaratadi.",
    diameterKm: 12742,
    massKg: '5.972 × 10²⁴ kg',
    distanceFromSunAu: 1.0,
    distanceFromSunKm: 149600000,
    orbitalPeriodDays: 365.25,
    rotationPeriodHours: 23.93,
    avgTempC: 15,
    minTempC: -89.2, // Antarktida
    maxTempC: 56.7, // Death Valley
    moonsCount: 1,
    moonsList: [
      { name: 'Oy (Moon)', diameterKm: 3474, descriptionUz: 'Yerning tabiiy yo\'ldoshi, okeanlardagi to\'lqinlarni boshqaradi va Yer o\'qining barqarorligini ta\'minlaydi.' }
    ],
    gravityMps2: 9.81, // 1.0g
    atmosphereCompositionUz: [
      'Azot (N₂): 78.08%',
      'Kislorod (O₂): 20.95%',
      'Argon (Ar): 0.93%',
      'Karbonat angidrid (CO₂): 0.04%',
      'Suv bug\'i (H₂O): 0-4% o\'zgaruvchan'
    ],
    funFactsUz: [
      'Yer Quyosh tizimidagi suyuq holatda okeanlarga ega yagona sayyoradir.',
      'Yerning koinotdagi tezligi sekundiga taxminan 29.8 kilometrni tashkil qiladi.',
      'Yer magnit maydoni sayyoramizni halokatli kosmik nurlar va quyosh bo\'ronlaridan himoya qiladi.',
      'Odamzot koinotda sayohat qilgan eng uzoq masofa — bu Oydir (384,400 km).'
    ],
    missions: [
      { name: 'Apollon-11', year: '1969', agency: 'NASA', descriptionUz: 'Insoniyat tarixida ilk bor inson (Nil Armstrong) boshqa osmon jismi — Oyga qadam qo\'ydi.' },
      { name: 'Xalqaro Kosmik Stansiya (XKS)', year: '1998-hozirgacha', agency: 'Xalqaro (NASA, Roskosmos, ESA, JAXA)', descriptionUz: 'Yer orbitasida kecha-yu kunduz ishlovchi xalqaro ilmiy laboratoriya.' }
    ],
    internalLayers: [
      { nameUz: 'Qattiq ichki yadro', nameEn: 'Inner Core', depth: 'Radiusi ~1,220 km', descriptionUz: 'O\'ta yuqori bosim ostida qattiqlashgan sof temir va nikel shari, harorati 5,400 °C.', color: '#ffd000' },
      { nameUz: 'Suyuq tashqi yadro', nameEn: 'Outer Core', depth: 'Qalinligi ~2,300 km', descriptionUz: 'Erigan suyuq metall konveksiyasi Yer magnit maydonini (geodinamo) hosil qiladi.', color: '#ff6b35' },
      { nameUz: 'Silikat mantiya', nameEn: 'Mantle', depth: 'Qalinligi ~2,900 km', descriptionUz: 'Sayyora massasining 84% qismini tashkil etuvchi qaynoq yarim-elastik tosh qatlami.', color: '#d00000' },
      { nameUz: 'Litosfera va qobiq', nameEn: 'Crust', depth: 'Qalinligi 5 - 70 km', descriptionUz: 'Biz yashaydigan tog\'lar, qit\'alar va okean tubidan iborat qattiq jinslar.', color: '#2a9d8f' }
    ],
    visual: {
      baseRadius: 1.6,
      distanceAuVisual: 25,
      realDistanceScale: 1.0,
      orbitSpeed: 0.018,
      rotationSpeed: 0.015,
      axialTiltDeg: 23.44,
      color: '#2b6cb0',
      hasAtmosphereGlow: true,
      atmosphereColor: '#63b3ed',
      hasClouds: true,
      cloudsSpeed: 0.019
    }
  },
  {
    id: 'mars',
    nameUz: 'Mars',
    nameEn: 'Mars',
    type: 'terrestrial',
    typeLabelUz: 'Ichki qoyatosh sayyora',
    taglineUz: 'Qizil sayyora — insoniyatning kelajakdagi ikkinchi uyi',
    descriptionUz: "Mars — Quyoshdan to'rtinchi sayyora bo'lib, tuprog'idagi temir oksidi (zang) tufayli qizg'ish rangda ko'rinadi. Marsda Quyosh tizimidagi eng baland vulqon — Olimp tog'i (21.9 km balandlikda) va ulkan Mariner vodiylari kanyoni joylashgan. Qutblarida muzliklar va qadimiy daryo o'zanlari mavjud.",
    diameterKm: 6779,
    massKg: '6.417 × 10²³ kg (Yer massasining 10.7 foizi)',
    distanceFromSunAu: 1.52,
    distanceFromSunKm: 227900000,
    orbitalPeriodDays: 687,
    rotationPeriodHours: 24.62,
    avgTempC: -63,
    minTempC: -140,
    maxTempC: 20,
    moonsCount: 2,
    moonsList: [
      { name: 'Fobos (Phobos)', diameterKm: 22.2, descriptionUz: 'Marsga eng yaqin yo\'ldosh, asteroidga o\'xshaydi, har 100 yilda Marsga 1.8 metr yaqinlashmoqda.' },
      { name: 'Deymos (Deimos)', diameterKm: 12.4, descriptionUz: 'Kichik va silliq kraterli tashqi yo\'ldosh.' }
    ],
    gravityMps2: 3.72, // ~0.38g
    atmosphereCompositionUz: [
      'Karbonat angidrid (CO₂): 95.3%',
      'Azot (N₂): 2.7%',
      'Argon (Ar): 1.6%',
      'Kislorod (O₂): 0.13%',
      'Suv bug\'i: 0.03% (Siyrak atmosfera)'
    ],
    funFactsUz: [
      'Marsdagi quyosh botishi sarg\'ish-qizil emas, balki g\'aroyib moviy tusda ko\'rinadi.',
      'Marsdagi Olimp tog\'i Everest cho\'qqisidan deyarli 2.5 barobar balanddir.',
      'Marsda bir sutka (sol) 24 soat 39 daqiqa davom etadi — deyarli Yerdagi kabi.',
      'Marsda butun sayyorani oylarcha qoplab oluvchi global chang bo\'ronlari yuz beradi.'
    ],
    missions: [
      { name: 'Perseverance va Ingenuity', year: '2020-hozirgacha', agency: 'NASA', descriptionUz: 'Qadimgi mikrobial hayot izlarini qidirmoqda va boshqa sayyorada ilk vertolyot parvozini amalga oshirdi.' },
      { name: 'Curiosity', year: '2012-hozirgacha', agency: 'NASA', descriptionUz: 'Geyl kraterini o\'rganib, Mars o\'tmishida suv va hayot uchun sharoit bo\'lganini isbotladi.' }
    ],
    internalLayers: [
      { nameUz: 'Temir-oltingugurt yadro', nameEn: 'Dense Core', depth: 'Radiusi ~1,800 km', descriptionUz: 'Qisman erigan metallik yadro.', color: '#a53860' },
      { nameUz: 'Silikat mantiya', nameEn: 'Silicate Mantle', depth: 'Qalinligi ~1,500 km', descriptionUz: 'Qadimiy vulqonlarni oziqlantirgan toshli qatlam.', color: '#da627d' },
      { nameUz: 'Temir oksidli qobiq', nameEn: 'Oxidized Crust', depth: 'Qalinligi ~50 km', descriptionUz: 'Zanglagan chang va bazaltdan iborat qattiq sirt.', color: '#e56b6f' }
    ],
    visual: {
      baseRadius: 1.1,
      distanceAuVisual: 32,
      realDistanceScale: 1.52,
      orbitSpeed: 0.013,
      rotationSpeed: 0.014,
      axialTiltDeg: 25.19,
      color: '#c85a32',
      hasAtmosphereGlow: true,
      atmosphereColor: '#e07a5f'
    }
  },
  {
    id: 'jupiter',
    nameUz: 'Yupiter',
    nameEn: 'Jupiter',
    type: 'gas_giant',
    typeLabelUz: 'Gaz giganti',
    taglineUz: 'Sayyoralar shohi — Quyosh tizimining eng bahaybat himoyachisi',
    descriptionUz: "Yupiter — Quyosh tizimidagi eng yirik sayyora. Uning massasi boshqa barcha sayyoralarning birgalikdagi massasidan 2.5 barobar ko'proqdir. U asosan vodorod va geliydan iborat. Mashhur 'Katta Qizil Dog' — bu Yer sharidan ham kattaroq bo'lgan, kamida 350 yildan beri tinimsiz davom etayotgan antitsiklonik bo'rondir.",
    diameterKm: 139820,
    massKg: '1.898 × 10²⁷ kg (Yer massasidan 318 baravar katta)',
    distanceFromSunAu: 5.2,
    distanceFromSunKm: 778500000,
    orbitalPeriodDays: 4333, // ~11.86 years
    rotationPeriodHours: 9.93, // Super fast spin
    avgTempC: -110,
    minTempC: -145,
    maxTempC: 24000, // Core temp
    moonsCount: 95,
    moonsList: [
      { name: 'Ganimed (Ganymede)', diameterKm: 5268, descriptionUz: 'Quyosh tizimidagi eng katta yo\'ldosh (Merkuriy sayyorasidan ham yirik).' },
      { name: 'Kallisto (Callisto)', diameterKm: 4821, descriptionUz: 'Kraterlar bilan eng zich qoplangan qadimiy muzli yo\'ldosh.' },
      { name: 'Io (Io)', diameterKm: 3643, descriptionUz: 'Quyosh tizimidagi eng vulqonli jism — yuzlab faol oltingugurt vulqonlari mavjud.' },
      { name: 'Yevropa (Europa)', diameterKm: 3122, descriptionUz: 'Muz qobig\'i ostida chuqur suyuq okean joylashgan, unda hayot mavjud bo\'lishi ehtimoli yuqori.' }
    ],
    gravityMps2: 24.79, // ~2.53g
    atmosphereCompositionUz: [
      'Vodorod (H₂): 89.8%',
      'Geliy (He): 10.2%',
      'Metan (CH₄): 0.3%',
      'Ammiak (NH₃): 0.026%',
      'Suv bug\'i va vodorod sulfid bulutlari'
    ],
    funFactsUz: [
      'Yupiter o\'z o\'qi atrofida eng tez aylanuvchi sayyora bo\'lib, bir kun atigi 9 soat 55 daqiqa davom etadi.',
      'Yupiter o\'zining ulkan tortishish kuchi bilan xavfli kometalarni o\'ziga tortib, Yerni halokatli to\'qnashuvlardan asrab turadi.',
      'Yupiterning Katta Qizil Dog\'ida shamol tezligi soatiga 680 km gacha yetadi.',
      'Yupiterda ham yupqa changli halqalar mavjud bo\'lib, ularni 1979-yilda Voyager-1 aniqlagan.'
    ],
    missions: [
      { name: 'Juno', year: '2016-hozirgacha', agency: 'NASA', descriptionUz: 'Yupiterning qutblari, chuqur atmosferasi va magnitosferasini o\'rganuvchi orbital apparat.' },
      { name: 'Galileo', year: '1989-2003', agency: 'NASA', descriptionUz: 'Yupiter atrofida 8 yil aylanib, uning yo\'ldoshlarida okeanlar borligini kashf qilgan.' }
    ],
    internalLayers: [
      { nameUz: 'Og\'ir qoyatosh yadro', nameEn: 'Dense Core', depth: 'Massa ~10-20 Yer massasi', descriptionUz: 'O\'ta yuqori bosim va 24,000 °C haroratdagi tosh va muz aralashmasi.', color: '#4a4e69' },
      { nameUz: 'Suyuq metallik vodorod', nameEn: 'Liquid Metallic Hydrogen', depth: 'Qalinligi ~40,000 km', descriptionUz: 'Elektr o\'tkazuvchi holatga kelgan metall vodorod — kuchli magnit maydon manbai.', color: '#9a8c98' },
      { nameUz: 'Suyuq molekulyar vodorod', nameEn: 'Liquid Molecular Hydrogen', depth: 'Qalinligi ~20,000 km', descriptionUz: 'Gazdan asta-sekin suyuqlikka o\'tuvchi qatlam.', color: '#c9ada7' },
      { nameUz: 'Gazsimon atmosfera', nameEn: 'Gaseous Atmosphere', depth: 'Qalinligi ~1,000 km', descriptionUz: 'Ammiak va suv bulutlaridan iborat rang-barang chiziqli bo\'ronlar zonasi.', color: '#d4a373' }
    ],
    visual: {
      baseRadius: 3.8,
      distanceAuVisual: 46,
      realDistanceScale: 5.2,
      orbitSpeed: 0.007,
      rotationSpeed: 0.025,
      axialTiltDeg: 3.13,
      color: '#d4a373',
      hasAtmosphereGlow: true,
      atmosphereColor: '#eddcd2'
    }
  },
  {
    id: 'saturn',
    nameUz: 'Saturn',
    nameEn: 'Saturn',
    type: 'gas_giant',
    typeLabelUz: 'Gaz giganti',
    taglineUz: 'Halqalar tojini kiygan osmon mo\'jizasi',
    descriptionUz: "Saturn — Quyosh tizimidagi ikkinchi eng katta sayyora va o'zining ajoyib, keng halqalari bilan mashhur. Halqalar asosan milliardlab muz bo'laklari va tosh zarrachalaridan tashkil topgan. Saturn shunchalik yengilki, uning o'rtacha zichligi suvnikidan ham pastroqdir (suvga botmasdan suzib yura olardi).",
    diameterKm: 116460,
    massKg: '5.683 × 10²⁶ kg (Yer massasidan 95 baravar katta)',
    distanceFromSunAu: 9.58,
    distanceFromSunKm: 1433500000,
    orbitalPeriodDays: 10759, // ~29.45 years
    rotationPeriodHours: 10.66,
    avgTempC: -140,
    minTempC: -185,
    maxTempC: 11700,
    moonsCount: 146,
    moonsList: [
      { name: 'Titan (Titan)', diameterKm: 5150, descriptionUz: 'Zich azot atmosferasi va suyuq metan-etan ko\'llariga ega yagona yo\'ldosh.' },
      { name: 'Enselad (Enceladus)', diameterKm: 504, descriptionUz: 'Muzli qobig\'idagi geyserlardan ochiq koinotga suv bug\'lari va organik moddalar purkaydi.' },
      { name: 'Mimas (Mimas)', diameterKm: 396, descriptionUz: 'Ulkan Gershel krateri sababli "Yulduzlar jangi"dagi "O\'lim yulduzi"ga o\'xshaydi.' }
    ],
    gravityMps2: 10.44, // ~1.06g
    atmosphereCompositionUz: [
      'Vodorod (H₂): 96.3%',
      'Geliy (He): 3.25%',
      'Metan (CH₄): 0.45%',
      'Ammiak (NH₃): 0.01%',
      'Etan va vodorod deytirid'
    ],
    funFactsUz: [
      'Saturn halqalarining eni qariyb 282,000 kilometr, lekin qalinligi atigi 10 metrdan 1 kilometrgacha yetadi.',
      'Saturn eng ko\'p yo\'ldoshga ega sayyoradir — hozirda 146 ta tabiiy yo\'ldoshi kashf etilgan.',
      'Saturnning shimoliy qutbida sirli oltiburchak shaklidagi ulkan doimiy atmosfera bo\'roni aylanadi.',
      'Saturn o\'rtacha zichligi 0.687 g/sm³ — agar ulkan vanna bo\'lsa, Saturn suv yuzida suzar edi.'
    ],
    missions: [
      { name: 'Cassini-Huygens', year: '1997-2017', agency: 'NASA / ESA', descriptionUz: 'Saturn va uning halqalarini 13 yil davomida ajoyib tarzda o\'rgandi, Gyuygens zondi Titanga qo\'ndi.' },
      { name: 'Voyager 1 va 2', year: '1980-1981', agency: 'NASA', descriptionUz: 'Saturn halqalarining nozik tuzilishini birinchi bo\'lib ochib berdi.' }
    ],
    internalLayers: [
      { nameUz: 'Muz va tosh yadro', nameEn: 'Rocky/Icy Core', depth: 'Massa ~15-20 Yer massasi', descriptionUz: 'Og\'ir elementlar, kremniy va muzdan iborat zich markaz.', color: '#3d348b' },
      { nameUz: 'Metallik vodorod', nameEn: 'Metallic Hydrogen', depth: 'Qalinligi ~15,000 km', descriptionUz: 'Magnit maydon hosil qiluvchi o\'ta siqilgan suyuq metallik vodorod.', color: '#7678ed' },
      { nameUz: 'Suyuq vodorod-geliy', nameEn: 'Liquid Hydrogen-Helium', depth: 'Qalinligi ~25,000 km', descriptionUz: 'Sekin-asta tashqi atmosferaga ulanib ketuvchi suyuqlik qatlami.', color: '#f7b801' },
      { nameUz: 'Bulutli atmosfera', nameEn: 'Cloud Decks', depth: 'Qalinligi ~1,000 km', descriptionUz: 'Sarg\'ish-oltin rangli ammiak kristallari va metan tumanlari.', color: '#e0c097' }
    ],
    visual: {
      baseRadius: 3.2,
      distanceAuVisual: 60,
      realDistanceScale: 9.58,
      orbitSpeed: 0.005,
      rotationSpeed: 0.022,
      axialTiltDeg: 26.73,
      color: '#e2c275',
      hasRings: true,
      ringInnerRadius: 4.2,
      ringOuterRadius: 7.8,
      ringColor: '#d6c59b',
      hasAtmosphereGlow: true,
      atmosphereColor: '#faedcd'
    }
  },
  {
    id: 'uranus',
    nameUz: 'Uran',
    nameEn: 'Uranus',
    type: 'ice_giant',
    typeLabelUz: 'Muz giganti',
    taglineUz: 'Yonboshlagan zangori muz saroyi',
    descriptionUz: "Uran — Quyosh tizimidagi yettinchi sayyora va muz giganti hisoblanadi. Uning atmosferasida metan gazi borligi sababli u ko'zni qamashtiruvchi feruza (och moviy) rangda tovlanadi. Uranning eng o'ziga xos jihati — u o'z o'qi atrofida deyarli 98 daraja burchak ostida, ya'ni 'yonboshlab' aylanadi.",
    diameterKm: 50724,
    massKg: '8.681 × 10²⁵ kg (Yer massasidan 14.5 baravar katta)',
    distanceFromSunAu: 19.2,
    distanceFromSunKm: 2871000000,
    orbitalPeriodDays: 30687, // ~84 years
    rotationPeriodHours: -17.24, // Retrograde
    avgTempC: -195,
    minTempC: -224, // Coldest planetary atmosphere recorded
    maxTempC: 4700,
    moonsCount: 28,
    moonsList: [
      { name: 'Titaniya (Titania)', diameterKm: 1578, descriptionUz: 'Uranning eng yirik yo\'ldoshi, kanyonlar va kraterlar bilan qoplangan.' },
      { name: 'Oberon (Oberon)', diameterKm: 1523, descriptionUz: 'Qadimiy qoramtir kraterli sirtdan iborat.' },
      { name: 'Miranda (Miranda)', diameterKm: 472, descriptionUz: 'Koinotdagi eng xilma-xil va tik jarliklarga (Verona Rupes — 20 km chuqurlik) ega yo\'ldosh.' }
    ],
    gravityMps2: 8.69, // ~0.89g
    atmosphereCompositionUz: [
      'Vodorod (H₂): 82.5%',
      'Geliy (He): 15.2%',
      'Metan (CH₄): 2.3% (Moviy rang beradi)',
      'Suv va ammiak muz kristallari'
    ],
    funFactsUz: [
      "Uran Quyosh atrofida 'yonboshlagan' g'ildirak kabi aylanadi — qutblarida 42 yil doimiy yoz va 42 yil qish bo'ladi.",
      'Uran teleskop yordamida kashf etilgan birinchi sayyoradir (Uilyam Gershel, 1781-yil).',
      'Uran atmosferasining harorati -224 °C gacha pasayib, Quyosh tizimidagi eng sovuq atmosfera hisoblanadi.',
      'Uranning barcha yo\'ldoshlari Uilyam Shekspir va Aleksandr Poup asarlari qahramonlari nomi bilan atalgan.'
    ],
    missions: [
      { name: 'Voyager 2', year: '1986', agency: 'NASA', descriptionUz: 'Uran yonidan uchib o\'tgan va uning tizimini yaqindan suratga olgan yagona kosmik kema.' }
    ],
    internalLayers: [
      { nameUz: 'Qoyatosh yadro', nameEn: 'Rocky Core', depth: 'Radiusi ~4,000 km', descriptionUz: 'Temir va silikat minerallardan tashkil topgan markaz.', color: '#4a5568' },
      { nameUz: 'Muzli mantiya', nameEn: 'Icy Mantle', depth: 'Qalinligi ~15,000 km', descriptionUz: 'Suv, ammiak va metan muzlaridan iborat qizigan zich super-suyuqlik.', color: '#48cae4' },
      { nameUz: 'Vodorod/Metan atmosferasi', nameEn: 'Atmosphere', depth: 'Qalinligi ~10,000 km', descriptionUz: 'Feruza rangli metan tumanlari va vodorod bulutlari.', color: '#a0e7e5' }
    ],
    visual: {
      baseRadius: 2.2,
      distanceAuVisual: 74,
      realDistanceScale: 19.2,
      orbitSpeed: 0.003,
      rotationSpeed: -0.012,
      axialTiltDeg: 97.77,
      color: '#70d6ff',
      hasRings: true,
      ringInnerRadius: 2.6,
      ringOuterRadius: 3.4,
      ringColor: '#bbf2f6',
      hasAtmosphereGlow: true,
      atmosphereColor: '#9bf6ff'
    }
  },
  {
    id: 'neptune',
    nameUz: 'Neptun',
    nameEn: 'Neptune',
    type: 'ice_giant',
    typeLabelUz: 'Muz giganti',
    taglineUz: 'Dahshatli quyunlar kezuvchi cheksiz moviy ummon',
    descriptionUz: "Neptun — Quyoshdan eng uzoqda joylashgan sakkizinchi sayyora. U chuqur ko'k tusda tovlanuvchi muz gigantidir. Neptunda Quyosh tizimidagi eng kuchli va tez shamollar esadi — ularning tezligi tovush tezligidan ham oshib, soatiga 2,100 kilometrga yetadi. Uning mavjudligi avval matematik hisob-kitoblar bilan bashorat qilingan, so'ngra teleskopda topilgan.",
    diameterKm: 49244,
    massKg: '1.024 × 10²⁶ kg (Yer massasidan 17 baravar katta)',
    distanceFromSunAu: 30.07,
    distanceFromSunKm: 4498000000,
    orbitalPeriodDays: 60190, // ~165 years
    rotationPeriodHours: 16.11,
    avgTempC: -201,
    minTempC: -218,
    maxTempC: 5000,
    moonsCount: 16,
    moonsList: [
      { name: 'Triton (Triton)', diameterKm: 2707, descriptionUz: 'Neptun o\'qiga teskari aylanuvchi muzli ulkan yo\'ldosh, azot geyserlariga ega.' },
      { name: 'Protey (Proteus)', diameterKm: 420, descriptionUz: 'Noodatiy qirrali shaklga ega quyuq qoramtir yo\'ldosh.' }
    ],
    gravityMps2: 11.15, // ~1.14g
    atmosphereCompositionUz: [
      'Vodorod (H₂): 80%',
      'Geliy (He): 19%',
      'Metan (CH₄): 1.5% (Chuqur ko\'k rang bag\'ishlaydi)',
      'Vodorod deytirid va etan izlari'
    ],
    funFactsUz: [
      'Neptun 1846-yilda kashf etilganidan beri Quyosh atrofida atigi bir marotaba to\'liq aylanib chiqdi (2011-yilda).',
      'Neptundagi shamollar tovush tezligidan ham 1.5 baravar tezroq (2,100 km/soat) harakatlanadi.',
      'Neptun Quyoshdan shu qadar uzoqki, u yerda tush paytidagi Quyosh Yerdagidan 900 baravar xiraroq ko\'rinadi.',
      'Triton yo\'ldoshi o\'z sayyorasiga asta-sekin yaqinlashmoqda, bir necha million yildan keyin u parchalanib yangi yorqin halqa hosil qiladi.'
    ],
    missions: [
      { name: 'Voyager 2', year: '1989', agency: 'NASA', descriptionUz: 'Neptun va uning yo\'ldoshi Tritonni yaqindan o\'rgangan yagona kosmik kema.' }
    ],
    internalLayers: [
      { nameUz: 'Tosh-metall yadro', nameEn: 'Rocky Core', depth: 'Massa ~1.2 Yer massasi', descriptionUz: 'Silikatlar, temir va nikel birikmasi.', color: '#274c77' },
      { nameUz: 'Suv-ammiak mantiyasi', nameEn: 'Superheated Icy Mantle', depth: 'Qalinligi ~16,000 km', descriptionUz: 'Yuqori bosimda olmos yomg\'irlari yog\'ishi taxmin qilinadigan super-ionli okean.', color: '#168aad' },
      { nameUz: 'Gaz atmosferasi', nameEn: 'Upper Atmosphere', depth: 'Qalinligi ~5,000 km', descriptionUz: 'Vodorod, geliy va metan gazidan iborat bo\'ronli ko\'k qatlam.', color: '#0077b6' }
    ],
    visual: {
      baseRadius: 2.1,
      distanceAuVisual: 88,
      realDistanceScale: 30.07,
      orbitSpeed: 0.002,
      rotationSpeed: 0.013,
      axialTiltDeg: 28.32,
      color: '#0077b6',
      hasAtmosphereGlow: true,
      atmosphereColor: '#00b4d8'
    }
  },
  {
    id: 'pluto',
    nameUz: 'Pluton',
    nameEn: 'Pluto',
    type: 'dwarf',
    typeLabelUz: 'Mitti sayyora (Koyper belbog\'i)',
    taglineUz: 'Koyper belbog\'ining yurak shaklidagi muzli qiroli',
    descriptionUz: "Pluton — 1930-yildan 2006-yilgacha to'qqizinchi sayyora hisoblangan, keyinchalik esa Xalqaro Astronomiya Ittifoqi tomonidan mitti sayyora toifasiga o'tkazilgan. New Horizons zondi Plutonda 'Tombo tekisligi' deb nomlangan mashhur yurak shaklidagi azotli muzlikni va baland muz tog'larini suratga oldi.",
    diameterKm: 2376,
    massKg: '1.303 × 10²² kg (Oy massasining 18 foizi)',
    distanceFromSunAu: 39.48,
    distanceFromSunKm: 5906380000,
    orbitalPeriodDays: 90560, // ~248 years
    rotationPeriodHours: -153.3, // 6.39 days retrograde
    avgTempC: -229,
    minTempC: -240,
    maxTempC: -218,
    moonsCount: 5,
    moonsList: [
      { name: 'Xaron (Charon)', diameterKm: 1212, descriptionUz: 'Pluton o\'lchamining yarmiga teng bo\'lgan ulkan yo\'ldosh; ular bir-biri atrofida qo\'shaloq tizim kabi aylanadi.' },
      { name: 'Gidra, Nikta, Kerber, Stiks', diameterKm: 40, descriptionUz: 'To\'rtta kichik tashqi tartibsiz yo\'ldoshlar.' }
    ],
    gravityMps2: 0.62, // ~0.063g
    atmosphereCompositionUz: [
      'Azot (N₂): 99%',
      'Metan (CH₄): 0.5%',
      'Uglerod oksidi (CO): 0.1% (Quyoshga yaqinlashganda paydo bo\'ladi)'
    ],
    funFactsUz: [
      'Pluton yuzasida gigant yurak shakli (Tombo mintaqasi) mavjud bo\'lib, u muzlagan azot tekisligidir.',
      'Pluton va Xaron bir-biriga doim bir xil tomoni bilan qarab turadi (to\'liq tortishish bog\'lanishi).',
      'Plutonning orbitasi shunchalik cho\'ziqki, ba\'zida u Quyoshga Neptundan ham yaqinroq bo\'lib qoladi.',
      'Pluton maydoni bo\'yicha Rossiya hududidan kichikroqdir.'
    ],
    missions: [
      { name: 'New Horizons', year: '2015', agency: 'NASA', descriptionUz: 'Pluton yonidan atigi 12,500 km masofada uchib o\'tib, uning birinchi yuqori sifatli fotosuratlarini oldi.' }
    ],
    internalLayers: [
      { nameUz: 'Tosh yadro', nameEn: 'Rocky Core', depth: 'Radiusi ~850 km', descriptionUz: 'Zich silikat toshlardan iborat markaz.', color: '#495057' },
      { nameUz: 'Suv-muz mantiyasi', nameEn: 'Water Ice Mantle', depth: 'Qalinligi ~300 km', descriptionUz: 'Ehtimoliy suyuq suv okeaniga ega muz qatlami.', color: '#a2d2ff' },
      { nameUz: 'Azot/Metan po\'sti', nameEn: 'Nitrogen Crust', depth: 'Qalinligi ~50 km', descriptionUz: 'Muzlagan azot, metan va uglerod oksididan iborat sirt.', color: '#e9ecef' }
    ],
    visual: {
      baseRadius: 0.7,
      distanceAuVisual: 102,
      realDistanceScale: 39.48,
      orbitSpeed: 0.0012,
      rotationSpeed: -0.006,
      axialTiltDeg: 122.5,
      color: '#c4b5a5',
      hasAtmosphereGlow: false
    }
  },
  {
    id: 'ceres',
    nameUz: 'Serera',
    nameEn: 'Ceres',
    type: 'dwarf',
    typeLabelUz: 'Mitti sayyora (Asteroidlar belbog\'i)',
    taglineUz: 'Mars va Yupiter oralig\'idagi eng yirik toshli muz olami',
    descriptionUz: "Serera — Mars va Yupiter o'rtasidagi asosiy Asteroidlar belbog'ida joylashgan yagona mitti sayyora. U butun belbog' massasining uchdan bir qismini tashkil qiladi. Uning ichida katta miqdorda suv muzi mavjud bo'lib, sirtdagi Oksator kraterida sirli oq yaltiroq tuz kristallari (kriovulkanizm izlari) mavjud.",
    diameterKm: 946,
    massKg: '9.39 × 10²⁰ kg',
    distanceFromSunAu: 2.77,
    distanceFromSunKm: 414000000,
    orbitalPeriodDays: 1682, // ~4.6 years
    rotationPeriodHours: 9.07,
    avgTempC: -105,
    minTempC: -140,
    maxTempC: -38,
    moonsCount: 0,
    moonsList: [],
    gravityMps2: 0.28,
    atmosphereCompositionUz: ['O\'ta nozik suv bug\'i ekzosferasi'],
    funFactsUz: [
      'Serera o\'zining gravitatsiyasi sababli yumaloq shar shaklini olgan yagona asteroidlar belbog\'i jismidir.',
      'Sereradagi suv muzi miqdori Yerdagi barcha chuchuk suvlardan ham ko\'proq bo\'lishi mumkin.',
      'Dawn zondi Sereradagi baland Ahuna Mons muz vulqonini (kriovulqon) aniqlagan.'
    ],
    missions: [
      { name: 'Dawn', year: '2015-2018', agency: 'NASA', descriptionUz: 'Serera orbitasida aylanib, uning sirtini va kriovulqonlarini to\'liq tadqiq etgan.' }
    ],
    internalLayers: [
      { nameUz: 'Toshli yadro', nameEn: 'Rocky Core', depth: 'Radiusi ~300 km', descriptionUz: 'Silikat toshlardan iborat og\'ir markaz.', color: '#6c757d' },
      { nameUz: 'Muzli mantiya', nameEn: 'Icy Mantle', depth: 'Qalinligi ~100 km', descriptionUz: 'Suv muzi va minerallar aralashmasi.', color: '#bde0fe' },
      { nameUz: 'Changli qobiq', nameEn: 'Dusty Crust', depth: 'Qalinligi ~40 km', descriptionUz: 'Karbonat tuzlari va gilli minerallar.', color: '#adb5bd' }
    ],
    visual: {
      baseRadius: 0.5,
      distanceAuVisual: 38,
      realDistanceScale: 2.77,
      orbitSpeed: 0.009,
      rotationSpeed: 0.02,
      axialTiltDeg: 4,
      color: '#9e9e9e'
    }
  },
  {
    id: 'proxima-b',
    nameUz: 'Proksima Sentavr b',
    nameEn: 'Proxima Centauri b',
    type: 'exoplanet',
    typeLabelUz: 'Ekzosayyora (Yashash zonasida)',
    taglineUz: 'Quyosh tizimiga eng yaqin joylashgan o\'zga yulduz sayyorasi',
    descriptionUz: "Proksima b — Quyosh tizimidan 4.24 yorug'lik yili masofasidagi Proksima Sentavr qizil pakana yulduzi atrofida aylanuvchi ekzosayyora. Sayyora o'z yulduzining 'yashash zonasi' (Goldilocks zone)da joylashgan, ya'ni uning sirtida suyuq suv mavjud bo'lishi mumkin. Olimlar uni insoniyatning yulduzlararo birinchi nishoni deb bilishadi.",
    diameterKm: 13500,
    massKg: '7.0 × 10²⁴ kg (~1.17 Yer massasi)',
    distanceFromSunAu: 268000, // interstellar!
    distanceFromSunKm: 40140000000000,
    orbitalPeriodDays: 11.2,
    rotationPeriodHours: 268.8, // tidally locked
    avgTempC: -39,
    minTempC: -90,
    maxTempC: 30,
    moonsCount: 0,
    moonsList: [],
    gravityMps2: 10.9,
    atmosphereCompositionUz: ['Nazariy jihatdan: Azot, karbonat angidrid va kislorod bo\'lishi mumkin'],
    funFactsUz: [
      'Proksima b o\'z yulduziga Yer-Quyosh masofasidan 20 marta yaqinroq aylanadi, lekin qizil pakana yulduz sovuqroq bo\'lgani uchun sayyora qulay zonada.',
      'Sayyora katta ehtimol bilan doimiy bir tomoni bilan o\'z yulduziga qarab turadi (bir tomoni abadiy kun, boshqasi abadiy tun).',
      'Yulduz chaqnashi sababli sayyora kuchli rentgen va ultrabinafsha nurlanishga duchor bo\'ladi.'
    ],
    missions: [
      { name: 'Breakthrough Starshot (Rejada)', year: 'Kelajakda', agency: 'Xususiy / Xalqaro', descriptionUz: 'Kichik lazerli mikrozondlarni yorug\'lik tezligining 20 foizida 20 yilda Proksima b ga yuborish loyihasi.' }
    ],
    internalLayers: [
      { nameUz: 'Temir yadro', nameEn: 'Iron Core', depth: 'Radiusi ~3,400 km', descriptionUz: 'Magnit maydon hosil qilishi mumkin bo\'lgan metall yadro.', color: '#800f2f' },
      { nameUz: 'Qoyatosh mantiya', nameEn: 'Silicate Mantle', depth: 'Qalinligi ~3,000 km', descriptionUz: 'Magnesial silikat jinslar.', color: '#c9184a' },
      { nameUz: 'Qobiq', nameEn: 'Crust', depth: 'Qalinligi ~40 km', descriptionUz: 'Muz va qoyalardan iborat sirt.', color: '#ff758f' }
    ],
    visual: {
      baseRadius: 1.4,
      distanceAuVisual: 115,
      realDistanceScale: 45,
      orbitSpeed: 0.001,
      rotationSpeed: 0.008,
      axialTiltDeg: 0,
      color: '#e76f51',
      hasAtmosphereGlow: true,
      atmosphereColor: '#f4a261'
    }
  },
  {
    id: 'trappist-1e',
    nameUz: 'TRAPPIST-1e',
    nameEn: 'TRAPPIST-1e',
    type: 'exoplanet',
    typeLabelUz: 'Ekzosayyora (Okeanli tosh sayyora)',
    taglineUz: 'Yerga o\'xshashlik indeksi eng yuqori bo\'lgan sirli begona dunyo',
    descriptionUz: "TRAPPIST-1e — Yer sayyorasidan 40 yorug'lik yili uzoqlikdagi Kova yulduz turkumida joylashgan. U o'ta sovuq pakana yulduz atrofida aylanuvchi 7 ta Yer o'lchamidagi sayyoralardan biridir. O'lchami, massasi, zichligi va quyosh nurlanishi bo'yicha u bizning Yerimizga eng ko'p o'xshaydigan ekzosayyoralardan biri deb baholangan.",
    diameterKm: 11720,
    massKg: '4.13 × 10²⁴ kg (~0.69 Yer massasi)',
    distanceFromSunAu: 2530000,
    distanceFromSunKm: 378000000000000,
    orbitalPeriodDays: 6.1,
    rotationPeriodHours: 146.4,
    avgTempC: -22,
    minTempC: -60,
    maxTempC: 15,
    moonsCount: 0,
    moonsList: [],
    gravityMps2: 9.12,
    atmosphereCompositionUz: ['Ixcham zich atmosfera, suv bug\'i va azot mavjudligi taxmin qilinadi'],
    funFactsUz: [
      'TRAPPIST-1 tizimidagi 7 ta sayyora bir-biriga shunchalik yaqinki, bitta sayyora osmonida qo\'shnisi bizdagi Oydan 2 barobar kattaroq ko\'rinadi.',
      'James Webb kosmik teleskopi hozirda ushbu sayyora atmosferasida suv va karbonat angidrid izlarini qidirmoqda.',
      'Sayyora sirtining katta qismi global suyuq okean bilan qoplangan bo\'lishi mumkin.'
    ],
    missions: [
      { name: 'James Webb Space Telescope (JWST)', year: '2022-hozirgacha', agency: 'NASA / ESA / CSA', descriptionUz: 'TRAPPIST-1e atmosferasining spektral tahlilini olib bormoqda.' }
    ],
    internalLayers: [
      { nameUz: 'Temir yadro', nameEn: 'Iron Core', depth: 'Radiusi ~2,900 km', descriptionUz: 'Sayyora massasining yarmini tashkil qiluvchi yirik metall yadro.', color: '#590d22' },
      { nameUz: 'Mantiya', nameEn: 'Mantle', depth: 'Qalinligi ~2,500 km', descriptionUz: 'Yuqori bosim ostidagi silikat minerallar.', color: '#a4133c' },
      { nameUz: 'Okean va qobiq', nameEn: 'Ocean & Crust', depth: 'Qalinligi ~100 km', descriptionUz: 'Chuqur global suv havzasi va yupqa qobiq.', color: '#2b9348' }
    ],
    visual: {
      baseRadius: 1.3,
      distanceAuVisual: 126,
      realDistanceScale: 52,
      orbitSpeed: 0.0008,
      rotationSpeed: 0.006,
      axialTiltDeg: 5,
      color: '#52b788',
      hasAtmosphereGlow: true,
      atmosphereColor: '#74c69d'
    }
  },
  {
    id: 'kepler-452b',
    nameUz: 'Kepler-452b',
    nameEn: 'Kepler-452b',
    type: 'exoplanet',
    typeLabelUz: 'Ekzosayyora (Super-Yer)',
    taglineUz: 'Yerning katta amakivachchasi — Quyoshga o\'xshash yulduz orbitasida',
    descriptionUz: "Kepler-452b — 1400 yorug'lik yili masofadagi Oqqush yulduz turkumida joylashgan 'Super-Yer'. U Quyoshimiz bilan deyarli bir xil o'lchamdagi G2-toifali sariq yulduz atrofida 385 kunda to'liq aylanadi (deyarli Yerdagidek 1 yil). U Yerga eng o'xshash yulduz tizimida topilgan birinchi tosh sayyoradir.",
    diameterKm: 20400, // ~1.6 Earth radii
    massKg: '3.0 × 10²⁵ kg (~5 Yer massasi)',
    distanceFromSunAu: 88500000,
    distanceFromSunKm: 13240000000000000,
    orbitalPeriodDays: 384.8,
    rotationPeriodHours: 30,
    avgTempC: -8,
    minTempC: -45,
    maxTempC: 35,
    moonsCount: 0,
    moonsList: [],
    gravityMps2: 19.1, // ~1.95g
    atmosphereCompositionUz: ['Qalin bulutli atmosfera, ehtimoliy faol vulqon gazlari'],
    funFactsUz: [
      'Uning yulduzi bizning Quyoshimizdan 1.5 milliard yil yoshi kattaroq (taxminan 6 milliard yoshda).',
      'Agar sayyorada o\'simliklar bo\'lsa, uning yulduzi beradigan yorug\'lik ostida fotosintez bemalol kecha oladi.',
      'Uning tortishish kuchi Yerdagidan deyarli 2 barobar kuchliroq — 70 kg vaznli inson u yerda 135 kg bo\'lib qolardi.'
    ],
    missions: [
      { name: 'Kepler kosmik teleskopi', year: '2015-yilda kashf qilingan', agency: 'NASA', descriptionUz: 'Tranzit usuli yordamida Kepler-452b sayyorasini ochib bergan tarixiy missiya.' }
    ],
    internalLayers: [
      { nameUz: 'Katta metall yadro', nameEn: 'Metallic Core', depth: 'Radiusi ~4,500 km', descriptionUz: 'Kuchli bosim ostidagi erigan metallar.', color: '#6a040f' },
      { nameUz: 'Zich qoyali mantiya', nameEn: 'Thick Rocky Mantle', depth: 'Qalinligi ~5,000 km', descriptionUz: 'Super-Yer massasini ushlab turuvchi qizigan magma qatlami.', color: '#9d0208' },
      { nameUz: 'Vulkanik qobiq', nameEn: 'Volcanic Crust', depth: 'Qalinligi ~80 km', descriptionUz: 'Faol vulqonlar va ehtimoliy tog\' tizmalari.', color: '#3f37c9' }
    ],
    visual: {
      baseRadius: 1.8,
      distanceAuVisual: 138,
      realDistanceScale: 60,
      orbitSpeed: 0.0006,
      rotationSpeed: 0.01,
      axialTiltDeg: 15,
      color: '#4361ee',
      hasAtmosphereGlow: true,
      atmosphereColor: '#4cc9f0',
      hasClouds: true,
      cloudsSpeed: 0.012
    }
  }
];
