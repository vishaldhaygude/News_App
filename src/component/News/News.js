import React from "react";
import "./News.css"

function News({ author, title, description, url, urlToImage, publishedAt }) {
    return (
        <div className="card">
            <img src={urlToImage} className="img" />
            <div className="all-del">
            <h1 className="title">{title}</h1>
            <div className="info">
                <p className="author">{author}</p>
                <p className="publishedAt">{publishedAt}</p>
            </div>
            <p className="description">{description}..<a href={url} target="_blank">Read More</a></p>
            </div>
        </div>
    )

}
export default News