import { useState } from "react";

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const userData = {
            username: formData.get("username"),
            password: formData.get("password"),
          };
        }}
        className="flex flex-col w-1/4 items-center border"
      >
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Type your username here..."
          name="username"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Type your password here..."
          name="password"
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
