  import Calculator from '../lib/Calculator';

describe("Calculator", () => {

  describe('First scenerio', ()=>{
    let currentAge = 25;
    let desiredRetirementAge = 65;
    let currentYear = 2015;

    it('calculate working years left', () =>{
      const calculator = new Calculator(currentAge, desiredRetirementAge, currentYear)
      const yearsLeft = calculator.workingYearsLeft()
      expect(yearsLeft).toEqual(40)
    });
    
   it('calculate the year of retirement', () =>{
      const calculator = new Calculator(currentAge, desiredRetirementAge, currentYear)
      const retirementYear = calculator.retirementYear(calculator.workingYearsLeft(currentAge, desiredRetirementAge))
      expect(retirementYear).toEqual(2055)
    });
  })

  describe('second scenerio', ()=>{
    let currentAge = 15;
    let desiredRetirementAge = 65;
    let currentYear = 2010;

    it('calculate working years left', () =>{
      const calculator = new Calculator(currentAge, desiredRetirementAge, currentYear)
      const yearsLeft = calculator.workingYearsLeft()
      expect(yearsLeft).toEqual(50)
    });
    
   it('calculate the year of retirement', () =>{
      const calculator = new Calculator(currentAge, desiredRetirementAge, currentYear)
      const retirementYear = calculator.retirementYear(calculator.workingYearsLeft(currentAge, desiredRetirementAge))
      expect(retirementYear).toEqual(2060)
    });
  })
})