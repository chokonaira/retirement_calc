describe("Calculator", () => {
  const Calculator = require('../lib/Calculator');


  it('calculate working years left', () =>{
    calculator = new Calculator()
    let currentAge = 25;
    let desiredRetirementAge = 65;
    const yearsLeft = calculator.workingYearsLeft(currentAge, desiredRetirementAge)
    expect(yearsLeft).toEqual(40)
  });
  
 it('calculate the year of retirement', () =>{
    calculator = new Calculator()
    let currentYear = 2015;
    let yearsLeft = 40;
    const retirementYear = calculator.retirementYear(currentYear, yearsLeft)
    expect(retirementYear).toEqual(2055)
  });
})