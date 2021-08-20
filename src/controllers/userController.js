export const handleJoin = (req, res) => {
  return res.send("Join");
};

export const handleLogin = (req, res) => {
  return res.send("Login");
};

export const handleEdit = (req, res) => {
  return res.send("Edit User");
};

export const handleDelete = (req, res) => {
  return res.send("Delete User");
};

export const handleLogout = (req, res) => {
  res.send("Logout");
};

export const handleWatch = (req, res) => {
  res.send("See User");
};
