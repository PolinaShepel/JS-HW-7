
const type = 'string';
const array = ['hello', 'world', 23, '23', null];

function filterByType(array, type) {

    let filterResult = array.filter((item) => {
        if (typeof item === 'string') {
            return false;
        }
        else if (typeof item !== type) {
            return true;
        }
    })
    return filterResult;
}

console.log(filterByType(array,type));