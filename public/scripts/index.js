console.log("this web is runni");


const submitText = document.querySelector('#textInput');
console.log(submitText); 

submitText.addEventListener('submit', (e) => {
  console.log(submitText.inputMsg.value); 
  e.preventDefault();
    var x = Math.floor(Math.random() * 100) + 1;
    if(submitText.inputMsg.value!=""){
      db.collection('submitedText').add({
        word: submitText.inputMsg.value,
        size:x
        }).then(() => {
        // close the create modal & reset for
        submitText.reset();
        console.log("s_working"); 
    }).catch(err => {
      console.log(err.message);
    });
  }
});