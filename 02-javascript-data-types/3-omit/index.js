/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    let entrie = Object.entries(obj);
    let new_obj = {};
    for(ar of entrie){
       if(!fields.includes(ar[0])){
           new_obj[ar[0]] = ar[1];
       }
    }
    return new_obj;
};
