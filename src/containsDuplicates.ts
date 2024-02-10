let duplicateCheck = (arr:number[]):boolean =>{
    type objType = {
        [key:number] : number;
    }
    let duplicateObjMap: objType = {};
    for(let i =0; i<arr.length; i++){
        if(duplicateObjMap[arr[i]] > 0) return true
        duplicateObjMap[arr[i]] = 1;
    }
    return false;
}

let arr1:number[] = [1,4,5,2,3,5,2];
console.log(duplicateCheck(arr1));