import React from "react";

function RequestMessage({ icon = "M4.5 12.75l6 6 9-13.5", message ,color }) {
  return (
    <div className="flex items-center z-10">
      <img src="/images/congrate.png" alt="congrats"/>
      &nbsp;&nbsp;&nbsp;&nbsp;<p className="text-[#179814] font-bold">{message}</p>
    </div>
  );
}
export default RequestMessage;