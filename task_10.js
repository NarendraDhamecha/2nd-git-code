var form = document.getElementById('form');
var username = document.getElementById('name');
var email = document.getElementById('mail');
var phone = document.getElementById('phone');
var time = document.getElementById('time');

form.addEventListener('submit',onSubmit)

function onSubmit(e)
{
   e.preventDefault();

   if(username.value==='' || email.value==='' || phone.value==='' || time.value==='')
   {
     console.log(alert('please enter all feilds'));
   }
   else
   {
     localStorage.setItem('name',username.value);
     localStorage.setItem('email',email.value);
     localStorage.setItem('phone',phone.value);
     localStorage.setItem('time',time.value);
   }
}