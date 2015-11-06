
'use strict';

var c = document.getElementById("myCanvas");
var context = c.getContext("2d");
var PI = Math.PI;

context.beginPath();
context.arc(100, 100, 50, PI, 2 * PI );
context.fillStyle = "black";
context.fill();
