function writeCards(array, emotion) {
    let newArray = []
    for(let i=0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${emotion} gift!`)
    }
    return newArray;
}

const num = 10;
function countDown(num) {
while(num >= 0 ) {
    console.log(num)
    num--
   }
   return num;
}
