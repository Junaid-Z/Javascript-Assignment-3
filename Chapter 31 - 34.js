var dObj = new Date()
var dStr = new Date().toDateString()
var d = new Date()
var day = d.getDay()
var d = new Date().getDay()
var dayNames = ["Sunday", "Monday", "Tuesday", "Thursay", "Friday", "Saturday"]
alert(dayNames[d])
var dateString = (new Date).toString()
var later = new Date('2020-12-31')
var newDate = new Date('1992-2-2')
alert(new Date() - new Date('1980-1-1'))
var d = new Date()
d.setFullYear(1947)
function changeMonth(d) {
    d.setMonth(0)
}
//No method to change day of week it is linked to the date
function changeMinutes(d) {
    d.setMinutes(prompt('Enter minutes'))
}

function addHours(d) {
    d.setHours(d.getHours() + 2)
}
function ageCalc() {
    var DOB = prompt("What is your date of birthday")
    DOB = new Date(DOB)
    var today = new Date()
    var age = Math.floor((today - DOB) / (1000 * 3600 * 24 * 365))
    alert(age)
}