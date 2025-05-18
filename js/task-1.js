const list = document.querySelector(`#categories`);

const categories = list.querySelectorAll(`.item`)



console.log(`Number of categories: ${categories.length}`);

categories.forEach(item => {
    const title = item.querySelector(`h2`).textContent;

    const elements = item.querySelectorAll(`ul li`).length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elements}`);
})