const loadNavSection = async() => {
    const URL = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(URL);
    const data = await res.json();
    displayNavSection(data.data);
}

const displayNavSection = (datas) => {
    const navSection = document.getElementById('nav-section');
        datas.news_category.forEach(data => {
        const li = document.createElement('li');
        li.classList.add('nav-item')
        li.innerHTML = `
            <a  onclick="categoryNews('${data.category_id}', '${data.category_name}')" class="nav-link"> ${data.category_name} </a>
        `
        navSection.appendChild(li);
    });
}

const categoryNews = async(category_id, category_name) => {
    const URL = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    const res = await fetch(URL);
    const data = await res.json();
    displayCategoryNews(data.data, category_name);
}

const displayCategoryNews = (category_id, category_name) => {
    const newsQuantity = document.getElementById('news-quantity');
    newsQuantity.innerHTML = `
        <h6 class="mb-1">${category_id.length} items found for category <b> ${category_name} </b></h6>
    `
    const newsCard = document.getElementById('news-card');
    newsCard.textContent = "";
    category_id.forEach(singleNews => {
        console.log(singleNews)
        newsCard.innerHTML += `
        <div class="card mb-3 rounded-4">
            <div class="row g-0">
                <div class="col-md-3">
                    <img src="${singleNews.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h5 class="card-title">${singleNews.title}</h5>
                        <p class="card-text mt-5">${singleNews.details.slice(0, 250)}.</p>
                        <p class="card-text mt-5">${singleNews.details.slice(251, 350gi)} ......</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        `
    })
}

loadNavSection();