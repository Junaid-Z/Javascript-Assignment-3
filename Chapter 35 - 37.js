function displayAlert() { }
function askName() {
    var userName = prompt("Enter name")
}
function func() {
    askName()
    displayAlert()
}
function showName() {
    alert(prompt("Enter name"))
}
showName()
function concat(a, b, c) { }
function concat2(a, b) {
    var newVar = a.concat(b)
}
function clacProduct(a, b, c) {
    var product = a * b * c
}
function calcAverage(arr) {
    var sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index]
    }
    return sum / arr.length
}
var average = calcAverage([1, 2, 3, 4])
function letterCount(word) {
    return word.length
}
function setYear(d, y) {
    d.setFullYear(y)
}
function ageCalc(DOB) {
    DOB = new Date(DOB)
    var today = new Date()
    var age = Math.floor((today - DOB) / (1000 * 3600 * 24 * 365))
    return age
}
function findInArr(word) {
    var array = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima']
    return array.indexOf(word.toLowerCase()) !== -1
}
function repeat(letter) {
    return letter.repeat(10)
}
function reverseArr() {
    var array = ['a', 'b', 'c', 'd', 'e']
    array.reverse()
    return array
}