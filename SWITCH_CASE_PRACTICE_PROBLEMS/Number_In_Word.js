/*  Read a single digit number and write the number in word using Case */

var readline = require('readline');
        var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

rl.question("Enter the number :" , function (x) {
	var number = parseFloat(x);
	numberInWord(number);

            rl.close();
         });

function numberInWord(number){

    switch (number){
        case 0 :
            console.log ("zero");
            break;
        case 1:
            console.log ("one");
            break;
        case 2: 
            console.log("two");
            break;
    }

}







