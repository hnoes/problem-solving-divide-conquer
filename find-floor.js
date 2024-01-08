function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1; // Initialize floor as -1 (not found)
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === x) {
        return arr[mid]; // Found an exact match, return it as the floor
      } else if (arr[mid] < x) {
        // Update the floor and search in the right half
        floor = arr[mid];
        left = mid + 1;
      } else {
        // The current element is greater than 'x', so search in the left half
        right = mid - 1;
      }
    }
  
    return floor; // Return the found floor or -1 if not found
  }
  
  // Test cases
  console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 9)); // 8
  console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 20)); // 19
  console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0)); // -1
  