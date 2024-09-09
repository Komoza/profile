import { useTranslation } from 'react-i18next';
import { ROUTES } from '../../routes/paths.ts';
import { Link, useLocation } from 'react-router-dom';
import {
  getThemeFromLocalStorage,
  setThemeToLocalStorage,
} from '../../local-storage/theme.ts';
import { useRef, useState } from 'react';
import { setTheme as setThemeApp } from '../../themes/setup.ts';

import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { GoSun } from 'react-icons/go';
import { FaRegMoon } from 'react-icons/fa';
import {
  getLangFromLocalStorage,
  setLangToLocalStorage,
} from '../../local-storage/languages.ts';
import { FaHome } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { FaFolderOpen } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';

export const Sidebar = () => {
  const [tSidebar, i18n] = useTranslation('sidebar');
  const location = useLocation();

  const refSidebar = useRef<HTMLDivElement>(null);
  const refToggle = useRef<HTMLButtonElement>(null);

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const themeFormLS = getThemeFromLocalStorage();
    return themeFormLS ? themeFormLS : 'dark';
  });
  const [language, setLanguage] = useState<'ru' | 'en'>(() => {
    const langFormLS = getLangFromLocalStorage();
    return langFormLS ? langFormLS : 'ru';
  });
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(true);

  const handleClickThemes = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setThemeToLocalStorage(newTheme);
    setThemeApp();
  };

  const handleClickLanguage = () => {
    const newLang = language === 'ru' ? 'en' : 'ru';
    setLanguage(newLang);
    void i18n.changeLanguage(newLang);
    setLangToLocalStorage(newLang);
  };

  const handleClickToggleSidebar = () => {
    if (refSidebar.current && refToggle.current) {
      if (isOpenSidebar) {
        refSidebar.current.style.animation = 'compressSidebar .3s forwards';
        refToggle.current.style.animation = 'rotateOutToggle .3s forwards';

        setIsOpenSidebar(false);
      } else {
        refSidebar.current.style.animation = 'uncompressSidebar .3s forwards';
        refToggle.current.style.animation = 'rotateToggle .3s forwards';
        setIsOpenSidebar(true);
      }
    }
  };

  return (
    <section
      ref={refSidebar}
      className={`sidebar ${!isOpenSidebar ? 'sidebar--closed' : ''}`}
    >
      <div className='sidebar__header'>
        {isOpenSidebar && (
          <>
            <button onClick={handleClickThemes} className='sidebar__theme'>
              {theme === 'light' ? (
                <GoSun color='var(--color-text)' />
              ) : (
                <FaRegMoon color='var(--color-text)' />
              )}
            </button>

            <button onClick={handleClickLanguage} className='sidebar__lang'>
              {language === 'ru' ? 'RU' : 'EN'}
            </button>
          </>
        )}
      </div>

      <button
        ref={refToggle}
        onClick={handleClickToggleSidebar}
        className={`sidebar__toggle-button  ${!isOpenSidebar ? 'sidebar__toggle-button--closed' : ''}`}
      >
        <MdKeyboardDoubleArrowLeft color='var(--color-text)' />
      </button>

      <nav className='sidebar__navigation'>
        <Link to={ROUTES.main}>
          <div
            className={`sidebar__link ${!isOpenSidebar ? 'sidebar__link--closed' : ''}`}
          >
            <FaHome
              color={
                location.pathname === ROUTES.main
                  ? 'var(--color-active-element)'
                  : 'var(--color-text)'
              }
            />

            {isOpenSidebar && (
              <p
                className={`sidebar__link-text ${location.pathname === ROUTES.main ? 'sidebar__link-text--active' : ''}`}
              >
                {tSidebar('main')}
              </p>
            )}
          </div>
        </Link>

        <Link to={ROUTES.about}>
          <div
            className={`sidebar__link ${!isOpenSidebar ? 'sidebar__link--closed' : ''}`}
          >
            <IoPerson
              color={
                location.pathname === ROUTES.about
                  ? 'var(--color-active-element)'
                  : 'var(--color-text)'
              }
            />

            {isOpenSidebar && (
              <p
                className={`sidebar__link-text ${location.pathname === ROUTES.about ? 'sidebar__link-text--active' : ''}`}
              >
                {tSidebar('about')}
              </p>
            )}
          </div>
        </Link>

        <Link to={ROUTES.portfolio}>
          <div
            className={`sidebar__link ${!isOpenSidebar ? 'sidebar__link--closed' : ''}`}
          >
            <FaFolderOpen
              color={
                location.pathname === ROUTES.portfolio
                  ? 'var(--color-active-element)'
                  : 'var(--color-text)'
              }
            />
            {isOpenSidebar && (
              <p
                className={`sidebar__link-text ${location.pathname === ROUTES.portfolio ? 'sidebar__link-text--active' : ''}`}
              >
                {tSidebar('portfolio')}
              </p>
            )}
          </div>
        </Link>

        <Link to={ROUTES.contact}>
          <div
            className={`sidebar__link ${!isOpenSidebar ? 'sidebar__link--closed' : ''}`}
          >
            <IoMail
              color={
                location.pathname === ROUTES.contact
                  ? 'var(--color-active-element)'
                  : 'var(--color-text)'
              }
            />
            {isOpenSidebar && (
              <p
                className={`sidebar__link-text ${location.pathname === ROUTES.contact ? 'sidebar__link-text--active' : ''}`}
              >
                {tSidebar('contact')}
              </p>
            )}
          </div>
        </Link>
      </nav>
      <div className='sidebar__design'>
        {isOpenSidebar && (
          <a
            href='https://www.figma.com/design/oqzI7J0jLyQq601xy9TUHd/Resume?node-id=1-2&t=PjDSDsIruA3qRASf-0'
            target='_blank'
            className='sidebar__design-link'
          >
            {tSidebar('design')} <br /> {tSidebar('byMaximKomoza')}
          </a>
        )}
      </div>
    </section>
  );
};
