function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(num){
        newArr.push(num * 2)
    });
    return newArr;
}
function onlyEvenValue(arr){
    let newArr = [];
    arr.forEach(function(num){ 
        if (num % 2 === 0){
        newArr.push(num)
        }
        return newArr; 
    });
}
function showFirstAndLast(arr, i){
    let newArr = [];
    arr.forEach(function(value){
        newArr.push(value.charAt(0) +  value.charAt(value.length - 1))
    })
    return newArr; 
   
}

function addKeyValue


