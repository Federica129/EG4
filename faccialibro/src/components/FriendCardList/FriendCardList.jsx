import { GET } from "../../utils/api.js";
import { useState, useEffect } from "react";
import FriendCard from "../FriendCard";

import "./index.css";

const FriendCardList = ({ setFilterValue }) => {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    GET("friends")
      .then((data) => {
        setFriendList(data);
      })
      .then(() => console.log(friendList));
  }, []);

  return (
    <div className="FriendList">
      {friendList.length ? (
        friendList.map((friend) => {
          console.log(friend);
          return (
            <FriendCard
              content={friend}
              key={friend.id}
              setFilterValue={setFilterValue}
            />
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FriendCardList;
