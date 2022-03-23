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
        console.log('vc', valuesChecked);
        valuesChecked[num] = ''
        console.log('c', currentPair);
        console.log('n', num);
    })
    console.log('vc2', valuesChecked);

    console.log(result)
}

idxNum([2, 7, 11, 15, 2, 7], 4)