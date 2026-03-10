import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({ success: false, message: "Not Authorized" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { id: tokenDecode.id };

    next();
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: "Not Authorized" });
  }
};

export default authUser;