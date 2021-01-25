var express = require('express')
var app = express()
const cors = require('cors');
app.use(cors());

app.get('/iecho', function (req, res) {
    console.log(req.query.text)
   // res.json({ text: req.query.tex })
   if(req.query.text == null)
    res.json({
        "error": "no text"
        })
    else{
        let result = reverseString(req.query.text.toString());
        const palindrome =  palindromeee(req.query.text.toString());
        console.log(palindrome);
        res.json({ text: result, flag: palindrome })
    }
  
})

app.listen(4000)

function palindromeee(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}


function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 


 
