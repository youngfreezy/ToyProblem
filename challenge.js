// Challenge 1
// Create a function that takes an array of numbers and returns an array of only the odd numbers.  The function must not use looping or libraries that use looping.

function findOdds(a) {
  if (a.length == 0) return [];
  if (a.length == 1) {
    return (a[0] % 2 == 0) ? [] : a.slice();
  }
  return findOdds(a.slice(0, 1))
    .concat(findOdds(a.slice(1)));
}
console.log(findOdds([1, 2, 3, 4, 5, 55]))

// Challenge 2
// Based on the description of Pascal's Triangle, create a function that takes number of rows as an argument, and then prints out Pascal's triangle up to the number of rows specified.
// The function must not use looping or libraries that use looping
function pascal(n) {

  function pascalRecursive(n, a) {
    if (n < 2) return a;
    // console.log(a)
    var prevTier = a[a.length - 1];
    var curTier = [1];

    for (var i = 1; i < prevTier.length; i++) {
      curTier[i] = prevTier[i] + prevTier[i - 1];
    }

    curTier.push(1);
    a.push(curTier);
    //do this all the way down
    return pascalRecursive(n - 1, a);
  }

  return pascalRecursive(n, [
    [1]
  ]);

}

var triangle = pascal(4);
console.log(triangle);
