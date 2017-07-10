/**
 * Created by R4L on 2017/7/10.
 */
var gpio = require("gpio");

// Calling export with a pin number will export that header and return a gpio header instance
var gpio16 = gpio.export(16, {
  interval: 200,
  ready: function() {
    gpio16.set();
  }
});
