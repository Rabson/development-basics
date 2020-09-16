const bubbleSort = (inputArray) => {

    let swapped = false;

    for (let i = 0; i < inputArray.length; i++) {
        for (let index = 0; index < inputArray.length; index++) {
            if (inputArray[index] > inputArray[index + 1]) {
                [inputArray[index], inputArray[index + 1]] = [inputArray[index + 1], inputArray[index]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }

    return inputArray;
}

console.log(bubbleSort([6, 5, 4, 3, 2, 1]));
console.log(bubbleSort([1, 2, 3, 4, 5, 6]));
