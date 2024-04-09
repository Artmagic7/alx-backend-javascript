export default function createIteratorObject(report) {
  const employeeArr = [];
  for (const emp of Object.values(report.allEmployees)) {
    employeeArr.push(...emp);
  }
  return employeeArr;
}
