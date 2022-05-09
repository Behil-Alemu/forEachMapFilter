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

function addKeyValue(arr, key, value){
    arr.forEach(function(){
        val[key] = value;
    });
    return arr;
}
// I don't get this one



function vowelCount(str){
    let eachLetter = str.split("");
    let newObj = {};
    // const vowel = "aeiou"
    eachLetter.forEach(function(value){
        let LowerCase = value.toLowerCase()
        if ('aeiou'.indexOf(LowerCase) !== -1){
            if(newObj[LowerCase]){
                newObj[LowerCase]++;
            }else{
                newObj[LowerCase] = 1
            }
        }
    });
return newObj;

}
// second if statement?
//if it does not become -1 it is a vowel ?




function doubleValuesMap(array){
return array.map(function(val){
    return val * 2;
})
}
function doubleValuesMap(array){
return array.map(function(val, i){
    return val * i;
})
}
//    return val * val[i]; why does it not work

function exactKey(array, key){
    return array.map(function(val){
        return val[key]
    })
}

function exactFullName(array){
    return array.map(function(val){
        return val.first + ' ' + val.last
    })
}
// filter

function filterByName(array, key){
    return array.filter(function(val){
        return val[key] !== undefined; 
    })
}

// why does tis not work return val[key] === true;

function find(array, value){
    return array.filter(function(val){
        return val === value; 
    })[0];
}
// [0]; ?

function findInObj(array, key, value){
    return array.filter(function(val){
          val[key] === value
    })[0];
}
//  if (val[key] !== undefined ){
//  return val.first + val.last + val.isCatOwner; }
// })[0];
// what is the difference b/n val === value and val[key] === value

function removeVowel(str){
    // let eachLetter = str.split("");
    return str.toLowerCase().split('').filter(function(val){
        return 'aeiou'.indexOf(val) === -1;
    })
    .join('')

}
// val does not have aeiou then ...
function doubleOddNubmer(arr){
    return arr.filter(function(val){
        return val % 2 !== 0;
    })
    .map(function(val){
        return val*2;
    }) 
}