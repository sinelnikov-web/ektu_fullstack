import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {articlesSelector} from "../selectors/news-selectors";

import loadable from "@loadable/component";

const Article = loadable(() => import("./Article"))

interface NewsWidgetProps {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
}

const NewsWidget: React.FC<NewsWidgetProps> = ({isOpen, setIsOpen}) => {

    const articles = useSelector(articlesSelector)

    return (
        <NewsWidgetStyled className={!isOpen ? 'hidden' : ''}>
            <span onClick={() => setIsOpen(false)} className="close-btn"></span>
            <div className="news">
                {articles.map(article => {
                    return (
                        <Article key={article.id} article={article}/>
                    )
                })}

            </div>
        </NewsWidgetStyled>
    );
};

const NewsWidgetStyled = styled.div`
  height: 650px;
  width: 600px;
  position: absolute;
  top: -1300%;
  left: -200%;
  background-color: #4C4C4C;
  padding: 5.5rem 2rem 2rem;
  overflow-y: auto;
  transition: opacity 0.2s linear;

  .close-btn {
    position: absolute;
    top: 15px;
    right: 30px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    transform: rotate(45deg );
    z-index: 9999;
    &:before {
      content: '';
      transform-origin: center;
      position: absolute;
      top: 50%;
      right: 50%;
      width: 100%;
      height: 2px;
      background-color: #fff;
      transform: translate(50%, -50%);
    }
    &:after {
      content: '';
      transform-origin: center;
      position: absolute;
      top: 50%;
      right: 50%;
      width: 2px;
      height: 100%;
      background-color: #fff;
      transform: translate(100%, -50%);
    }
  }

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

  .news {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }


  .news__post {
    width: 95%;
    height: 25rem;
    background-color: black;
    overflow: hidden;
    position: relative;
    transition: height 0.3s linear;

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
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.9));

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

  .news__post-date {
    color: white;
    margin-bottom: 0.8rem;
    opacity: 0.6;
  }
  
  .news__post-title {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .news__post.active {
    height: auto;

    &:hover {
      .news__post-image {
        transform: scale(1);
      }
    }

    .news__post-image {
      height: 25rem;
      transition: none;
    }

    .news__post-info {
      position: relative;
    }

    .news__post-title {
      border-bottom: 1px solid white;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
    }

    .news__post-text {
      opacity: 1;
      height: 100%;
      width: 100%;
    }
  }

  .news__post-text {
    opacity: 0;
    height: 0;
    width: 0;
  }

  .news__post-footer {
    display: flex;
    margin-top: 1rem;
    align-items: center;
    justify-content: space-between;
  }

  .news__post-button {
    color: white;
    padding: 0.8rem 2rem;
    background-color: #4B4843;
    border: none;
    border-radius: 20px;
    margin-right: 1rem;
    cursor: pointer;
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

  @media (max-width: 823px) {
    position: fixed;
    width: 100%;
    height: calc(100vh - 5rem);
    top: 0;
    left: 0;
    .news__post-footer {
      flex-direction: column;
      width: 100%;
      gap: 1rem;

      > div {
        width: 100%;
      }
    }

    .news__post-like {
      width: 100%;
      padding: 0.5rem 0.7rem;

      span {
        font-size: 1.5rem;
      }
    }

    .news__post-likes {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background-color: black;
      padding: 0.3rem 1rem;
      border-radius: 5px;
    }

    .news__post-button {
      width: 100%;
    }
  }

`

export default NewsWidget;