export function refactorEmployees(employeesRaw) {
  let employeeData = {};
  for (let employeeIdx in employeesRaw) {
    let employee = employeesRaw[employeeIdx];
    //check if employee location already exists
    if (!employeeData[employee.location]) {
      employeeData[employee.location] = {}
    }
    //check if employee department exists in that location
    if (!employeeData[employee.location][employee.department]){
      employeeData[employee.location][employee.department] = [];
    }
    employeeData[employee.location][employee.department].push(employee);
  }

  let employeeArray = [];
  for (let zoneKey in employeeData) {
    let zone = {zoneName: zoneKey}
    zone.data = []
    for (let departmentKey in employeeData[zoneKey]) {
      let department = {departmentName: departmentKey};
      department.data = [];
      for (let employeeKey in employeeData[zoneKey][departmentKey]) {
        department.data.push(employeeData[zoneKey][departmentKey][employeeKey]);
      }
      zone.data.push(department);
    }
    employeeArray.push(zone);
  }

  return employeeArray;
}

export function refactorEmployeesForListDisplay(employeesRaw) {
  let employeeData = {};
  for (let employeeIdx in employeesRaw) {
    let employee = employeesRaw[employeeIdx];
    //check if employee location already exists
    if (!employeeData[employee.location]) {
      employeeData[employee.location] = {}
    }
    //check if employee department exists in that location
    if (!employeeData[employee.location][employee.department]){
      employeeData[employee.location][employee.department] = [];
    }
    employeeData[employee.location][employee.department].push(employee);
  }

  let employeeArray = [];
  for (let zoneKey in employeeData) {
    employeeArray.push({type: 'ZONE', name: zoneKey});
    for (let departmentKey in employeeData[zoneKey]) {
      employeeArray.push({type: 'DEPARTMENT', name: departmentKey});
      for (let employeeKey in employeeData[zoneKey][departmentKey]) {
        employeeArray.push({type: 'EMPLOYEE', employee: employeeData[zoneKey][departmentKey][employeeKey]});
      }
    }
  }

  return employeeArray;
}

export function getAllDepartments(employeeData) {
  let departments = {};
  for (var i = 0; i < employeeData.length; i++) {
    for (var j = 0; j < employeeData[i].data.length; j++) {
      if (employeeData[i].data[j].departmentName != 'null') {
        departments[employeeData[i].data[j].departmentName] = true;
      }
    }
  }
  return departments;
}

export function getAllZones(employeeData, employeeDirectoryMapping) {
  let zones = {};
  if (employeeDirectoryMapping.length == 0) {
    for (var i = 0; i < employeeData.length; i++) {
      zones[employeeData[i].zoneName] = true;
    }
  } else {
    for (var i = 0; i < employeeDirectoryMapping.length; i++) {
      zones[employeeDirectoryMapping[i]] = true;
    }
  }
  return zones;
}

export function filterEmployeeData(employeeData, employeeFilter, searchName, employeeDirectoryMapping) {
  if (employeeDirectoryMapping.length > 0) {
    return employeeData.filter((employee) => {
      return employee.displayName.toLowerCase().includes(searchName.toLowerCase()) &&
      (!employeeFilter.zones && employeeDirectoryMapping.includes(employee.location) || (employeeFilter.zones && employeeFilter.zones[employee.location] && employeeFilter.departments[employee.department]));
    });
  } else {
    return employeeData.filter((employee) => {
      return employee.displayName.toLowerCase().includes(searchName.toLowerCase()) &&
      (!employeeFilter.zones || (employeeFilter.zones && employeeFilter.zones[employee.location] && employeeFilter.departments[employee.department])); 
    });
  }
}

export function refactorOrderItems(itemsRaw) {
  let orderItems = {};
  let orderItemsList = [];
  itemsRaw.forEach((item) => {

    // check if warhouse category exist
    if (!orderItems[item.warehouse_category]) {
      orderItems[item.warehouse_category] = []
    }

    orderItems[item.warehouse_category].push(item);
  });

  Object.keys(orderItems).map((key) => {
    orderItemsList.push({type: 'CATEGORY', name: key});
    orderItems[key].forEach((item) => {
      orderItemsList.push({type: 'PRODUCT', product: item});
    });
  });

  return orderItemsList;
}

export function refactorCompanySearchItems(companies) {
  let seen = {}
  return companies.filter(company => {
    if(seen[company.DepartmentName]) {
      return false;
    }
    seen[company.DepartmentName] = true;
    return true;
  }).map(company => {
    company.addOnItem = true;
    return company;
  });
}
