/**
 * Created by R4L on 2017/7/10.
 */
let waterfall = require('async/waterfall');
var gpio = require("gpio");
let pins = [];
// Calling export with a pin number will export that header and return a gpio header instance
waterfall([
  function (cb) {
    var gpio16 = gpio.export(16, {
      interval: 200,
      ready: function () {
        pins.push(gpio16);
        cb(null);
      }
    });
  },
  function (cb) {
    var gpio18 = gpio.export(18, {
      interval: 200,
      ready: function () {
        pins.push(gpio18);
        cb(null);
      }
    });
  },
  function (cb) {
    var gpio22 = gpio.export(22, {
      interval: 200,
      ready: function () {
        pins.push(gpio22);
        cb(null);
      }
    });
  },
  function (cb) {
    var gpio36 = gpio.export(36, {
      interval: 200,
      ready: function () {
        pins.push(gpio36);
        cb(null);
      }
    });
  }
], function (err, result) {
  // result now equals 'done'
  startBlin();
});
let level = 1;
let startBlin = ()=> {
  intervalTimer = setInterval(function() {
    pins[0].set();
    setTimeout(function() { pins[0].reset(); }, 500);
  }, 1000);
}
