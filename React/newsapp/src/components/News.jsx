import React, { Component } from "react";
import NewsItem from "./NewsItem";
import APIKEY from "../apikey.mjs";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalpages: 0
    };
  }

  nextHandler = async() => {
    this.setState({loading: true});
    let url = `https://newsapi.org/v2/everything?q=animal&pageSize=18&apiKey=${APIKEY}&page=${this.state.page+1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    

    this.setState({ articles: parsedData.articles, loading: false, page:this.state.page+1 });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=animal&pageSize=18&apiKey=${APIKEY}&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false, totalpages: Math.ceil(parsedData.totalResults/18) });
    console.log(this.state.totalpages);
    console.log(parsedData.totalResults);
  }

  render() {
    return (
      <>
        <div className="container" style={{ paddingTop: "56px" }}>
          <h1 className="m-2 anim">NewsEagle - Top Headlines</h1>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
            {this.state.loading ? (
              <>
                <NewsItem loading={true} imgsource="/logo512.png" />
                <NewsItem loading={true} imgsource="/logo512.png" />
                <NewsItem loading={true} imgsource="/logo512.png" />
                <NewsItem loading={true} imgsource="/logo512.png" />
                <NewsItem loading={true} imgsource="/logo512.png" />
                <NewsItem loading={true} imgsource="/logo512.png" />
              </>
            ) : (
              <>
                {this.state.articles.map((element) => {
                  return (
                    <div className="col" key={element.url}>
                      <NewsItem
                        title={
                          element.title && element.title.length > 50
                            ? element.title.slice(0, 50) + "..."
                            : element.title || ""
                        }
                        description={
                          element.description &&
                          element.description.length > 100
                            ? element.description.slice(0, 100) + "..."
                            : element.description || ""
                        }
                        imgsource={
                          element.urlToImage
                            ? element.urlToImage
                            : "/logo512.png"
                        }
                        newsUrl={element.url}
                        loading={false}
                      />
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
        <div className="container d-flex justify-content-between p-3 px-4">
          <button type="button" disabled={this.state.page >= 1?  true:false} onClick={this.prevHandler} className="btn btn-primary">
            &larr; Previous
          </button>
          <button type="button" disabled={this.state.totalpages <= this.state.page? true:false} onClick={this.nextHandler} className="btn btn-primary">Next &rarr;</button>

        </div>
      </>
    );
  }
}

export default News;
