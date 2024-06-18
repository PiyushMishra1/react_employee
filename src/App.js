import React, { useState, useEffect } from 'react';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';

const App = () => {
  const [shouldRefresh, setShouldRefresh] = useState(false);

  useEffect(() => {
    // Simulate a delay to allow the employee list to refresh
    const timer = setTimeout(() => {
      setShouldRefresh(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [shouldRefresh]);

  const handleEmployeeAdded = () => {
    setShouldRefresh(true);
  };

  return (
    <div className="flex">
      <div className="w-1/2 pr-4">
        <EmployeeList shouldRefresh={shouldRefresh} />
      </div>
      <div className="w-1/2 pl-4">
        <EmployeeForm onEmployeeAdded={handleEmployeeAdded} />
      </div>
    </div>
  );
};

export default App;