
let x = 121

const isPalindrome = (x) => {
    const numInput = x ;
    let convert = String(numInput)
    let reverseNums = "";

    for (let i= convert.length -1 ; i>=0 ; i--){
        reverseNums = reverseNums + convert[i]
    }

    if (convert === reverseNums){
        return true;
    }else {
        return false;
    }

}

console.log(isPalindrome(x))