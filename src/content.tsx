import React from "react";
import ReactDOM from "react-dom/client";

const FloatingRuby = () => {
  const rubyStyle: React.CSSProperties = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "100px",
    cursor: "pointer",
    zIndex: 9999,
  };

  const handleClick = () => {
    alert("RubyDesk: 加油！你是最棒的～ ❤️");
  };

  return (
    <img
      src={chrome.runtime.getURL("assets/ruby.JPG")}
      alt="Ruby the Pet"
      style={rubyStyle}
      onClick={handleClick}
    />
  );
};

// 插入到網頁 DOM
const rootDiv = document.createElement("div");
document.body.appendChild(rootDiv);

const root = ReactDOM.createRoot(rootDiv);
root.render(<FloatingRuby />);
