const translations = {
    "home": {
      "en": "Home",
      "jp": "家"
    },
    
  };

  function translatePage() {
    const isChecked = document.getElementById("languageToggle").checked;
    const language = isChecked ? 'jp' : 'en';

    for (const id in translations) {
      if (translations.hasOwnProperty(id)) {
        document.getElementById(id).innerHTML = translations[id][language];
      }
    }
  }