// eslint-disable-next-line
export const sum = (...args) => {
    return args.reduce((a, b) => a + b);
};

/**
 * 
 * 
 * @param {String} str 
 */
function upper(str) {
    return str.toUpperCase();
}

export {
    upper
};