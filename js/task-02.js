const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientListEl=document.querySelector(`#ingredients`);

let ingredientListmarkup=[];
ingredients.forEach( ingredient =>{
  const listItem=document.createElement("li");
  listItem.textContent=ingredient;
  listItem.classList.add(`item`);
  ingredientListmarkup.push(listItem);
});
ingredientListEl.append(...ingredientListmarkup);