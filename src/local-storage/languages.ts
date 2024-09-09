export const getLangFromLocalStorage = () => {
  const langStr = localStorage.getItem('lang');
  return langStr ? JSON.parse(langStr) : null;
};

export const setLangToLocalStorage = (lang: string) => {
  localStorage.setItem('lang', JSON.stringify(lang));
};
