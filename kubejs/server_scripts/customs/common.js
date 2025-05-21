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
  if (outputTimeType == "seconds")
    return ticks / 20
  else if (outputTimeType == "minutes")
    return ticks / (20 * 60)
  else if (outputTimeType == "hours")
    return ticks / (20 * 60 * 60)
  else if (outputTimeType == "days")
    return ticks / (20 * 60 * 60 * 24)
  else if (outputTimeType == "weeks")
    return ticks / (20 * 60 * 60 * 24 * 7)
  else if (outputTimeType == "months")
    return ticks / (20 * 60 * 60 * 24 * 30)
  else if (outputTimeType == "years")
    return ticks / (20 * 60 * 60 * 24 * 365)
  else
    return ticks
}

/**
 * Converts a given amount of time into ticks.
 *
 * @param {number} time - The amount of time to be converted.
 * @param {string} inputTimeType - The time unit of the input time. Can be one of the following: "seconds", "minutes", "hours", "days", "weeks", "months", "years". If not specified or unrecognized, returns the input time value.
 * @returns {number} - The equivalent time in ticks, or the original time if the unit is unrecognized.
 */
function timeToTicks(time, inputTimeType) {
  if (inputTimeType == "seconds")
    return time * 20
  else if (inputTimeType == "minutes")
    return time * (20 * 60)
  else if (inputTimeType == "hours")
    return time * (20 * 60 * 60)
  else if (inputTimeType == "days")
    return time * (20 * 60 * 60 * 24)
  else if (inputTimeType == "weeks")
    return time * (20 * 60 * 60 * 24 * 7)
  else if (inputTimeType == "months")
    return time * (20 * 60 * 60 * 24 * 30)
  else if (inputTimeType == "years")
    return time * (20 * 60 * 60 * 24 * 365)
  else
    return time
}