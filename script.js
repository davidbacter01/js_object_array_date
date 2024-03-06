const myProducts = ['Camasa', 'Pantaloni', 'Manusi'];

console.log('myProducts: ', myProducts);

console.log(`First item in myProducts is ${myProducts[0]}`);
console.log(`Length of myProducts array is ${myProducts.length}`);

// adaugare de elemente
const newItem = 'Pantofi';
myProducts.push(newItem);
console.log('myProducts after push: ', myProducts);

myProducts.push(25);
console.log('myProducts after push: ', myProducts);

// modificarea unui element
myProducts[0] = 'Tricou';
console.log('myProducts after changing first item: ', myProducts);

//stergerea unui element
myProducts.pop();
console.log('myProducts after pop-ing last item: ', myProducts);

//adaugarea unui element la inceputul array-ului
myProducts.unshift('Camasa');
console.log('myProducts after unshift(): ', myProducts);

//stergerea unui element de la inceputul array-ului
myProducts.shift();
console.log('myProducts after shift(): ', myProducts);

// indexOf - gasirea indexului unui element din array
const indexOfPantaloni = myProducts.indexOf('Pantaloni');
console.log(`Elementul Pantaloni se afla in lista la indexul ${indexOfPantaloni}`);