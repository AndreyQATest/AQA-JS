function handleNum(num,callBackPair, callBackNonPair){
   if (num % 2 === 0 ){
    return callBackPair(num);
  } else {
    callBackNonPair(num);
  }
}
function handleEven() {
  console.log("Number is Even");
}

function handleOdd() {
  console.log("number is Odd");
}

handleNum (4, handleEven, handleOdd);
handleNum (9, handleEven, handleOdd);