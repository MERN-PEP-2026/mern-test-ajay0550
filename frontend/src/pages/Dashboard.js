import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) navigate("/");
  }, [token, navigate]);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks", {
      headers: { Authorization: `Bearer ${token}` }
    });
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async () => {
    if (!title) return;

    await axios.post(
      "http://localhost:5000/api/tasks",
      { title },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/tasks/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchTasks();
  };

  const toggleStatus = async (task) => {
    await axios.put(
      `http://localhost:5000/api/tasks/${task._id}`,
      {
        status: task.status === "pending" ? "completed" : "pending"
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchTasks();
  };

  const editTask = async (id) => {
    await axios.put(
      `http://localhost:5000/api/tasks/${id}`,
      { title },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setEditingId(null);
    setTitle("");
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter((task) => task.status === filter);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>My Tasks</h2>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="task-input">
        <input
          placeholder="Enter task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {editingId ? (
          <button onClick={() => editTask(editingId)}>Save</button>
        ) : (
          <button onClick={createTask}>Add</button>
        )}
      </div>

      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      {filteredTasks.map((task) => (
        <div key={task._id} className="task-card">
          <p>
            {task.title} — <strong>{task.status}</strong>
          </p>

          <div className="task-actions">
            <button
              className="complete-btn"
              onClick={() => toggleStatus(task)}
            >
              Toggle Status
            </button>

            <button
              onClick={() => {
                setEditingId(task._id);
                setTitle(task.title);
              }}
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteTask(task._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;