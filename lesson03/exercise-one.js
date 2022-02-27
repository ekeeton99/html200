const animals = ['dogs', 'cats', 'birds', 'fish', 'bugs'];

animals.push('reptiles')
console.log(animals);

animals.splice(2, 1);
console.log(animals);

const animalsList = animals.join(',');
console.log(animalsList);
