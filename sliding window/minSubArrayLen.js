function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        // if current window doesn't add up to 'sum'
        // AND we haven't yet reached the end
        if (total < sum && end < nums.length) {
            // increment to the right (to increase total)
            total += nums[end];
            end++;
        }

        // if current window adds up to at least 'sum'
        else if (total >= sum) {
            // check if length less than 'minLen'
            minLen = Math.min(minLen, end - start);

            // increment left (to decrease total)
            total -= nums[start];
            start++;
        }

        // else, the current total must be less than 'sum'
        // AND we reached the end
        else break;
    }

    return (minLen === Infinity) ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 3], 7)); // 0
