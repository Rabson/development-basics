const bubbleSort = (inputArray) => {

    let swapped = false;
    do {
        swapped = false;
        for (let index = 0; index < inputArray.length; index++) {
            if (inputArray[index] > inputArray[index + 1]) {
                let tmp = inputArray[index];
                inputArray[index] = inputArray[index + 1];
                inputArray[index + 1] = tmp;
                swapped = true;
            }
        }
        console.log('do while ', inputArray)
    } while (swapped)

    return inputArray;
}

console.log(bubbleSort([6, 5, 4, 3, 2, 1]));
console.log(bubbleSort([1, 2, 3, 4, 5, 6]));