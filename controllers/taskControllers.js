const Task = require("../models/task")

exports.test = async (req, res) => {
    try {
        res.status(200).send('Test OK!')
    } catch (error) {
                res.status(500).send(error)

    }
}



exports.addTask = async (req, res) => {
    
    try {
      const { title, isDone } = req.body;
      const userId = req.user._id;
      console.log("User:", req.user); // Check the user object
      console.log("User ID:", userId); // Check the user ID
      const newTask = new Task({
        title,
        isDone,
        addedBy: userId,
      });
      await newTask.save();
      res.status(200).send({ msg: "Task added successfully", newTask });
    } catch (error) {
        res.status(500).send(error)
    }
}


exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        if (!tasks) {
            return res.status(404).send({msg: "No tasks found"})
        }
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getTaskById = async (req, res) => {
    try {
        const {id} = req.params;
        const foundTask = await Task.findById(id);
        if (!foundTask) {
          return res.status(404).send({ msg: "Task not found" });
        }
        res.status(200).send(foundTask);
    } catch (error) {
        res.status(500).send(error);
    }
}


exports.deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);
        res.status(200).send({ msg: "Task deleted successfully", deletedTask });
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.editTask = async (req, res) => {
    try {
        const {id} = req.params;
        const { title, description, isDone } = req.body;
        const editedTask = await Task.findByIdAndUpdate(
          id,
          { title, description, isDone },
          { new: true }
        );
        res.status(200).send({ msg: "Task edited successfully", editedTask });
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.doneTask = async (req, res) => {
    try {
         const { id } = req.params;

        const foundTask = await Task.findById(id)

        if (!foundTask) {
            return res.status(404).send({ msg: "Task not found" });
        }
        const updatedTask = await Task.findByIdAndUpdate(
          id,
          { isDone: !foundTask.isDone },
          { new: true }
        );

        res.status(200).send({ msg: "Task done successfully", updatedTask });
    } catch (error) {
                res.status(500).send(error);

    }
}