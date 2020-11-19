class Calculator{
  currentAge : number;
  desiredRetirementAge : number;
  currentYear : number
  
  constructor(currentAge : number, desiredRetirementAge : number, currentYear : number = 0){
    this.currentAge = currentAge
    this.desiredRetirementAge = desiredRetirementAge
    this.currentYear = currentYear
  }
 
  workingYearsLeft(){
    return (this.desiredRetirementAge - this.currentAge)
  }
  retirementYear(workingYearsLeft){
    return (this.currentYear + workingYearsLeft)
  }
}

export default Calculator;