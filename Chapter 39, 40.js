day = 0
switch (day) {
    case 0:
        console.log("Sunday")
        break
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    default:
        console.log("Invalid Day")
        break;
}
var cityName = prompt("Enter City Name")
switch (cityName.toLowerCase()) {
    case "karachi":
        alert("karachi")
        break;
    case "islamabad":
        alert("islamabad")
        break;
    case "lahore":
        alert("lahore")
        break;
    default:
        alert("City not found")
        break;
}