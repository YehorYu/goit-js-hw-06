// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const categories = document.querySelectorAll("li.item");

const sumCategories = () =>
  console.log(`Number of categories: ${categories.length}`);

const showAllCategories = (categories) =>
  categories.forEach((category) => {
    const headerText = category.firstElementChild.textContent;
    const categoryElements = category.querySelectorAll("li");
    const showHeaderText = console.log(`Category: ${headerText}`);
    const showNumberOfElements = console.log(
      `Elements: ${categoryElements.length}`
    );
    return showHeaderText, showNumberOfElements;
  });

sumCategories();
showAllCategories(categories);
