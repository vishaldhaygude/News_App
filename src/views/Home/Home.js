import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css"
import News from "./../../component/News/News";

function Home() {
    const [news, setNews] = useState([])
    const [searchQuery, setSearchQuery] = useState("india")

    const loadnews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-03-24&to=2024-03-24&sortBy=popularity&apiKey=5a9a8b95819f4d688ee9d99953b9737a`);
            setNews(response.data.articles)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadnews()
    }, [])

    useEffect(() => {
        loadnews()
    }, [searchQuery])


    return (
        <div>
            <center><h1>News App</h1></center><hr/>
            <input
                type="text"
                className="search"
                placeholder="Enter news type"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
            <div className="container">
                <div className="row">
                {
                    news.map((newsArticle, index) => {
                        const { author, title, description, url, urlToImage, publishedAt } = newsArticle
                        return (
                            <News author={author} title={title} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt} key={index} />
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}
export default Home