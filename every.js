function hasOddNumber(array){
    return array.some(function(num){
        return num % 2 !== 0; 
    })

}

function hasAZero(arr){
    return arr.toString().split('').some(function(num){
        return num === '0';
    })

}

function hasOnlyOddNumbers(array){
    return array.every(function(num){
        return num % 2 !== 0;
    })
}

function hasNoDuplicates(arr){
    return arr.every(function(val){
        return val[]

    })
}

function hasCertainKey(array, key){
    return array.every(function(val){
        return val[key] === ;
    })
}
function hasCertainValue(array, key, value){
    return array.every(function(val){
        return val.key === val.value
    })
}