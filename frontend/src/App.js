import { useEffect, useState } from "react";

const API = "http://localhost:5000";

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    course: ""
  });
  const [isEditing, setIsEditing] = useState(false);

  // FETCH ALL STUDENTS
  const getStudents = () => {
    fetch(`${API}/students`)
      .then(res => res.json())
      .then(data => setStudents(data));
  };

  useEffect(() => {
    getStudents();
  }, []);

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // SELECT STUDENT FOR EDIT
  const selectStudent = (student) => {
    setForm({
      id: student.id,
      name: student.name,
      course: student.course
    });
    setIsEditing(true);
  };

  // SAVE (ADD OR UPDATE)
  const saveStudent = () => {
    if (isEditing) {
      // UPDATE
      fetch(`${API}/student/${form.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          course: form.course
        })
      }).then(() => {
        getStudents();
        resetForm();
      });
    } else {
      // CREATE
      fetch(`${API}/student`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: parseInt(form.id),
          name: form.name,
          course: form.course
        })
      }).then(() => {
        getStudents();
        resetForm();
      });
    }
  };

  // DELETE
  const deleteStudent = (id) => {
    fetch(`${API}/student/${id}`, {
      method: "DELETE"
    }).then(() => getStudents());
  };

  // RESET FORM (BACK TO ADD MODE)
  const resetForm = () => {
    setForm({
      id: "",
      name: "",
      course: ""
    });
    setIsEditing(false); // 🔥 KEY FIX
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Management System</h1>

      {/* FORM */}
      <div>
        <input
          name="id"
          placeholder="ID"
          value={form.id}
          onChange={handleChange}
          disabled={isEditing} // prevent changing ID in edit mode
        />
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="course"
          placeholder="Course"
          value={form.course}
          onChange={handleChange}
        />

        <br /><br />

        <button onClick={saveStudent}>
          {isEditing ? "Update Student" : "Add Student"}
        </button>

        <button onClick={resetForm} style={{ marginLeft: "10px" }}>
          Clear
        </button>
      </div>

      <hr />

      {/* STUDENT LIST */}
      {students.map((s) => (
        <div key={s.id} style={{ marginBottom: "10px" }}>
          <strong>{s.name}</strong> ({s.course})
          <br />
          <button onClick={() => selectStudent(s)}>Edit</button>
          <button onClick={() => deleteStudent(s.id)} style={{ marginLeft: "5px" }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;