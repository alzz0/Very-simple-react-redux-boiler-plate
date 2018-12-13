import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Posts extends Component {
  render() {
    console.log(this.props);
    const { posts } = this.props;
    const postsList = posts.length ? (
      posts.map(post => {
        return (
          <div key={post.id}>
            <Link to={"/" + post.id}>
              <h1>{post.title}</h1>
            </Link>
            <p>{post.body}</p>
          </div>
        );
      })
    ) : (
      <p>Loading...</p>
    );
    return <div>{postsList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};
export default connect(mapStateToProps)(Posts);
