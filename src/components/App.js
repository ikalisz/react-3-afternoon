import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Post from "./Post/Post";
import Header from "./Header/Header";
import Compose from "./Compose/Compose";

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://practiceapi.devmountain.com/api/posts")
      .then(response => {
        console.log(response.data);
        this.setState({ posts: response.data });
      });
  }

  updatePost() {}

  deletePost() {}

  createPost() {}

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">
          <Compose />

          {posts.map(val => {
            console.log(val);
            return <Post key={val.id} text={val.text} date={val.date} />;
          })}
        </section>
      </div>
    );
  }
}

export default App;
