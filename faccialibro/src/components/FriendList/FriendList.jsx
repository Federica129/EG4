import "./index.css";

const FriendList = ({ content }) => {
  return (
    <div className="FriendCard">
      <div className="box">
        <img src={content.photo} alt="pippo" />
        <p>{content.name}</p>
      </div>
    </div>
  );
};

export default FriendList;
