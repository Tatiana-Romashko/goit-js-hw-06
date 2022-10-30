const mainList=document.querySelectorAll(`.item`);
const numberOfCategories=mainList.length;
console.log(`Number of categories:`, numberOfCategories);
for(const categoryItem of mainList) {
    const categoryByTagName=categoryItem.querySelector("h2");
    console.log(`Category:`, categoryByTagName.textContent);
    const categoryItemsList=categoryItem.querySelector("ul");
    const categoryItemLength=categoryItemsList.querySelectorAll("li").length;
    console.log(`Elements:`, categoryItemLength);
};