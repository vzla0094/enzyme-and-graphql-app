// take two numbers and add them
// display the total on submit
// how do I want this to fail? always return 0? fail gracefully or catastrophicly

// in take numbers, so it should return numbers
// needs to be a number
const add = (number1, number2) => {
  if (!!number1 || !!number2) return 0
  if (!Number.isInteger(number1) || !Number.isInteger(number2)) return 0
  return number1 + number2
}
