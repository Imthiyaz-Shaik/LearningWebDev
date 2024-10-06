
const currentDate = new Date();
const dateString = currentDate.toISOString().split('T')[0];

function addDays(dateString, days) {
    const result = new Date(dateString); // Create a new date object based on the input date
    result.setDate(result.getDate() + days); // Add the specified number of days
    return result; // Return the new date
}
//   it is for generateItemsHTML
 const shirts=  [
  {
      id: '001',
      image: 'images/shirts/shirts1.jpg',
      company: 'THE BEAR HOUSE',
      item_name: 'Men Pure Cotton Casual Shirt',
      original_price:2495 ,
      current_price:873 ,
      discount_percentage: 65,
      return_period: 14,
      delivery_date: '1',
      rating: {
          stars:4.3 ,
          count: 580,
      },
  },
  {
      id: '002',
      image: 'images/shirts/shirts2.jpg',
      company: 'Campus Sutra',
      item_name: 'Spread Collar Casual Shirt',
      original_price:1899 ,
      current_price: 702,
      discount_percentage:63,
      return_period: 14,
      delivery_date: '1',
      rating: {
          stars: 4.4,
          count:6900 ,
      },
  },
  {
      id: '003',
      image: 'images/shirts/shirts3.jpg',
      company: 'Roadster',
      item_name: 'Men Cotton Casual Shirt',
      original_price:1399 ,
      current_price: 503,
      discount_percentage:64,
      return_period: 14,
      delivery_date: '1',
      rating: {
          stars: 4.2,
          count: 11200,
      },
  },
  {
      id: '004',
      image: 'images/shirts/shirts4.jpg',
      company: 'RARE RABBIT',
      item_name: 'Men Benedict Regular fit shirt',
      original_price: 3499,
      current_price: 1819,
      discount_percentage:48,
      return_period: 14,
      delivery_date: '1',
      rating: {
          stars:4.3,
          count: 2700,
      },
  },
  {
      id: '005',
      image: 'images/shirts/shirts5.jpg',
      company: 'HIGHLANDER',
      item_name: 'Men Slim Fit Casual Shirts',
      original_price:1299 ,
      current_price: 415,
      discount_percentage:68,
      return_period: 14,
      delivery_date: '1',
      rating: {
          stars: 4.2,
          count:33400 ,
      },
  },
  {
      id: '006',
      image: 'images/shirts/shirts6.jpg',
      company: 'Mast & Harbour',
      item_name:'Men Slim Fit Casual Shirt',
      original_price:2099 ,
      current_price:536 ,
      discount_percentage:75 ,
      return_period: 14,
      delivery_date: '1',
      rating: {
          stars:4.3 ,
          count: 29400,
      },
  },
  {
      id: '007',
      image: 'images/shirts/shirts7.jpg',
      company: 'DeFacto',
      item_name: 'Men Cutaway Collar Shacket',
      original_price:1999 ,
      current_price:799,
      discount_percentage: 60 ,
      return_period: 14,
      delivery_date: '1',
      rating: {
          stars: 0,
          count: 0,
      },
  },
  {
      id: '008',
      image: 'images/shirts/shirts8.jpg',
      company: 'Beyours',
      item_name: 'Opaque Casual Shirt',
      original_price: 1499,
      current_price:629 ,
      discount_percentage:58 ,
      return_period: 14,
      delivery_date: '1',
      rating: {
          stars: 4,
          count: 10400,
      },
  },
]
const trousers=[
  {
      id: '001',
      image: 'images/trousers/trousers1.jpg',
      company: 'RARE RABBIT',
      item_name: 'Men chamer Regular fit trouser',
      original_price: 3499,
      current_price: 1924,
      discount_percentage: 45,
      return_period: 14,
      delivery_date: '10 Oct 2024',
      rating: {
          stars: 4.5,
          count: 1400,
      },
  },
  {
      id: '002',
      image: 'images/trousers/trousers2.jpg',
      company: 'RARE RABBIT',
      item_name: ' Men arcelona regular Fit Trouser',
      original_price: 3999,
      current_price: 3119,
      discount_percentage: 22,
      return_period: 14,
      delivery_date: '14 Oct 2024',
      rating: {
          stars: 4.5,
          count: 42,
      },
  },
  {   id: '003',
      image: 'images/trousers/trousers3.jpg',
      company: 'Marks AND Spencer',
      item_name: ' Men  regular Fit Trouser',
      original_price: 2999,
      current_price: 1199,
      discount_percentage: 60,
      return_period: 14,
      delivery_date: '12 Oct 2024',
      rating: {
          stars: 4.5,
          count: 42,
      },
  },
  {
  id: '004',
  image: 'images/trousers/trousers4.jpg',
  company: 'HIGH LANDER',
  item_name: ' Men Slim Fit Joggers  Trouser',
  original_price: 511,
  current_price: 1499,
  discount_percentage: 67,
  return_period: 14,
  delivery_date: '14 Oct 2024',
  rating: {
      stars: 3.8,
      count: 8800,
  },
},
{   id: '005',
  image: 'images/trousers/trousers5.jpg',
  company: 'Campus Sutra',
  item_name: ' Men Relaxed Cotton Trouser',
  original_price: 1999,
  current_price: 679,
  discount_percentage: 67,
  return_period: 14,
  delivery_date: '15 Oct 2024',
  rating: {
      stars: 3.9,
      count: 1400,
  },
},
{   
  id: '006',
  image: 'images/trousers/trousers6.jpg',
  company: 'JACK & JONES',
  item_name: ' Men Trousers',
  original_price: 2549,
  current_price: 849,
  discount_percentage: 63,
  return_period: 14,
  delivery_date: '14 Oct 2024',
  rating: {
      stars: 4,
      count: 29,
  },
  },
{
   id: '007',
  image: 'images/trousers/trousers7.jpg',
  company: 'StyleCast',
  item_name: ' Men Slim Fit Cargo Trousers',
  original_price: 2499,
  current_price: 799,
  discount_percentage: 65,
  return_period: 14,
  delivery_date: '14 Oct 2023',
  rating:{
       stars: 2.4,
       count: 190,
      },
},
{
  id: '008',
 image: 'images/trousers/trousers8.jpg',
 company: 'RODSTER',
 item_name: ' Men Relaxed Fit Trousers',
 original_price: 923,
 current_price: 2799,
 discount_percentage: 67,
 return_period: 14,
 delivery_date: '14 Oct 2023',
 rating:{
      stars: 4.3,
      count: 2900,
     },
},
  ]

  const casualShoes=[
    {
      id: '001',
      image: 'images/casualShoes/casualShoes1.jpg',
      company: 'Red Tape',
      item_name: 'Men Round Toe Sneakers',
      original_price:7399 ,
      current_price:1331 ,
      discount_percentage: 82,
      return_period: 14,
      delivery_date: '1',
      rating: {
          stars:4.4 ,
          count: 250,
      },
  },
  {
    id: '002',
    image: 'images/casualShoes/casualShoes2.jpg',
    company: 'U.S Polo Assn.',
    item_name: 'Men Solid Sneakers',
    original_price:2999 ,
    current_price:1049 ,
    discount_percentage: 65,
    return_period: 14,
    delivery_date: '1',
    rating: {
        stars:4.2,
        count: 48500,
    },
},
{
  id: '003',
  image: 'images/casualShoes/casualShoes3.jpg',
  company: 'HRX by Hrithik Roshan',
  item_name: 'Unisex Back To School Shoes',
  original_price:3699,
  current_price:999 ,
  discount_percentage: 55,
  return_period: 14,
  delivery_date: '1',
  rating: {
      stars:3.9 ,
      count: 41,
  },
},
{
  id: '004',
  image: 'images/casualShoes/casualShoes4.jpg',
  company: 'U.S Polo Assn.',
  item_name: 'Men Colourblocked Sneakers',
  original_price:2999 ,
  current_price:1049,
  discount_percentage: 65,
  return_period: 14,
  delivery_date: '1',
  rating: {
      stars:4.3 ,
      count: 2200,
  },
},
{
  id: '005',
  image: 'images/casualShoes/casualShoes5.jpg',
  company: 'Red Tape',
  item_name: 'Men colorblocked High-Top Sneakers',
  original_price:5899,
  current_price:1061,
  discount_percentage:82,
  return_period: 14,
  delivery_date: '1',
  rating: {
      stars:4.5 ,
      count: 2700,
  },
},
{
  id: '006',
  image: 'images/casualShoes/casualShoes6.jpg',
  company: 'Red Tape',
  item_name: 'Men Colorblocked Sneakers',
  original_price:6299,
  current_price:1889,
  discount_percentage:70,
  return_period: 14,
  delivery_date: '1',
  rating: {
      stars:4.3 ,
      count: 228,
  },
},
{
  id: '007',
  image: 'images/casualShoes/casualShoes7.jpg',
  company: 'U.S Polo Assn.',
  item_name: 'Men Solid Sneakers',
  original_price:2999 ,
  current_price:1040,
  discount_percentage: 65,
  return_period: 14,
  delivery_date: '1',
  rating: {
      stars:4.2,
      count: 48500,
  },
},
{
  id: '008',
  image: 'images/casualShoes/casualShoes8.jpg',
  company: 'HIGHLANDER',
  item_name: 'Men Solid Sneakers',
  original_price:1990,
  current_price:497,
  discount_percentage: 65,
  return_period: 14,
  delivery_date: '1',
  rating: {
      stars:4,
      count: 17000,
  },
},
  ];
  // const sportsShoes=[];
  // const tShirts=[];

const convenienceFee=99;
let bagItemsObjects=JSON.parse(localStorage.getItem('bagItemsObjects')) || [];
displayBagIcon();

function displayBagIcon(){
  let bagCount=document.querySelector("#bagItemCount");
  if(bagItemsObjects.length>0){
    bagCount.style.visibility='visible';
    bagCount.innerText =bagItemsObjects.length;
  }else{
    bagCount.style.visibility='hidden';
  }
}
 
function displayProducts(products){
 const container=document.getElementById("items-container");
 container.innerHTML='';
 products.forEach(product => {
  const productDiv=document.createElement('div');
  productDiv.className='product';
  productDiv.innerHTML=`<div id="item-container">
  <img id="img1" class="image" src=${product.image} alt="trouser-image">
  <div id="rating">
      <span id="reviews">${product.rating.stars}⭐</span>
      <span id="count">|${product.rating.count}</span>
  </div>
  <div id="company">${product.company}</div>
  <div id="item">${product.item_name}</div>
    <div id="price">
      <span id="current-price">Rs ${product.current_price}</span>
      <span id="original-price">Rs ${product.original_price}</span>
      <span id="discount">${product.discount_percentage}% OFF</span>
    </div>
    <button id="addToBag" onclick="addToBag(${product.id})">Add To Bag</button>
  </div>`;
  container.appendChild(productDiv);
 });
}

function displayBagSummary(){
   let bagSummaryElement=document.querySelector('.bag-summary');
    let totalItem=bagItemsObjects.length;
    totalMRP=0;
    totalDiscount=0;
    bagItemsObjects.forEach(bagItem=>
    {
        totalMRP+=bagItem.original_price;
        totalDiscount+=bagItem.original_price-bagItem.current_price;
    });
    let finalPayment=totalMRP-totalDiscount+convenienceFee;

      bagSummaryElement.innerHTML = `
<div class="bag-details-container">
<div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
<div class="price-item">
  <span class="price-item-tag">Total MRP</span>
  <span class="price-item-value">₹${totalMRP}</span>
</div>
<div class="price-item">
  <span class="price-item-tag">Discount on MRP</span>
  <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
</div>
<div class="price-item">
  <span class="price-item-tag">Convenience Fee</span>
  <span class="price-item-value">₹99</span>
</div>
<hr>
<div class="price-footer">
  <span class="price-item-tag">Total Amount</span>
  <span class="price-item-value">₹${finalPayment}</span>
</div>
</div>
<button class="btn-place-order">
<div class="css-xjhrni">PLACE ORDER</div>
</button>
`;
}
  

function displayBagItems(){
  let container=document.getElementById('bag-items-container');
  if(bagItemsObjects.length===0){
    container.innerHTML=`<div id="empty-bag" >BAG IS EMPTY</div>`;
  }else{
bagItemsObjects.forEach((bagItem,index)=>{
const itemDiv=document.createElement('div');
itemDiv.className='bag-item';
itemDiv.innerHTML=`
    <div class="bag-details-container">
       <div class="item-left-part">
              <img class="bag-item-img" src="${bagItem.image}">
        </div>
         <div class="item-right-part">
             <div class="company">${bagItem.company}</div>
             <div class="brand-details">${bagItem.item_name}<div>
               <div class="price">
                 <span id="current-price">₹${bagItem.current_price}</span>
                 <span id="original-price">₹ ${bagItem.original_price}</span>
                 <span id="discount-percentage">${bagItem.discount_percentage}</span>Off
               </div>
               <div class="return-period">
                 <span class="return-period-days">14 Days</span>  return available
               </div>
               <div class="delivery-details">Delivery By
                 <span class="delivery-details-days">${addDays(dateString, 5)}</span>
               </div>
               <button class="remove-from-cart" onclick="removeFromBag(${index})">X
               </button>
         </div>
    </div>`;
    container.appendChild(itemDiv);
    })
  }
}

function addToBag(productId){
  const product=[...shirts,...trousers,...casualShoes].find(p=> p.id == productId);
  if(product){
    bagItemsObjects.push(product);
    localStorage.setItem('bagItemsObjects',JSON.stringify(bagItemsObjects));
    alert(`${product.company} ${product.item_name} added to bag`);
    displayBagIcon();
    displayBagItems;
    console.log(bagItemsObjects);
  }
}


function removeFromBag(index){
  bagItemsObjects.splice(index,1);
  console.log(bagItemsObjects);
    localStorage.setItem('bagItemsObjects', JSON.stringify(bagItemsObjects));
  displayBagIcon();
  displayBagItems();
  displayBagSummary();
  }

if (document.getElementById('items-container')) {
  const path = window.location.pathname;
  if (path.includes('trousers.html')) {
    displayProducts(trousers);
} else if (path.includes('shirts.html')) {
    displayProducts(shirts);
  }else if(path.includes('casualShoes.html')) {
    displayProducts(casualShoes);
}
}
  

if (document.getElementById('bag-items-container')) {
  displayBagItems();
  displayBagIcon();
  displayBagSummary();
}
