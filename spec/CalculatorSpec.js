  import Calculator from '../lib/Calculator';

describe("Calculator", () => {

  describe('First scenerio', ()=>{
    let currentAge = 25;
    let desiredRetirementAge = 65;
    let currentYear = 2025;

    it('calculate working years left of 40', () =>{
      const calculator = new Calculator(currentAge, desiredRetirementAge, currentYear)
      const yearsLeft = calculator.workingYearsLeft()
      expect(yearsLeft).toEqual(40)
    });
    
   it('calculate the year of retirement', () =>{
      const calculator = new Calculator(currentAge, desiredRetirementAge, currentYear)
      const retirementYear = calculator.retirementYear(calculator.workingYearsLeft(currentAge, desiredRetirementAge))
      expect(retirementYear).toEqual(2065)
    });
  })

  describe('second scenerio', ()=>{
    let currentAge = 15;
    let desiredRetirementAge = 65;
    let currentYear = 2030;

    it('calculate working years left of 50', () =>{
      const calculator = new Calculator(currentAge, desiredRetirementAge, currentYear)
      const yearsLeft = calculator.workingYearsLeft()
      expect(yearsLeft).toEqual(50)
    });
    
   it('calculate the year of retirement', () =>{
      const calculator = new Calculator(currentAge, desiredRetirementAge, currentYear)
      const retirementYear = calculator.retirementYear(calculator.workingYearsLeft(currentAge, desiredRetirementAge))
      expect(retirementYear).toEqual(2080)
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

  describe('exceptions', () => {
    it('throw error if working years left is exceeded', () =>{
      expect(() => { new Calculator(70, 65, 2020) }).toThrow()
    });

    it('throw error is current years is exceeded', () =>{
      expect(() => { new Calculator(60, 65, 2010) }).toThrow()
    });
  })
  
  
})