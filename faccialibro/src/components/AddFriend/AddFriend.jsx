import { useState } from "react";
import { POST } from "../../utils/api.js";

import Button from "../Button";
import "./index.css";

const AddFriend = ({ isRenderedList, setIsRenderedList }) => {
  // Controlled component!!! - Forms e input
  const [nameText, setNameText] = useState("");
  const [photo, setPhoto] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (nameText && photo) {
      POST("friends", {
        name: nameText,
        photo: photo,
      })
        .then(() => {
          setNameText("");
          setPhoto("");
        })
        .then(() => {
          setIsRenderedList(!isRenderedList);
        });
    }
  };
  return (
    <div className="AddFriends">
      <form className="AddFriendInput" onSubmit={onFormSubmit}>
        <input
          className="AddFriend__text"
          type="text"
          placeholder="Scrivi il nome..."
          value={nameText}
          onChange={(e) => setNameText(e.target.value)}
          required
        />
        <input
          className="AddFriend__photo"
          type="text"
          placeholder="Url photo.."
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          required
        />
        <Button type="submit" textContent="Invia" color="#3A3845" />
      </form>
    </div>
  );
};

export default AddFriend;
