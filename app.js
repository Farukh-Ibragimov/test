var a = 'a'
var b = 2
var c

console.log(c);
console.log(a === b)
console.log(b === 2)
console.log(b / a)
console.log(typeof(b))
console.log(typeof(a))

var sum = prompt('Введите сумму')

var numSum = Number(sum)
var fair = 0

if(typeof(numSum) !== Number){
    console.log("Введите число");
}else if(numSum > 1000 && numSum < 5000){
    console.log("Скидка 5%");
    fair = numSum * 0.05
}

