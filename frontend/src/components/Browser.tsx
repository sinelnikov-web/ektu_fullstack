import React from 'react';
import styled from "styled-components";
import Logo from "../assets/images/site-logo.jpg"

const Browser = () => {
    return (
        <BrowserStyled>
            <header className="header">
                <div className="container">
                    <div className="header-inner">
                        <div className="logo-block">
                            <img src="images/logo1.jpg" alt="" className="logo-block__image"/>
                            <span className="logo-block__text">Jambyl Jastary</span>
                        </div>
                        <nav className="nav">
                            <ul className="nav__list">
                                <li className="nav__item">
                                    <a href="#" className="nav__link">Главная</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#" className="nav__link">Новости</a>
                                </li>
                                <li className="nav__item has-subnav">
                                    <a href="#" className="nav__link">Деятельность</a>
                                    <ul className="subnav">
                                        <li className="subnav__item">
                                            <a className="subnav__link" href="#">Мероприятия</a>
                                        </li>
                                        <li className="subnav__item">
                                            <a className="subnav__link" href="#">Конкурсы</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav__item">
                                    <a href="#" className="nav__link">Учреждения</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#" className="nav__link">Сотрудники</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#" className="nav__link">Контакты</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="main">
                <div className="container">
                    <section className="welcome">
                        <div className="welcome-inner">
                            <h1 className="page-title">Новости</h1>
                            <div className="news">
                                <div className="news__card">
                                    <div className="news__head">
                                        <a href="#">
                                            <img src="http://placehold.it/300x200" alt="" className="news__image"/>
                                        </a>
                                    </div>
                                    <div className="news__body">
                                        <h3 className="news__title"><a href="#">Какая-то новость</a></h3>
                                        <p className="news__description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi
                                            dolore iure
                                            labore, magnam nobis numquam odit optio possimus quasi quos ratione veniam,
                                            voluptate!
                                            Adipisci doloremque excepturi laboriosam maxime neque provident quisquam quo
                                            soluta
                                            tenetur voluptatibus! Autem consequatur eaque eligendi excepturi expedita
                                            facere placeat
                                            rem, sed sint suscipit, tempore, voluptates.
                                        </p>
                                    </div>
                                    <div className="news__footer">
                                        <time className="news__date" dateTime="2021-08-09">09.08.2021</time>
                                        <span className="news__views">
                                83
                                <img src="images/views_icon.png" alt=""/>
                            </span>
                                    </div>
                                </div>
                                <div className="news__card">
                                    <div className="news__head">
                                        <img src="http://placehold.it/300x200" alt="" className="news__image"/>
                                    </div>
                                    <div className="news__body">
                                        <h3 className="news__title"><a href="#">Какая-то новость</a></h3>
                                        <p className="news__description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi
                                            dolore iure
                                            labore, magnam nobis numquam odit optio possimus quasi quos ratione veniam,
                                            voluptate!
                                            Adipisci doloremque excepturi laboriosam maxime neque provident quisquam quo
                                            soluta
                                            tenetur voluptatibus! Autem consequatur eaque eligendi excepturi expedita
                                            facere placeat
                                            rem, sed sint suscipit, tempore, voluptates.
                                        </p>
                                    </div>
                                    <div className="news__footer">
                                        <time className="news__date" dateTime="2021-08-09">09.08.2021</time>
                                        <span className="news__views">
                                83
                                <img src="images/views_icon.png" alt=""/>
                            </span>
                                    </div>
                                </div>
                                <div className="news__card">
                                    <div className="news__head">
                                        <img src="http://placehold.it/300x200" alt="" className="news__image"/>
                                    </div>
                                    <div className="news__body">
                                        <h3 className="news__title"><a href="#">Какая-то новость</a></h3>
                                        <p className="news__description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi
                                            dolore iure
                                            labore, magnam nobis numquam odit optio possimus quasi quos ratione veniam,
                                            voluptate!
                                            Adipisci doloremque excepturi laboriosam maxime neque provident quisquam quo
                                            soluta
                                            tenetur voluptatibus! Autem consequatur eaque eligendi excepturi expedita
                                            facere placeat
                                            rem, sed sint suscipit, tempore, voluptates.
                                        </p>
                                    </div>
                                    <div className="news__footer">
                                        <time className="news__date" dateTime="2021-08-09">09.08.2021</time>
                                        <span className="news__views">
                                83
                                <img src="images/views_icon.png" alt=""/>
                            </span>
                                    </div>
                                </div>
                                <div className="news__card">
                                    <div className="news__head">
                                        <img src="http://placehold.it/300x200" alt="" className="news__image"/>
                                    </div>
                                    <div className="news__body">
                                        <h3 className="news__title"><a href="#">Какая-то новость</a></h3>
                                        <p className="news__description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi
                                            dolore iure
                                            labore, magnam nobis numquam odit optio possimus quasi quos ratione veniam,
                                            voluptate!
                                            Adipisci doloremque excepturi laboriosam maxime neque provident quisquam quo
                                            soluta
                                            tenetur voluptatibus! Autem consequatur eaque eligendi excepturi expedita
                                            facere placeat
                                            rem, sed sint suscipit, tempore, voluptates.
                                        </p>
                                    </div>
                                    <div className="news__footer">
                                        <time className="news__date" dateTime="2021-08-09">09.08.2021</time>
                                        <span className="news__views">
                                83
                                <img src="images/views_icon.png" alt=""/>
                            </span>
                                    </div>
                                </div>
                                <div className="news__card">
                                    <div className="news__head">
                                        <img src="http://placehold.it/300x200" alt="" className="news__image"/>
                                    </div>
                                    <div className="news__body">
                                        <h3 className="news__title"><a href="#">Какая-то новость</a></h3>
                                        <p className="news__description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi
                                            dolore iure
                                            labore, magnam nobis numquam odit optio possimus quasi quos ratione veniam,
                                            voluptate!
                                            Adipisci doloremque excepturi laboriosam maxime neque provident quisquam quo
                                            soluta
                                            tenetur voluptatibus! Autem consequatur eaque eligendi excepturi expedita
                                            facere placeat
                                            rem, sed sint suscipit, tempore, voluptates.
                                        </p>
                                    </div>
                                    <div className="news__footer">
                                        <time className="news__date" dateTime="2021-08-09">09.08.2021</time>
                                        <span className="news__views">
                                83
                                <img src="images/views_icon.png" alt=""/>
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </BrowserStyled>
    );
};

const BrowserStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  /* Header */

  .header {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: #fff;
  }

  .header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 20000;
    padding: 0 1rem;
  }

  .logo-block {
    width: 100px;
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  .logo-block__image {
    width: 100%;
  }

  .logo-block__text {
    white-space: nowrap;
    font-size: 20px;
  }

  .nav {
    height: 100%;
    z-index: 3000;
  }

  .nav__list {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .nav__item {
    vertical-align: center;
    display: flex;
    align-items: center;
    min-height: 66px;
  }

  .nav__item.has-subnav {
    position: relative;
    padding-right: 1.2rem;
  }

  .nav__item.has-subnav:hover > .subnav {
    display: block;
  }

  .nav__item.has-subnav:after {
    content: '';
    position: absolute;
    top: 51%;
    right: 0;
    transform: translateY(-50%);
    display: block;
    border-style: solid;
    border-width: 6px 5px 0 5px;
    border-color: black transparent transparent transparent;
  }

  .subnav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 16.5rem;
    background-color: white;
    border-radius: 0 0 5px 5px;
    padding: 0.5rem 0;
    box-shadow: 0 6px 8px rgba(0,0,0, 0.2);
  }

  .subnav__link {
    display: block;
    padding: 0.45rem 1.2rem;
    color: black;
    font-size: 1.5rem;
    text-decoration: none;
    transition: background-color 0.2s linear;
  }

  .subnav__link:hover {
    background-color: black;
    color: white;
  }

  .nav__link {
    display: block;
    width: 100%;
    height: 100%;
    color: black;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .subnav__item:hover .subnav__link, .nav__item:hover .nav__link{
    text-decoration: underline;
  }

  /* Welcome */

  .main {
    padding: 10.6rem;
    min-height: 100vh;
  }

  .page-title {
    font-size: 4rem;
    position: relative;
    margin-bottom: 2rem;
  }

  .page-title:after {
    content: '';
    position: absolute;
    bottom: -10%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: black;
  }

  .welcome {
    width: 100%;
    height: 100%
  }

  .welcome-inner {

  }

  /* News */

  .news {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2rem;
  }

  .news__card {
    max-width: 30rem;
    max-height: 40rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border: 1px solid black;
    padding: 2rem;
    transition: all 0.2s linear;
  }

  .news__card:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  }

  .news__head {
    margin: -2rem -2rem 0 -2rem;
    overflow: hidden;
    height: 200px;
  }

  .news__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s linear;
  }

  .news__card:hover .news__image {
    transform: scale(1.3);
  }

  .news__title {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .news__title a {
    text-decoration: none;
    color: black;
  }

  .news__title a:hover {
    text-decoration: underline;
  }

  .news__description {
    font-size: 1.5rem;
    height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(0, 0, 0, 0.6);
  }

  .news__footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 1.3rem;
  }

  .news__views {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .news__views img {
    width: 20px;
    height: 20px;
  }

  /* Activities */

  .month {
    margin-bottom: 2rem;
  }

  .month__title {
    display: inline-block;
    font-size: 3rem;
    position: relative;
    padding-right: 2rem;
    cursor: pointer;
    margin-bottom: 2rem;
  }

  .month__title:before {
    content: '';
    position: absolute;
    bottom: -5%;
    left: 0;
    width: 0;
    height: 2px;
    background-color: black;
    transition: all 0.2s linear;
  }

  .month__title:hover::before{
    width: 100%;
  }

  .month__title.active::before {
    width: 100%;
  }

  .month__title:after {
    content: '';
    position: absolute;
    top: 51%;
    right: 0;
    transform: translateY(-50%);
    display: block;
    border-style: solid;
    border-width: 6px 5px 0 5px;
    border-color: black transparent transparent transparent;
    transition: all 0.3s linear;
  }

  .month__title.active:after {
    transform: rotate(180deg);
  }

  .calendar {
    display: none;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 3px;
  }

  .calendar__day {
    height: 15vh;
    background-color: #858585;
    color: white;
    position: relative;
    padding-top: 3.5rem;
    padding-left: 1rem;
    border: 1px solid black;
    transition: all 0.3s linear;
  }

  .calendar__day:hover {
    transform: scale(1.3);
    z-index: 5;
    box-shadow: 0 0 15px black;
  }

  .calendar__day--green {
    background-color: #33CC66;
  }
  .calendar__day--purple {
    background-color: #FF00CC;
  }
  .calendar__day--orange {
    background-color: #FF6600;
  }
  .calendar__day--blue {
    background-color: #0033FF;
  }

  .calendar__date {
    font-size: 2rem;
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  .calendar__text {
    font-size: 1.5rem;
  }

  .calendar.active {
    display: grid;
  }



`

export default Browser;