let plusBtn = document.querySelectorAll('.fa-plus-circle');
let minusBtn = document.querySelectorAll('.fa-minus-circle');
let quantitySpan = document.querySelectorAll('.quantity');
let unitPriceElement = document.querySelectorAll('.unit-price');
let totalPriceElement = document.querySelector('.total'); 
let trashIcons = document.querySelectorAll('.fa-trash-alt');
let heartIcons = document.querySelectorAll('.fa-heart');


for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener('click', function() {
    let quantity = parseInt(quantitySpan[i].textContent);
    quantity++;
    quantitySpan[i].textContent = quantity;
    updateTotal();
  });
}


for (let i = 0; i < minusBtn.length; i++) {
  minusBtn[i].addEventListener('click', function() {
    let quantity = parseInt(quantitySpan[i].textContent);
    if (quantity > 0) {
      quantity--;
      quantitySpan[i].textContent = quantity;
      updateTotal();
    }
  });
}


function updateTotal() {
  let total = 0;
  for (let j = 0; j < quantitySpan.length; j++) {
    let quantity = parseInt(quantitySpan[j].textContent);
    let unitPrice = parseFloat(unitPriceElement[j].textContent);
    total += quantity * unitPrice;
  }
  totalPriceElement.textContent = total + " $";
}


for (let i = 0; i < trashIcons.length; i++) {
  trashIcons[i].addEventListener('click', function() {
    const card = this.closest('.card');
    if (card) {
      card.remove();
      updateTotal();
    }
  });
}

// Fonction Aimer 
for (let i = 0; i < heartIcons.length; i++) {
  heartIcons[i].addEventListener('click', function() {
    // Si le cœur est rouge, on le remet normal (gris)
    if (this.style.color === 'red') {
      this.style.color = ''; 
    } else {
      // Sinon, on le met rouge
      this.style.color = 'red';
    }
  });
}
