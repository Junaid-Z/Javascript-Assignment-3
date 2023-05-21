function local() {
    var aLocalVar = 123;
    console.log(aLocalVar)
}
local()
console.log(aLocalVar)
var aGlobalVar = 99;
function func2() {
    console.log(aGlobalVar)
}