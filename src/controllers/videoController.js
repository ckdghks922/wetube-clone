export const handleHome = (req, res) => {
  return res.send("Home");
};

export const handleSearch = (req, res) => {
  return res.send("Search");
};

export const handleSee = (req, res) => {
  console.log(req.params);
  return res.send("Watch Video");
};

export const handleEdit = (req, res) => {
  return res.send("Edit Video");
};

export const handleDelete = (req, res) => {
  return res.send("Delete Video");
};

export const handleUpload = (req, res) => {
  return res.send("Upload Video");
};
