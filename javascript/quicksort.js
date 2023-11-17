function partition(array, low, high) {
  debugger;
  const pivot = array[high];
  let pivotIndex = high;
  while (low < high) {
    if (array[low] > pivot && array[high] < pivot) {
      [array[low], array[high]] = [array[high], array[low]];
      low++;
      continue;
    }
    if (array[low] <= pivot) {
      low++;
    }
    if (array[high] >= pivot) {
      high--;
    }
  }
  array[pivotIndex] = array[low];
  array[low] = pivot;
  pivotIndex = low;
  // debugger;
  // const pivot = array[high];
  // let pivotIndex = high;
  // let i = low;
  // while (i <= pivotIndex) {
  //   const element = array[i];
  //   if (element <= pivot) i++;
  //   if (element > pivot) {
  //     array[i] = array[pivotIndex - 1];
  //     array[pivotIndex - 1] = pivot;
  //     array[pivotIndex] = element;
  //     pivotIndex--;
  //   }
  // }
  return pivotIndex;
}

function quicksort(array, low = 0, high = array.length - 1) {
  if (low < high) {
    const pivotIndex = partition(array, low, high);
    quicksort(array, low, pivotIndex - 1);
    quicksort(array, pivotIndex + 1, high);
  }
  return array;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log(quicksort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 2, 3, 4]");
  console.log(quicksort([1, 2, 2, 3, 4]));

  console.log("expecting [-9, 2, 3, 6, 7, 16");
  console.log(quicksort([3, 7, 2, -9, 16, 6]));
}

module.exports = quicksort;

// Please add your pseudocode to this file
// And a written explanation of your solution
