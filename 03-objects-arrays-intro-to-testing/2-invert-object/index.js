/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
    if(obj == undefined){
        return undefined;
    }
    let new_obj = {};
    for(let key in obj){
        new_obj[obj[key]] = key;
    }
    return new_obj;
}
