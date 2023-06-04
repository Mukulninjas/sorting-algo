const getBubbleSortAnimations = (TempArray) => {
    let animations = [];
    if (TempArray.length <= 1) return TempArray;
    bubbleSortHelper(TempArray, animations);
    return animations;
}

const bubbleSortHelper = (TempArray, animations) => {
    for (let i = 0; i < TempArray.length - 1; i++) {
        for (let j = 0; j < TempArray.length - i - 1; j++) {
            animations.push({ 'effect': 'compare', 'index': [j, j + 1] });
            if (TempArray[j] > TempArray[j + 1]) {
                animations.push({ 'effect': 'swap', 'index': [j, j + 1] });
                let temp = TempArray[j];
                TempArray[j] = TempArray[j + 1];
                TempArray[j + 1] = temp;
            }
        }
        animations.push({ 'effect': 'sorted', 'index': [TempArray.length - i - 1, TempArray.length - i - 1] });
    }
}

export { getBubbleSortAnimations };