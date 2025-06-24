import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgsource, newsUrl, loading } = this.props;
    return (
      <a
        href={newsUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
        className="anim"
      >
        
        <div
          className="card m-2 h-100 position-relative hoverstyle"
          style={{ width: "18rem" }}
        >
          <img src={imgsource} className="card-img-top" alt="..." />
          <div className="card-body">
            {loading ? (
          <div>
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            <div className="btn btn-primary disabled placeholder col-6" />
          </div>
        ) : (
          <></>
        )}
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div
              className="btn btn-sm btn-primary hoverstyle"
              style={{ position: "absolute", bottom: "10px" }}
            >
              Read More
            </div>
          </div>
        </div>
      </a>
    );
  }
}

export default NewsItem;
