
// Filters array based on another array
function filterJson(arr, types) {
    try {
        const list = arr;
        const newList = list.filter(item => types.indexOf(item.type) !== -1);
        return newList;
    } catch (error) {
        throw new Error(error);
    }
}


export default filterJson;