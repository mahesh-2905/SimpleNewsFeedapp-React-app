import React from 'react';
import './newsfeed.css'

const NewsFeed = function(props){
     const news = props.newsdata.map((data)=>{
         return(
            <div className="newsblock" key = {data.id}>
                <h3 className="text-center">{data.title}</h3>
                <p>{data.feed}</p>
            </div>
         )
     })
    return(
        <div className="news">
            {news}
        </div>
    )
}

export default NewsFeed;