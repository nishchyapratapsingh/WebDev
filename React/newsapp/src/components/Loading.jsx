import react, { Component } from "react";
import NewsItem from "./NewsItem";

export class Loading extends Component {
  render() {
    return (
      <>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
          <NewsItem className="col" loading={true} imgsource="/logo512.png" />
          <NewsItem className="col" loading={true} imgsource="/logo512.png" />
          <NewsItem className="col" loading={true} imgsource="/logo512.png" />
          <NewsItem className="col" loading={true} imgsource="/logo512.png" />
          <NewsItem className="col" loading={true} imgsource="/logo512.png" />
          <NewsItem className="col" loading={true} imgsource="/logo512.png" />
        </div>
      </>
    );
  }
}

export default Loading;
