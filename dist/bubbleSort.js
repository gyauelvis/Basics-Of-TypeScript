"use strict";
let bubbleSort = (arr) => {
    let unsorted_untill_index = arr.length - 1, isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < unsorted_untill_index; i++) {
            if (arr[i] > arr[i + 1]) {
                isSorted = false;
                let first_index_value = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = first_index_value;
            }
            unsorted_untill_index--;
        }
    }
    return arr;
};
let list = [3, -1, 6, 7, 12, 56];
console.log(bubbleSort(list));
//# sourceMappingURL=bubbleSort.js.map