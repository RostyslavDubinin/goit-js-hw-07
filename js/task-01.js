const len = document.querySelector('ul').children.length;
console.log(`В списке ${len} категории.`);

const categoriesFirstLi = Array.from(
    document.querySelector('#categories').children
  );
  
  const categoriesList = [];
  
  categoriesFirstLi.forEach(element => {
    console.log(
      `· Категория: ${element.firstElementChild.textContent}
· Количество: ${
        element.lastElementChild.children.length
      }`
    );
    
  });
  
 