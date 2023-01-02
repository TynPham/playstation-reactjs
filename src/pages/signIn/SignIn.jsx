import React from "react";
import bgSignIn from "../../assets/image/signIn-bg.jpg";
import sonyLogo from "../../assets/image/Sony.png";
import plsLogo from "../../assets/image/logoPls-signIn.png";
import { AiOutlineClose } from "react-icons/ai";
import { useRef } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const nextBtnRef = useRef(null);

  const handleInput = (e) => {
    const input = e.target;
    if (input.value !== "") {
      nextBtnRef.current.classList.add("opacityable");
    } else {
      nextBtnRef.current.classList.remove("opacityable");
    }
  };

  return (
    <section className="w-screen h-screen">
      <img
        src={bgSignIn}
        alt="bg-signIn"
        className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1"
      />
      <div className="sm:w-90w w-400 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="bg-sonySignIn h-56 w-full flex items-center justify-center">
            <img src={sonyLogo} alt="logoSony" className="h-1/3" />
          </div>
          <button className="absolute right-4 top-1/2 -translate-y-1/2">
            <AiOutlineClose className="text-silver text-1.75r" />
          </button>
        </div>
        <div className="h-96">
          <img src={plsLogo} alt="logoPls" className="h-full w-full" />
        </div>
        <div className="px-28 mt-4">
          <p className="text-sm font-normal text-colorTextsi">
            Đăng nhập vào PlayStation bằng một trong số các tài khoản Sony của
            bạn.{" "}
            <a
              className="text-textsi"
              href="https://www.playstation.com/en-vn/linking-accounts/"
              target="_blank"
              rel="noreferrer"
            >
              Tìm hiểu thêm
            </a>
          </p>
          <form className="px-4 mt-6" onSubmit={(e) => e.preventDefault()}>
            <input
              onInput={handleInput}
              type="email"
              placeholder="ID đăng nhập (Địa chỉ email)"
              className="block w-full border border-inputsi text-colorInputsi p-2 outline-none rounded-sm text-base"
            />
            <button
              ref={nextBtnRef}
              className="bg-signInbtn w-full text-white h-9 mt-4 opacity-30 cursor-not-allowed"
            >
              Tiếp theo
            </button>
          </form>
          <button className="mt-3 p-1 block">
            <Link to="/" className="text-textsi text-sm">
              Gặp sự cố đăng nhập ?
            </Link>
          </button>
          <div className="px-4 mt-3">
            <button className="border border-inputsi w-full h-9 text-sm font-normal text-colorTextsi">
              Tạo tài khoản mới
            </button>
          </div>
          <div className="h-115"></div>
          <button className="text-xs text-colorInputsi w-full pb-2">
            Trợ giúp / Sơ đồ trang
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
