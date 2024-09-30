export const convertDateToCustomFormat = (dateString) => {
  const date = new Date(dateString);

  // Convert to GMT +06:00 (360 minutes ahead of UTC)
  const timeZoneOffset = 6 * 60; // 6 hours in minutes
  const timeZoneDate = new Date(date.getTime() + timeZoneOffset * 60 * 1000);

  // Format date components
  const day = timeZoneDate.getUTCDate();
  const month = timeZoneDate.toLocaleString("en-US", {
    month: "short",
    timeZone: "UTC",
  });
  const year = timeZoneDate.getUTCFullYear().toString().slice(-2);

  // Format time components
  let hours = timeZoneDate.getUTCHours();
  const minutes = timeZoneDate.getUTCMinutes().toString().padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format

  // Build the formatted string
  return `${day} ${month}, ${year} - ${hours}:${minutes} ${period}`;
};
