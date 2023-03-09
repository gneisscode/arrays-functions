// question 1
//Mutating methods are methods that alter an array after the method has been used
//while non-mutating methods do not alter the array after the method has been used.
//e.g of mutating methods; array.pop(), array.push(), array.shift(), array.sort(), array.splice()
//e.g of non-mutating methods; array.concat(), array.includes(), array.indexOf, array.join(), array.slice()

// question 2
const array = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
array.push('Kotlin')
array.splice(3,0,'Java')
array.shift()
array.unshift('Scala', 'Swift')
array.splice(5,1, 'Go', 'Rust')


console.log(array)

// question 3
//The value of fruit is 'orange'

// question 4
function max(array){
    let maxNum= null
   array.forEach(element => {
        if (maxNum===null){
            maxNum=element
        }
        else if(element > maxNum){
            maxNum=element
        }
        
   }
   )
   console.log(maxNum);
}

const test=[1,-12,8]
max(test)

//question 5
function valTimesIndex(array){
    let newArray=[]
    array.forEach(element => {
       element= element*array.indexOf(element)
       newArray.push(element)
    });
    return newArray
}

let arr= [1,2,3]
console.log(valTimesIndex(arr))