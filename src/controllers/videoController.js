export const handleHome = (req, res) => {
  return res.render("home");
};

export const handleSearch = (req, res) => {
  return res.send("Search");
};

export const handleSee = (req, res) => {
  return res.render("watch");
};

export const handleEdit = (req, res) => {
  return res.render("edit");
};

export const handleDelete = (req, res) => {
  return res.send("Delete Video");
};

export const handleUpload = (req, res) => {
  return res.send("Upload Video");
};
