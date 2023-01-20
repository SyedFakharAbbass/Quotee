import React from "react";

function RequestMessage({ image , message ,color }) {
  console.log(color)
  return (
    <div className="flex items-center z-10">
      <img src={image} alt="congrats"/>
      &nbsp;&nbsp;&nbsp;&nbsp;<p className={`${color} font-bold`}>{message}</p>
    </div>
  );
}
export default RequestMessage;