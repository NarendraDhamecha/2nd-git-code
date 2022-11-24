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

  window.addEventListener('DOMContentLoaded', () =>{
    let localStorageObj = localStorage;
    let localStoragekeys = Object.keys(localStorageObj);

    for(var i=0; i<localStoragekeys.length; i++)
    {
        let key = localStoragekeys[i];
        let userDetailsStr = localStorageObj[key];
        let userDetailsObj = JSON.parse(userDetailsStr);
        showDetailsOnScreen(userDetailsObj);
    }
  })

  function showDetailsOnScreen(user)
  {
    document.getElementById('mail').value = '';
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';

    if(localStorage.getItem(user.email) !== null)
    {
        removeUserFromScreen(user.email);
    }
    let parentNode = document.getElementById('list');
    let childNode = `<li id=${user.email}> ${user.name} - ${user.email} 
                         <button onclick=deleteUser('${user.email}')> Delete </button>
                         <button onclick=editUser('${user.email}','${user.name}','${user.mobNum}')> edit </button>
                     </li>`
    parentNode.innerHTML = parentNode.innerHTML + childNode;
  }

  function editUser(emailId,name,num)
  {
     document.getElementById('mail').value = emailId;
     document.getElementById('name').value = name;
     document.getElementById('phone').value = num;
     deleteUser(emailId);
  }

  function deleteUser(emailId)
  {
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);
  }

  function removeUserFromScreen(emailId)
  {
      let parentNode = document.getElementById('list');
      let childNodeToBeDlt = document.getElementById(emailId);
      if(childNodeToBeDlt)
      {
        parentNode.removeChild(childNodeToBeDlt);
      }
  }
   