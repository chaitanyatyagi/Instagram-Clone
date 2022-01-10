import "../styles/menu.scss";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as Explore } from "../images/explore.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";
import { ReactComponent as Story} from "../images/story.svg"
import { ReactComponent as Map} from "../images/map.svg"
import ProfileIcon from "./ProfileIcon";
import image from "../images/profile.jpg";

function Menu() {
  return (
    <div className="menu">
      <Home className="icon" />
      <Inbox className="icon" />
      <Story className="icon" />
      <Explore className="icon" />
      <Map className="icon" />
      <Notifications className="icon" />
      <ProfileIcon iconSize="small" image={image} />
    </div>
  );
}

export default Menu;