import React, {  } from 'react'

const NewsItem=(props)=> {

let{title,description,imageUrl,newsUrl,author,date,source}= props;
    return (
      <div className="my-3"><div className="card">
        <div className='info-badge'>

     
        <span className=" badge rounded-pill bg-danger">{source}</span>
        </div>
      <img src={!imageUrl?"https://tse2.mm.bing.net/th?id=OIP.e4UaEmp1LcnHgqSxfLaJ4AHaEK&pid=Api&P=0&h=180":imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title} 

        </h5>
        <p className="card-text">{description}</p>
        <p className='card-text'><small className='text-danger'><b> By {!author? "Unknown":author} , Published on {new Date(date).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})} IST </b></small></p>
        <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
      </div>
    </div>
    </div>
)
  }

export default NewsItem

