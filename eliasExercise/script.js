const headerElement = document.getElementById('headerElement');
headerElement.textContent = "A good title";

const paragraphElement = document.getElementById('paragraphElement');
paragraphElement.textContent = "JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior,[10] often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.";

const myDiv = document.createElement('div');
myDiv.style.border = '4px solid red';
myDiv.style.width = '100px';
myDiv.style.height = '100px';
myDiv.style.backgroundColor = 'green';
myDiv.style.borderRadius = '15px'
document.body.appendChild(myDiv);