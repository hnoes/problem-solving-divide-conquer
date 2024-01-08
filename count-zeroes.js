function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    // Check if the last element is 0 (edge case)
    if (arr[right] === 0) return arr.length;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === 1) {
        left = mid + 1;
      } else {
        // If arr[mid] is 0, it might be the last 0, so we check the next element
        if (arr[mid + 1] === 0) {
          return arr.length - (mid + 1);
        } else {
          right = mid;
        }
      }
    }
  
    return 0; // No 0s found in the array
  }
  
  // Test cases
  console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
  console.log(countZeroes([1, 0, 0, 0, 0]));    // 4
  console.log(countZeroes([0, 0, 0]));          // 3
  console.log(countZeroes([1, 1, 1, 1]));       // 0
  