/***
 * 
 * create alert
 */

const createAlert = (msg , type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between"> ${msg}
  <button class="btn-close" data-bs-dismiss="alert"></button>
</p>`
}

/***
 * 
 * number validation 
 */

const isMobile = (mobile) => {
    const pattern =/^(01|8801|\+8801)[0-9]{9}$/;
     return pattern.test(mobile);
}


/***
 * 
 * number validation 
 */

const isEmail = (email) => {
  const pattern = /^[a-z0-9\._]{1,}@[a-z0-9]{1,}\.[a-z]{1,5}$/;
  return pattern.test(email);
}















