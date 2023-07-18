import React from 'react';
import './Header.css';
import {useTranslation} from 'react-i18next';
import {bindActionCreators} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {actionCreators, State} from '../state';

const Header: React.FC = () => {
    const {i18n} = useTranslation();
    const currentLanguage: any = localStorage.getItem('i18nextLng');
    const languages: any = {
        en: {nativeName: 'EN'},
        uk: {nativeName: 'UA'},
        he: {nativeName: 'HE'}
    }
    const {isVisibleLanguages} = useSelector((state: State) => state.isVisibleLanguages);
    const dispatch = useDispatch();
    const {setIsVisibleLanguages} = bindActionCreators(
        actionCreators,
        dispatch
    );

    const getLanguageName = (language: string): string => {
        if (!language) {
            language = 'en';
        }

        return languages[language].nativeName;
    }

    return (
        <header className='header'>
            <div className='language-container'>
                <div
                    className='selected-language'
                    onClick={() => setIsVisibleLanguages(!isVisibleLanguages)}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/lang.png`}
                        alt='lang'
                        className='img-lang'
                    />
                    <span> {languages[currentLanguage].nativeName} </span>
                    <img
                        src={`${process.env.PUBLIC_URL}${isVisibleLanguages ? '/arrow-up.png' : '/arrow-down.png'}`}
                        alt={isVisibleLanguages ? 'arrow-up' : 'arrow-down'}
                        className='img-lang'
                    />
                </div>
                {isVisibleLanguages && (
                    <ul className='lang-list'>
                        {Object.keys(languages).map(
                            (language: string,
                             index: number
                            ) => (
                                <li key={language + '-' + index}>
                                    <button
                                        className='lang-item'
                                        key={language}
                                        onClick={() => {
                                            i18n.changeLanguage(language).then();
                                            setIsVisibleLanguages(!isVisibleLanguages);
                                        }}
                                    >
                                        {languages[language].nativeName}
                                    </button>
                                </li>
                            ))}
                    </ul>
                )}
            </div>
        </header>
    );
}

export default Header;
