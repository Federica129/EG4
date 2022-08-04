import ColorList from "../ColorList";
import "./index.css";

function MainContent({color}) {
  return (
    <div className="MainContent">
      <ColorList color={color} />
    </div>
  );
}

export default MainContent;
