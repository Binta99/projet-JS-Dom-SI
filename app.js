const formInput = document.querySelector('.form-control');
const buttonEntrer = document.querySelector('.btn');
const todo = document.querySelector('#todo');
// ecouteur
buttonEntrer.addEventListener('click', todofunction);

// function____________________________________
function todofunction(event) {
  todo.addEventListener('click', button1Function);
  // casse evenement
  event.preventDefault();
  //   add div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todoDiv');
  // add liste
  const todoListe = document.createElement('li');
  todoListe.innerText = formInput.value;
  //   todoListe.style.backgroundColor = 'red';
  console.log(todoListe);
  todoListe.classList.add('liste-item');
  todoDiv.appendChild(todoListe);
  //   add button1
  const button1 = document.createElement('button');
  button1.classList.add('button1');
  //   button1.style.backgroundColor = 'red';
  button1.innerText = 'To do';
  todoDiv.appendChild(button1);
  //   add button2
  const button2 = document.createElement('button');
  button2.classList.add('button2');
  //   button2.style.backgroundColor = 'orange';

  button2.innerText = 'Doing';
  todoDiv.appendChild(button2);
  //   add button3
  const button3 = document.createElement('button');
  button3.classList.add('button3');
  //   button3.style.backgroundColor = 'green';
  button3.innerText = 'Done';
  todoDiv.appendChild(button3);
  // ajout buton delete
  const button0 = document.createElement('button');
  button0.classList.add('button0');
  //   button2.style.backgroundColor = 'orange';

  button0.innerText = 'Delete';
  todoDiv.appendChild(button0);

  //   Ajout de todoDiv à todo(ul)
  todo.appendChild(todoDiv);
  //   effacer dans le champs du formulaire
  formInput.value = '';

  function button1Function(e) {
    const item = e.target;
    if (item.classList[0] === 'button3') {
      item.parentElement.parentElement;
      console.log('okey');
      todoListe.style.backgroundColor = 'green';
    }

    if (item.classList[0] === 'button2') {
      item.parentElement;
      console.log('oooo');
      todoListe.style.backgroundColor = 'orange';
    }

    if (item.classList[0] === 'button1') {
      item.parentElement;
      console.log('oooo');
      todoListe.style.backgroundColor = 'red';
    }

    if (item.classList[0] === 'button0') {
      const todo = item.parentElement;
      todo.classList.add('fall');
      todo.remove();
    }
  }
}
