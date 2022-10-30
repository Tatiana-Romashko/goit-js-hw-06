const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientListEl=document.querySelector(`#ingredients`);
ingredients.forEach( ingredient =>{
  const listItem=document.createElement("li");
  listItem.textContent=ingredient;
  listItem.classList.add(`item`);
  ingredientListEl.append(listItem);
});