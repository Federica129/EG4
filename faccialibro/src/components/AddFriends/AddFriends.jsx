import { GET, POST, DELETE } from "../../utils/api.js";
import { useState, useEffect } from "react";
import FriendList from "../FriendList";

import "./index.css";

const AddFriends = () => {
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
          return <FriendList content={friend} key={friend.id} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AddFriends;
