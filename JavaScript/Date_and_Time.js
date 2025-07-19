// ✅ Create a new Date object with the current system date and time
let curr = new Date();
console.log("🕒 Current Date and Time:", curr);

console.log();

// ✅ Another way to get the current date (equivalent to the above)
console.log("🕒 Another current Date object:", new Date());

console.log();

// ✅ Create a specific date from a date string
let dateFromString = new Date('Feb 14 2006 10:54');
console.log("📅 Date from string 'Feb 14 2006 10:54':", dateFromString);

console.log();

// ✅ Create a specific date using numbers: year, month (0-based), day, hour
let newDate = new Date(2006, 1, 14, 7);  
// ⚠️ Note: Months are 0-indexed (0 = January, 1 = February, etc.)
console.log("📅 Date created with numbers (Feb 14, 2006 at 07:00):", newDate);

console.log();

// ✅ Get the day of the week
// Returns a number from 0 (Sunday) to 6 (Saturday)
console.log("📆 Day of the week (0=Sun):", newDate.getDay());

console.log();


// ✅ Get the full year from the date object
console.log("📆 Full year of newDate:", newDate.getFullYear());

console.log();


// ✅ Set the year of the date to 2007
// This method **modifies** the original date object and returns the timestamp
let updatedTimestamp = newDate.setFullYear(2007);
console.log("✅ Updated newDate after setFullYear(2007):", newDate);
console.log();
console.log("📈 Timestamp returned by setFullYear:", updatedTimestamp);
console.log();
