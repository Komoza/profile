import { useRef, useState } from 'react';

export const SidePanel = () => {
    const sidePanelRef = useRef<HTMLDivElement | null>(null);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleClickBurger = () => {
        setIsOpenMenu(true);
    };
    const handleClickClose = () => {
        if (sidePanelRef.current)
            sidePanelRef.current.style.animation =
                'slideOut 0.3s ease-in-out forwards';
        setTimeout(() => {
            setIsOpenMenu(false);
        }, 300);
    };

    return isOpenMenu ? (
        <div ref={sidePanelRef} className="side-panel">
            <img
                src="./public/close.svg"
                alt="close"
                className="side-panel__close"
                onClick={handleClickClose}
            />
            <div className="side-panel__text-wrap">
                <p className="side-panel__text side-panel__text--active">
                    Home
                </p>
                <p className="side-panel__text">About</p>
                <p className="side-panel__text">Portfolio</p>
                <p className="side-panel__text">Setting</p>
                <p className="side-panel__text">Contact</p>
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
