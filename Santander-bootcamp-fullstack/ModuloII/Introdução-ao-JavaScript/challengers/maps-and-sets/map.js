const people = new Map();

people.set('Luiz', 'Admin')
people.set('Pedro', 'customer')
people.set('Fabrício', 'employee')
people.set('Amanda', 'employee')
people.set('Cláudia', 'Admin')

const getAdmins = (map) => {
  const getAdmins = [];
  for (admin of map) {
    if (admin[1] === 'Admin') {
      getAdmins.push(admin[0]);
    }
  }
  console.log(getAdmins);
}

getAdmins(people);