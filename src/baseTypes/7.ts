/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  monday = "weekday",
  tuesday = "weekday",
  wednesday = "weekday",
  thursday = "weekday",
  friday = "weekday",
  saturday = "weekend",
  sunday = "weekend",
}

function isWeekend(day: Day): boolean {
  return day === "weekend"
}
