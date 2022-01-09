import "../styles/liked.scss";
import Image from "../images/profile.jpg"

function Liked(props) {
  const { iconSize, storyBorder, red } = props;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let randomId = getRandomInt(1, 70);

  let likedImage = Image 
  let dlikedimage = `https://i.pravatar.cc/150?img=${randomId}`

  return (
    <div className={storyBorder ? "storyBorder" : ""}>
      {red ? <img
        className={`profileIcon ${iconSize}`}
        src={dlikedimage}
        alt="profile"
      />: <img
      className={`profileIcon ${iconSize}`}
      src={likedImage}
      alt="profile"
    />}
    </div>
  );
}

export default Liked;