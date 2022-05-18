
     
    const touchCountElement = document.getElementById('touches');
    const button = document.getElementById('tried');
    button.onclick = () => { 
      let count = parseInt(touchCountElement.innerHTML);
      touchCountElement.innerHTML = count + 1;
    };
  //------------------------------------------------------------------------------------ 
  function sayWel() {
    alert('Welcome!');
  }
  
  setTimeout(sayWel, 1000);

  let timerId = setInterval(() => alert('I hope you enjoy'), 500000);
  //----------------------------------------------------------------------------------
  for(let i=0; i<11; i++)
 document.getElementsByClassName("titlu1")[i].style.color = "peachpuff";
//---------------------------------------------------------------
  window.onload = () => {
    const barButton = document.querySelector('.user-bar #changeHack');
    const removeButton = document.querySelector('#removeHack');
    const refreshButton = document.getElementById('refresh');
    barButton.addEventListener('click', changeHack);
    removeButton.addEventListener('click', removeHack);
    refreshButton.addEventListener('click', () => {
      window.location.reload();
    });
    renderBar();
  }
  
  function renderBar() {
    const barHack = document.querySelector('.user-bar .hack');
    const barButton = document.querySelector('.user-bar #changeHack');
    let userDetails = null;
    try {
      userDetails = JSON.parse(localStorage.getItem('userDetails'));
    } catch (error) {
      userDetails = null;
    }
    if(userDetails) {
      barHack.innerHTML = `Welcome, ${userDetails.name}! Our new hack is ${userDetails.hack} .`;
      barButton.innerHTML = "Change the hack";
    } else {
      barHack.innerHTML = "Welcome! We need a new hack :)";
      barButton.innerHTML = "Add a hack";
    }
  }
  
  function changeHack() {
    const name = prompt('What is your name?');
    if(!name) return;
    const hack = prompt('What is your hack?');
    if(!hack) return;
    const userDetails = { name, hack };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    renderBar();
  }
  
  function removeHack() {
    localStorage.removeItem('userDetails');
    renderBar();
  }
 //---------------------------------------------------------------------------
 
like.onclick = function(event) {
    if (parseInt(event.key) != NaN) {
      alert('Hooray!');
    }
  };

  document.addEventListener('keydown', (event) => {
    var name = event.key;  
    alert(`Key pressed ${name}`);
  }, false); 

  let tries = document.querySelector('#tries');
function eventController2(event) {
  alert(event.currentTarget.tagName);
}
tries.addEventListener('click', eventController2, false)

 
  document.querySelector("#dislike").addEventListener("click", function(event) {
    document.getElementById("angry").innerHTML += "Sorry! <code>preventDefault()</code> won't let you dislike us!!!<br>";
    event.preventDefault();
}, false);

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('footer').style.backgroundColor = "#" + randomColor; 
  }
  
  like.addEventListener("click", setBg); 

 //------------------------------------------v
  function validate() {
  
    var user = document.getElementById("e").value;  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mailformat.test(user))  {
        alert("Valid email address!");
        //return true;
    }
    else {
        alert("You have entered an invalid email address!"); 
        //return false;
    }
}
document.querySelector('#submi').addEventListener("click",validate);