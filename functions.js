'use strict';
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const speed = 700;

canvas.width = 800;
canvas.height = canvas.width;
ctx.fillStyle = "#d5d5d5";
ctx.fillRect(0, 0, canvas.width, canvas.height);

var radius = canvas.width / 2;
ctx.translate(radius, radius);
radius = radius * 0.9;
var frame = 0;
var lines = 1;
var steps = speed;
var grid = Math.PI * 2 / steps;
ctx.fillStyle = "rgba(255, 255, 255, 0.01)";
ctx.strokeStyle = "rgba(0, 0, 0, 0.01)";
ctx.lineWidth = radius * 0.01;
ctx.lineCap = "round";
ctx.lineJoin = "round";

window.requestAnimationFrame(animate);

function animate() {
    const gap = grid * frame;
    ctx.beginPath();
    if (frame % 20 == 0) {
        ctx.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    }
    ctx.beginPath();
    ctx.moveTo(0, radius);
    for (var i = 1; i < lines + 1; i++) {
        ctx.rotate(gap * i);
        ctx.lineTo(0, radius); 
    }
    ctx.stroke();
    ctx.rotate(-gap * lines * (lines + 1) / 2);
    frame++;
    if (frame == steps) {
        frame = 0;
        lines++;
        steps = lines * (lines + 1) * speed / 2;
        grid = Math.PI * 2 / steps;
    }
    window.requestAnimationFrame(animate);
}
