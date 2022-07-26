import { useState, useEffect } from "react";
import { GET } from "../../utils/api";
import MessageCard from "../MessageCard";
import "./index.css";

const MessageCardList = ({
  isRenderedList,
  setIsRenderedList,
  filterValue,
}) => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    GET("messages").then((data) => {
      // setMessageList(data);

      if (filterValue) {
        setMessageList(
          data
            .filter((message) =>
              message.sender.toLowerCase().includes(filterValue.toLowerCase())
            )
            .sort((a, b) => sortDates(a, b))
        );
      } else {
        setMessageList(data.sort((a, b) => sortDates(a, b)));
      }
    });
  }, [isRenderedList, filterValue]);

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
            <MessageCard
              textContent={message}
              key={message.id}
              id={message.id}
              setIsRenderedList={setIsRenderedList}
              isRenderedList={isRenderedList}
            />
          ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MessageCardList;
