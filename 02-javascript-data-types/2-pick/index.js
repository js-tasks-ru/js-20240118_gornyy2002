/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
     let entrie = Object.entries(obj);
     let field = Array.from(fields);
     let new_obj = {};
     for(ar of entrie){
        if(fields.includes(ar[0])){
            new_obj[ar[0]] = ar[1];
        }
     }
     return new_obj;
};
