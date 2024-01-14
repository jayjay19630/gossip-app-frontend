export const checkSimilarArrays = (arr1: string[], arr2: string[]) => {
    return arr1.some(element => {
        return arr2.indexOf(element) !== -1;
    })
}

