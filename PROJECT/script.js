const menu = document.querySelector('.handbur')
const list = document.querySelector('.navbar nav ul')
const btn = document.querySelector('.btn')
menu.addEventListener('click',()=>{
    list.classList.toggle('tt')
})

menu.addEventListener('click',()=>{
    btn.classList.toggle('tt')
})

const box = document.querySelector('.btn')
const yy = document.querySelector('.login')
box.addEventListener('click',()=>{
    yy.classList.add('vv')
})

const signup = document.querySelector('.signup')
const main = document.querySelector('.ssignup')
signup.addEventListener('click',()=>{
    main.classList.add('vk')
})

const icon = document.querySelector("#icon")
const tt = document.querySelector('.login')
icon.addEventListener('click',()=>{
    tt.classList.remove('vv')
})

const icon2 = document.querySelector("#icon2")
const ee = document.querySelector('.ssignup')
icon2.addEventListener('click',()=>{
    ee.classList.remove('vk')
})
 const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{
cart.classList.add('cart-active');
});

btnClose.addEventListener('click',()=>{
cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
loadContent();

}

//Remove Food Items  From Cart

function loadContent(){
let btnRemove=document.querySelectorAll('.cart-remove');
btnRemove.forEach((btn)=>{
btn.addEventListener('click',removeItem);
});

//Product Item Change Event

let qtyElements=document.querySelectorAll('.cart-quantity');
qtyElements.forEach((input)=>{
input.addEventListener('change',changeQty);
});

//Product Cart

let cartBtns=document.querySelectorAll('.cartt');
cartBtns.forEach((btn)=>{
btn.addEventListener('click',addCart);
});
updateTotal();
}

//Remove Item

function removeItem(){
if(confirm('Are Your Sure to Remove')){
let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
itemList=itemList.filter(el=>el.title!=title);
this.parentElement.remove();
loadContent();
}
}

//Change Quantity

function changeQty(){
if(isNaN(this.value) || this.value<1){
this.value=1;
}
loadContent();
}
let itemList=[];

//Add Cart

function addCart(){
    let food=this.parentElement;
    console.log(food);
    let title=food.querySelector('.item').innerHTML;
    let price=food.querySelector('.rate').innerHTML;
    let imgsrc=food.querySelector('.imgg').src;
    let newProduct={title,price,imgsrc}

    //check product already exisits

    if (itemList.find((el)=>el.title==newProduct.title))
    {
        alert("Product Already in Cart")
        return;
    }else{
        itemList.push(newProduct);
    }

    let newProdectElement=createCartProduct(title,price,imgsrc);
    let element=document.createElement('div');
    element.innerHTML=newProdectElement;
    let cartBasket=document.querySelector('.cart-content');
    cartBasket.append(element);
    loadContent();
}

function createCartProduct(title,price,imgsrc){
    return`
            
    <div class="cart-box">
         <img src="${imgsrc}" class="cart-img">
            <div class="detail-box">
            <div class="cart-food-title">${title}</div>
            <div class="price-box">
                <div class="cart-price">${price}</div>
                <div class="cart-amt">${price}</div>
            </div>
            <input type="number" value="1" class="cart-quantity">
            </div>
            <ion-icon name="trash" class="cart-remove"></ion-icon>
    </div>
`;
}

function updateTotal()
{
  const cartItems=document.querySelectorAll('.cart-box');
  const totalValue=document.querySelector('.total-price');

  let total=0;

  cartItems.forEach(product=>{
    let priceElement=product.querySelector('.cart-price');
    let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
    let qty=product.querySelector('.cart-quantity').value;
    total+=(price*qty);
    product.querySelector('.cart-amt').innerText="Rs."+(price*qty);

  });

  totalValue.innerHTML='Rs.'+total;

  // Add Product Count in Cart Icon

  const cartCount=document.querySelector('.zero');
  let count=itemList.length;
  cartCount.innerHTML=count;

  if(count==0){
    cartCount.style.display='none';
  }else{
    cartCount.style.display='block';
  }
}
