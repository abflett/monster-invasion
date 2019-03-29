
export default {
  display: function (display) {
    if (display) return "flex";
    else return "none";
  },
  getRndInteger: function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  roundDec: function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  },
  calcMag: function calcMag(num, mag, speed) {
    return (num / mag) * speed;
  },
  withinRadius: function withinRadius(pos, radius) {
    const x = pos.x,
      y = pos.y;
    if ((x < radius && x > -radius) && (y < radius && y > -radius)) {
      return false;
    }
    return true;
  }
}