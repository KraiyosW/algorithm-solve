
let digits = [1,2,3]
var plusOne = function(digits) {
    let result = []
    for (let i=0 ; i<digits.length ;i ++){
        if (i === digits.length -1 ){
            result.push(digits[i] + 1 )
        }else if (digits.length -1 === 0){
            result.push(digits[i] + 1)
        }
        else{
            result.push(digits[i]);
        }
    }
    return result.flatMap(num => String(num).split('').map(Number));
};

console.log(plusOne(digits))

