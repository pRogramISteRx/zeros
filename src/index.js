module.exports = function zeros(expression) {
  let number;  
  let countTwo = 0;
  let countFive = 0;

  for (let i = 0; i < expression.length; i++) {  
    if (Number.isInteger(+expression[i]) && (Number.isInteger(+expression[i+1]) || +expression[i+1] == '0') && (Number.isInteger(+expression[i+2]) || +expression[i+2] == '0')) {
      let singleDigits = [];
      singleDigits.push(expression[i], expression[i+1], expression[i+2]);
      number = singleDigits.join('');
      
      if (expression[i+3] == '!' && expression[i+4] != '!') {
        for (let j = 1; j <= number; j++) {
          if (j % 2 == 0) {
            countTwo++;
          }

          if (j % 5 == 0) {
            if (j % 25 == 0) {
              countFive += 2;
            } else {
              countFive++;
            }
          }
        }
      } else if (expression[i+3] == '!' && expression[i+4] == '!') {   
        for (let j = number; j > 0; j--) {
          if (j % 2 == 0) {
            countTwo++;
          }
          
          if (j % 5 == 0) {
            if (j % 25 == 0) {
              countFive += 2;
            } else {
              countFive++;
            }
          }

          j--;
        }
      }
    } else if (Number.isInteger(+expression[i]) && (Number.isInteger(+expression[i+1]) || +expression[i+1] == '0') && expression[i+2] != expression[i+2] / 1) {
      let singleDigits = [];
      singleDigits.push(expression[i], expression[i+1]);
      number = singleDigits.join('');
      
      if (expression[i+2] == '!' && expression[i+3] != '!') {
        for (let j = 1; j <= number; j++) {
          if (j % 2 == 0) {
            countTwo++;
          }

          if (j % 5 == 0) {
            if (j % 25 == 0) {
              countFive += 2;
            } else {
              countFive++;
            }
          }
        }
      } else if (expression[i+2] == '!' && expression[i+3] == '!') {   
        for (let j = number; j > 0; j--) {
          if (j % 2 == 0) {
            countTwo++;
          }

          if (j % 5 == 0) {
            if (j % 25 == 0) {
              countFive += 2;
            } else {
              countFive++;
            }
          }

          j--;
        }
      }  
    } else if (Number.isInteger(+expression[i]) && expression[i+1] != expression[i+1] / 1 && expression[i-1] != expression[i-1] / 1) {
      number = expression[i];
      
      if (expression[i+1] == '!' && expression[i+2] != '!') {
        for (let j = 1; j <= number; j++) {
          if (j % 2 == 0) {
            countTwo++;
          }
          
          if (j % 5 == 0) {
            countFive++;
          }
        }
      } else if (expression[i+1] == '!' && expression[i+2] == '!') {
        for (let j = number; j > 0; j--){
          if (j % 2 == 0) {
            countTwo++;
          }

          if (j % 5 == 0) {
            countFive++;
          }

          j--;
        } 
      }
    }
  }
  
  if (countTwo > countFive) {
    return countFive;
  } else if (countTwo < countFive) {
    return countTwo;
  } else if (countTwo == 0  || countFive == 0) {
    return 0;
  } 
}