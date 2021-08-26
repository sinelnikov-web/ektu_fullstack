import React, {useState} from 'react';
import LazyImage from "./LazyImage/LazyImage";
import {baseURL} from "../api/base";
import {NewsType} from "../api/news-api";

interface ArticleType {
    article: NewsType
}

const Article: React.FC<ArticleType> = ({article}) => {

    const [isTextShow, setIsTextShow] = useState(true)
    const date = new Date(article.created).toLocaleDateString()
    return (
        <div key={article.id} className={"news__post" + (isTextShow ? ' active' : '')}>
            <LazyImage src={baseURL + article.icon} alt="" cn="news__post-image"/>
            <div className="news__post-info">
                <time className={'news__post-date'} dateTime={date}>{date}</time>
                <h2 className="news__post-title">{article.title}</h2>
                <p className={"news__post-text"}>
                    {article.text}
                </p>
                <div className="news__post-footer">

                </div>
            </div>
        </div>
    );
};

export default Article;