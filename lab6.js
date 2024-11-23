const arr = [
    -19992,
    -Infinity,
    +Infinity,
    {},
    'classuser51',
    NaN

]
const newArrays = {}

for (let i = 0; i < arr.length;  i++){
    let type = typeof arr [i]
    if(!newArrays[type]){
        newArrays[type] = []
    }
    newArrays[type].push(arr[i])
}

console.log(newArrays);