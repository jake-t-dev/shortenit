export const getUser = async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(id) === false) {
    return res.status(404).json({ success: false, message: "User Not Found" });
  }

  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  // validation that requesting user is an admin
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Forbidden" });
  }

  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const user = req.body;
  const { id } = req.params;

  if (mongoose.Types.ObjectId.isValid(id) === false) {
    return res.status(404).json({ success: false, message: "User Not Found" });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      // user details
      { ...user, id },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (mongoose.Types.ObjectId.isValid(id) === false) {
    return res.status(404).json({ success: false, message: "User Not Found" });
  }

  try {
    await User.findByIdAndRemove(id);
    res.status(200).json({ success: true, message: "User Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
