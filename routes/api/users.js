const express = require("express");
const router = express.Router();

//@route GET api/user/test
//@desc Test user route
//@access public

router.get("/test", (req, res) => {
  res.json({ msg: "user works" });
});

module.exports = router;
