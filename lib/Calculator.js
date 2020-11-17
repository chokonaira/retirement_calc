function Calculator(){
}
Calculator.prototype.workingYearsLeft = function(currentAge, desiredRetirementAge){
  this.currentAge = currentAge
  this.desiredRetirementAge = desiredRetirementAge
  return (desiredRetirementAge - currentAge)
}
Calculator.prototype.retirementYear = function(currentAge, workingYearsLeft){
  return (currentAge + workingYearsLeft)
}

module.exports = Calculator;