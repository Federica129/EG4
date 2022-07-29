import { GET } from "../../utils/api.js";
import { useState, useEffect } from "react";
import FriendCard from "../FriendCard";

import "./index.css";

const FriendCardList = ({
  isRenderedList,
  setFilterValue,
  setIsRenderedList,
  setIsLoginVisible,
}) => {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    GET("friends")
      .then((data) => {
        setFriendList(data);
      })
      .then(() => console.log(friendList));
  }, [isRenderedList]); //il get parte ogni volta che cambia valore

  return (
    <div className="FriendList">
      {friendList.length ? (
        friendList.map((friend) => {
          console.log(friend);
          return (
            <FriendCard
              setIsLoginVisible={setIsLoginVisible}
              isRenderedList={isRenderedList}
              setIsRenderedList={setIsRenderedList}
              content={friend}
              key={friend.id}
              setFilterValue={setFilterValue}
              id={friend.id}
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
