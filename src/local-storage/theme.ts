export const getThemeFromLocalStorage = () => {
  const themeStr = localStorage.getItem('theme');
  return themeStr ? JSON.parse(themeStr) : null;
};

export const setThemeToLocalStorage = (theme: string) => {
  localStorage.setItem('theme', JSON.stringify(theme));
};
