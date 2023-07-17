
const userForm = document.getElementById("userForm");
const userPhoto = document.getElementById("userPhoto");
const userPreview = document.getElementById("userPreview");

const msg = document.querySelector(".msg");

// click form 

userForm.onsubmit = (e) => {
  e.preventDefault();


  const form_data = new FormData(e.target);

  const data = Object.fromEntries(form_data);

// form validation 

if(!data.name.trim() || !data.email.trim() || !data.mobile.trim()) {
   msg.innerHTML = createAlert(`All field are required`);
}else if(!isEmail(data.email)){
   msg.innerHTML = createAlert(`Invalid email address`, "warning");
    
}else if(!isMobile(data.mobile)){
  msg.innerHTML = createAlert(`Invalid phone number`, "info");
   
}else{
  msg.innerHTML = createAlert(`Data stable`, "success");

}

};


// user photo preview 

userPhoto.onchange = (e) => {


  const imageUrl = URL.createObjectURL(e.target.files[0]);

  userPreview.setAttribute("src", imageUrl);
}















