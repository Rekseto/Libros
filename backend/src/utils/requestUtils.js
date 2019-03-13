/**
 * Evaluates object by options to return regex query.
 *
 * @param   {Array}   fields     Fields with options
 * @param   {Array}   values     Values
 *
 * @return {Object}
 */
export function searchQuery(fields, values) {
  const obj = {};

  for (const value of values) {
    if (value) {
      if (fields[values.indexOf(value)].isRegex) {
        obj[fields[values.indexOf(value)].field] = {
          $regex: getRegexSymbol(fields[values.indexOf(value)].type) + value,
          $options: "i"
        };
      } else {
        obj[fields[values.indexOf(value)].field] = value;
      }
    }
  }
  return obj;
}

function getRegexSymbol(str) {
  switch (str) {
    case "startsWith":
      return "^";
    case "contains":
      return "";
    default:
      return "";
  }
}
