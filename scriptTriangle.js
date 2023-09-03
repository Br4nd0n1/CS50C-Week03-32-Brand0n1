/* Students: Please use this week's project for Week 3: Assignment 3: More JavaScript. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */

function loopTriangle()
  {
    for (let triangle = "#"; triangle.length <= 7; triangle += "#")
    {
      console.log(triangle)
    }
  }

function fizBuz()
  {
    for (let i = 1; i <= 100; i += 1)
    {
      if (i % 3 == 0 && i % 5 == 0)
      {
        console.log("FizzBuzz")
      }
      else if (i % 3 == 0)
      {
        console.log("Fizz")
      }
      else if (i % 5 == 0)
      {
        console.log("Buzz")
      }
      else
      {
        console.log(i)
      } 
    }
  }

function chess()
{
    let size = window.prompt("Enter A Whole Number")
    if (Number.isInteger(Number(size)))
    {
    let chessBoard = ""
    for (let i = 1; i <= size; i += 1)
    {
      let oddCheck = (i % 2)
      chessBoard = chessBoard + createRow(size, oddCheck) + "\n"
    }
    console.log(chessBoard)
    }
    else
    {
      window.alert("Error Invalid Number")
    } 
}

function createRow(rowSize, oddRow)
{
  let row = ""
  let symbolOne = "#"
  let symbolTwo = " "
  if (!oddRow)
  {
    symbolOne = " "
    symbolTwo = "#"
  } 
  for (let i = 1; i <= rowSize; i += 1)
  {
    if (!(i % 2))
    {
      row = row + symbolOne
    }
    else
    {
      row = row + symbolTwo 
    }
  }
  return row
}