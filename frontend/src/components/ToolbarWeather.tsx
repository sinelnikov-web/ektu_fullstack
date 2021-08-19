import React, {useState} from 'react';
import styled from "styled-components";
import CloudIcon from "../assets/images/clouds.svg"
import {useSelector} from "react-redux";
import {weatherStateSelector} from "../selectors/weather-selectors";
import Loader from "./Loader";
import NewsWidget from "./NewsWidget";

const ToolbarWeather = () => {

    const weather = useSelector(weatherStateSelector)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <ToolbarWeatherStyled>
            <div className="toolbar-icon-wrapper" onClick={() => setIsOpen(prev => !prev)}>
                {weather.isFetching ?
                    <Loader/>
                    :
                    <>
                        <div className="weather__icon-wrapper">
                            <img className={'weather__icon'} src={`http://openweathermap.org/img/wn/${weather.weather.icon}@2x.png`} alt=""/>
                        </div>
                        <span className={'weather__status'}>{(weather?.main?.temp - 273).toFixed()}&deg;C {weather.weather.description}</span>
                    </>}
            </div>
            <NewsWidget isOpen={isOpen}/>
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
    &:hover {
      background-color: var(--toolbar-bg-color);
      filter: brightness(140%);
    }
  }

`

export default ToolbarWeather;