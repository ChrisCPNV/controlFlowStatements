const numbers = [];
let startNumber = 100;

function stopCodeIf (){
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);

        if (numbers[i] % 2 === 0) {

            if (i > numbers.length) {
                return startNumber;
            }
            if (startNumber === 50){
                return startNumber;
            }

            startNumber -= numbers[i];
        }
    }
}

for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

console.log(stopCodeIf());