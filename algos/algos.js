// Countdown by Fours
// Print positive numbers starting with 2020, counting down by fours (excluding 0)
//     Challenge:Do this with a FOR loop first and then do it using a WHILE loop afterwards

// add out code


// Level Up: Flexible Countdown
// Based on Countdown by fours, write a function that, given parameters of "lowNum", "highNum", and "mult", 
// print all multiples of "mult" from "highNum" to "lowNum" using a for loop
// Example: flexCount(2,9,3), it will print 9 6 3 on successive lines.
// Example: flexCount(2,16,3), it will print 15 12 9 6 3 on successive lines.
 
// modulus operator
// 9 % 3 => 0
// 9 % 2 => 1

// Sensei Bonus:
// This is based on "Flexible Countdown." The parameter names are not as helpful, but the problem is essentially identical; don't be thrown off! 
// Given 4 parameters (param1, param2, param3, param4), print the multiples of param1, starting at param2, and extending to parm3.
// There's one exception: if a multiple is equal to param4, then  skip it (don't print it). Do this using a while loop.
// Example: Given (3,5,17,9), the output should be 6,12,15 on successive lines, because 6,12, and 15 are multiples of 3, 
// between 5 and 17, and excludes the value of 9.

function flexSensei(param1, param2, param3, param4) {
  
  // WHILE LOOP VERSION
  var omarIsAnAmazingCoder = param2;

  // loop from i up to param3
  while (omarIsAnAmazingCoder < param3) {
    // check if i is a multiple of param1
    if (omarIsAnAmazingCoder % param1 == 0) {
      // check if i is the same as param4
      if (omarIsAnAmazingCoder != param4) {
        console.log(omarIsAnAmazingCoder);
      }
    }
    
    omarIsAnAmazingCoder++;
    // omarIsAnAmazingCoder += 1;
    // omarIsAnAmazingCoder = omarIsAnAmazingCoder + 1;
  }

  // FOR LOOP VERSION
  // Note the similarities between the two
  for (var i = param2; i < param3; i++) {
    if (i % param1 == 0) {
      if (i != param4) {
        console.log(i);
      }
    }
  }
}


flexSensei(3, 5, 17, 9);

for (let i = 0 ; i < 10; i++) {

}