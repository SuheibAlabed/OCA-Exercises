import { Posts } from "../Data/DataPost";
import "./_Profile.scss";
import { BsFillHeartFill } from "react-icons/bs";
import { BiComment, BiVideo } from "react-icons/bi";
import { FaCommentAlt } from "react-icons/fa";
const Post = () => {
  const renderPost = (Post, index) => {
    if (Post.post === "photo" && <img src={Post.url} />) {
      return <h1>Photo</h1>;
    }
    return (
      <div className="Stories" key={index}>
        <a href="#">
          <div className="imgPost">
            <div className="type">
              {/* <FaVideo size={25} /> */}
              {Post.Icon}
            </div>
            <div className="bgImg ">
              {" "}
              <div className="info">
                <BsFillHeartFill size={25} />
                <FaCommentAlt size={25} />
              </div>
            </div>
            <img src={Post.post} alt="" width="550vh" />
          </div>
        </a>
      </div>
    );
  };

  return (
    // Start Card
    <div className="PostContainer">{Posts.map(renderPost)}</div>
    //End Card
  );
};

export default Post;
