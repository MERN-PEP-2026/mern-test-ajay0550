import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Redirect if not logged in
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/tasks",
        { title },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTitle("");
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/tasks/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const completeTask = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/tasks/${id}`,
        { status: "completed" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <button onClick={logout}>Logout</button>

      <div>
        <input
          placeholder="New Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={createTask}>Add Task</button>
      </div>

      {tasks.map((task) => (
        <div key={task._id}>
          <p>
            {task.title} - {task.status}
          </p>
          {task.status !== "completed" && (
            <button onClick={() => completeTask(task._id)}>
              Complete
            </button>
          )}
          <button onClick={() => deleteTask(task._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;