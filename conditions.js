//Write an algorithm which given 3 numbers finds the maximum.

function findMax(a, b, c) {
    let max = a; 
  
    if (b > max) {
      max = b; 
    }
  
    if (c > max) {
      max = c;
    }
  
    return max;
  }
  
  let maximum = findMax(3, 50, 75);
  console.log("Maximum number:", maximum);
