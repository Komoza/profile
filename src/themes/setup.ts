import {
  getThemeFromLocalStorage,
  setThemeToLocalStorage,
} from '../local-storage/theme';

export const setTheme = () => {
  let theme = getThemeFromLocalStorage();
  document.body.classList.remove('dark');
  document.body.classList.remove('light')

  if (theme) {
    document.body.classList.add(theme);
  } else {
    if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.body.classList.add('dark');
      setThemeToLocalStorage('dark');
    } else {
      document.body.classList.add('light');
      setThemeToLocalStorage('light');
    }
  }
};
