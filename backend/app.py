from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Student Class
class Student:
    def __init__(self, id, name, course=None):
        self.id = id
        self.name = name
        self.course = course

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "course": self.course
        }

# In-memory data
students = [
    Student(1, "Akida Mwaura", "Software Development"),
    Student(2, "Mike John", "Cyber Security")
]

# CREATE
@app.route('/student', methods=["POST"])
def create_student():
    data = request.json
    new_student = Student(data["id"], data["name"], data["course"])
    students.append(new_student)
    return jsonify(new_student.to_dict()), 201

# READ ALL
@app.route('/students', methods=["GET"])
def get_students():
    return jsonify([s.to_dict() for s in students])

# READ ONE
@app.route('/student/<int:id>', methods=["GET"])
def get_student(id):
    for s in students:
        if s.id == id:
            return jsonify(s.to_dict())
    return jsonify({"error": "Student not found"}), 404

# UPDATE
@app.route('/student/<int:id>', methods=["PUT"])
def update_student(id):
    data = request.json
    for s in students:
        if s.id == id:
            s.name = data.get("name", s.name)
            s.course = data.get("course", s.course)
            return jsonify(s.to_dict())
    return jsonify({"error": "Student not found"}), 404

# DELETE
@app.route('/student/<int:id>', methods=["DELETE"])
def delete_student(id):
    global students
    students = [s for s in students if s.id != id]
    return jsonify({"message": "Deleted successfully"})

if __name__ == "__main__":
    app.run(debug=True)