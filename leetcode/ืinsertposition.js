var searchInsert = function(nums, target) {
    for (let i=0 ; i<nums.length ; i++){
        if(nums[i] === target){
            return i
        }
        else if (nums[i] !== target && nums[i]+1  === target){
            return i+1
        }
        else if (nums[i] !== target && target === 0){
            return i = 0 
        }
        else if (nums[i] !== target && nums[i]-1 === target){
            return i
        }
    }
};