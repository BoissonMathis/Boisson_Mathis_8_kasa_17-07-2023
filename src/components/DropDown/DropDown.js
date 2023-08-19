import "./DropDown.scss";
import arrow from "../../assets/desktop/vector.png";
import { useState } from "react";

function DropDown({ content, id, title }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`drop-down ${open ? "opened" : ""}`} id={id}>
      <div className="drop-down-header" onClick={() => setOpen(!open)}>
        <p className="drop-down-title">{title}</p>
        <img
          src={arrow}
          alt="open/close"
          className={"arrow-position drop-down-arrow"}
        />
      </div>

      <div className={"drop-down-content font18"}>
        <ul>
          {(Array.isArray(content) ? content : [content]).map((element, i) => (
            <li key={element + i}>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropDown;
