import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setForm, setProducts, setStyles } from "../redux/data";
import Modal from "./Modal";
import Link from "next/link";

const Products = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState({});
  const { products, form1 } = useSelector((state) => state.data);
  const [colors, setColors] = useState(false);

  const dispatch = useDispatch();

  // useEffect(() => {
  //     console.log("products", products)
  // }, [products])

  const handleModalClick = () => {
    setShow(true);
    setError({ email: "", phone: "" });
  };

  const handleClick = () => {
    dispatch(setProducts("one"));
    dispatch(setStyles(""));
    dispatch(setForm({ ...form1, product: "MyLar Bag" }));
    setTimeout(() => {
      const element = document.getElementById("prodct");
      element?.scrollIntoView({ behavior: "smooth" })
    }, 400)
  };

  const handleClick2 = () => {
    dispatch(setProducts("two"));
    dispatch(setStyles(""));
    dispatch(setForm({ ...form1, product: "Label & Stickers" }));
    setTimeout(() => {
      const element = document.getElementById("prodct");
      element?.scrollIntoView({ behavior: "smooth" })
    }, 400)
  };

  const handleClick3 = () => {
    dispatch(setProducts("three"));
    dispatch(setStyles(""));
    dispatch(setForm({ ...form1, product: "Boxes" }));
    setTimeout(() => {
      const element = document.getElementById("prodct");
      element?.scrollIntoView({ behavior: "smooth" })
    }, 400)
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColors(!colors);
    }, 500);
    return () => clearInterval(intervalId);
  }, [colors]);

  const handleContact = () => {
    setShow(true);
  };
  useEffect(() => {
    // document.getElementById("abcd").click();
    // var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    // (function () {
    //   var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    //   s1.async = true;
    //   s1.src = 'https://embed.tawk.to/63d3e65cc2f1ac1e202fee6b/1gnprnn3n';
    //   s1.charset = 'UTF-8';
    //   s1.setAttribute('crossorigin', '*');
    //   s0.parentNode.insertBefore(s1, s0);
    // })();
  }, []);

  return (
    <div className="container ">
      <div className="">
        <h1 className="text-[#008bbf] font-bold md:text-[26px] text-[20px] mt-[30px] md:mt-[60px] ">
          CHOOSE YOUR PRODUCT
        </h1>
        <div className="md:mt-[30px] mt-[20px]">
          <div className="flex flex-wrap sm:flex-row gap-4 justify-center md:justify-start  items-center md:mx-[20px]">
            {/* <Link href="#prodct" className="transition duration-300 ease-in-out" > */}
            {" "}
            <div
              className={`md:w-[250px] w-[150px] bg-[#ECF8FD] h-[180px] md:h-[300px]  cursor-pointer rounded-[10px] ${products === "one" ? "selected" : ""
                }`}
              onClick={handleClick}
            >
              <img
                className="md:w-[200px] w-[70px]  pt-1 md:pt-0 m-auto"
                src="/images/lerbag.png"
                alt=""
              />
              <div className="mt-2">
                <div className="flex items-center justify-center">
                  <div>
                    <input
                      type="checkbox"
                      checked={products === "one" ? true : false}
                      className="md:w-4 md:h-4 w-3  h-3 cursor-pointer accent-white rounded  tickbox"
                    />
                  </div>
                  <div>
                    <label
                      for="bordered-checkbox-2"
                      className="w-full py-4 ml-1 text-[14px] font-medium md:text-[20px] cursor-pointer text-[#008bbf] changed "
                    >
                      Mylar Bag/Pouch
                    </label>
                  </div>
                </div>
                <div></div>
                <p className="md:text-[10px] text-[11px] text-center items-center text-[#008bbf] md:py-3 md:px-[39px] px-2  text_data">
                  Custom plane or printed mylar bags are prefect solution for
                  your product
                </p>
              </div>
            </div>
            {/* </Link> */}

            {/* <Link href="#prodct"> */}
            {" "}
            <div
              className={`md:w-[250px] w-[150px] bg-[#ECF8FD] h-[180px]  md:h-[300px] rounded-[10px] ${products === "two" ? "selected" : ""
                }`}
              onClick={handleClick2}
            >
              <img
                className="md:w-[200px] w-[70px]  pt-1 md:pt-0   m-auto"
                src="/images/sticker.png"
                alt=""
              />
              <div className="mt-2">
                <div className="flex items-center justify-center">
                  <div className="flex">
                    <input
                      type="checkbox"
                      checked={products === "two" ? true : false}
                      className="md:w-4 md:h-4 w-3  h-3 cursor-pointer accent-white text-blue-600 rounded tickbox"
                    />
                  </div>
                  <div>
                    <label
                      for="bordered-checkbox-2"
                      className="w-full py-4 ml-2 text-[14px] font-medium md:text-[20px] cursor-pointer text-[#008bbf] changed"
                    >
                      {" "}
                      Label & Stickers
                    </label>
                  </div>
                </div>
                <div></div>
                <p className="md:text-[10px] text-[11px] text-center items-center text-[#008bbf] md:py-3 md:px-[39px] px-2  text_data">
                  Highlight your brands logo with our personalized and custom
                  printed labels and stickers.
                </p>
              </div>
            </div>
            {/* </Link> */}

            {/* <Link href="#prodct"> */}
            {" "}
            <div
              className={`md:w-[250px] w-[150px] bg-[#ECF8FD] h-[180px] md:h-[300px] rounded-[10px] ${products === "three" ? "selected" : ""
                }`}
              onClick={handleClick3}
            >
              <img
                className="md:w-[200px] w-[70px]  pt-1 md:pt-0   m-auto"
                src="/images/boxes.png"
                alt=""
              />
              <div className="mt-2">
                <div className="flex items-center justify-center ">
                  <div>
                    <input
                      type="checkbox"
                      checked={products === "three" ? true : false}
                      className="md:w-4 md:h-4 w-3  h-3 mt-2 cursor-pointer accent-white text-blue-600 rounded tickbox"
                    />
                  </div>
                  <div>
                    <label
                      for="bordered-checkbox-2"
                      className="w-full py-4 ml-2 text-[14px] font-medium md:text-[20px] cursor-pointer text-[#008bbf] changed"
                    >
                      Boxes
                    </label>
                  </div>
                </div>
                <div></div>
                <p className="md:text-[10px] text-[11px] text-center items-center text-[#008bbf] md:py-3 md:px-[39px] px-2  text_data">
                  Upgrade your brands recoginition with our plane and custom
                  printed boxes.
                </p>
              </div>
            </div>
            {/* </Link> */}

            <div className="md:w-[250px] w-[150px] bg-[#ECF8FD] h-[180px] md:h-[300px] md:px-[25px] cursor-pointer rounded-[10px]">
              <p className="text-center text-[#008bbf] mt-[20px] md:mt-[0px] text-[10px] md:text-[22px] md:pb-6 pb-2 pt-3 font-medium capitalize">
                Not Clear yet..?
              </p>
              <p className="text-center text-[#008bbf] text-[10px] md:text-[15px] md:pb-8  p-1 font-medium capitalize">
                let our team to help you
              </p>
              <p className="text-center text-[#008bbf] text-[10px] md:text-[15px] md:pb-10 font-medium capitalize">
                chat with our team to find best quote for your product
              </p>
              <div className="my-2 md:my-0">
                {colors ? (
                  <button
                    id="abcd"
                    onClick={handleContact}
                    className="flex m-auto content-center w-[100px] md:w-[175px] h-[30px] md:h-[60px] bg-[#008BBF] justify-center text-white items-center p-3 rounded-[10px]"
                  >
                    <img className="md:pr-2" src="/images/vector.png" />
                    <span className="flex text-[8px] md:text-[14px]">
                      CONTACT NOW
                    </span>
                  </button>
                ) : (
                  <button
                    id="abcd"
                    onClick={handleContact}
                    className="flex m-auto content-center w-[100px] md:w-[175px] md:h-[60px] h-[30px] justify-center bg-[#DBF4FF] text-[#008BBF] font-extrabold items-center p-3 rounded-[10px] "
                    style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                  >
                    <img className="md:pr-2" src="/images/vector7.png" />
                    <span className="flex text-[8px] md:text-[14px]">
                      CONTACT NOW
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        error={error}
        setError={setError}
        setShow={setShow}
        handleModalClick={handleModalClick}
      />
    </div>
  );
};

export default Products;
