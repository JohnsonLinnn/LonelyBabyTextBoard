//getting all the string on the database;
db.collection('submitText').onSnapshot(snapshot=>{
setupText(snapshot.docs);

})

const textList = document.querySelector('.guides');

const setupText =(data) =>{
    if(data.length){
        let html = '';
            data.forEach(doc => {
            const texts = doc.data();
            const li = `
            <li>
                <div class="collapsible-header grey lighten-4"> ${texts.content} </div>
            </li>
            `;
            html += li;
            });
        textList.innerHTML = html;
    }
}