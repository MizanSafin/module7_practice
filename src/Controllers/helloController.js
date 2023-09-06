exports.greetingGet = (req, res) => {
  res
    .status(203)
    .json({ status: "success", data: "Hello Express js Api GET!!!😲" });
};
exports.greetingPost = (req, res) => {
  res
    .status(200)
    .json({ status: "success", data: "Hello Express js Api Post!!!😲" });
};
