/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
    if(arr == undefined || arr.length  == 0 ){
        return new Array();
    }
    let arr_d = [...arr];
    let ar_obj = {};
    arr.forEach(function (x) { ar_obj[x] = (ar_obj[x] || 0) + 1; });
    let it_ar = Array.from(Object.keys(ar_obj));
    for(i in it_ar){
        if(isNaN(Number(it_ar[i]))){
            continue;
        } else{
            it_ar[i] = Number(it_ar[i]);
        }
    }
    it_ar.sort((a,b)=>{
        if(arr.indexOf(a) > arr.indexOf(b)){
            return 1;
        } else{return -1;}
    });
    return it_ar;
}
