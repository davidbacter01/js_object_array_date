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


// subset al unui array
const subsetOfMyProducts = myProducts.slice(1, 3);
console.log('subset from 1 to 3 is', subsetOfMyProducts);

myProducts.splice(2, 1, 'Camasa');
console.log('After splice(2, 1, "Camasa"): ', myProducts);

// concatenare de array-uri
const concatenatedArrays = myProducts.concat(subsetOfMyProducts);
console.log('after concat(subsetOfMyProducts): ', concatenatedArrays);


// Obiecte

let person = {
    name: "John",
    surname: "Doe",
    address: {
        street: "Cetatii",
        number: 21,
        appartment: "b1",
        block: "7b",
        tronson: 1,
        zipCode: "100203",
        city: "Cluj-Napoca",
        country: "Romania",
        county: "Cluj"
    },
    age: 32
};

console.log("person: ", person);

console.log(`nume persoana: ${person.name}`);

console.log(`cod postal ${person.address.zipCode}`);

// undefined property
console.log(person.appartment);

// brackets notation
console.log(`person surname: ${person["surname"]}`);

// modificare valori in obiect
person.name = "Ion";
console.log('name: ', person.name);

//comparare obiecte
const obj1 = {a: 10, b: true};
const obj2 = {a: 10, b: true};
const obj3 = obj1;

console.log(`obj1 === obj2 => ${obj1 === obj2}`);
console.log(`obj1 === obj3 => ${obj1 === obj3}`);


// comparare dupa proprietati
const areEqual = obj1.a === obj2.a && obj2.b === obj3.b;
console.log('areEqual: ', areEqual);

// stergere proprieteate obiect
delete person.age;
console.log('person: ', person);