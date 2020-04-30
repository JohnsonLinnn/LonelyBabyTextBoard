console.log("this web is runni");


const submitText = document.querySelector('#textInput');
console.log(submitText); 

submitText.addEventListener('submit', (e) => {
  console.log(submitText.inputMsg.value); 
  e.preventDefault();

    if(submitText.inputMsg.value!=""){
      db.collection('submitText').add({
        content: submitText.inputMsg.value 
        }).then(() => {
        // close the create modal & reset form
        submitText.reset();
        console.log("s_working"); 
    }).catch(err => {
      console.log(err.message);
    });
  }
});