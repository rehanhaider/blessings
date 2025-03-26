class AllahName {
  final String arabic;
  final String transliteration;
  final String meaning;

  AllahName({
    required this.arabic,
    required this.transliteration,
    required this.meaning,
  });
}

class AllahNamesData {
  static final List<AllahName> names = [
    AllahName(
      arabic: "الله",
      transliteration: "Allah",
      meaning: "The Greatest Name",
    ),
    AllahName(
      arabic: "الرحمن",
      transliteration: "Ar-Rahman",
      meaning: "The Most Compassionate",
    ),
    AllahName(
      arabic: "الرحيم",
      transliteration: "Ar-Raheem",
      meaning: "The Most Merciful",
    ),
    AllahName(
      arabic: "الملك",
      transliteration: "Al-Malik",
      meaning: "The King",
    ),
    AllahName(
      arabic: "القدوس",
      transliteration: "Al-Quddus",
      meaning: "The Most Holy",
    ),
    AllahName(
      arabic: "السلام",
      transliteration: "As-Salam",
      meaning: "The Source of Peace",
    ),
    AllahName(
      arabic: "المؤمن",
      transliteration: "Al-Mu'min",
      meaning: "The Guardian of Faith",
    ),
    AllahName(
      arabic: "المهيمن",
      transliteration: "Al-Muhaymin",
      meaning: "The Protector",
    ),
    AllahName(
      arabic: "العزيز",
      transliteration: "Al-Aziz",
      meaning: "The Mighty",
    ),
    AllahName(
      arabic: "الجبار",
      transliteration: "Al-Jabbar",
      meaning: "The Compeller",
    ),
    AllahName(
      arabic: "المتكبر",
      transliteration: "Al-Mutakabbir",
      meaning: "The Greatest",
    ),
    AllahName(
      arabic: "الخالق",
      transliteration: "Al-Khaliq",
      meaning: "The Creator",
    ),
    AllahName(
      arabic: "البارئ",
      transliteration: "Al-Bari'",
      meaning: "The Evolver",
    ),
    AllahName(
      arabic: "المصور",
      transliteration: "Al-Musawwir",
      meaning: "The Fashioner",
    ),
    AllahName(
      arabic: "الغفار",
      transliteration: "Al-Ghaffar",
      meaning: "The Forgiver",
    ),
    AllahName(
      arabic: "القهار",
      transliteration: "Al-Qahhar",
      meaning: "The Subduer",
    ),
    AllahName(
      arabic: "الوهاب",
      transliteration: "Al-Wahhab",
      meaning: "The Bestower",
    ),
    AllahName(
      arabic: "الرزاق",
      transliteration: "Ar-Razzaq",
      meaning: "The Provider",
    ),
    AllahName(
      arabic: "الفتاح",
      transliteration: "Al-Fattah",
      meaning: "The Opener",
    ),
    AllahName(
      arabic: "العليم",
      transliteration: "Al-'Alim",
      meaning: "The All-Knowing",
    ),
    AllahName(
      arabic: "القابض",
      transliteration: "Al-Qabid",
      meaning: "The Constrictor",
    ),
    AllahName(
      arabic: "الباسط",
      transliteration: "Al-Basit",
      meaning: "The Expander",
    ),
    AllahName(
      arabic: "الخافض",
      transliteration: "Al-Khafid",
      meaning: "The Abaser",
    ),
    AllahName(
      arabic: "الرافع",
      transliteration: "Ar-Rafi'",
      meaning: "The Exalter",
    ),
    AllahName(
      arabic: "المعز",
      transliteration: "Al-Mu'izz",
      meaning: "The Bestower of Honors",
    ),
    AllahName(
      arabic: "المذل",
      transliteration: "Al-Mudhill",
      meaning: "The Humiliator",
    ),
    AllahName(
      arabic: "السميع",
      transliteration: "As-Sami'",
      meaning: "The All-Hearing",
    ),
    AllahName(
      arabic: "البصير",
      transliteration: "Al-Basir",
      meaning: "The All-Seeing",
    ),
    AllahName(
      arabic: "الحكم",
      transliteration: "Al-Hakam",
      meaning: "The Judge",
    ),
    AllahName(arabic: "العدل", transliteration: "Al-'Adl", meaning: "The Just"),
    // Adding a subset of the 99 names for brevity
    // More names can be added as needed
  ];

  static List<AllahName> getRandomNames(int count) {
    final names = [...AllahNamesData.names];
    names.shuffle();
    return names.take(count).toList();
  }
}
