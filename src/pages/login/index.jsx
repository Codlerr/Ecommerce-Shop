import React, { useState } from "react";

let bg =
  "https://res.cloudinary.com/dfoqi8rjf/image/upload/v1676110819/Ecommerce-shop/log_s1hdhk.png";

function Login() {
  const [open1, setOpen1] = useState(false);
  // handle toggle
  const toggle1 = () => {
    setOpen1(!open1);
  };
  return (
    <>
      <section className="h-screen w-full grid grid-cols-1 md:grid-cols-2 md:px-5 lg:px-40">
        <div className="md:grid place-items-center xs:hidden">
          <img className="object-cover" src={bg} alt="Logo" />
        </div>
        <div className="grid  place-items-center ">
          <form className="flex flex-col gap-3 xs:w-[80%] lg:w-[55%]">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <span className="flex gap-5">
              <p>New user?</p>
              <a className="text-blue-500" href="/">
                Create an account
              </a>
            </span>
            <input
              className="w-full outline-none bg-[#f1eeee] p-2 rounded-3xl"
              type="text"
              placeholder="Username or email"
            />
            <div className="relative">
              <input
                className="w-full outline-none bg-[#f1eeee] p-2 rounded-3xl"
                type={open1 === false ? "password" : "text"}
                placeholder="Password"
              />
              <div className="absolute top-2 right-5">
                {open1 === false ? (
                  <i class="fa-solid fa-eye" onClick={toggle1}></i>
                ) : (
                  <i class="fa-solid fa-eye-slash" onClick={toggle1}></i>
                )}
              </div>
            </div>
            <a className="text-blue-500" href="/">
              Forget password
            </a>
            <button className="bg-black w-full text-white h-12 rounded-3xl">
              Sign In
            </button>

            <span className="text-center py-3">or Sign in With</span>
            <div className="flex gap-5 justify-center text-4xl">
              <i class="bg-black cursor-pointer text-white p-1.5 rounded-full fa-regular fa-envelope"></i>
              <i class="bg-black cursor-pointer text-white p-1.5 rounded-full fa-brands fa-facebook"></i>
              <i class="bg-black cursor-pointer text-white px-2.5 pt-1 rounded-full fa-brands fa-apple"></i>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
