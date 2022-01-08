import "../styles/suggestions.scss";
import Profile from "./Profile";

function Suggestions() {
  const name = ["rishika_0","yash12","luv__90","manpreet_78","pratha12","khushi78"]
  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">Suggestions For You</div>
        <a href="/">See All</a>
      </div>

      <Profile
        username = {name[0]}
        caption="Followed by rahul_67 + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        username = {name[1]}
        caption="Followed by ashu12 + 1 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        username = {name[2]}
        caption="Follows you"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        username = {name[3]}
        caption="Followed by bunnie + 7 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        username = {name[4]}
        caption="Followed by techakhil + 4 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
    </div>
  );
}

export default Suggestions;