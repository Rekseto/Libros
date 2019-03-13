/**
 * Returns Date after adding days to it.
 *
 * @param   {Date}   date      Input date
 * @param  {number}  days      Number of days to add
 *
 * @return {Date}
 */
export function addDays(date, days = 30) {
  const result = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);

  return result;
}
