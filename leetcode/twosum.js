// โจทย์จะต้องการหาเลขที่บวกกันแล้วได้ตาม target ที่ต้องการ 
//Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// หลักการคิดคือต้องเอาเลขใน array บวกกันจนเจอสิ่งที่โจทย์ต้องการจากนั้นให้ return ค่าเป็น ตำแหน่ง index ของ array 

const towSum = (nums,target) => 
{
    let result = []
    let resultNum =[] 
    for (let i=0 ; i<nums.length ; i++){
        let j = i+1;
        while(j<nums.length){
            if(nums[i]+nums[j] === target){
                result.push(i);
                resultNum.push(nums[i])
                result.push(j);
                resultNum.push(nums[j])
                return result;
            }
            j++
        }
    }
    
};

let nums = [2,7,11,15];
let target = 26 ;

console.log(towSum(nums,target))