const getMergeSortAnimations = (TempArray) => {
    let animations = [];
    if (TempArray.length <= 1) return TempArray;
    const auxillaryArray = TempArray.slice();
    mergeSortHelper(TempArray, 0, TempArray.length - 1, auxillaryArray, animations);
    return animations;
}

const mergeSortHelper = (mainArray, startIdx, endIdx, auxillaryArray, animations) => {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxillaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxillaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxillaryArray, animations);
}

const doMerge = (mainArray, startIdx, middleIdx, endIdx, auxillaryArray, animations) => {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        // console.log('inside 1st while', i, '===', j);
        animations.push([i, j]);
        animations.push([i, j]);

        if (auxillaryArray[i] <= auxillaryArray[j]) {
            animations.push([k, auxillaryArray[i]]);
            mainArray[k++] = auxillaryArray[i++];
        } else {
            animations.push([k, auxillaryArray[j]]);
            mainArray[k++] = auxillaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        // console.log('inside 2nd while', i, '===', j);
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxillaryArray[i]]);
        mainArray[k++] = auxillaryArray[i++];
    }
    while (j <= endIdx) {
        // console.log('inside 3rd while', i, '===', j);
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxillaryArray[j]]);
        mainArray[k++] = auxillaryArray[j++];
    }
}

export { getMergeSortAnimations };