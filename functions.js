'use strict';
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const steps = 30000;
const grid = Math.PI * 2 / steps;

canvas.width = 800;
canvas.height = canvas.width;
ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, canvas.width, canvas.height);
var radius = canvas.width / 2;
ctx.translate(radius, radius);
radius = radius * 0.9;
var frame = 0;
var lines = 10;

window.requestAnimationFrame(animate);

function animate() {
    const gap = grid * frame;
    ctx.beginPath();
    ctx.fillStyle = "rgba(255, 255, 255, 0.01)";
    ctx.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, -radius);
    for (var i = 1; i < lines + 1; i++) {
        ctx.rotate(gap * i);
        ctx.lineTo(0, -radius);
    }
    ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
    ctx.lineWidth = radius * 0.015;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
    ctx.rotate((-gap) * lines * (lines + 1) / 2);
    frame++;
    if (frame == steps) {
        frame = 0;
    }
    window.requestAnimationFrame(animate);
}

document.getElementById("lines").addEventListener("onChange" ,function(this) {
	lines = Number(this.value);
	frame = 0;
});
