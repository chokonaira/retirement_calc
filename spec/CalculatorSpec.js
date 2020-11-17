describe("Calculator", () => {
  const Calculator = require('../lib/Calculator');


  it('calculate working years left', () =>{
    calculator = new Calculator()
    let currentAge = 25;
    let desiredRetirementAge = 65;
    const yearsLeft = calculator.workingYearsLeft(currentAge, desiredRetirementAge)
    expect(yearsLeft).toEqual(40)
  })
})