const loadNavSection = async() => {
    const URL = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(URL);
    const data = await res.json();
    displayNavSection(data.data);
    // console.log(data.data.news_category[1].category_name);
}

const displayNavSection = (datas) => {
    const navSection = document.getElementById('nav-section');
    // console.log(datas)
    datas.news_category.forEach(data => {
        console.log(data.category_name);
        const a = document.createElement('a');
        a.href = "";
        a.innerText = data.category_name;
        navSection.appendChild(a);
    });
}



loadNavSection();