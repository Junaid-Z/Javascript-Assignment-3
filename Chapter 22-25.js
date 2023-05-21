var sameWords = "captain"
console.log(sameWords.slice(1, 3))
sameWords = sameWords.length
var animal = "elephant"
var seg = animal.slice(2, 6)
var anotherVar = seg.length
var aStringVar = 'a long string'
console.log(aStringVar.length)
var anotherStringVar = aStringVar.slice(1, 10)
var text = "To be or not to be."
var indx = text.indexOf("be")
//indx will be 3
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
//indx will be 16
var myRandomString = "to go to the other side you have to go through the forest"
var indx = myRandomString.lastIndexOf('go')
var indexNum = 22
if (myRandomString.charAt(indexNum) !== '') { }
var string1 = "abcde"
console.log(string1.charAt(2))
//char at index 2 is c
var text = "A random string composed of more than 10 characters"
var cha = text.charAt(9)
var str = "a string"
var x = str.charAt(7)
var input = "abcxyz"
var cha = input.charAt(4)
if (input.charAt(2) === 'c') { }
var array = []
for (let index = 0; index < input.length; index++) {
    array.push(input.charAt(index))
}
var reply = "no no no"
var revisedReply = reply.replace('no', 'yes')
var str = "1 2 3 4"
var newStr = str.replace("1", "one");
var y = "aaaaaaaaaaaa"
var y = x.replace(/a/g, "z");