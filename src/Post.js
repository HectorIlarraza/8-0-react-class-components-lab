import { Component } from "react";
import "./Post.css";

// const postInfo = {
//   title: "Sample Post Title",
//   imageLink: "https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg",
//   description: "This is the description of the post",
// };

// const Post = () => {
//   return (
//     <div className="Post" data-testid="post">
//       <p>{postInfo.title}</p>
//       <img src={postInfo.imageLink} alt="post" />
//       <p>{postInfo.description}</p>
//     </div>
//   );
// };

class Post extends Component{
  constructor(){
    super();
    this.title = "Sample Post Title";
    this.imageLink = "https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg";
    this.description = "This is the description of the post";
  };
  render(){
    return(
      <div className="Post" data-testid="post">
        <p>{this.title}</p>
        <img src={this.imageLink} alt="post" />
        <p>{this.description}</p>
      </div>
    );
  };
}

export default Post;
