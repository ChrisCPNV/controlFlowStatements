const numbers = [];

function stopCodeIf (startNumber){
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
        if (numbers[i] % 2 === 0) {

            if (i > numbers.length / 2 ) {
                return "Plus de la moitié de la liste à été traitée, somme restante : " + startNumber;
            }
            if (startNumber === 50){
                return "Le nombre est égale à exactement : " + startNumber;
            }
            if (numbers.indexOf(numbers[i]) !==i){
                return "Un nombre à soustraire était 2 fois dans la liste. La somme : " + startNumber;
            }
            startNumber -= numbers[i];
        }
    }
    return "La liste entière a été traitée, somme restante : " + startNumber;
}

for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

console.log(stopCodeIf(100));