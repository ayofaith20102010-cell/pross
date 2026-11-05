 let sentchange = [
    " Use our size guide to find your perfect fit — UK sizing applies",
    "Official PUMA, LACOSTE & GUESS Retailer in Nigeria. 100% Authentic Guaranteed"
 ]
 let sentele = document.getElementById("textchange")
 let index = 0;

 setInterval(() => {
    index++;
    if(index >= sentchange.length){
        index = 0;
 }
 sentele.style.opacity = 0;


 setTimeout(() => {
    sentele.textContent =sentchange[index]
     sentele.style.opacity = 1;

 },500)

},3000)


let imgchange = [
    "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
    "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
    "https://cdn.dummyjson.com/product-images/groceries/kiwi/1.webp"
 ]
 let imgele = document.getElementById("zamzing");
 let img = 0;

 setInterval(() => {

//  imgele.style.opacity = 1;


 setTimeout(() => {
    img = (img + 1) % imgchange.length;
    imgele.src = imgchange[img];
     imgele.style.opacity = 1;

 },1000)

},6000)



// const sub = async() => {
//     const responce = await fetch("https://dummyjson.com/products")

//     const data = await responce.json()
    

//     for(i = 0; i <= data.products.length;i++){
//          console.log(data.products[i])

//          let container = document.getElementById("result")
//          container.innerHTML += `<div class = "all"> 
//           <h4 id = "tit">${data.products[i].title}</h4> 

//          <button onclick = "handlebeasec"> <img id="imgs" src="${data.products[i].images[0]}"></button>

//          <h4>${data.products[i].description}</h4>  

//          <h4>n${data.products[i].price}</h4> 

//          </div>`

// }
    
//     }
   
//     sub()



const add = async() => { 
    
    const responce = await fetch("https://dummyjson.com/products")
    const data = await responce.json()

    const beautyProducts = data.products.filter(product => product.category === "beauty")

    // container.innerHTML = ""

    for(i = 0; i < beautyProducts.length; i++){
         console.log(beautyProducts[i])

        let container = document.getElementById("beauty")
         container.innerHTML += `<div class = "bea"> 
    
         <button onclick = "handlebeasec()"> 
           <img id="imgs" src="${beautyProducts[i].images[0]}">
         </button> 

         <h4 id = "beatit">${beautyProducts[i].title}</h4> 

         <h4 id = "beaprice">₦${beautyProducts[i].price}  <span id = "beaoldprice"> ₦50 </span> </h4>

         </div>`
    }

    
}

add()

const multi = async() => { 
    
    const responce = await fetch("https://dummyjson.com/products")
    const data = await responce.json()

    const fragranceProducts = data.products.filter(product => product.category === "fragrances")

    // container.innerHTML = ""

    for(i = 0; i < fragranceProducts.length; i++){
         console.log(fragranceProducts[i])

        let container1 = document.getElementById("fragrances")
         container1.innerHTML += `<div class = "fra"> 
          
         <button onclick = "handlebeasec()"> 
           <img id="imgs" src="${fragranceProducts[i].images[0]}">
         </button>

         <h4 id = "fratit">${fragranceProducts[i].title}</h4> 

         <h4  id = "fraprice" >₦${fragranceProducts[i].price} <span id = "fraoldprice"> ₦50 </span>  </h4> 

         </div>`
    }

    
}

multi()

const div = async() => { 
    
    const responce = await fetch("https://dummyjson.com/products")
    const data = await responce.json()

    const furnitureProducts = data.products.filter(product => product.category === "furniture")

    // container.innerHTML = ""



    for(i = 0; i < furnitureProducts.length; i++){
         console.log(furnitureProducts[i])

        let container2 = document.getElementById("furniture")
         container2.innerHTML += `<div class = "fur"> 
          
           
         <img id="imgs" onclick = "furnituresec" src="${furnitureProducts[i].images[0]}">

         <h4 id = "furtit">${furnitureProducts[i].title}</h4> 

         <h4  id = "furprice" >₦${furnitureProducts[i].price} <span id = "furoldprice"> ₦50 </span>  </h4> 

         </div>`
    }

}
div()

// function furnituresec(imgsrc,title,description,price){
//     let product = furnitureProducts[imgsrc,title,description,price]
//     let imgclicked = document.getElementById("furspe")
//     imgclicked.innerHTML = `
//     <div class = "fur"> 
          
           
//          <img id="imgs" src="${fragranceProducts[i].images[0]}">

//          <h4 id = "furtit">${furnitureProducts[i].title}</h4> 

//          <h4  id = "furprice" >₦${furnitureProducts[i].price} <span id = "furoldprice"> ₦50 </span>  </h4> 

//          </div>`
      
// }



const sign = async() => { 
    
    const responce = await fetch("https://dummyjson.com/products")
    const data = await responce.json()

    const grocerieProducts = data.products.filter(product => product.category === "groceries")

    // container.innerHTML = ""

    for(i = 0; i < grocerieProducts.length; i++){
         console.log(grocerieProducts[i])

        let container2 = document.getElementById("groceries")
         container2.innerHTML += `<div class = "fur"> 
          
         <button onclick = "handlebeasec()"> 
           <img id="imgs" src="${grocerieProducts[i].images[0]}">
         </button>

         <h4 id = "furtit">${grocerieProducts[i].title}</h4> 

         <h4  id = "furprice" >₦${grocerieProducts[i].price} <span id = "grooldprice"> ₦50 </span>  </h4> 

         </div>`
    }

    
}

sign()