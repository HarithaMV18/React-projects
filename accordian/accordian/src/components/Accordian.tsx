import { useState } from "react";
import "./accordianWrapper.css";
import accordianData from "../data/accordianData.json";
import type { AccordianObj } from "../types/interfaces";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Accordian = () => {
  const data = accordianData as AccordianObj[];
  const [showId, setShowId] = useState<number>(0);
  const showData = (id: number) => {
    if (showId === id) {
      setShowId(0);
    } else {
      setShowId(id);
    }
  };
  const mappedObj = data.map((item) => {
    return (
      <div key={item.id} className="accordian-content">
        <button
          className="accordian-content-title"
          onClick={() => {
            showData(item.id);
          }}
        >
          {item.title}
          <span className="icon">
            {showId === item.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </button>
        {showId === item.id && (
          <div className="accordian-content-desc">{item.content}</div>
        )}
      </div>
    );
  });
  return mappedObj ? (
    <div className="accordian-wrapper">{mappedObj}</div>
  ) : (
    "No data"
  );
};
export default Accordian;
