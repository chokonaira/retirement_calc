  import Calculator from '../lib/Calculator';

describe("Calculator", () => {

  describe('First scenerio', ()=>{
    let currentAge = 25;
    let desiredRetirementAge = 65;
    let currentYear = 2015;

    it('calculate working years left of 40', () =>{
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

    it('calculate working years left of 50', () =>{
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

  describe('third scenerio', () => {
    let currentAge = 65;
    let desiredRetirementAge = 65;
    let currentYear = 2020;

    it('calculate working years left of 0', () =>{
      const calculator = new Calculator(currentAge, desiredRetirementAge, currentYear)
      const yearsLeft = calculator.workingYearsLeft()
      expect(yearsLeft).toEqual(0)
  })
  it('calculate the year of retirement', () =>{
    const calculator = new Calculator(currentAge, desiredRetirementAge, currentYear)
    const retirementYear = calculator.retirementYear(calculator.workingYearsLeft(currentAge, desiredRetirementAge))
    expect(retirementYear).toEqual(2020)
  });
  })
  
})