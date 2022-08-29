import "./AddList.css";

function AddList({ list, onSubmit, setValue, value, onDeleteBtn }) {
  return (
    <div className="AddList">
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" value="Add">
          Add
        </button>
      </form>

      <ul>
        {list.map((e, i) => (
          <fragment>
            <li key={i}>{e}</li>
            <button className="Deletebtn" onClick={() => onDeleteBtn(i)}>
              X
            </button>
          </fragment>
        ))}
      </ul>
    </div>
  );
}

export default AddList;
