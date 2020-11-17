describe("Calculator", () => {
  const Calculator = require('../lib/Calculator');

  describe('First scenerio', ()=>{
    let currentAge = 25;
    let desiredRetirementAge = 65;
    let currentYear = 2015;

    it('calculate working years left', () =>{
      calculator = new Calculator()
      const yearsLeft = calculator.workingYearsLeft(currentAge, desiredRetirementAge)
      expect(yearsLeft).toEqual(40)
    });
    
   it('calculate the year of retirement', () =>{
      calculator = new Calculator()
      const retirementYear = calculator.retirementYear(currentYear, calculator.workingYearsLeft(currentAge, desiredRetirementAge))
      expect(retirementYear).toEqual(2055)
    });
  })

  describe('First scenerio', ()=>{
    let currentAge = 15;
    let desiredRetirementAge = 65;
    let currentYear = 2010;

    it('calculate working years left', () =>{
      calculator = new Calculator()
      const yearsLeft = calculator.workingYearsLeft(currentAge, desiredRetirementAge)
      expect(yearsLeft).toEqual(50)
    });
    
   it('calculate the year of retirement', () =>{
      calculator = new Calculator()
      const retirementYear = calculator.retirementYear(currentYear, calculator.workingYearsLeft(currentAge, desiredRetirementAge))
      expect(retirementYear).toEqual(2060)
    });
  })
  
})