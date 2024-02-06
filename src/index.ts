let twoSums = (nums: number[], target: number): number[] => {
  let value: [number, number] = [nums[0], 0];
  for (let i = 1; i < nums.length; i++) {
    let complement = target - nums[i];
    if (value[complement]) return [value[complement], i];
    value.push(nums[i], i);
  }
  return [];
};
// enums
const enum Size {
  "small" = 12,
  "medium",
  "large",
}

let mySize: Size = Size.medium;

// functions
let calculateTax = (amount: number, taxYear = 10): number => {
  return taxYear <= 50_000 ? amount * 10 : 0;
  // putting the question mark in front of taxYear means the parameter is not compulsory to supply when calling the function
};

// defining the shape of an object

type Employee = {
  name: string;
  id: number;
  code?: boolean;
  retire: (date: Date) => void;
};

// objects

let worker: Employee = {
  name: "John",
  id: 123,
  retire: (date: Date) => {
    console.log(date);
  },
};

worker.id = 10;

// using unions

let kgToLbs = (weight: number | string) => {
  return (
    (typeof weight === "number" ? weight * 2.20462 : parseInt(weight)) * 2.20462
  );
};

// using intersection

type Draggable = {
  drag: () => void;
};

type Droppable = {
  drop: () => void;
};

type DraggableAndDroppable = Draggable & Droppable;

let draggableAndDroppable: DraggableAndDroppable = {
  drag: () => {},
  drop: () => {},
};

// literal types

let value: 50 = 50; // now value can only be assigned to 50;
let value1: 50 | 100 = 100; // now value1 can only be assigned to 50 or 100

type Metric = "kg" | "lbs"; 
let metric: Metric = "kg";