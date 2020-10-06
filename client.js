console.log('Here are all the available people:', people);

// On document load, 
// append divs for each person in the `data.js` file to the DOM with jQuery
//  (not hardcoded), 
// each containing an image from each GitHub profile (see the provided data.js file). 
// As an example, the below HTML would produce Chris's GitHub profile picture 
// where `christopher-black` is Chris's GitHub username 
// and `250` is the size of the picture requested.
$(document).ready(onReady);

let randomPerson = '';

function onReady(){
  console.log('hello from jq');
  appendPeople();
  pickRandomPerson();
  $('#githubPeople').on('click', '.clickPic' , clickedPerson)

}

function clickedPerson(){
  let clickedPerson = $(this).data('name');
  console.log('clicked person', clickedPerson, randomPerson);

  //compare the two names
  //compare clickedPerson to randomPerson
  if( clickedPerson == randomPerson){
    alert(`Yes! This is ${randomPerson}`);
    pickRandomPerson();
  } else {
      alert('Nope! Try again!');
  }

}

function appendPeople(){
  for ( let i = 0; i< people.length; i++){
      $('#githubPeople').append(`
          <li data-name=${people[i].name} class="clickPic">
              <img src="https://github.com/${people[i].githubUsername}.png?size=250" 
              alt="Profile image of ${people[i].name}" 
              />
          </li>
      `);
  }
}

function pickRandomPerson(){
  let randomNum = randomNumber(0, people.length - 1);
  console.log('random number', randomNum);

  randomPerson = people[randomNum].name;
  $('#person').empty();
  $('#person').append(people[randomNum].name);
}

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}