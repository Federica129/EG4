import { useState, useEffect } from "react";
import MessageCard from "../MessageCard";
import { POST, GET, DELETE } from "../../utils/api";
import "./index.css";

const MessageCardList = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    // fetch("https://edgemony-backend.herokuapp.com/messages")
    //   .then((res) => res.json())
    //   .then((data) => setMessageList(data));
    GET("messages").then((data) => {
      setMessageList(data);
    });
  }, []);

  const sortDates = (a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
  };

  return (
    <div className="MessageCardList">
      {messageList.length ? (
        messageList
          .sort(sortDates)
          .map((message) => (
            <MessageCard textContent={message} key={message.id} />
          ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MessageCardList;
