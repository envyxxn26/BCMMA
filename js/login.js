document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('loginForm');
  const errorEl = document.getElementById('error');
  const passwordInput = document.getElementById('password');
  const toggleBtn = document.getElementById('togglePassword');

  // Password visibility toggle
  toggleBtn.addEventListener('click', function(e){
    e.preventDefault();
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    const label = isPassword ? 'Hide password' : 'Show password';
    const text = isPassword ? 'hide' : 'show';
    toggleBtn.setAttribute('aria-label', label);
    toggleBtn.setAttribute('title', label);
    toggleBtn.querySelector('.icon').textContent = text;
  });

  function showError(msg){
    errorEl.textContent = msg;
    errorEl.style.display = msg ? 'block' : 'none';
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    showError('');

    const email = form.email.value.trim();
    const password = form.password.value;

    if(!email){
      showError('Please enter your email.');
      form.email.focus();
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
      showError('Please enter a valid email address.');
      form.email.focus();
      return;
    }
    if(!password || password.length < 6){
      showError('Password must be at least 6 characters.');
      form.password.focus();
      return;
    }

    // Replace with actual submission logic (fetch/XHR)
    showError('');
    // For demo, just show a brief success state
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Signing in...';
    setTimeout(()=>{
      btn.disabled = false;
      btn.textContent = 'Sign in';
      alert('Demo: form submitted');
    },1000);
  });
});
