const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      required: false,
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
  {
    collection: "tasks",
  }
);


module.exports = Task = mongoose.model('Task', taskSchema)