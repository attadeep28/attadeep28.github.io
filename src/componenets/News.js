import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    console.log("I am Constructor");
    this.state = {
      article: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=def8883266b041b4b140b16a0bbd98de&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      article: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
  }

  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalArticles / this.props.pageSize)
    ) {
      console.log("inside if");
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=def8883266b041b4b140b16a0bbd98de&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        article: parsedData.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=def8883266b041b4b140b16a0bbd98de&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      article: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });

    console.log(url);
  };

  render() {
    return (
      <div className="container my=3">
        <h1 className="text-center" style={{ margin: "35px" }}>
          Top Headlines
        </h1>

        {this.state.loading && <Spinner />}
        <div className="row ">
          {!this.state.loading &&
            this.state.article.map((element) => {
              return (
                <div className="col md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://cdn.cnn.com/cnnnext/dam/assets/220711161953-james-webb-telescope-first-image-0711-super-tease.jpg"
                    }
                    newsUrl={element.url}
                    author={element.author ? element.author : "unknown"}
                    date={element.publishedAt ? element.publishedAt : ""}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between my-4">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            &larr;Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalArticles / this.props.pageSize)
            }
          >
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}
