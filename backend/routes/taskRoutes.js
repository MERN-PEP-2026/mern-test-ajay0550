const express = require("express");
const Task = require("../models/Task");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create Task
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
      createdBy: req.user
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get Tasks
router.get("/", authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.find({ createdBy: req.user });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update Task
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user },
      req.body,
      { new: true }
    );

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete Task
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Task.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user
    });

    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;