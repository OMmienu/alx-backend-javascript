interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: 'Isaac',
  lastName: 'Edzie',
  age: 22,
  location: 'Madina',
};

const studentTwo: Student = {
  firstName: 'Ommienu',
  lastName: 'Nyame',
  age: 19,
  location: 'Massachusetts',
};

const studentsList: Student[] = [studentOne, studentTwo];

function createStudentsTable(): void {
  const table: HTMLTableElement = document.createElement('table');
  const headerRow: HTMLTableRowElement = document.createElement('tr');
  const headers: string[] = ['First Name', 'Location'];
  headers.forEach((header: string) => {
    const th: HTMLTableCellElement = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = document.createElement('tr');
    const values: string[] = [student.firstName, student.location];
    values.forEach((value: string) => {
      const td: HTMLTableCellElement = document.createElement('td');
      td.textContent = value;
      row.appendChild(td);
    });
    table.appendChild(row);
  });

  document.body.appendChild(table);
}

window.onload = createStudentsTable;
