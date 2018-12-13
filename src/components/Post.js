import React, { Component } from "react";
import {Link}from "react-router-dom"
import {connect} from "react-redux"
import Spinner from "./Spinner"
import {deletePost} from "../actions/postActions"
class Post extends Component {
    
    handleClick=()=>{
          this.props.deletePost(this.props.post.id)
        this.props.history.push("/")
      }

  render() {
      
      
console.log(this.props)
      const post=this.props.post?(
          <div>
      <h1>{this.props.post.title}</h1>
          <p>{this.props.post.body}</p>
          <button onClick={this.handleClick}>Delete</button>
          <Link to={"/"}>Back</Link>
          </div>
      ):(<Spinner/>)
    return <div>{post}</div>
  }
}
const mapStateToProps=(state,ownProps)=>{
       let id =ownProps.match.params.id
       return{
           post:state.posts.find(post=>{
               return post.id===id
           })
       }
         }
      const mapDispatchToProps=(dispatch)=>{
          return {
              deletePost:(id)=>{dispatch(deletePost(id))}

          }
      }
export default connect(mapStateToProps,mapDispatchToProps)(Post);
