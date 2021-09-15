import Video from "../models/Video";

export const handleHome = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos });
};

export const handleSearch = (req, res) => {
  return res.send("Search");
};

export const handleWatch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching: ` });
};

export const handleGetEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing: ` });
};

export const handlePostEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const handleDelete = (req, res) => {
  return res.send("Delete Video");
};

export const handleGetUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const handlePostUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      createdAt: Date.now(),
      hashtags: hashtags.split(",").map((elem) => `#${elem}`),
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
