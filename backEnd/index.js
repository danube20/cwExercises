function idxNum(arr, target) {

    let valuesChecked = {}
    let currentPair = 0
    let result = undefined

    arr.some(num => {
        currentPair = target - num

        if (currentPair in valuesChecked) {
            result = [arr.indexOf(currentPair), arr.indexOf(num)]

            return true;
        }
        valuesChecked[num] = ''
    })
    console.log(result)
}

idxNum([2, 7, 11, 15], 9)