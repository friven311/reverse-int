module.exports = function reverse (n) {
  if (n < 0){
     n = -n;
    var str = String(n);
    var z = str.split("").reverse().join("");
    return z;
  }
  var str = String(n);
  var z = str.split("").reverse().join("");
  return z;
}
