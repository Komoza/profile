import { useRef, useState } from 'react';
import { text } from '../../language';
import { AppState } from '../../store/actions/types/types';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../store/actions/creators/creators';

export const SidePanel = () => {
    const dispatch = useDispatch();
    const language = useSelector((state: AppState) => state.language);

    const sidePanelRef = useRef<HTMLDivElement | null>(null);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleClickBurger = () => {
        setIsOpenMenu(true);
    };
    const handleClickClose = () => {
        if (sidePanelRef.current)
            sidePanelRef.current.style.animation =
                'slideOut 0.3s ease forwards';
        setTimeout(() => {
            setIsOpenMenu(false);
        }, 300);
    };
    const handleClickSwitchLanguage = () => {
        if (language === 'ru') {
            dispatch(setLanguage('en'));
        } else {
            dispatch(setLanguage('ru'));
        }
    };

    return isOpenMenu ? (
        <div ref={sidePanelRef} className="side-panel">
            <div className="side-panel__top">
                <button
                    onClick={handleClickSwitchLanguage}
                    className="side-panel__switch-lang"
                >
                    {language.toUpperCase()}
                </button>

                <img
                    src="./public/close.svg"
                    alt="close"
                    className="side-panel__close"
                    onClick={handleClickClose}
                />
            </div>

            <div className="side-panel__text-wrap">
                <p className="side-panel__text side-panel__text--active">
                    {text[language].nav.home}
                </p>
                <p className="side-panel__text">{text[language].nav.about}</p>
                <p className="side-panel__text">
                    {text[language].nav.portfolio}
                </p>
                <p className="side-panel__text">{text[language].nav.contact}</p>
            </div>
            <a
                href="https://www.figma.com/file/oqzI7J0jLyQq601xy9TUHd/Resume?type=design&node-id=1%3A2&mode=dev"
                target="_blank"
            >
                <div className="side-panel__design">
                    <div className="side-panel__design-text">Design</div>
                    <div className="side-panel__design-name">
                        by Maxim Komoza
                    </div>
                </div>
            </a>
        </div>
    ) : (
        <img
            className="burger"
            src="./public/burger.svg"
            alt="open menu"
            onClick={handleClickBurger}
        />
    );
};
