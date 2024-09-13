const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] > 50){
        console.log("Opération économisées : " + (9 - i));
        break;
    }
}