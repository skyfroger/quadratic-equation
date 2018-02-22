module.exports = function solveEquation(equation) {
  var regex = /(-?\d+).\*.x\^2.([+-].\d+).\*.x.([+-].\d+)/; // regex with groups

  var res = equation.match(regex); // find three group in equation
  
  var a = Number(res[1]);
  var b = Number(res[2].replace(' ', ''))
  var c = Number(res[3].replace(' ', ''))

  // solving equation
  var D = b * b - 4 * a * c;

  var x1 = Math.round( (-b + Math.sqrt(D)) / (2 * a));
  var x2 = Math.round( (-b - Math.sqrt(D)) / (2 * a));

  return [x1, x2].sort((a, b)=>(a - b));
}
