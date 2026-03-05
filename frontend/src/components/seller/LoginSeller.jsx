import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";

export const LoginSeller = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isSeller, setIsSeller, navigate } = useContext(AppContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsSeller(true);
  };

  useEffect(() => {
    if (isSeller) {
      navigate("/seller");
    }
  }, [isSeller, navigate]);

  return !isSeller && (
    <div className="min-h-screen flex justify-center items-center bg-white p-8">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-xl flex flex-col gap-5 text-sm p-8 py-12 bg-white rounded shadow-xl border border-gray-200"
      >
        <h1 className="text-2xl text-center font-medium">
          <span className="text-primary">Seller</span> Login
        </h1>
        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="w-full px-3 py-2 border border-gray-300 focus:border-primary rounded outline-primary"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="w-full px-3 py-2 border border-gray-300 focus:border-primary rounded outline-primary"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md cursor-pointer hover:bg-primary-dull transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};
