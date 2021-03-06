'use strict';

// Array π

// 1. Declaration μ μΈ
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //key index 
console.log(fruits[1]); //key index 
console.log(fruits[fruits.length - 1]); //last index 

// 3. Looping over an array
// print all fruits 
console.log('==3==');
// a. for

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// b. for of
for(let fruit of fruits ){
    console.log(fruit);
    
}
// c. forEach

//forEach(callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any): void;
// 2κ°μ§ νλΌλ―Έν°μ λ¬λλλ° μ½λ°±ν¨μλ₯Ό λ°Έλ₯ νλνλ νΈμΆν΄μ£Όκ³  ?γ μ λ¨ν΄λλκ³  μν΄λλκ³  
// 3κ°μμΈμκ° λ€μ΄μ¨λ€. vlaue , index , arraay μ μ²΄ μΈλ±μ€
fruits.forEach(function(fruit, index, array){
    console.log(fruit, index, array);
});

fruits.forEach((e) => console.log(e));

// 4.Addtion, deletion, copy
// add an item to the end
fruits.push('π','π');
console.log(fruits);

// pop: remove an item from the end 
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the bennigging
//μμκ²μ΄ μ­μ λλκ² 
fruits.unshift('π','π');
console.log(fruits);

//shift: remove an item to the bennigging
fruits.shift();
fruits.shift('π');
console.log(fruits);

// note!! shift,  unshift are slower than pop, push 
//λλ¦¬λ€.
/*
  λ°°μ΄μ κΈΈμ΄κ° κΈΈμλ‘ λ§μ΄ μμ§μ¬μ
*/
// splice: remove an item by index position
fruits.push('π','π','π');
console.log(fruits);
fruits.splice(1, 1); // λκΉμ§ μ§μ μνλ©΄
console.log(fruits);

fruits.splice(1, 1, 'π','π'); // λκΉμ§ μ§μ μνλ©΄
console.log(fruits);

// combine two arrays 
// ν©μΉκΈ°μ ! 
const fruits2 = ['π','π₯₯'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the indext

console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π'));

// includes
console.log(fruits.includes('π'));
console.log(fruits.includes('dd'));

//lastIndexof
console.clear();
fruits.push('π');
console.log(fruits);
console.log(fruits);
console.log(fruits.lastIndexOf('π'));
