// const len = document.querySelector('ul').children.length;
// console.log(`В списке ${len} категории.`);

const categoriesFirstLi = Array.from(
    document.querySelector('#categories').children
  );
  
  const categoriesList = [];
  
  categoriesFirstLi.forEach(element => {
    categoriesList.push(
      `Категория: ${element.firstElementChild.textContent.trim()} / Количество: ${
        element.lastElementChild.children.length
      }`
    );
  });
  
  console.log(categoriesList);