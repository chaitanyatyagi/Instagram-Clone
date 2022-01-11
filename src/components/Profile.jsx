import "../styles/profile.scss";
import ProfileIcon from "./ProfileIcon";
import users from "../data/users";
import {useState} from "react"
import CompleteProfile from "./CompleteProfile";

function Profile(props) {
  const [req, setReq] = useState(true)
  
  const {
    username,
    caption,
    urlText,
    iconSize,
    captionSize,
    storyBorder,
    hideAccountName,
    image
  } = props;

  let accountName = username
    ? username
    : users[Math.floor(Math.random() * users.length)].username;

  return (
    <div className="profile">
      <ProfileIcon
        iconSize={iconSize}
        storyBorder={storyBorder}
        image={image}
      />
      {(accountName || caption) && !hideAccountName && (
        <div className="textContainer">
          <span className="accountName"><a href={CompleteProfile}>{accountName}</a></span>
          <span className={`caption ${captionSize}`}>{caption}</span>
        </div>
      )}
      {req?<span onClick={()=>setReq(prev => !prev)} style={{color:"rgb(30, 119, 196)"}}>{urlText}</span>:<span onClick={()=>setReq(prev => !prev) } style={{color:"black"}}>Requested</span>}
      
    </div>
  );
}

export default Profile;