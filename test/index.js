/* jshint node:true */
/* jshint esversion:6 */
'use strict';

const b = require("../");

const a = b.calculate('./test.mp4', function(err, c) {
    setTimeout(function () {
        console.log("Actual: " + c);
    }, 1000);
});

console.log("Expected: ~0.013");
