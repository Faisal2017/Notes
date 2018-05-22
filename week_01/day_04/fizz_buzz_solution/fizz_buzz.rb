def fizz_buzz(input)
  return "FizzBuzz" if (input % 3 == 0) && (input % 5 == 0)
  return "Fizz" if (input % 3 == 0)
  return "Buzz" if (input % 5 == 0)
  return input.to_s
end