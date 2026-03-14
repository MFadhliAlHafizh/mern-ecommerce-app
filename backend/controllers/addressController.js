import AddressModel from "../models/AddressModel.js";

// Add Address: /api/address/add
export const addAddress = async (req, res) => {
  try {
    const userId = req.userId;
    const { address } = req.body;
    await AddressModel.create({ ...address, userId });
    res.json({ success: true, message: "Address added Successfully" });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};

// Get Address: /api/address/get
export const getAddress = async (req, res) => {
  try {
    const userId = req.userId;
    const addresses = await AddressModel.find({ userId });
    res.json({ success: true, addresses });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};
