import React, { Component } from "react";
import NewsItem from "./NewsItem";
import APIKEY from "../apikey.mjs";


export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=animal&apiKey=${APIKEY}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
  }

  render() {
    return (
      <div className="container" style={{ paddingTop: "56px" }}>
        <h1 className="m-2 anim">NewsEagle - Top Headlines</h1>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
          {this.state.loading ? (<>
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
                        element.description && element.description.length > 100
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
    );
  }
}

export default News;
