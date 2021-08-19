import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {weatherStateSelector} from "../selectors/weather-selectors";

interface NewsWidgetProps {
    isOpen: boolean
}

const NewsWidget: React.FC<NewsWidgetProps> = ({isOpen}) => {

    const weather = useSelector(weatherStateSelector)

    return (
        <NewsWidgetStyled className={!isOpen ? 'hidden' : ''}>
            <div className="news__head">
                <div className="news__post">
                    <img src={'http://placehold.it/900x900'} alt="" className="news__post-image"/>
                    <div className="news__post-info">
                        <h2 className="news__post-title">Жамбылская новость</h2>
                        <div className="news__post-footer">
                            <button className="news__post-like"><span>&#x1F44D;</span> Нравится</button>
                            <span className="news__post-likes">23&#10084;</span>
                        </div>
                    </div>
                </div>
                <div className="news__weather">
                    <h2 className="news__weather-city">{weather.name}, Жамбылская область</h2>
                    <div className="news__weather-body">
                        <img src={`http://openweathermap.org/img/wn/${weather.weather.icon}@2x.png`} alt=""
                             className="news__weather-image"/>
                        <span className="news__weather-degrees">{(weather?.main?.temp - 273).toFixed()}&deg;C</span>
                    </div>
                    <div className="news__weather-footer">
                        <div className="news__weather-item">
                            <p className="news__weather-key">Давление:</p>
                            <p className="news__weather-value">{weather.main.pressure}</p>
                        </div>
                        <div className="news__weather-item">
                            <p className="news__weather-key">Влажность:</p>
                            <p className="news__weather-value">{weather.main.humidity}</p>
                        </div>
                        <div className="news__weather-item">
                            <p className="news__weather-key">Чувствуется как:</p>
                            <p className="news__weather-value">{weather.main.feels_like}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news__body">
                <div className="news__post">
                    <img src={'http://placehold.it/900x900'} alt="" className="news__post-image"/>
                    <div className="news__post-info">
                        <h2 className="news__post-title">Жамбылская новость</h2>
                        <div className="news__post-footer">
                            <button className="news__post-like"><span>&#x1F44D;</span> Нравится</button>
                            <span className="news__post-likes">23&#10084;</span>
                        </div>
                    </div>
                </div>
                <div className="news__post">
                    <img src={'http://placehold.it/900x900'} alt="" className="news__post-image"/>
                    <div className="news__post-info">
                        <h2 className="news__post-title">Жамбылская новость</h2>
                        <div className="news__post-footer">
                            <button className="news__post-like"><span>&#x1F44D;</span> Нравится</button>
                            <span className="news__post-likes">23&#10084;</span>
                        </div>
                    </div>
                </div>
                <div className="news__post">
                    <img src={'http://placehold.it/900x900'} alt="" className="news__post-image"/>
                    <div className="news__post-info">
                        <h2 className="news__post-title">Жамбылская новость</h2>
                        <div className="news__post-footer">
                            <button className="news__post-like"><span>&#x1F44D;</span> Нравится</button>
                            <span className="news__post-likes">23&#10084;</span>
                        </div>
                    </div>
                </div>
                <div className="news__post">
                    <img src={'http://placehold.it/900x900'} alt="" className="news__post-image"/>
                    <div className="news__post-info">
                        <h2 className="news__post-title">Жамбылская новость</h2>
                        <div className="news__post-footer">
                            <button className="news__post-like"><span>&#x1F44D;</span> Нравится</button>
                            <span className="news__post-likes">23&#10084;</span>
                        </div>
                    </div>
                </div>
                <div className="news__post">
                    <img src={'http://placehold.it/900x900'} alt="" className="news__post-image"/>
                    <div className="news__post-info">
                        <h2 className="news__post-title">Жамбылская новость</h2>
                        <div className="news__post-footer">
                            <button className="news__post-like"><span>&#x1F44D;</span> Нравится</button>
                            <span className="news__post-likes">23&#10084;</span>
                        </div>
                    </div>
                </div>
                <div className="news__post">
                    <img src={'http://placehold.it/900x900'} alt="" className="news__post-image"/>
                    <div className="news__post-info">
                        <h2 className="news__post-title">Жамбылская новость</h2>
                        <div className="news__post-footer">
                            <button className="news__post-like"><span>&#x1F44D;</span> Нравится</button>
                            <span className="news__post-likes">23&#10084;</span>
                        </div>
                    </div>
                </div>
            </div>
        </NewsWidgetStyled>
    );
};

const NewsWidgetStyled = styled.div`
  height: 650px;
  width: 600px;
  position: absolute;
  top: -1300%;
  left: -325%;
  background-color: #4C4C4C;
  padding: 2rem;
  overflow-y: auto;
  transition: opacity 0.2s linear;

  &.hidden {
    height: 0;
    width: 0;
    padding: 0;
    opacity: 0;
  }

  @keyframes showWidget {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .news__head, .news__body {
    display: flex;
    gap: 1rem;
  }

  .news__body {
    flex-wrap: wrap;
    padding-top: 1rem;
  }

  .news__head > *, .news__body > * {
    border-radius: 10px;
    box-shadow: 0 0 3px black;
  }

  .news__post {
    width: 49%;
    height: 25rem;
    background-color: black;
    overflow: hidden;
    position: relative;

    &:hover {
      .news__post-image {
        transform: scale(1.3);
      }
    }
  }

  .news__post:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8));


  }

  .news__post-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s linear;
  }

  .news__post-info {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 222;
  }

  .news__post-title {
    font-size: 1.8rem;
    font-weight: 400;
  }

  .news__post-footer {
    display: flex;
    margin-top: 1rem;
    align-items: center;
  }

  .news__post-like {
    color: white;
    padding: 0 1.7rem 0.8rem;
    background-color: #4B4843;
    border: none;
    border-radius: 20px;
    margin-right: 1rem;
    cursor: pointer;

    span {
      font-size: 2rem;
    }

    &:hover {
      filter: brightness(110%);
    }
  }

  .news__weather {
    width: 50%;
    height: 25rem;
    background: linear-gradient(125deg, rgba(65, 65, 66, 1) 0%, rgba(51, 59, 61, 1) 27%, rgba(38, 54, 58, 1) 100%);
    padding: 2rem;
  }

  .news__weather-city {
    font-size: 1.6rem;
    font-weight: 400;
  }

  .news__weather-body {
    display: flex;
    align-items: center;
    font-size: 4.5rem;
  }

  .news__weather-image {
    margin-left: -2.5rem;
  }

  .news__weather-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid white;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 997px) {
    position: fixed;
    width: 98%;
    height: calc(100vh - 5rem);
    top: 0;
    left: 0;
  }

`

export default NewsWidget;