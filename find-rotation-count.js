function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      // If the array is sorted, the pivot index is 0
      if (arr[left] <= arr[right]) return left;
  
      const mid = Math.floor((left + right) / 2);
      const next = (mid + 1) % arr.length; // Calculate the index of the next element
  
      // Check if the mid element is greater than the next element
      if (arr[mid] > arr[next]) {
        return next; // Found the pivot point
      }
  
      if (arr[left] <= arr[mid]) {
        left = mid + 1; // The left half is sorted, move to the right half
      } else {
        right = mid - 1; // The right half is sorted, move to the left half
      }
    }
  
    return 0; // The array is not rotated
  }
  
  // Test cases
  console.log(findRotationCount([15, 18, 2, 3, 6, 12])); // 2
  console.log(findRotationCount([7, 9, 11, 12, 5])); // 4
  console.log(findRotationCount([7, 9, 11, 12, 15])); // 0
  