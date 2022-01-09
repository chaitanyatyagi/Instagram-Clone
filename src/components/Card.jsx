import "../styles/card.scss";
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../images/cardButton.svg";
import CardMenu from "./CardMenu";
import Comment from "./Comment";
import {useState} from "react";
import Lprofile from "./Lprofile";

function Card(props) {
  const {
    storyBorder,
    image,
    comments,
    likedByText,
    likedByNumber,
    hours,
    accountName
  } = props;

  const [inputvalue,setInputvalue] = useState("")

  const [publish,setPublish] = useState(0)

  const [red,setRed] = useState(true)

  return (
    <div className="card">
      <header>
        <Profile iconSize="medium" storyBorder={storyBorder} username={accountName} red={red} />
        <CardButton className="cardButton" />
      </header>
      <img className="cardImage" src={image} alt="card content" />
      <CardMenu red={red} setRed={setRed}/>
      <div className="likedBy">
        <Lprofile iconSize="small" hideAccountName={true} red={red} />
        {red?<span>
          Liked by <strong>{likedByText}</strong> and{" "}
          <strong>{likedByNumber} others</strong>
        </span>:<span>
          Liked by <strong>chetan_1540</strong> and{" "}
          <strong>{likedByNumber+1} others</strong>
        </span>}
      </div>
      <div className="comments">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
            />
          );
        })}
        {publish?<Comment accountName="chetan_1540" comment={inputvalue} /> : "" }
      </div>
      <div className="timePosted">{hours} HOURS AGO</div>
      <div className="addComment">
        <div className="commentText"><input type="text" placeholder="Add a comment..." value={inputvalue} onChange = {e => setInputvalue(e.target.value)} /></div>
        <div className="postText" onClick={publish=>setPublish(publish+1)}>Post</div>
      </div>
    </div>
  );
}

export default Card;