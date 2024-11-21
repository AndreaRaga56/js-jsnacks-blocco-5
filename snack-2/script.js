const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'
people.forEach((curElem, i) => {
  curElem = people[i];
  const {name} = curElem;
  console.log(name)});