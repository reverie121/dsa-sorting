function bubbleSort(arr) {
    let i = 0;
    for (i; i < arr.length; i++) {
        let swapped = false;
        let j = 0;
        for (j; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                let holder = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = holder;
                swapped = true;
            }
        }
        if (swapped === false) break;
    }
    return arr;
}

module.exports = bubbleSort;