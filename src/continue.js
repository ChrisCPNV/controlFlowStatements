const numbers = [];
let somme = 0

for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] < somme) continue;
    somme += numbers[i];
}
console.log("La somme des nombres : " + somme);