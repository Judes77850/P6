const mongoose = require("mongoose");

const ModelsSauce = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  mainPepper: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, value: 0 },
  dislikes: { type: Number, value: 0 },
  usersLiked: { type: String, required: true },
  usersDisliked: { type: String, required: true },
});

module.exports = mongoose.model("Sauce", ModelsSauce);
