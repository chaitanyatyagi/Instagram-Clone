import "../styles/cardMenu.scss";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as Comments } from "../images/comments.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";
import { ReactComponent as Bookmark } from "../images/bookmark.svg";
import {ReactComponent as Black} from "../images/black.svg"
import {ReactComponent as Red} from "../images/red.svg"
import {useState} from "react"

function CardMenu(props) {
  const {
    red,setRed
  } = props

  const [click,setClick] = useState(true)
  // const [red,setRed] = useState(true)

  return (
    <div className="cardMenu">
      <div className="interactions">
        {red?<Notifications className="icon" onClick = {() => setRed(false)} />:<Red className="icon" onClick = {() => setRed(true)} />}
        <Comments className="icon" />
        <Inbox className="icon" />
      </div>
      {click?<Bookmark className="icon" onClick = {() => setClick(false)} />:<Black className="icon" onClick = {() => setClick(true)} />}
      {/* <Black className="icon" /> */}
    </div>
  );
}

export default CardMenu;