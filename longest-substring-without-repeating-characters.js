const lengthOfLongestSubstring = (s) => {
  if (s.length === 0) return 0;

  const set = new Set();
  let maxSubstring = 0;
  let j = 0;

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[j]);
      j += 1;
    }

    set.add(s[i]);
    maxSubstring = Math.max(maxSubstring, i - j + 1);
  }

  return maxSubstring;
};

console.log(lengthOfLongestSubstring("acbabxd"));
