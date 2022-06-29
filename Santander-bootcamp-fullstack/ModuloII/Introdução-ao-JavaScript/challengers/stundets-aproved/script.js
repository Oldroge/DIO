const alunos = {
  aluno1: {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    average: 7
  },
  aluno2: {
    id: 2,
    firstName: 'Nick',
    lastName: 'Robert',
    average: 9
  },
  aluno3: {
    id: 3,
    firstName: 'Carl',
    lastName: 'Sagan',
    average: 4
  }
};

const aprovedStudents = (studentsObj) => {
  const approved = [];
  for (student in studentsObj) {
    const { average } = studentsObj[student];

    if (average >= 7) {
      approved.push(studentsObj[student])
    }
  }
  for ({firstName, lastName, average} of approved) {
    const fullName = firstName + ' ' + lastName;
    console.log(`${fullName}: Aprovado com média ${average}`);
  }
};

aprovedStudents(alunos);
