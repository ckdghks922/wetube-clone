export const handleHome = (req, res) => {
  return res.send("Home");
};

export const handleSearch = (req, res) => {
  return res.send("Search");
};

export const handleSee = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
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
