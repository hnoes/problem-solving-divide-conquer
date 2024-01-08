function sortedFrequency(arr, num) {
    let left = 0;
    let right = arr.length - 1;
  
    let firstOccurrence = findFirstOccurrence(arr, num);
  
    if (firstOccurrence === -1) {
      return -1; // The number is not in the array
    }
  
    let lastOccurrence = findLastOccurrence(arr, num);
  
    return lastOccurrence - firstOccurrence + 1;
  }
  
  function findFirstOccurrence(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        result = mid;
        right = mid - 1; // Continue searching in the left half
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }
  
  function findLastOccurrence(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        result = mid;
        left = mid + 1; // Continue searching in the right half
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }
  
  // Test cases
  console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
  console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
  console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
  console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
  