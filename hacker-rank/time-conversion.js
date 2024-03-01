function convertTime(timeString) {
  // Check if the input is in 12-hour format
  const is12HourFormat = /[AP]M/.test(timeString);

  if (is12HourFormat) {
    // Convert 12-hour format to 24-hour format
    let [time, period] = timeString.split(/(?=[AP]M)/);
    let [hours, minutes, seconds = "00"] = time.split(/[:]/);

    if (period === "PM" && hours !== "12") {
      hours = String(Number(hours) + 12);
    } else if (period === "AM" && hours === "12") {
      hours = "00";
    }

    // Formatting minutes and seconds to always have two digits
    minutes = minutes.padStart(2, "0");
    seconds = seconds.padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  } else {
    // Convert 24-hour format to 12-hour format
    let [hours, minutes, seconds] = timeString.split(/[:]/);

    if (hours >= 12) {
      return `${hours > 12 ? hours - 12 : hours}:${minutes}:${
        seconds || "00"
      } PM`;
    } else {
      return `${hours === "00" ? "12" : hours}:${minutes}:${
        seconds || "00"
      } AM`;
    }
  }
}

// Example usage:
console.log(convertTime("07:05:45PM")); // Output: 19:05:45
