import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/employee")
      .then((result) => {
        if (result.data.Status) {
          setEmployee(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (employeeId) => {
    axios.delete('http://localhost:3000/auth/delete_employee/'+employeeId)
    .then(result => {
        if(result.data.Status) {
            window.location.reload()
        } else {
            alert(result.data.Error)
        }
    })
  } 
  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Employee List</h3>
      </div>
      <Link to="/dashboard/add_employee" className="btn btn-success">
        Add Employee
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
            <th>Full Name</th>
              <th>Email</th>
              <th>Position</th>
              <th>Detail</th>
              <th>Process</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((e) => (
              <tr>
              <td>{e.fullname}</td>
                <td>{e.email}</td>
                <td>{e.position}</td>
                <td>
                <Link
                    to={`/dashboard/employee-task-detail/` + e.employeeId}
                    className="btn btn-primary btn-sm me-2"
                  >
                    Detail
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/dashboard/add_employee/` + e.employeeId}
                    className="btn btn-info btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleDelete(e.employeeId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
