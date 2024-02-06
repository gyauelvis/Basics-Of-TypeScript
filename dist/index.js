"use strict";
let twoSums = (nums, target) => {
    let value = [nums[0], 0];
    for (let i = 1; i < nums.length; i++) {
        let complement = target - nums[i];
        if (value[complement])
            return [value[complement], i];
        value.push(nums[i], i);
    }
    return [];
};
let mySize = 13;
let calculateTax = (amount, taxYear = 10) => {
    return taxYear <= 50000 ? amount * 10 : 0;
};
let worker = {
    name: "John",
    id: 123,
    retire: (date) => {
        console.log(date);
    },
};
worker.id = 10;
let kgToLbs = (weight) => {
    return ((typeof weight === "number" ? weight * 2.20462 : parseInt(weight)) * 2.20462);
};
//# sourceMappingURL=index.js.map