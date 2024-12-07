const products = [{
    image : "offers/banner.jpg"
}, {
    image : "offers/offers image/1.png"
}, {
    image : "offers/offers image/2.png"
}, {
    image : "offers/offers image/3.png"
}, {
    image : "offers/offers image/4.png"
}, {
    image : "offers/offers image/5.png"
}, {
    image : "offers/offers image/6.png"
}, {
    image : "offers/offers image/7.png"
}, {
    image : "offers/offers image/8.png"
}, {
    image : "offers/offers image/9.png"
}, {
    image : "offers/offers image/10.png"
}, {
    image : "offers/offers image/11.png"
}, {
    image : "offers/offers image/12.png"
}];

products.forEach((product) => {
    const html = `
        <div class="category_items">
            <a href="#"><img class="sale_items" src="${products.image}"></a>
            <a href="#"><img class="sale_items" src="${products.image}"></a>
            <a href="#"><img class="sale_items" src="${products.image}"></a>
            <a href="#"><img class="sale_items" src="${products.image}"></a>
            <a href="#"><img class="sale_items" src="${products.image}"></a>
            <a href="#"><img class="sale_items" src="${products.image}"></a>
            <a href="#"><img class="sale_items" src="${products.image}"></a>
            <a href="#"><img class="sale_items" src="${products.image}"></a>
            <a href="#"><img class="sale_items" src="${products.image}"></a>
            <a href="#"><img class="sale_items" src="${products.image}"></a>
            <a href="#"><img class="sale_items" src="${products.image}"></a>
            <a href="#"><img class="sale_items" src="${products.image}"></a>
        </div>`;
        console.log(html);
})




