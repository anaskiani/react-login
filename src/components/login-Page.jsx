import { FcGoogle } from "react-icons/fc";
import React, { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [dataInput, setDataInput] = useState("");

  const submitThis = () => {
    const data = { username: username, password: password };
    setDataInput([data]);
    console.log(data);
  };

  return (
    <div className="md:my-28">
      <div className="flex justify-center text-3xl mt-28 mb-10">Login page</div>
      <div className="bg-white grid grid-cols-[5%_90%_5%] md:grid-cols-[25%_50%_25%] xl:grid-cols-[30%_40%_30%] 2xl:grid-cols-[35%_30%_35%] ">
        <div></div>
        <div className="bg-gray-100 drop-shadow-xl rounded-lg py-20 ">
          <div className="text-3xl flex justify-center">Welcome</div>
          <div className="flex justify-center text-2xl py-5">
            Login to your account
          </div>
          <form onSubmit={submitThis}>
            <div className="flex flex-col">
              <label htmlFor="username" className="mx-5 md:mx-10 lg:mx-16 my-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => {
                  const enteredUsername = e.target.value;
                  setUsername(enteredUsername);

                  // Validate the username
                  const usernameRegex = /^[a-zA-Z0-9_]+$/; // Only allow letters, numbers, and underscore
                  const isUsernameValid =
                    enteredUsername.length >= 4 &&
                    usernameRegex.test(enteredUsername);

                  if (!isUsernameValid) {
                    setUsernameError(
                      "Username must be at least 4 characters long and only contain letters, numbers, and underscore."
                    );
                  } else {
                    setUsernameError("");
                  }
                }}
                autoComplete="on"
                name="Enter username"
                required
                placeholder="Enter your username"
                className="mx-5 md:mx-10 lg:mx-16 py-2 rounded-sm px-1 mb-3 "
              />
              {usernameError && (
                <div className="text-red-500 mx-5 md:mx-10 lg:mx-16">
                  {usernameError}
                </div>
              )}
              <label htmlFor="password" className="mx-5 md:mx-10 lg:mx-16 my-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                placeholder="Enter your password"
                name="password"
                required
                className="mx-5 md:mx-10 lg:mx-16 py-2 px-1 rounded-sm "
              />
              <button className="flex justify-start mx-5 md:mx-10 lg:mx-16 mt-3 text-indigo-500 font-semibold">
                Forgot password?
              </button>
              <button
                type="submit"
                className="mt-6 mx-5 md:mx-10  lg:mx-16 py-2 bg-indigo-700 text-white text-xl flex items-center justify-center"
              >
                Login
              </button>
              <div className="flex justify-center mt-5">
                _________________ or _________________
              </div>
              <button
                type="button"
                className="border-[1px] border-black flex justify-center items-center md:gap-2 text-xl py-2 mt-6 mx-5 md:mx-10  lg:mx-16"
              >
                <FcGoogle size={26} /> Login with Gmail
              </button>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}
