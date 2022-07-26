import "./index.css";

const FriendCard = ({ content, setFilterValue }) => {
  return (
    <div className="FriendCard" onClick={() => setFilterValue(content.name)}>
      <div className="box">
        <img src={content.photo} alt="pippo" />
        <p>{content.name}</p>
      </div>
    </div>
  );
};

export default FriendCard;
