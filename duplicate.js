// eslint-disable-next-line
export const getDuplicated = (array) => {
// const getDuplicated = (array) => {
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

const getCouting = array => array.reduce((acc, curr) => {
    if (!acc[curr]) {
        acc[curr] = 1
    } else {
        acc[curr] += 1
    }
    return acc
}, {})

// console.log(getCouting([1,2,3,2,3,1,1,9]));