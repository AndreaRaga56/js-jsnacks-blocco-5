const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    a: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'
let result = '';

students.forEach((curElem) => {
  const a = curElem.name;
  const b = curElem.class;
  if (a == 'Marco Lanci') {
    result = b;
  }
})

console.log(result);