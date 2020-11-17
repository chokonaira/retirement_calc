  import Calculator from '../lib/Calculator';

describe("Calculator", () => {

  describe('First scenerio', ()=>{
    let currentAge = 25;
    let desiredRetirementAge = 65;
    let currentYear = 2015;

    it('calculate working years left', () =>{
      const calculator = new Calculator()
      const yearsLeft = calculator.workingYearsLeft(currentAge, desiredRetirementAge)
      expect(yearsLeft).toEqual(40)
    });
    
   it('calculate the year of retirement', () =>{
      const calculator = new Calculator()
      const retirementYear = calculator.retirementYear(currentYear, calculator.workingYearsLeft(currentAge, desiredRetirementAge))
      expect(retirementYear).toEqual(2055)
    });
  })

  describe('First scenerio', ()=>{
    let currentAge = 15;
    let desiredRetirementAge = 65;
    let currentYear = 2010;

    it('calculate working years left', () =>{
      const calculator = new Calculator()
      const yearsLeft = calculator.workingYearsLeft(currentAge, desiredRetirementAge)
      expect(yearsLeft).toEqual(50)
    });
    
   it('calculate the year of retirement', () =>{
      const calculator = new Calculator()
      const retirementYear = calculator.retirementYear(currentYear, calculator.workingYearsLeft(currentAge, desiredRetirementAge))
      expect(retirementYear).toEqual(2060)
    });
  })
  
})