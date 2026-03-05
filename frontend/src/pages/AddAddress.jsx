import { useState } from "react";
import { assets } from "../assets/assets";

const InputField = ({ type, name, placeholder, handleChange, address }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      value={address[name]}
      required
      className="w-full px-2 py-2.5 text-gray-500 border border-gray-500/30 rounded focus:border-primary outline-none transition"
    />
  );
};

export const AddAddress = () => {
  const [address, setAddress] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(address);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  return (
    <div className="mt-16 pb-16">
      <p className="text-center md:text-start text-2xl md:text-3xl text-gray-500 mb-6">
        Add Shipping <span className="text-primary">Address</span>
      </p>
      <div className="flex flex-col-reverse md:flex-row justify-between gap-6">
        <div className="flex-1 w-full md:max-w-md">
          <form onSubmit={onSubmitHandler} className="space-y-3 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <InputField
                type="text"
                name="firstname"
                placeholder="First Name"
                address={address}
                handleChange={handleChange}
              />
              <InputField
                type="text"
                name="lastname"
                placeholder="Last Name"
                address={address}
                handleChange={handleChange}
              />
            </div>
            <InputField
              type="email"
              name="email"
              placeholder="Email Address"
              address={address}
              handleChange={handleChange}
            />
            <InputField
              type="text"
              name="street"
              placeholder="Street"
              address={address}
              handleChange={handleChange}
            />
            <div className="grid grid-cols-2 gap-4">
              <InputField
                type="text"
                name="city"
                placeholder="City"
                address={address}
                handleChange={handleChange}
              />
              <InputField
                type="text"
                name="state"
                placeholder="State"
                address={address}
                handleChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <InputField
                type="number"
                name="zipcode"
                placeholder="Zip code"
                address={address}
                handleChange={handleChange}
              />
              <InputField
                type="text"
                name="country"
                placeholder="Country"
                address={address}
                handleChange={handleChange}
              />
            </div>
            <InputField
              type="number"
              name="phone"
              placeholder="Phone Number"
              address={address}
              handleChange={handleChange}
            />
            <button
              type="submit"
              className="w-full mt-6 bg-primary hover:bg-primary-dull py-3 text-white uppercase cursor-pointer transition"
            >
              Save Address
            </button>
          </form>
        </div>
        <img
          src={assets.add_address_iamge}
          alt="Address Image"
          className="mb-16 md:mt-0 mx-auto md:mx-0"
        />
      </div>
    </div>
  );
};
