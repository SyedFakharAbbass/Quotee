import { setStyles } from "@/redux/data";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const Styles = () => {
  const { products, styles } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleClick1 = () => {
    dispatch(setStyles("style1"));
    setTimeout(()=>{
      const element = document.getElementById("stylee");
      element?.scrollIntoView({ behavior: "smooth" })
    },400)
  };

  const handleClick2 = () => {
    dispatch(setStyles("style2"));
    setTimeout(()=>{
      const element = document.getElementById("stylee");
      element?.scrollIntoView({ behavior: "smooth" })
    },400)
  };

  const handleClick3 = () => {
    dispatch(setStyles("style3"));
    setTimeout(()=>{
      const element = document.getElementById("stylee");
      element?.scrollIntoView({ behavior: "smooth" })
    },400)
  };

  const handleClick4 = () => {
    dispatch(setStyles("style4"));
    setTimeout(()=>{
      const element = document.getElementById("stylee");
      element?.scrollIntoView({ behavior: "smooth" })
    },400)
  };

  const handleClick5 = () => {
    dispatch(setStyles("style5"));
    setTimeout(()=>{
      const element = document.getElementById("stylee");
      element?.scrollIntoView({ behavior: "smooth" })
    },400)
  };

  const handleClick6 = () => {
    dispatch(setStyles("style6"));
    setTimeout(()=>{
      const element = document.getElementById("stylee");
      element?.scrollIntoView({ behavior: "smooth" })
    },400)
  };

  const handleClick7 = () => {
    dispatch(setStyles("style7"));
    setTimeout(()=>{
      const element = document.getElementById("stylee");
      element?.scrollIntoView({ behavior: "smooth" })
    },400)
  };

  const handleClick8 = () => {
    dispatch(setStyles("style8"));
    setTimeout(()=>{
      const element = document.getElementById("stylee");
      element?.scrollIntoView({ behavior: "smooth" })
    },400)
  };

  const handleClick9 = () => {
    dispatch(setStyles("style9"));
    setTimeout(()=>{
      const element = document.getElementById("stylee");
      element?.scrollIntoView({ behavior: "smooth" })
    },400)
  };

  return (
    <div>
      {/* <div className='container'> */}

      {products === "one" && (
        <div id="prodct" className="transition duration-300 ease-in-out">
          {" "}
          <h1 className="text-[#008bbf] font-bold text-[20px] md:text-[26px] mb-[20px] md:mb-[30px]">
            CHOOSE YOUR PRODUCT’S STYLE
          </h1>
          <div className="flex  justify-center md:justify-start flex-wrap items-center  flex-row gap-4 ">
            {/* <Link href="#stylee"> */}
              <div
                className={` md:w-[200px] md:h-[195px] w-[100px] h-[140px] bg-[#ECF8FD]  cursor-pointer rounded-[10px] ${
                  styles === "style1" ? "selected" : ""
                }`}
                onClick={handleClick1}
              >
                <img
                  className="md:w-[150px] w-[80px] h-[80px] md:h-[140px] m-auto"
                  src="/images/flatPouch.png"
                  alt=""
                />
                <div className="md:px-[25px] px-3 flex justify-center">
                  <div className="flex items-center ">
                    <input
                      type="checkbox"
                      checked={styles === "style1" ? true : false}
                      className="md:w-4 md:h-4 w-3 h-3 text-blue-600 rounded accent-white tickbox  "
                    />
                    <label
                      for="bordered-checkbox-2"
                      className="w-full py-4 ml-2 text-[10px] md:text-sm font-medium  text-[#008bbf] changed"
                    >
                      Flat Pouch
                    </label>
                  </div>
                </div>
              </div>
            {/* </Link> */}
            {/* <Link href="#stylee"> */}
              <div
                className={`md:w-[200px] md:h-[195px] w-[100px] h-[140px] bg-[#ECF8FD]  cursor-pointer rounded-[10px] ${
                  styles === "style2" ? "selected" : ""
                }`}
                onClick={handleClick2}
              >
                <img
                  className="w-[150px] h-[80px] md:h-[140px]  m-auto"
                  src="/images/standUp.png"
                  alt=""
                />
                <div className="md:px-[25px] px-3 flex justify-center">
                  <div className="flex items-center ">
                    <input
                      type="checkbox"
                      checked={styles === "style2" ? true : false}
                      className="md:w-4 md:h-4 w-3 h-3 text-blue-600 rounded accent-white tickbox  "
                    />
                    <label
                      for="bordered-checkbox-2"
                      className="w-full py-4 ml-2 text-[10px] md:text-sm font-medium  text-[#008bbf] changed"
                    >
                      Stand Up Pouch
                    </label>
                  </div>
                </div>
              </div>
            {/* </Link> */}
            {/* <Link href="#stylee"> */}
              <div
                className={`md:w-[200px] md:h-[195px] w-[100px] h-[140px] bg-[#ECF8FD]  cursor-pointer rounded-[10px] ${
                  styles === "style3" ? "selected" : ""
                }`}
                onClick={handleClick3}
              >
                <img
                  className="w-[150px] md:h-[140px] m-auto"
                  src="/images/roll.png"
                  alt=""
                />
                <div className="md:px-[25px] px-3 flex justify-center">
                  <div className="flex items-center ">
                    <input
                      type="checkbox"
                      checked={styles === "style3" ? true : false}
                      className="md:w-4 md:h-4 w-3 h-3 text-blue-600 rounded accent-white tickbox  "
                    />
                    <label
                      for="bordered-checkbox-2"
                      className="w-full py-4 ml-2 text-[10px] md:text-sm font-medium  text-[#008bbf] changed"
                    >
                      Roll Stock
                    </label>
                  </div>
                </div>
              </div>
            {/* </Link> */}
          </div>
        </div>
      )}
      {products === "two" && (
        <div className="" id="prodct">
          {" "}
          <h1 className="text-[#008bbf] font-bold text-[20px] md:text-[26px] mb-[20px]  md:mb-[30px]">
            CHOOSE YOUR PRODUCT’S STYLE
          </h1>
          <div className="flex  justify-center md:justify-start flex-wrap items-center  flex-row gap-4 ">
            {/* <Link href="#stylee"> */}
              <div
                className={`md:w-[200px] md:h-[195px] w-[100px] h-[140px] bg-[#ECF8FD]   cursor-pointer rounded-[10px] ${
                  styles === "style4" ? "selected" : ""
                }`}
                onClick={handleClick4}
              >
                <img
                  className="md:w-[150px] w-[80px] h-[80px] md:h-[140px] m-auto"
                  src="/images/cutToSize.png"
                  alt=""
                />
                <div className="md:px-[25px] px-3 flex justify-center">
                  <div className="flex items-center ">
                    <input
                      type="checkbox"
                      checked={styles === "style4" ? true : false}
                      className="md:w-4 md:h-4 w-3 h-3  rounded accent-white tickbox "
                    />
                    <label
                      for="bordered-checkbox-2"
                      className="w-full py-4 ml-2 text-[10px] md:text-sm font-medium  text-[#008bbf] changed"
                    >
                      Cut-to-Size
                    </label>
                  </div>
                </div>
              </div>
            {/* </Link> */}
            {/* <Link href="#stylee"> */}
              <div
                className={`md:w-[200px] md:h-[195px] w-[100px] h-[140px] bg-[#ECF8FD]   cursor-pointer rounded-[10px] ${
                  styles === "style5" ? "selected" : ""
                }`}
                onClick={handleClick5}
              >
                <img
                  className="md:w-[150px] w-[80px] h-[80px] md:h-[140px] m-auto"
                  src="/images/styleRoll.png"
                  alt=""
                />
                <div className="md:px-[25px] px-3 flex justify-center">
                  <div className="flex items-center ">
                    <input
                      checked={styles === "style5" ? true : false}
                      type="checkbox"
                      className="md:w-4 md:h-4 w-3 h-3  rounded accent-white tickbox  "
                    />
                    <label
                      for="bordered-checkbox-2"
                      className="w-full py-4 ml-2 text-[10px] md:text-sm font-medium  text-[#008bbf] changed"
                    >
                      Roll
                    </label>
                  </div>
                </div>
              </div>
            {/* </Link> */}
            {/* <Link href="#stylee"> */}
              <div
                className={`md:w-[200px] md:h-[195px] w-[100px] h-[140px] bg-[#ECF8FD]   cursor-pointer rounded-[10px] ${
                  styles === "style6" ? "selected" : ""
                }`}
                onClick={handleClick6}
              >
                <img
                  className="md:w-[150px] w-[80px] h-[80px] md:h-[140px] m-auto"
                  src="/images/sheet.png"
                  alt=""
                />
                <div className="md:px-[25px] px-3 flex justify-center">
                  <div className="flex items-center ">
                    <input
                      type="checkbox"
                      checked={styles === "style6" ? true : false}
                      className="md:w-4 md:h-4 w-3 h-3 rounded accent-white tickbox  "
                    />
                    <label
                      for="bordered-checkbox-2"
                      className="w-full py-4 ml-2 text-[10px] md:text-sm font-medium  text-[#008bbf] changed"
                    >
                      Sheet
                    </label>
                  </div>
                </div>
              </div>
            {/* </Link> */}
          </div>
        </div>
      )}
      {products === "three" && (
        <div className="" id="prodct">
          {" "}
          <h1 className="text-[#008bbf] font-bold text-[20px] md:text-[26px] mb-[20px] md:mb-[30px]">
            CHOOSE YOUR PRODUCT’S STYLE
          </h1>
          <div className="flex  justify-center md:justify-start flex-wrap items-center  flex-row gap-4  ">
            {/* <Link href="#stylee"> */}
              <div
                className={`md:w-[200px] md:h-[195px] w-[100px] h-[140px] bg-[#ECF8FD]   cursor-pointer rounded-[10px] ${
                  styles === "style7" ? "selected" : ""
                }`}
                onClick={handleClick7}
              >
                <img
                  className="md:w-[150px] w-[80px] h-[80px] md:h-[140px] m-auto"
                  src="/images/tuck.png"
                  alt=""
                />
                <div className="md:px-[25px] px-3 flex justify-center">
                  <div className="flex items-center ">
                    <input
                      type="checkbox"
                      checked={styles === "style7" ? true : false}
                      className="md:w-4 md:h-4 w-3 h-3 text-blue-600 rounded accent-white tickbox  "
                    />
                    <label
                      for="bordered-checkbox-2"
                      className="w-full py-4 ml-2 text-[10px] md:text-sm font-medium  text-[#008bbf] changed"
                    >
                      Tuck Box
                    </label>
                  </div>
                </div>
              </div>
            {/* </Link> */}
            {/* <Link href="#stylee"> */}
              <div
                className={`md:w-[200px] md:h-[195px] w-[100px] h-[140px] bg-[#ECF8FD]   cursor-pointer rounded-[10px] ${
                  styles === "style8" ? "selected" : ""
                }`}
                onClick={handleClick8}
              >
                <img
                  className="md:w-[150px] w-[80px] h-[80px] md:h-[140px] m-auto"
                  src="/images/rigid.png"
                  alt=""
                />
                <div className="md:px-[25px] px-3 flex justify-center">
                  <div className="flex items-center ">
                    <input
                      type="checkbox"
                      checked={styles === "style8" ? true : false}
                      className="md:w-4 md:h-4 w-3 h-3 text-blue-600 rounded accent-white tickbox "
                    />
                    <label
                      for="bordered-checkbox-2"
                      className="w-full py-4 ml-2 text-[10px] md:text-sm font-medium  text-[#008bbf] changed"
                    >
                      Rigid Box
                    </label>
                  </div>
                </div>
              </div>
            {/* </Link> */}
            {/* <Link href="#stylee"> */}
              <div
                className={`md:w-[200px] md:h-[195px] w-[100px] h-[140px] bg-[#ECF8FD]   cursor-pointer rounded-[10px] ${
                  styles === "style9" ? "selected" : ""
                }`}
                onClick={handleClick9}
              >
                <img
                  className="md:w-[150px] w-[80px] h-[80px] md:h-[140px] m-auto"
                  src="/images/mailer.png"
                  alt=""
                />
                <div className="md:px-[25px] px-3 flex justify-center">
                  <div className="flex items-center ">
                    <input
                      type="checkbox"
                      checked={styles === "style9" ? true : false}
                      className="md:w-4 md:h-4 w-3 h-3 text-blue-600 rounded accent-white tickbox  "
                    />
                    <label
                      for="bordered-checkbox-2"
                      className="w-full py-4 ml-2 text-[10px] md:text-sm font-medium  text-[#008bbf] changed"
                    >
                      Mailer Box
                    </label>
                  </div>
                </div>
              </div>
            {/* </Link> */}
          </div>
        </div>
      )}
      {/* </div> */}
    </div>
  );
};

export default Styles;
