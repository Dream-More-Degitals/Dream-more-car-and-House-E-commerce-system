export interface SubCity {
  name: string
  nameAm: string
}

export interface City {
  name: string
  nameAm: string
  subCities: SubCity[]
}

export interface Region {
  name: string
  nameAm: string
  cities: City[]
}

export const ethiopianRegions: Region[] = [
  {
    name: 'Addis Ababa',
    nameAm: 'አዲስ አበባ',
    cities: [
      {
        name: 'Addis Ketema',
        nameAm: 'አዲስ ከተማ',
        subCities: [
          { name: 'Addis Ketema', nameAm: 'አዲስ ከተማ' },
          { name: 'Merkato', nameAm: 'መርካቶ' },
          { name: 'Gofa', nameAm: 'ጎፋ' },
          { name: 'S summit', nameAm: 'ደቡብ ሰミት' },
        ],
      },
      {
        name: 'Akaki-Kality',
        nameAm: 'እ kamu-ካሊቲ',
        subCities: [
          { name: 'Akaki', nameAm: 'እ kamu' },
          { name: 'Kality', nameAm: 'ካሊቲ' },
          { name: 'Toka Baye', nameAm: 'ቶካ በየ' },
        ],
      },
      {
        name: 'Arada',
        nameAm: 'አራዳ',
        subCities: [
          { name: 'Arada', nameAm: 'አራዳ' },
          { name: 'Piazza', nameAm: 'ፒያሳ' },
          { name: 'Shiro Meda', nameAm: 'ሽሮ መዳ' },
          { name: 'Kebele 01-37', nameAm: 'ቀበሌ 01-37' },
        ],
      },
      {
        name: 'Bole',
        nameAm: 'ቦሌ',
        subCities: [
          { name: 'Bole', nameAm: 'ቦሌ' },
          { name: 'Edna Mall Area', nameAm: 'እድና ማอล አካባቢ' },
          { name: 'International Airport Area', nameAm: 'International Airport አካባቢ' },
          { name: 'Atlas Area', nameAm: 'አትላስ አካባቢ' },
        ],
      },
      {
        name: 'Gullele',
        nameAm: 'ጉለሌ',
        subCities: [
          { name: 'Gullele', nameAm: 'ጉለሌ' },
          { name: 'Megenagna', nameAm: 'መገናኛ' },
          { name: 'Tefik', nameAm: 'ተፍቅ' },
        ],
      },
      {
        name: 'Kirkos',
        nameAm: 'ክirkos',
        subCities: [
          { name: 'Kirkos', nameAm: 'ክirkos' },
          { name: 'Mekanissa', nameAm: 'መከኒሳ' },
          { name: 'Bambis', nameAm: 'ባምቢስ' },
        ],
      },
      {
        name: 'Kolfe Keranio',
        nameAm: 'ኮልፌ ቀረኒዮ',
        subCities: [
          { name: 'Kolfe Keranio', nameAm: 'ኮልፌ ቀረኒዮ' },
          { name: 'Nifas Silk', nameAm: 'ንፋስ ስልክ' },
          { name: 'Addis Ketema (West)', nameAm: 'አዲስ ከተማ (ምዕራብ)' },
          { name: 'Lemi Kura', nameAm: 'ለሚ ቁራ' },
        ],
      },
      {
        name: 'Lideta',
        nameAm: 'ሊደታ',
        subCities: [
          { name: 'Lideta', nameAm: 'ሊደታ' },
          { name: 'Mekanissa', nameAm: 'መከኒሳ' },
        ],
      },
      {
        name: 'Nifas Silk-Lafto',
        nameAm: 'ንፋስ ስልክ-ላፍቶ',
        subCities: [
          { name: 'Nifas Silk', nameAm: 'ንፋስ ስልክ' },
          { name: 'Lafto', nameAm: 'ላፍቶ' },
          { name: 'Koye Feche', nameAm: 'ኮየ ፈቸ' },
        ],
      },
      {
        name: 'Yeka',
        nameAm: 'የካ',
        subCities: [
          { name: 'Yeka', nameAm: 'የካ' },
          { name: 'Ayat', nameAm: 'አያት' },
          { name: 'Koye Feche', nameAm: 'ኮየ ፈቸ' },
          { name: 'Film House Area', nameAm: 'ፍልም ሀውስ አካባቢ' },
        ],
      },
    ],
  },
  {
    name: 'Oromia',
    nameAm: 'ኦሮሚያ',
    cities: [
      {
        name: 'Adama (Nazret)',
        nameAm: 'አዳማ (ነዝረት)',
        subCities: [
          { name: 'Adama Town', nameAm: 'አዳማ ከተማ' },
          { name: 'Bishoftu', nameAm: 'ቢሾፍቱ' },
          { name: 'Mekelle Area', nameAm: 'መከለ አካባቢ' },
        ],
      },
      {
        name: 'Bishoftu (Debre Zeit)',
        nameAm: 'ቢሾፍቱ (ደብረ ዘይት)',
        subCities: [
          { name: 'Bishoftu Town', nameAm: 'ቢሾፍቱ ከተማ' },
          { name: 'Lake Bishoftu Area', nameAm: 'ቢሾፍቱ ሐይቅ አካባቢ' },
        ],
      },
      {
        name: 'Jimma',
        nameAm: 'ጅማ',
        subCities: [
          { name: 'Jimma Town', nameAm: 'ጅማ ከተማ' },
          { name: 'Jimma University Area', nameAm: 'ጅማ ዩኒቨርሲቲ አካባቢ' },
        ],
      },
      {
        name: 'Adama',
        nameAm: 'አዳማ',
        subCities: [
          { name: 'Adama Town', nameAm: 'አዳማ ከተማ' },
          { name: 'Industrial Area', nameAm: 'ኢንዱስትሪያል አካባቢ' },
        ],
      },
      {
        name: 'Hawassa',
        nameAm: 'ሐዋሳ',
        subCities: [
          { name: 'Hawassa Town', nameAm: 'ሐዋሳ ከተማ' },
          { name: 'Lake Hawassa Area', nameAm: 'ሐዋሳ ሐይቅ አካባቢ' },
          { name: 'Industrial Park', nameAm: 'ኢንዱስትሪ ፓርክ' },
        ],
      },
    ],
  },
  {
    name: 'Amhara',
    nameAm: 'አማራ',
    cities: [
      {
        name: 'Bahir Dar',
        nameAm: 'ባሕር ዳር',
        subCities: [
          { name: 'Bahir Dar Town', nameAm: 'ባሕር ዳር ከተማ' },
          { name: 'Lake Tana Area', nameAm: 'ተ ሐይቅ አካባቢ' },
          { name: 'University Area', nameAm: 'ዩኒቨርሲቲ አካባቢ' },
        ],
      },
      {
        name: 'Gondar',
        nameAm: 'ጎንደር',
        subCities: [
          { name: 'Gondar Town', nameAm: 'ጎንደር ከተማ' },
          { name: 'Fasilides Area', nameAm: 'ፋሲል ዘደስ አካባቢ' },
        ],
      },
      {
        name: 'Dire Dawa',
        nameAm: 'ድሬ ዳዋ',
        subCities: [
          { name: 'Dire Dawa Town', nameAm: 'ድሬ ዳዋ ከተማ' },
          { name: 'Kezira', nameAm: 'ከዚራ' },
          { name: 'Gebre Guranda', nameAm: 'ገብረ ጉረንዳ' },
        ],
      },
      {
        name: 'Dessie',
        nameAm: 'ደሴ',
        subCities: [
          { name: 'Dessie Town', nameAm: 'ደሴ ከተማ' },
        ],
      },
      {
        name: 'Debre Markos',
        nameAm: 'ደብረ ማርቆስ',
        subCities: [
          { name: 'Debre Markos Town', nameAm: 'ደብረ ማርቆስ ከተማ' },
        ],
      },
    ],
  },
  {
    name: 'Tigray',
    nameAm: 'ትግራይ',
    cities: [
      {
        name: 'Mekelle',
        nameAm: 'መቀሌ',
        subCities: [
          { name: 'Mekelle Town', nameAm: 'መቀሌ ከተማ' },
          { name: 'Ayder Area', nameAm: 'አይደር አካባቢ' },
        ],
      },
      {
        name: 'Axum',
        nameAm: 'አክሱም',
        subCities: [
          { name: 'Axum Town', nameAm: 'አክሱም ከተማ' },
        ],
      },
      {
        name: 'Shire',
        nameAm: 'ሽሬ',
        subCities: [
          { name: 'Shire Town', nameAm: 'ሽሬ ከተማ' },
        ],
      },
    ],
  },
  {
    name: 'SNNPR',
    nameAm: 'ደቡብ ብሔሮች ብሔረሰቦችና ሕዝቦች',
    cities: [
      {
        name: 'Hawassa',
        nameAm: 'ሐዋሳ',
        subCities: [
          { name: 'Hawassa Town', nameAm: 'ሐዋሳ ከተማ' },
          { name: 'Lake Hawassa Area', nameAm: 'ሐዋሳ ሐይቅ አካባቢ' },
        ],
      },
      {
        name: 'Wolkite',
        nameAm: 'ወል ቀጢ',
        subCities: [
          { name: 'Wolkite Town', nameAm: 'ወል ቀጢ ከተማ' },
        ],
      },
      {
        name: 'Dilla',
        nameAm: 'ዲላ',
        subCities: [
          { name: 'Dilla Town', nameAm: 'ዲላ ከተማ' },
        ],
      },
    ],
  },
  {
    name: 'Somali',
    nameAm: 'ሶማሊ',
    cities: [
      {
        name: 'Jijiga',
        nameAm: 'ጅጅጋ',
        subCities: [
          { name: 'Jijiga Town', nameAm: 'ጅጅጋ ከተማ' },
        ],
      },
    ],
  },
  {
    name: 'Benishangul-Gumuz',
    nameAm: 'ቤንሻንጉል-ጉሙዝ',
    cities: [
      {
        name: 'Asosa',
        nameAm: 'አሶሳ',
        subCities: [
          { name: 'Asosa Town', nameAm: 'አሶሳ ከተማ' },
        ],
      },
    ],
  },
  {
    name: 'Gambela',
    nameAm: 'ጋምቤላ',
    cities: [
      {
        name: 'Gambela',
        nameAm: 'ጋምቤላ',
        subCities: [
          { name: 'Gambela Town', nameAm: 'ጋምቤላ ከተማ' },
        ],
      },
    ],
  },
  {
    name: 'Harari',
    nameAm: 'ሐረሪ',
    cities: [
      {
        name: 'Harar',
        nameAm: 'ሐረር',
        subCities: [
          { name: 'Harar Town', nameAm: 'ሐረር ከተማ' },
          { name: 'Jegol', nameAm: 'ጀጎል' },
        ],
      },
    ],
  },
  {
    name: 'Dire Dawa',
    nameAm: 'ድሬ ዳዋ',
    cities: [
      {
        name: 'Dire Dawa',
        nameAm: 'ድሬ ዳዋ',
        subCities: [
          { name: 'Dire Dawa Town', nameAm: 'ድሬ ዳዋ ከተማ' },
          { name: 'Kezira', nameAm: 'ከዚራ' },
        ],
      },
    ],
  },
]

export function getAllCities(): string[] {
  const cities: string[] = []
  for (const region of ethiopianRegions) {
    for (const city of region.cities) {
      if (!cities.includes(city.name)) {
        cities.push(city.name)
      }
    }
  }
  return cities
}

export function getSubCitiesForCity(cityName: string): SubCity[] {
  for (const region of ethiopianRegions) {
    for (const city of region.cities) {
      if (city.name === cityName) {
        return city.subCities
      }
    }
  }
  return []
}

export function getRegionsForCity(cityName: string): string[] {
  const regions: string[] = []
  for (const region of ethiopianRegions) {
    for (const city of region.cities) {
      if (city.name === cityName && !regions.includes(region.name)) {
        regions.push(region.name)
      }
    }
  }
  return regions
}
