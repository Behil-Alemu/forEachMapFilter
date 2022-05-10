function hasOddNumber(array){
    return array.some(function(num){
        return num % 2 !== 0; 
    })

}

function hasAZero(arr){
    return arr.some(function(num){
        return num === 0;
    })

}

function hasOnlyOddNumbers(array){
    return array.every(function(num){
        return num % 2 !== 0;
    })
}

function