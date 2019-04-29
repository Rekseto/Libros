/**
 * Paginates array and return wanted page.
 *
 * @param   {Array}   arr      Input date
 * @param   {number}  page     Page to return
 * @param   {number}  perPage  Items per page
 *
 * @return {Array}
 */
export function paginateFunction(arr, page, perPage = 25) {
  if (arr.length < perPage) return arr;
  console.log(page);

  if (page - 1 == 0) return arr.slice(0, perPage);
  if (page - 1 == 1) return arr.slice(perPage, perPage * 2);
  const startIndex = page - 1 * perPage - perPage;
  return arr.slice(startIndex, page - 1 * perPage);
}
