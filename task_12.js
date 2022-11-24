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
    let obj = {
        name: username.value,
        email: email.value,
        mobNum: phone.value,
        tym: time.value
    };
    
    let convObj = JSON.stringify(obj);
    localStorage.setItem(email.value,convObj);
    showDetailsOnScreen(obj);
   }
  }

  function showDetailsOnScreen(user)
  {
    let parentNode = document.getElementById('list');
    let childNode = `<li> ${user.name} - ${user.email} </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childNode;
  }
   