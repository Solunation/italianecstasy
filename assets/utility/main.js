function generateElement(){
    var dish_name = document.getElementById("name").value;
    var dish_image = document.getElementById("image").value;
    var dish_ingredients = document.getElementById("ingredients").value;
    var dish_category = document.getElementById("category").value;
    var dish_price = document.getElementById("price").value;

    var result_div = document.getElementById("result");

    //console.table([dish_name, dish_image, dish_ingredients, dish_category, dish_price])

    var ele = 
    `<div class="col-lg-6 menu-item ${dish_category.toLowerCase()}" style="position: absolute; left: 0px; top: 0px;">
        <img src="${dish_image}" class="menu-img" alt="">
        <div class="menu-content">
            <a href="#">${dish_name}</a><span>₹${dish_price}</span>
        </div>
        <div class="menu-ingredients">
            ${dish_ingredients}
        </div>
    </div>`


    console.log(ele);

    result_div.innerText = ele;
}