"use strict";
let duplicateCheck = (arr) => {
    let duplicateObjMap = {};
    for (let i = 0; i < arr.length; i++) {
        if (duplicateObjMap[arr[i]] > 0)
            return true;
        duplicateObjMap[arr[i]] = 1;
    }
    return false;
};
let arr1 = [1, 4, 5, 2, 3, 5, 2];
console.log(duplicateCheck(arr1));
//# sourceMappingURL=containsDuplicates.js.map