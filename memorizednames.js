memory = JSON.parse(localStorage.testnames);
memory = memory.sort(() => Math.random() - Math.random()).slice(0, memory.length/2+1);
inputs = document.querySelectorAll('input[type=text]');
for(let i = 0; i<memory.length; i++)
	inputs[i].value = memory[i].toLowerCase(); 
