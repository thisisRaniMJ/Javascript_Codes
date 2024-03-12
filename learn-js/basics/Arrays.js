numArray = [10, 20, 30, 40, 50]

console.log(numArray[2])
numArray[2] = 99
console.log(numArray[2])

//traversing Array
for(let i = 0; i < numArray.length; i++)
{
    console.log(numArray[i])
}

console.log("Example 2")

arr = [1,2,3,4,5]
console.log(arr.length)
arr.push(99)
console.log("Before pop")
//traversing Array
for(let i = 0; i < arr.length; i++)
{
    console.log(arr[i])
}
arr.pop()
console.log("After pop")

//traversing Array
for(let i = 0; i < arr.length; i++)
{
    console.log(arr[i])
}
console.log(arr.slice(1,4))
