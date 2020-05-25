const guideList = document.querySelector('.guides');
var texts=[];
var isSvg =false;

db.collection('submitedText').onSnapshot(snapshot => {
    loadText(snapshot.docs);
})

const loadText = (data) => {
    if (data.length) {
      let html = '';
      data.forEach(doc => {
        const guide = doc.data();
        const li = `
          <li class="collapsible-header grey lighten-4" id=${guide.word}>
            <div > 
            <p>${guide.word}<br></p>
            <label >size:</label><br><br>
            <input type="text"  value= ${guide.size}></input>
            <button>delete</button><button>Change</button>
            </div>
          </li>
        `; 
        html += li;
      });
      guideList.innerHTML = html
    } else {
        //if there were no data to log
      guideList.innerHTML = '<h5 class="center-align"></h5>';
    }
  };

