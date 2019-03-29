import utils from './utils'

export default (pos, speed) => {
  let sx = pos.x,
    sy = pos.y,
    nx = utils.calcMag(sx, 20, speed),
    ny = utils.calcMag(sy, 20, speed);

  if (sx < 0) {
    sx -= nx;
  }
  if (sx > 0) {
    sx -= nx;
  }
  if (sy < 0) {
    sy -= ny;
  }
  if (sy > 0) {
    sy -= ny;
  }
  return { x: sx, y: sy };
}