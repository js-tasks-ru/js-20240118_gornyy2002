/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
     const keyValuePairs = Object.entries(obj);
     const finalObj = {};
     for(let keyValuePair of keyValuePairs){
        if(fields.includes(keyValuePair[0])){
            finalObj[keyValuePair[0]] = keyValuePair[1];
        }
     }
     return finalObj;
};
