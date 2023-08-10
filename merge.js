function merge(arr1, arr2) {
    let output = [];
    let pointer1 = 0;
    let pointer2 = 0;
    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] <= arr2[pointer2]) {
            output.push(arr1[pointer1]);
            pointer1 ++;
        } else {
            output.push(arr2[pointer2]);
            pointer2 ++;
        }
    }
    if (pointer1 == arr1.length) {
        while (pointer2 < arr2.length) {
            output.push(arr2[pointer2]);
            pointer2 ++;
        }
    } else if (pointer2 == arr2.length) {
        while (pointer1 < arr1.length) {
            output.push(arr1[pointer1]);
            pointer1 ++;
        }
    }
    return output;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    const mid = Math.floor(arr.length / 2);
    const arr1 = mergeSort(arr.slice(0, mid));
    const arr2 = mergeSort(arr.slice(mid));
    return merge(arr1,arr2);
}

module.exports = { merge, mergeSort};