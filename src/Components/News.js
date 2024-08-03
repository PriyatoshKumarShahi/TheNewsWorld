import React,{useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
 const  capitaliseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  const updateNews= async()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fb99bc4bcaf54a558e8a26c58ef4eaaf&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);

    let parsedData = await data.json();
    props.setProgress(70);

setArticles(parsedData.articles);
setTotalResults(parsedData.totalResults);
setLoading(false)

 
    props.setProgress(100);
  }
useEffect(() => {
     document.title = `${capitaliseFirstLetter(props.category)} - TheNewsWorld`;

 updateNews()
 ;},
  []
)

  
  

const  fetchMoreData = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fb99bc4bcaf54a558e8a26c58ef4eaaf&page=${page+1}&pageSize=${props.pageSize}`;
       setPage(page+1)

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
   
  };

    return (
      <>
        <h1 className="text-center" style={{ margin: "120px 0px 30px 0px" }}>
          TheNewsWorld - Top Headlines of{" "}
          {capitaliseFirstLetter(props.category)}
        </h1>
        { loading &&<Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "science",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
