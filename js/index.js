const loadNavSection = async() => {
    const URL = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(URL);
    const data = await res.json();
    displayNavSection(data.data);
    // console.log(data.data.news_category[1].category_name);
}

const displayNavSection = (datas) => {
    const navSection = document.getElementById('nav-section');
    // console.log(datas.news_category)
    datas.news_category.forEach(data => {
        // console.log(data.category_id);
        const li = document.createElement('li');
        li.classList.add('nav-item')
        li.innerHTML = `
            <a  onclick="categoryNews('${data.category_id}')" class="nav-link"> ${data.category_name} </a>
        `
        navSection.appendChild(li);
    });
}

const categoryNews = async(category_id) => {
    const URL = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    const res = await fetch(URL);
    const data = await res.json();
    displayCategoryNews(data.data);
}

const displayCategoryNews = (category_id) => {
    // console.log(category_id);
    category_id.forEach(singleCategory => {
        console.log(singleCategory);
    })
}

loadNavSection();