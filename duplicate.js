export const getDuplicated = (array) => {
    const counting = {}
    const result = new Set()
    for (const item of array) {
        if (!counting[item]) {
            counting[item] = 1
        } else {
            result.add(item)
        }
    }

    return result;
}