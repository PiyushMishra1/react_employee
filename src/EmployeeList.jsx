import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        setEmployees(response.data.users);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h2 className="text-xl font-bold mb-4">Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li
            key={employee.id}
            className="bg-white p-4 rounded-md mb-2 shadow-md"
          >
            <h3 className="text-lg font-bold">{employee.firstName} {employee.lastName}</h3>
            <p>{employee.email}</p>
            <p>{employee.position}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;