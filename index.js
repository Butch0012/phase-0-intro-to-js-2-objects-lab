// Write your solution in this file!
// Initialize the employee object with name and streetAddress keys
var employee = {
    name: "John Doe",
    streetAddress: "123 Main Street",
  };
  
  // Function to update an employee object with a new key-value pair (non-destructive)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Function to update an employee object with a new key-value pair (destructive)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key-value pair from an employee object (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    var newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete a key-value pair from an employee object (destructive)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Test the functions
  console.log("Initial employee:", employee);
  
  var updatedEmployee = updateEmployeeWithKeyAndValue(employee, "position", "Manager");
  console.log("After updateEmployeeWithKeyAndValue:", updatedEmployee);
  
  var destructiveUpdateEmployee = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "salary",
    50000
  );
  console.log("After destructivelyUpdateEmployeeWithKeyAndValue:", destructiveUpdateEmployee);
  
  var employeeWithoutStreet = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log("After deleteFromEmployeeByKey:", employeeWithoutStreet);
  
  var destructiveDeleteEmployee = destructivelyDeleteFromEmployeeByKey(
    employee,
    "name"
  );
  console.log("After destructivelyDeleteFromEmployeeByKey:", destructiveDeleteEmployee);
  
  // Original employee object remains unchanged
  console.log("Original employee (unchanged):", employee);