/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    let arr = string.split('');
    let len = arr.length;
    let lett = arr[0];
    let i = 1;
    let numEq = 1;
    if(size == 0 ){
        return '';
    }
    while( i  < len){
        if(arr[i] == lett){
            numEq+=1;
            if(numEq > size){
                arr.splice(i, 1);
                len =arr.length;
                numEq-=1;
                i-=1;
            }
        } else{
            numEq = 1;
            lett = arr[i];
        }
        i+=1;
    }
    
    return arr.join('');
}
