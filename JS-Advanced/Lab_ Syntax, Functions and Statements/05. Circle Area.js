function solve(n) {
   return (typeof n ==="number") ? (n ** 2 * Math.PI).toFixed(2)
    : `We can not calculate the circle area, because we receive a ${typeof n}.`
}
