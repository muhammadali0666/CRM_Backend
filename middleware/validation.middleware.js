const { userValidation } = require("../validation/auth.validate");

const userValidate = function (req, res, next) {
  try {
    const { error } = userValidation(req.body);
    if (error) {
      return res.status(400).json({ msg: error.details[0].message });
    }
    next();
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  userValidate
}