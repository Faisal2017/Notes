var assert = require('assert');
var WaterBottle = require('../water_bottle.js');

describe('WaterBottle', function () {
  var bottle;

  beforeEach(function () {
    bottle = new WaterBottle();
  });

  it('should be empty at start', function () {
    assert.strictEqual(0, bottle.volume);
  });

  it('should have a hydrationValue of 10', function () {
    assert.strictEqual(10, bottle.hydrationValue);
  });

  it('should have a volume of 100 when filled', function () {
    bottle.fill();
    assert.strictEqual(100, bottle.volume);
  });

  it('should decrement volume by 10 when drunk', function () {
    bottle.fill();
    var startValue = bottle.volume;
    bottle.drink();
    assert.strictEqual(startValue - 10, bottle.volume);
  });

  it('should have a volume of 0 when emptied', function () {
    bottle.empty();
    assert.strictEqual(0, bottle.volume);
  });

  it('should not decrement volume below 0', function () {
    bottle.empty();
    bottle.drink();
    assert.strictEqual(0, bottle.volume);
  });

  it('should return hydration value when drink 0', function () {
    bottle.fill();
    assert.strictEqual(10, bottle.drink());
  });

  it('should return the dregs', function () {
    bottle.volume = 5;
    assert.strictEqual(5, bottle.drink());
  });
});
