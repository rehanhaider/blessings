export interface AllahName {
  id: number;
  arabic: string;
  transliteration: string;
  meaning: string;
}

export const allahNames: AllahName[] = [
  {
    id: 1,
    arabic: "الرَّحْمَنُ",
    transliteration: "Ar-Rahman",
    meaning: "The Most Compassionate"
  },
  {
    id: 2,
    arabic: "الرَّحِيمُ",
    transliteration: "Ar-Raheem",
    meaning: "The Most Merciful"
  },
  {
    id: 3,
    arabic: "الْمَلِكُ",
    transliteration: "Al-Malik",
    meaning: "The King, The Sovereign"
  },
  {
    id: 4,
    arabic: "الْقُدُّوسُ",
    transliteration: "Al-Quddus",
    meaning: "The Holy"
  },
  {
    id: 5,
    arabic: "السَّلاَمُ",
    transliteration: "As-Salam",
    meaning: "The Source of Peace"
  },
  {
    id: 6,
    arabic: "الْمُؤْمِنُ",
    transliteration: "Al-Mu'min",
    meaning: "The Guardian of Faith"
  },
  {
    id: 7,
    arabic: "الْمُهَيْمِنُ",
    transliteration: "Al-Muhaymin",
    meaning: "The Protector"
  },
  {
    id: 8,
    arabic: "الْعَزِيزُ",
    transliteration: "Al-Aziz",
    meaning: "The Mighty"
  },
  {
    id: 9,
    arabic: "الْجَبَّارُ",
    transliteration: "Al-Jabbar",
    meaning: "The Compeller"
  },
  {
    id: 10,
    arabic: "الْمُتَكَبِّرُ",
    transliteration: "Al-Mutakabbir",
    meaning: "The Greatest"
  },
  {
    id: 11,
    arabic: "الْخَالِقُ",
    transliteration: "Al-Khaliq",
    meaning: "The Creator"
  },
  {
    id: 12,
    arabic: "الْبَارِئُ",
    transliteration: "Al-Bari",
    meaning: "The Evolver"
  },
  {
    id: 13,
    arabic: "الْمُصَوِّرُ",
    transliteration: "Al-Musawwir",
    meaning: "The Fashioner"
  },
  {
    id: 14,
    arabic: "الْغَفَّارُ",
    transliteration: "Al-Ghaffar",
    meaning: "The Forgiving"
  },
  {
    id: 15,
    arabic: "الْقَهَّارُ",
    transliteration: "Al-Qahhar",
    meaning: "The Subduer"
  },
  {
    id: 16,
    arabic: "الْوَهَّابُ",
    transliteration: "Al-Wahhab",
    meaning: "The Bestower"
  },
  {
    id: 17,
    arabic: "الرَّزَّاقُ",
    transliteration: "Ar-Razzaq",
    meaning: "The Provider"
  },
  {
    id: 18,
    arabic: "الْفَتَّاحُ",
    transliteration: "Al-Fattah",
    meaning: "The Opener"
  },
  {
    id: 19,
    arabic: "اَلْعَلِيْمُ",
    transliteration: "Al-Alim",
    meaning: "The All-Knowing"
  },
  {
    id: 20,
    arabic: "الْقَابِضُ",
    transliteration: "Al-Qabid",
    meaning: "The Constrictor"
  }
];

export const getRandomNames = (count: number): AllahName[] => {
  const shuffled = [...allahNames].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}; 