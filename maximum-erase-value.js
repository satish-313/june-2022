const maximumUniqueSubarray = (nums) => {
  const set = new Set();
  let j = 0;
  let max = 0;
  let sum = 0;

  for (let num of nums) {
    while (set.has(num)) {
      set.delete(nums[j]);
      sum -= nums[j];
      j += 1;
    }

    sum += num;
    set.add(num);
    max = Math.max(max, sum);
  }

  return max;
};

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6]));
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5]));
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5]));
