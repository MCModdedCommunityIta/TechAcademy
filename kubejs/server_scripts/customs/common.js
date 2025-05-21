//database of all time operations  
const timeDivisors = {
    seconds: 20,
    minutes: 20 * 60,
    hours: 20 * 60 * 60,
    days: 20 * 60 * 60 * 24,
    weeks: 20 * 60 * 60 * 24 * 7,
    months: 20 * 60 * 60 * 24 * 30,
    years: 20 * 60 * 60 * 24 * 365,
  };

/**
 * Converts a given number of ticks into a specified time unit.
 *
 * @param {number} ticks - The number of ticks to be converted.
 * @param {string} outputTimeType - The desired time unit for conversion. 
 *        Can be one of the following: "seconds", "minutes", "hours", "days", 
 *        "weeks", "months", "years". If not specified or unrecognized, 
 *        returns the input ticks value.
 * @returns {number} - The equivalent time in the specified unit, or the 
 *          original ticks if the unit is unrecognized.
 */
function ticksToTime(ticks, outputTimeType) {
  return ticks / (timeDivisors[outputTimeType] || 1);
}

/**
 * Converts a given amount of time into ticks.
 *
 * @param {number} time - The amount of time to be converted.
 * @param {string} inputTimeType - The time unit of the input time. Can be one of the following: "seconds", "minutes", "hours", "days", "weeks", "months", "years". If not specified or unrecognized, returns the input time value.
 * @returns {number} - The equivalent time in ticks, or the original time if the unit is unrecognized.
 */
function timeToTicks(ticks, outputTimeType) {
  return ticks * (timeDivisors[outputTimeType] || 1);
}