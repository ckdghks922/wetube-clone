export const handleHome = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 2,
    },
    {
      title: "Third Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 3,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};

export const handleSearch = (req, res) => {
  return res.send("Search");
};

export const handleSee = (req, res) => {
  return res.render("watch", { pageTitle: "Watch" });
};

export const handleEdit = (req, res) => {
  return res.render("edit", { pageTitle: "Edit" });
};

export const handleDelete = (req, res) => {
  return res.send("Delete Video");
};

export const handleUpload = (req, res) => {
  return res.send("Upload Video");
};
