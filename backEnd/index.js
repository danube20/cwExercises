function idxNum(arr, target) {

    let valuesChecked = {}
    let currentPair = 0
    let result = undefined

    arr.some(num => {
        currentPair = target - num

        if (currentPair in valuesChecked) {
            result = [arr.indexOf(currentPair), arr.lastIndexOf(num)]

            return true;
        }
        valuesChecked[num] = ''
    })
    console.log(result)
}

idxNum([2, 7, 15, 11], 18)

/*
16 - 2 
{ '2': '' }
11 - 7
{ '2': '', '7': '' }
3 - 15
{ '2': '', '7': '', '15': '' }
7 - 11
[ 1, 3 ]
*/
