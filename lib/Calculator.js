class Calculator{
  
  constructor(currentAge, desiredRetirementAge, currentYear = 0){
    this.currentAge = currentAge
    this.desiredRetirementAge = desiredRetirementAge
    this.currentYear = currentYear
    if (currentAge > desiredRetirementAge) throw new Error('Retirement age already exceeded');
    if (currentYear < 2020) throw new Error('Current year already exceeded');
    if (!Number.isInteger(currentAge)) throw new Error('Invalid, all inputs must be an Interger');
  }
 
  workingYearsLeft(){
    return (this.desiredRetirementAge - this.currentAge)
  }
  retirementYear(workingYearsLeft){
    return (this.currentYear + workingYearsLeft)
  }
}

export default Calculator;
