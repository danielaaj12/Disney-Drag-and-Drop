const fill = document.querySelector('.foto');
const empties = document.querySelectorAll('.empty');
console.log(fill);
// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// arreglo
let imagenes = [];
imagenes [0] = 'img/ariel.jpg';
imagenes[1] = 'img/blancanieves.png';
imagenes[2] = 'img/cenicienta.png';
imagenes[3] = 'img/merida.png';
imagenes[4] = 'img/tiana.png';
imagenes[5] = 'img/bella.png';

document.fill = imagenes;
document.fill2 = imagenes[1];

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}
