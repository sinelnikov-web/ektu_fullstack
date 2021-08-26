import React, {MouseEvent} from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {changeLanguage} from "../redux/actions/system-actions";
import {LanguageType} from "./ToolbarLanguage";

const MainLanguageFrame = () => {

    const dispatch = useDispatch()
    const setAppLang = (e: MouseEvent<HTMLLIElement>) => {
        localStorage.setItem('currentLanguage', e.currentTarget.id)
        dispatch(changeLanguage(e.currentTarget.id as LanguageType))
    }

    return (
        <MainLanguageFrameStyled>
            <div className="choose-language">
                <h1 className={"choose-language__title"}>Выберите язык</h1>
                <ul className="choose-language__list">
                    <li onClick={setAppLang} id={'ru'} className="choose-language__item"><span>Русский</span></li>
                    <li onClick={setAppLang} id={'kk'} className="choose-language__item"><span>Қазақ</span></li>
                </ul>
            </div>
        </MainLanguageFrameStyled>
    );
};

const MainLanguageFrameStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #0077d3;
  z-index: 999999;
  .choose-language__title {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    color: white;
    white-space: nowrap;
    @media (max-width: 575px) {
      font-size: 4.5rem;
    }
    @media (max-width: 397px) {
      font-size: 3.5rem;
    }
  }
  .choose-language__list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    align-content: flex-end;
    padding: 8rem 0 0 0;

    .choose-language__item {
      min-width: 250px;
      text-align: center;
      padding: 0.5rem 2.5rem 1.5rem;
      background: #0090fc;
      cursor: pointer;
      &:hover {
        background: #269dff;
      }

      span {
        color: white;
        font-size: 5rem;
        font-weight: 300;
        @media (max-width: 575px) {
          font-size: 4.5rem;
        }
        @media (max-width: 397px) {
          font-size: 3.5rem;
        }
      }
    }
  }
`

export default MainLanguageFrame;