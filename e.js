let data_base = [
  { id: 1, product_name: "Mobile", product_details: "vivo T4x 5G (Pronto Purple, 128 GB)", product_image: "./image/vivo t4x5g.webp", product_price: 14999 },
  { id: 2, product_name: "Mobile", product_details: "Nothing Phone (3a) (Blue, 128 GB)", product_image: "./image/ph4.jfif", product_price: 24000 },
  { id: 3, product_name: "Mobile", product_details: "Infinix Note 50s 5G+ (Titanium Grey, 128 GB)", product_image: "./image/infix 5g.webp", product_price: 15999 },
  { id: 4, product_name: "Mobile", product_details: "realme C61 (Safari Green, 128 GB)", product_image: "./image/realme c61.webp", product_price: 8199 },
  { id: 5, product_name: "Mobile", product_details: "MOTOROLA g05 (Plum Red, 64 GB)", product_image: "./image/motorla g5g.webp", product_price: 7299 },
  { id: 6, product_name: "Mobile", product_details: "REDMI 13 5G (Hawaiian Blue, 128 GB)", product_image: "./image/ph4.jfif", product_price: 12499 },
  { id: 7, product_name: "Mobile", product_details: "Apple", price: 999, product_image: "./image/ph4.jfif", description: "The latest iPhone with A16 Bionic chip." },
  { id: 8, product_name: "Mobile", product_details: "Samsung", price: 1199, product_image: "./image/ph4.jfif", description: "Samsung's flagship with amazing camera and performance." },
  { id: 9, product_name: "Moblie", product_details: "OnePlus", price: 799, product_image: "./image/ph4.jfif", description: "Fast, smooth, and powerful with OxygenOS." },
  { id: 10, product_name: "furniture", product_details: "ZENVEXYO 88130 Micro Fiber metalic Carbon Steel Collapsible Wardrobe", product_image: "./image/Zenvexiyo.webp", product_price: 708 },
  { id: 11, product_name: "furniture", product_details: "Perfect Homes Birmingham Engineered Wood King Bed", product_image: "./image/bed.webp", product_price: 5000 },
  { id: 12, product_name: "furniture", product_details: "Homesick Bliss Dual Comfort - Soft & Hard 4 inch Single High Density (HD) Foam Mattress  (L x W: 72 inch x 36 inch)", product_image: "./image/bed3.webp", product_price: 2500 },
  { id: 13, product_name: "furniture", product_details: "FLYUP 5 Layer Collapsible Wardrobe for Clothes & Luggage Organiser", product_image: "./image/Zenvexiyo.webp", product_price: 708 },
  { id: 14, product_name: "furniture", product_details: "FLYUP 5 Layer Collapsible Wardrobe for Clothes & Luggage Organiser", product_image: "./image//Zenvexiyo.webp", product_price: 708 },
  { id: 15, product_name: "furniture", product_details: "FLYUP 5 Layer Collapsible Wardrobe for Clothes & Luggage Organiser", product_image: "./image/Zenvexiyo.webp", product_price: 708 },
  { id: 16, product_name: "electrocis", product_details: "realme 108 cm (43 inch) Ultra HD (4K) LED Smart Android TV with Handsfree Voice Search and Dolby Visio...", product_image: "./image/Realmetv.webp", product_price: 24000 },
  { id: 17, product_name: "electrocis", product_details: "Thomson Phoenix 2025 Edition 139 cm (55 inch) QLED Ultra HD (4K) Smart Google TV 2025 Edition", product_image: "./image/led tv.webp", product_price: 2000 },
  { id: 18, product_name: "electrocis", product_details: "SAMSUNG 8 kg 5 star, Ecobubble, Digital Inverter, Fully Automatic Top Load Washing Machine Grey  (WA80BG4441BGTL)", product_image: "./image/fulltu auto.webp", product_price: 19000 },
  { id: 19, product_name: "electrocis", product_details: "LG 185 L Direct Cool Single Door 4 Star Refrigerator with Base Drawer with Smart Inverter Compressor & Smart Connect  (Scarlet Euphoria, GL-D199OSEY)", product_image: "./image/led tv.webp", product_price: 25000 },
  { id: 20, product_name: "home", product_details: "Voltas 2024 Model 1.5 Ton 3 Star Split Inverter AC - White  (183V CAX(4503692), Copper Condenser)", product_image: "./image/ac.webp", product_price: 24000 },
  { id: 21, product_name: "home", product_details: "MarQ by Flipkart 2025 1 Ton 5 Star Split Inverter 5-in-1 Convertible with Turbo Cool Technology AC - White  (105IPG25WQ, Copper Condenser)", product_image: "./image/walq ac.webp", product_price: 25000 },
  { id: 22, product_name: "home", product_details: "LG 185 L Direct Cool Single Door 2 Star Refrigerator  (Dim Grey, GL-B199ODGC)", product_image: "./image/lg fridge.webp", product_price: 15000 },
  { id: 23, product_name: "home", product_details: "Whirlpool 235 L Frost Free Double Door 2 Star Refrigerator  (Radiant Steel, NEO DF278 PRM RADIANT STEEL(2S)-TL))", product_image: "./image/2starfridge.webp", product_price: 25000 },
  { id: 24, product_name: "fashion", product_details: "Men Regular Fit Solid Curved Collar Casual Shirt", product_image: "./image/men shirt.webp", product_price: 350 },
  { id: 24, product_name: "fashion", product_details: "Men Slim Fit Solid Spread Collar Casual Shirt  (Pack of 2)", product_image: "./image/men slim.webp", product_price: 460 },
  { id: 25, product_name: "fashion", product_details: "Men Loose Fit Mid Rise Light Blue Jeans", product_image: "./image/jeans.webp", product_price: 350 },
  { id: 26, product_name: "fashion", product_details: "Men Solid Black Track Pants", product_image: "./image/track.webp", product_price: 390 },
  { id: 27, product_name: "fashion", product_details: "Self Design Kanjivaram Silk Blend Saree  (Blue)", product_image: "./image/saree.webp", product_price: 2500 },
];
function search() {
  data_base.filter((x)=>{
      const inputValue = document.getElementById('searchvalue').value;
      if(inputValue.toLowerCase()=== x.product_name.toLowerCase()){
        products(inputValue);
      }
  })
}
let users = JSON.parse(localStorage.getItem('users')) || [];
console.log(users);

//sig in
function createLoginForm() {
  let log = `
      <form action="#" id="form">
      <h1 class="log-in">Log in</h1>
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username">
        <div class="error"></div>
      </div>
      <div class="input-group">
        <label for="email">Email</label>
        <input type="text" id="email" name="email">
        <div class="error"></div>
      </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password">
          <div class="error"></div>
        </div>
        <div class="input-group">
          <label for="cpassword">Confirm Password</label>
          <input type="password" id="cpassword" name="cpassword">
          <div class="error"></div>
        </div>
        <button type="submit" class="btn-log">Submit</button>
    </form>
  </div>`;
  let overAll = document.getElementById('overall');
  overAll.innerHTML = log;

  const form = document.querySelector('#form');
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const cpassword = document.getElementById('cpassword');

  form.addEventListener('submit', (e) => {
    if (!validateInputs(username,email,password,cpassword)) {
      e.preventDefault();
    }
  });
}
function validateInputs(username, email, password, cpassword) {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const cpasswordValue = cpassword.value.trim();
  let success = true;

  if (usernameValue === '') {
    success = false;
    setError(username, 'Username is required');
  } else {
    setSuccess(username);
  }

  if (emailValue === '') {
    success = false;
    setError(email, 'Email is required')
  }
  else if (!validateEmail(emailValue)) {
    success = false;
    setError(email, 'Please enter a valid email')
  }
  else {
    setSuccess(email)
  }

  if (passwordValue === '') {
    success = false;
    setError(password, 'Password is required');
  } else if (passwordValue.length < 8) {
    success = false;
    setError(password, 'Password must be at least 8 characters');
  } else {
    setSuccess(password);
  }

  if (cpasswordValue === '') {
    success = false;
    setError(cpassword, 'Confirm password is required');
  } else if (passwordValue !== cpasswordValue) {
    success = false;
    setError(cpassword, 'Passwords do not match');
  } else {
    setSuccess(cpassword);
  }

  if (success) {
    users.push({
      username: usernameValue,
      email: emailValue,
      password: passwordValue
    });
    localStorage.setItem('users', JSON.stringify(users));
  }

  return success;
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector('.error');
  errorElement.innerHTML = message;
  inputGroup.classList.add('error');
  inputGroup.classList.remove('success');
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector('.error');
  errorElement.innerHTML = '';
  inputGroup.classList.add('success');
  inputGroup.classList.remove('error');
}
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Load existing users from localStorage or start with empty array

//sig in end   

//sig in

function sign() {
  let log = `
    <form action="#" id="siginForm">
      <h1 class="sig-in">Sign in</h1>
      <div class="input-group">
        <label for="loginUsername">User name</label>
        <input type="text" id="loginUsername" name="username">
        <div class="error"></div>
      </div>
      <div class="input-group">
        <label for="loginPassword">Password</label>
        <input type="password" id="loginPassword" name="password">
        <div class="error"></div>
      </div>
      <button type="submit" class="btn-sign">Sign In</button>
    </form>
  `;

  document.getElementById('overall').innerHTML = log;

  const loginForm = document.getElementById('siginForm');
  const usernameinput = document.getElementById('loginUsername');
  const passwordinput = document.getElementById('loginPassword');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let success = true;

    // Validate username
    if (usernameinput.value.trim() === '') {
      success = false;
      setError(usernameinput, 'Username is required');
    } else {
      setSuccess(usernameinput);

    }

    // Validate password
    if (passwordinput.value.trim() === '') {
      success = false;
      setError(passwordinput, 'Password is required');
    } else {
      setSuccess(passwordinput);
    }

    if (!success) return;

    const usernames = usernameinput.value.trim();
    const passwords = passwordinput.value.trim();

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find(u => u.username === usernames && u.password === passwords);
    
    if (foundUser) {
      alert(`Welcome, ${foundUser.username}! Login successful.`);

    } else {
      alert('Invalid username or password!');
    }
  });

  function setError(input, message) {
    const formControl = input.parentElement;
    const errorDiv = formControl.querySelector('.error');
    errorDiv.innerText = message;
    errorDiv.style.color = 'red';
  }

  function setSuccess(input) {
    const formControl = input.parentElement;
    const errorDiv = formControl.querySelector('.error');
    errorDiv.innerText = '';
  }
}


//log in end
//  let overAll = document.getElementById('overall');


///product
let result = document.getElementById('product_show');
const rowcards = document.getElementById('row-cards')
function products(value) {
  result.innerHTML = '';
  rowcards.style.display = 'none';
  // Create a row
  const row = document.createElement('div');
  row.className = 'row';

  data_base.map(item => {
    if (item.product_name.toLowerCase().includes(value.toLowerCase())) {

      // Create the column
      const col = document.createElement('div');
      col.className = 'col-md-4 mb-4 py-2';


      // Create the card
      const card = document.createElement('div');
      card.className = 'card p-4 shadow-lg';
      card.style.width = '18em';
      card.style.margin = 'auto'; // Center the card
      card.id = 'cards'

      // Create the image
      const image = document.createElement('img');
      image.className = 'card-img-top';
      image.src = item.product_image || item.image;
      image.alt = item.product_name || item.name;
      card.appendChild(image);

      // Create card body
      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      // Create title
      const name = document.createElement('h5');
      name.className = 'card-title';
      name.innerText = item.product_details || item.name;
      cardBody.appendChild(name);

      // Create details
      const details = document.createElement('p');
      details.className = 'card-text';
      details.innerText = item.description || item.product_price;
      cardBody.appendChild(details);

      // Create Buy Now button
      const buynow = document.createElement('button');
      buynow.className = 'btn btn-primary me-2';
      buynow.innerText = 'Buy Now';
      buynow.onclick = () => buynowsection(item);
      cardBody.appendChild(buynow);

      // Create Add to Cart button
      const addcart = document.createElement('button');
      addcart.className = 'btn btn-success';
      addcart.innerText = 'Add to Cart';
      addcart.onclick = () => cart(item);
      cardBody.appendChild(addcart);

      // append the card
      card.appendChild(cardBody);
      col.appendChild(card);
      row.appendChild(col);
    }
  });
  result.appendChild(row);
}
const footer = document.getElementById('footer')
function buynowsection(item) {
  result.innerHTML = ''
  footer.style.display = 'none'
  let deatils_buynow = `
     <div class="user_form card shadow-sm p-4 bg-white rounded mt-4 mb-4">
    <form>
      <h3 class="text-center mb-4">Order: ${item.product_name}</h3>

      <input type="text" class="form-control mb-2" id="input1" placeholder="Enter your name" required>
      <input type="text" class="form-control mb-2" id="input2" placeholder="Enter your phone number" required>
      <textarea class="form-control mb-3" rows="4" placeholder="Contact address" required></textarea>

      <div class="productbuy d-flex align-items-center gap-4">
        <div>
          <img src="${item.product_image}" alt="Product Image" style="width: 100px; height: 100px;">
          <input type="number" id="qty" class="form-control mt-2" placeholder="Qty" min="1" value="1" onchange="updateTotal(${item.product_price})">
        </div>
        <div class="product-details">
          <h5>Product Name: ${item.product_name}</h5>
          <h6>Item Price: ₹${item.product_price}</h6>
          <p class="fw-bold">Total: ₹<span id="total">${item.product_price}</span></p>
        </div>
      </div>

      <select class="form-select mt-3 mb-3">
        <option selected disabled>Choose payment method</option>
        <option value="cod">Cash on Delivery</option>
        <option value="gpay">Google Pay</option>
        <option value="phonepe">PhonePe</option>
      </select>

      <button type="submit" class="btn btn-primary w-100" onclick="paymentsubmit()" >Submit Order</button>
    </form>
  </div> `
  result.innerHTML = deatils_buynow;
}
function updateTotal(price) {
  const qty = document.getElementById('qty').value
  const total = price * qty;
  document.getElementById('total').innerText = total;
}

function paymentsubmit() {
  alert("your order is confirmed")
}
//------------------Add to cart--------------
let cartItems = [];

function showCart() {
  result.innerHTML = '';
  rowcards.style.display = 'none';
  footer.style.display = 'none';

  if (cartItems.length === 0) {
    result.innerHTML = '<h3 class="text-center mt-5 text-muted">Your cart is empty.</h3>';
  } else {
    displayCartItems();
  }
}
function cart(item) {
  cartItems.push(item);
  alert("Item added to cart!");
}
function displayCartItems() {
  result.innerHTML = '';

  cartItems.forEach((item, index) => {
    result.innerHTML += `
      <div class="container mt-4">
        <div class="row cart-card align-items-center border p-3">
          <div class="col-md-4 d-flex flex-column align-items-center">
            <img src="${item.product_image}" alt="${item.product_name}" style="max-width: 150px;">
            <input type="number" id="qty-${index}" class="form-control w-50" min="1" value="1" onchange="updateCartTotal(${item.product_price}, ${index})">
          </div>
          <div class="col-md-4">
            <p class="mb-1 fw-semibold">${item.product_details}</p>
            <p class="fw-bold mb-0">Total: ₹<span id="total-${index}">${item.product_price}</span></p>
            <div class="mt-5">
              <button class="btn btn-primary" onclick="buynow(${index})">Place Order</button>
              <button class="btn btn-danger" onclick="removeCartItem(${index})">Remove</button>
            </div>
          </div>
          <div class="col-md-4">
            <h5 class="text-primary">Price Details</h5>
            <div class="mt-5">
              <p>Delivery Charges: <del>₹40</del> <span class="text-success">Free</span></p>
              <p class="fw-bold">Total Amount: ₹<span id="totalAmount-${index}">${item.product_price}</span></p>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}
function buynow(index) {
  const item = cartItems[index];
  buynowsection(item); 
}


function removeCartItem(index) {
  cartItems.splice(index, 1);
  if (cartItems.length === 0) {
    result.innerHTML = '<h3 class="text-center mt-5 text-muted">Your cart is empty.</h3>';
  } else {
    displayCartItems();
  }
}

function updateCartTotal(price, index) {
  const qty = parseInt(document.getElementById(`qty-${index}`).value);
  const totalPrice = qty * price;
  document.getElementById(`total-${index}`).innerText = totalPrice;
  document.getElementById(`totalAmount-${index}`).innerText = totalPrice;
}
///rows of products 
const productContainers = {
  mobile: document.getElementById('ShowElectronics'),
  furniture: document.getElementById('ShowFurniture'),
  fashion: document.getElementById('Show-fashion'),

};

data_base.forEach(item => {
  const type = item.product_name.toLowerCase();
  if (type === "mobile" || type === "furniture" || type === "fashion") {
    const card = document.createElement('div');
    card.className = "div inside";
    const productDetails = item.product_details || item.product_name;
    const slicedDetails = productDetails.length > 30 ? productDetails.slice(0, 30) + "..." : productDetails
    card.innerHTML = `
        <img src="${item.product_image}" class="card-img-top" alt="${item.brand || item.product_name}">
        <div class="card-body">
          <p class="card-title">${slicedDetails}</p>
        <p class="card-text text-dark">From ₹${item.product_price || item.price}</p>
        </div>
      `;
    productContainers[type].appendChild(card);
  }
});

// Scroll button functionality
document.querySelectorAll('.scroll-controls').forEach(control => {
  const leftBtn = control.querySelector('.scrollLeft');
  const rightBtn = control.querySelector('.scrollRight');
  const targetId = leftBtn.dataset.target;
  const scrollContainer = document.getElementById(targetId);

  // Scroll right
  rightBtn.addEventListener('click', () => {
    scrollContainer.scrollLeft += 300;
  });

  // Scroll left
  leftBtn.addEventListener('click', () => {
    scrollContainer.scrollLeft -= 300;
  });
});
