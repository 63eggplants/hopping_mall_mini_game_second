async function loadItems() {
  const response = await fetch('../data/data.json');
  return response.json();
}

function createHTMLString(item) {
  return `
    <li class="item" data-color="${item.color}"
    data-type="${item.type}">
        <img
            src="${item.image}"
            alt="${item.type}"
            class="item__thumbnail"
        />
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}
function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map((item) => createHTMLString(item)).join('');
}
function updateItems(key, value) {
  const itemsList = document.querySelectorAll('.item');
  console.log(itemsList);
  itemsList.forEach((item) => {
    console.log(key, value, item.dataset);
    if (item.dataset[key] === value) {
      item.classList.remove('invisible');
    } else {
      item.classList.add('invisible');
    }
  });
}
function onButtonClick(event) {
  const target = event.target;
  const key = target.dataset.key;
  const value = target.dataset.value;
  console.log(target, key, value);
  if (key === undefined || value === undefined) {
    return;
  }
  updateItems(key, value);
}
function setClickEvent(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons');
  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', onButtonClick);
}

loadItems()
  .then((json) => json.items)
  .then((items) => {
    console.log(items);
    displayItems(items);
    setClickEvent(items);
  });
