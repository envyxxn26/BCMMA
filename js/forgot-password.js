(function(){
  const form = document.getElementById('forgotForm');
  const emailInput = document.getElementById('email');
  const errorEl = document.getElementById('error');
  const submitBtn = document.getElementById('submitBtn');
  const successEl = document.getElementById('success');

  function validateEmail(email){
    // simple, permissive regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
  }

  form.addEventListener('submit', async function(e){
    e.preventDefault();
    errorEl.textContent = '';

    const email = emailInput.value.trim();
    if(!email){
      errorEl.textContent = 'Please enter your email address.';
      emailInput.focus();
      return;
    }
    if(!validateEmail(email)){
      errorEl.textContent = 'Please enter a valid email address.';
      emailInput.focus();
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try{
      // Replace this fetch with your real endpoint. We simulate response here.
      const res = await fakeRequest(email);
      if(res.ok){
        form.hidden = true;
        successEl.hidden = false;
      } else {
        // server returned specific message
        errorEl.textContent = res.message || 'Unable to send reset link. Please try again later.';
      }
    }catch(err){
      console.error(err);
      errorEl.textContent = 'Network error. Please try again.';
    } finally{
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send reset link';
    }
  });

  // Simulated request to demonstrate UX. Replace in production.
  function fakeRequest(email){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        // pretend all requests succeed but don't disclose whether the account exists
        resolve({ok:true});
      }, 900);
    });
  }
})();
