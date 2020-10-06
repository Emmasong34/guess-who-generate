console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady(){
console.log('hello from jq');
postToDom();
$('#randomName').text(randomNumber)
}


function guessWho(){
    console.log('click event will go here');
}

 function postToDom(){   
    for(people of people){
        $('#newDiv').append(`
        <div>
        <img src="https://github.com/${people.githubUsername}.png?size=250" alt="Profile image of ${people.name}"></img>
        </div>
        `)
    }

}


function () {
    for (var i = 0; i < people.length; i++) {
      if (people.name == randomNumber) {
        return true;
      }
    }
    return false;
  }
//  function randomNumber(min, max){
//      $('#newDiv').data(people.name);
//     return Math.floor(Math.random() * (1 + max - min) + min);
    
// }
//$("#btn1").click(function(){
    //$("div").data(testObj);