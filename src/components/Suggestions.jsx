import "../styles/suggestions.scss";
import Profile from "./Profile";
import React,{useState} from "react";

function Suggestions() {
  const name = ["rishika_0","yash12","luv__90","manpreet_78","pratha12","khushi78"]
  const [show,setShow] = useState(true)
  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">Suggestions For You</div>
        <span onClick = {() => setShow(show=>!show)}>{show?'Hide':'See All'}</span>
      </div>
      {show?<Profile
        username = {name[0]}
        caption="Followed by rahul_67 + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      :''}
      {show?<Profile
        username = {name[1]}
        caption="Followed by ashu12 + 1 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />:''}
      {show?<Profile
        username = {name[2]}
        caption="Follows you"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />:''}
      {show?<Profile
        username = {name[3]}
        caption="Followed by bunnie + 7 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />:''}
      {show?<Profile
        username = {name[4]}
        caption="Followed by techakhil + 4 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />:''}
    </div>
  );
}

export default Suggestions;
