const defaultTranslations = {
  PL: {
    ERROR_100: "Nie znaleziono",
    ERROR_101: "Niezidentyfikowany błąd",
    ERROR_102: "Zbiór już istnieje",
    ERROR_103: "Błędna nazwa użytkownika lub hasło",
    ERROR_104: "Książka z takim samym ISBN już istnieje",
    ERROR_105: "Brak dostępu",
    ERROR_106: "Brak odpowiednich zasobów"
  }
};

class i18n {
  constructor(lang = "PL", translations = defaultTranslations) {
    this.lang = lang;
    this.translations = translations;

    this.t = this.translation;
  }

  // Simple translation without variety
  translation(id, lang = this.lang) {
    return this.translations[lang][id];
  }
}

export default i18n;
