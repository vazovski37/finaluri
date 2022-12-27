var layer = document.getElementById("layer")
var layer_2 = document.getElementById("layer_2")
var layer_3 = document.getElementById("layer_3")
var layer_4 = document.getElementById("layer_4")
layer.className = 'layer_1'
var layer_button = document.getElementById("layer_button")
layer_button.addEventListener('click',()=>{
    layer.className = 'display_none'
    layer_2.className = 'layer_2'
})
var back = document.getElementById('back')
back.addEventListener('click',()=>{
    layer.className = 'layer_1'
    layer_2.className = 'display_none'
})
var layer_2_button = document.getElementById('layer_2_button')


function validateEmail(email) {
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(email);
  }
  
  function validatePhone(phone) {
    var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return regex.test(phone);
  }
  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (name == "") {
      alert("Please enter your name");
      return false;
    }
    localStorage.setItem('user_name',name)
  
    if (email == "" || !validateEmail(email)) {
      alert("Please enter a valid email address");
      return false;
    }
  
    if (phone == "" || !validatePhone(phone)) {
      alert("Please enter a valid phone number");
      return false;
    }

    next()

  }
if(validateForm == true){
  next()
}
function next(){
  layer.className = 'display_none'
  layer_3.className = 'layer_3'
  layer_2.className = 'display_none'
  
}

fetch("https://reqres.in/api/users?page=2")
  .then(function(response) {
    if (response.ok) {

      return response.json();

    } else {
      throw new Error(response.statusText);
    }
  })
  .then(function(data) {
    console.log(data);

    var menu = document.getElementById("menu_server_info");


    data.data.forEach(function(user) {
      var option = document.createElement("option");
      var option_div = document.createElement('div');
      var option_text = document.createElement('p');
      var option_img = document.createElement('img');
      option_img.src = user.avatar;
      option_text.textContent = user.first_name + " " + user.last_name;

      option_div.append(option_text)
      option_div.append(option_img)
      option.append(option_div)
      option.value = user.id;
      
      menu.add(option);
    });
  })
  .catch(function(error) {
    
    console.error(error);
  });

var back_2 = document.getElementById('back_layer2')
back_2.addEventListener('click',()=>{
  layer.className = 'display_none'
  layer_2.className = 'layer_2'
  layer_3.className = 'displaye_none'
})

var layer_3_button = document.getElementById('layer_3_button')
layer_3_button.addEventListener('click',()=>{
  layer.className = 'display_none'
  layer_2.className = 'display_none'
  layer_3.className = 'display_none'
  layer_4.className = 'layer_4'
})
var user_name = localStorage.getItem("user_name");
var success = document.getElementById('success')
success.textContent = 'welcome'+ ' ' + user_name 
success.className = 'success'