document.getElementById("startShoppingBtn").addEventListener("click", function() {
    scrollToLastProduct();
});

function scrollToLastProduct() {
    const products = document.querySelectorAll(".product");
    const lastProduct = products[products.length - 1];
    const offset = document.querySelector('header').offsetHeight; // Visina header-a
    const targetPosition = lastProduct.offsetTop - offset;
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
}

function goToProductPage(productPage) {
    window.location.href = productPage;
}