"use strict";
let binarySearch = (arr, target, leftPointer = 0, rightPointer = arr.length - 1) => {
    while (leftPointer < rightPointer) {
        let middleValue = Math.floor((leftPointer + rightPointer) / 2);
        if (arr[middleValue] === target)
            return middleValue;
        else if (arr[middleValue] > target)
            rightPointer = middleValue - 1;
        else
            leftPointer = middleValue + 1;
    }
    return -1;
};
let exponentialSearch = (arr, targetValue) => {
    let arraySize = arr.length;
    if (arr[0] === targetValue)
        return 0;
    else {
        let i = 1;
        while (i < arraySize && targetValue >= arr[i])
            i *= 2;
        return binarySearch(arr, targetValue, i / 2, Math.min(i, arraySize));
    }
};
let arr = [1, 2, 3, 5, 6, 7, 9, 12, 54];
console.log(exponentialSearch(arr, 5));
//# sourceMappingURL=exponentialSearch.js.map