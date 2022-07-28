const btn = document.getElementById('btn');
const input = document.getElementById('input');
const boxs = document.querySelectorAll('.box');
let drage = null;

dragItem = () => {
  const items = document.querySelectorAll('.item');
  items.forEach((item) => {
    item.addEventListener('dragstart', () => {
      drage = item;
    });

    item.addEventListener('dragend', () => {
      drage = null;
    });

    boxs.forEach((box) => {
      box.addEventListener('dragover', (e) => {
        e.preventDefault();
        box.style.background = '#000';
        box.style.color = '#fff';
      });

      box.addEventListener('dragleave', () => {
        box.style.background = '#fff';
        box.style.color = '#000';
      });

      box.addEventListener('drop', () => {
        box.append(drage);
        box.style.background = '#fff';
        box.style.color = '#000';
      });
    });
  });
};

add = () => {
  if (input.value != '') {
    boxs[0].innerHTML += `
    <p draggable='true' class='item'>${input.value}</p>`;
    input.value = '';
    input.focus();
  }
  dragItem();
};

btn.addEventListener('click', add);

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    add();
  }
});
