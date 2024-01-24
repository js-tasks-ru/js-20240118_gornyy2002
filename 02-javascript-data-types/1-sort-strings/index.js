/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    const array_sorted = arr.slice().sort((a, b) => a.localeCompare(b, ["ru-RU", "en-EN"], {caseFirst: 'upper'}));
    return (param == 'asc') ? array_sorted :
        (param == 'desc') ? array_sorted.reverse():
         new Error();
}
