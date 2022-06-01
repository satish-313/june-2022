const runningSum = (nums) => {
  const result = [];
  let sum = 0;

  for (let ele of nums) {
    sum += ele;
    result.push(sum);
  }

  return result;
};

const runningSum1 = (nums) => {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    nums[i] = sum;
  }

  return nums;
};

const runningSum2= (nums) => {
  for (let i=1; i<nums.length; i++) {
    nums[i] = nums[i-1] + nums[i]
  }

  return nums
}

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum1([1, 2, 3, 4]));
console.log(runningSum2([1, 2, 3, 4]));
