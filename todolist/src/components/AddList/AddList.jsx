import "./AddList.css";
import { BiSend } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

function AddList({ list, onSubmit, setValue, value, onDeleteBtn }) {
  return (
    <>
      <div className="AddList">
        <form className="input" onSubmit={(e) => onSubmit(e)}>
          <input
            value={value}
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="Addbtn" type="submit" value="Add">
            <BiSend />
          </button>
        </form>

        <div className="list">
          <ul>
            {list.map((e, i) => (
              <fragment>
                <AiFillStar className="star" />
                <li key={i}>{e}</li>
                <button className="Deletebtn" onClick={() => onDeleteBtn(i)}>
                  X
                </button>
              </fragment>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default AddList;
