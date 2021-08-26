import React, {useState} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {weatherStateSelector} from "../selectors/weather-selectors";
import loadable from '@loadable/component'
import {useTranslation} from "react-i18next";
import {ReactComponent as CloudsIcon} from "../assets/images/clouds.svg"

const NewsWidget = loadable(() => import("./NewsWidget"))
const Loader = loadable(() => import("./Loader"))

const ToolbarWeather = () => {

    const {t, i18n} = useTranslation()
    const weather = useSelector(weatherStateSelector)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <ToolbarWeatherStyled className={'toolbar-weather'}>
            <div className="toolbar-icon-wrapper" onClick={() => setIsOpen(prev => !prev)}>
                {weather.isFetching ?
                    <Loader/>
                    :
                    <>
                        <div className="weather__icon-wrapper">

                            <CloudsIcon className={'weather__icon'}/>
                        </div>
                        <span
                            className={'weather__status'}>{(weather?.main?.temp - 273).toFixed()}&deg;C {t('облачно')}</span>
                    </>}
            </div>
            <div className="toolbar-icon-mobile toolbar-icon-wrapper" onClick={() => setIsOpen(prev => !prev)}>
                <span>{t('Новости')}</span>
            </div>
            {isOpen && <NewsWidget isOpen={isOpen}/>}
        </ToolbarWeatherStyled>
    );
};

const ToolbarWeatherStyled = styled.div`
  min-width: 130px;
  color: white;
  height: 100%;
  position: relative;

  .weather__icon-wrapper {
    display: flex;
    align-items: center;
    width: 30px;

    img {
      width: 100%;
    }
  }

  .toolbar-icon-wrapper {
    padding: 0.5rem 1.5rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .weather__icon {
      width: 100%;
      height: 100%;
    }
    &:hover {
      background-color: var(--toolbar-bg-color);
      filter: brightness(140%);
    }
  }

  .toolbar-icon-mobile {
    display: none;
  }

  @media (max-width: 823px) {
    min-width: auto;
    .toolbar-icon-wrapper {
      display: none;
    }

    .toolbar-icon-mobile {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: auto;
      padding: 0.5rem 0.8rem;
      span {

      }
    }
  }
`

export default ToolbarWeather;