let cel = document.getElementById('input_cel');
let fer = document.getElementById('input_fer');

cel.addEventListener('input', function change() {
  let c = this.value;
  let f = c * (9 / 5) + 32;
  if (!Number.isInteger) {
    f = f.toFixed(4);
  }
  fer.value = f;
});

fer.addEventListener('input', function change() {
  let f = this.value;
  let c = (f - 32) * (5 / 9);
  if (!Number.isInteger && !Number == 0) {
    c = c.toFixed(4);
  }
  fer.value = c;
});
