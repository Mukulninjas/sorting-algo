const getSelectionAnimations = (TempArray) => {
    let animations = [];
    if (TempArray.length <= 1) return TempArray;
    selectionSortHelper(TempArray, animations);
    return animations;
}

const selectionSortHelper = (TempArray, animations) => {
    for (let i = 0; i < TempArray.length; i++) {
        let min_idx = i;
        for (let j = i + 1; j < TempArray.length; j++) {
            animations.push({ 'effect': 'compare', 'index': [j, min_idx] });
            if (TempArray[j] < TempArray[min_idx]) {
                min_idx = j;
                animations.push({ 'effect': 'change', 'index': [j, min_idx] });
            }
        }
        animations.push({ 'effect': 'swap', 'index': [min_idx, i] });
        let temp = TempArray[min_idx];
        TempArray[min_idx] = TempArray[i];
        TempArray[i] = temp;
        animations.push({ 'effect': 'sorted', 'index': [i, i] });
    }
}

export { getSelectionAnimations };