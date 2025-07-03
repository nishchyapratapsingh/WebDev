import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalpages: 0,
      catquery: "world",
    };
  }
  APIKEY = process.env.REACT_APP_API_KEY;
  totRes = 0;

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=${this.state.catquery}&pageSize=18&apiKey=${this.APIKEY}&page=${this.state.page}`;
    let data = await fetch(url);

    let parsedData = await data.json();
    let totalResultsAvlb =
      parsedData.totalResults < 100 ? parsedData.totalResults : 100;
    this.props.setProgress(40);

    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalpages: !(Math.ceil(totalResultsAvlb / 18) - 1)
        ? 1
        : Math.ceil(totalResultsAvlb / 18) - 1,
    });
    this.totRes = totalResultsAvlb;
    this.props.setProgress(100);
  }

  async componentDidUpdate(prevprops) {
    if (prevprops.query !== this.props.query) {
      this.props.setProgress(10);
      this.setState({
        catquery: this.props.query,
        loading: true,
      });
      this.props.setProgress(20);

      let url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        this.props.query
      )}&pageSize=18&apiKey=${this.APIKEY}&page=1`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.props.setProgress(30);

      let totalResultsAvlb =
        parsedData.totalResults < 100 ? parsedData.totalResults : 100;
      this.props.setProgress(50);

      this.setState({
        articles: parsedData.articles,
        loading: false,
        totalpages: !(Math.ceil(totalResultsAvlb / 18) - 1)
          ? 1
          : Math.ceil(totalResultsAvlb / 18) - 1,
        page: 1,
      });
      document.title = `${this.titleCase(this.state.catquery)} - NewsEagle`;
      this.totRes = totalResultsAvlb;
      this.props.setProgress(100);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
  titleCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  fetchMoreData = async () => {
    let nextPage = this.state.page + 1;
    let url = `https://newsapi.org/v2/everything?q=${this.state.catquery}&pageSize=18&apiKey=${this.APIKEY}&page=${nextPage}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setTimeout(() => {
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        page: nextPage,
      });
    }, 1500);
  };

  render() {
    return (
      <>
        <div className="container" style={{ paddingTop: "56px" }}>
          <h1 className="m-2 anim text-center">
            NewsEagle - {this.titleCase(this.state.catquery)}
          </h1>
          {this.state.loading ? (
            <Loading />
          ) : (
            <InfiniteScroll
              style={{ overflow: "hidden" }}
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={
                this.state.articles.length >= this.totRes - 18 ? false : true
              }
              loader={
                <>
                  <Loading />
                </>
              }
            >
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
                <>
                  {Array.isArray(this.state.articles) &&
                    this.state.articles.map((element) => {
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
                            date={element.publishedAt}
                          />
                        </div>
                      );
                    })}
                </>
              </div>
            </InfiniteScroll>
          )}
        </div>
      </>
    );
  }
}

export default News;
