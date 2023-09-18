import { useSelector } from 'react-redux';
import { text } from '../../language';
import { AppState } from '../../store/actions/types/types';

export const Home = () => {
    const language = useSelector((state: AppState) => state.language);
    return (
        <div className="home">
            <div className="home__wrap">
                <p className="home__hello">{text[language].home.hello}</p>
                <h1 className="home__text">
                    {text[language].home.text + ' '}
                    <span className="home__text--pirple">
                        {text[language].home.position}
                    </span>
                </h1>
                <p className="home__description">
                    {text[language].home.description}
                </p>
            </div>
        </div>
    );
};
