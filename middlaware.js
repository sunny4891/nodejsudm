function mymiddleware1(req, res, next) {
  console.log("my middleware 1");
  next();
}

module.exports = mymiddleware1;
