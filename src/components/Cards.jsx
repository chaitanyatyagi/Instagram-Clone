import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";

function Cards() {
  const commentsOne = [
    {
      user: "bunnie",
      text: "Woah dude, this is awesome! 🔥",
      id: 1,
    },
    {
      user: "crazy_boy",
      text: "Like!",
      id: 2,
    },
    {
      user: "rohan12",
      text: "Niceeeee!",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "_rahul_",
      text: "Amazing content, keep it up!",
      id: 4,
    },
  ];

  const commentsThree = [
    {
      user: "_AbHi__",
      text: "Love this!",
      id: 5,
    },
  ];
  
  const commentsFour = [
    {
      user: "_AbHi__",
      text: "Lovely mann!",
      id: 5,
    },
  ];

  const commentsFive = [
    {
      user: "chetan234",
      text: "Awsmm!",
      id: 5,
    },
  ];

  const commentsSix = [
    {
      user: "rakesh",
      text: "bravo !!",
      id: 5,
    },
  ];

  return (
    <div className="cards">
      <Stories />

      <Card
        accountName="rishita_123"
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText="roshan122"
        likedByNumber={89}
        hours={16}
      />
      <Card
        accountName="caesar"
        image="https://picsum.photos/900/900"
        comments={commentsTwo}
        likedByText="ritika"
        likedByNumber={47}
        hours={12}
      />
      <Card
        accountName="kush"
        storyBorder={true}
        image="https://picsum.photos/800/1000"
        comments={commentsThree}
        likedByText="luv_1540"
        likedByNumber={90}
        hours={4}
      />
      <Card
        accountName="pawan"
        storyBorder={true}
        image="https://picsum.photos/700/1000"
        comments={commentsFour}
        likedByText="hommie"
        likedByNumber={900}
        hours={7}
      />
      <Card
        accountName="hhh__34"
        storyBorder={true}
        image="https://picsum.photos/950/900"
        comments={commentsFive}
        likedByText="shuchu"
        likedByNumber={40}
        hours={1}
      />
      <Card
        accountName="prachi"
        storyBorder={true}
        image="https://picsum.photos/8100/1000"
        comments={commentsSix}
        likedByText="luv_1540"
        likedByNumber={190}
        hours={14}
      />
      <Card
        accountName="chetan"
        storyBorder={true}
        image="https://picsum.photos/800/1000"
        comments={commentsThree}
        likedByText="lavi"
        likedByNumber={132}
        hours={2}
      />
    </div>
  );
}

export default Cards;