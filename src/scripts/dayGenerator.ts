export default function dayGenerator(date = new Date()) {
  const names = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  const dayIndex = date.getDay();

  return names[dayIndex];
}
