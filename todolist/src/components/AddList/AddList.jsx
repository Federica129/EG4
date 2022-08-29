import "./AddList.css";
import { TbSend } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";

function AddList({ list, onSubmit, setValue, value, onDeleteBtn }) {
  return (
    <>
      <div className="AddList">
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            value={value}
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="Addbtn" type="submit" value="Add">
            <TbSend />
          </button>
        </form>

        <div className="list">
          <ul>
            {list.map((e, i) => (
              <fragment>
                <AiFillStar />
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
