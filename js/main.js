btnShow = document.querySelector('.showImg');
btnMix = document.querySelector('.mixImg');

btnShow.addEventListener('click', imgShow);
btnMix.addEventListener('click', randomImg);

let nuotraukos = ['2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg'];
function imgShow() {
    btnShow.style.display = 'none';
    btnMix.style.display = 'block';
    for(let i=0;i<=7;i++)
    {
        const myImg = document.createElement("img");
        myImg.src = 'images/'+nuotraukos[i];
        myImg.alt=[i]+'- img';
        const myDiv = document.querySelectorAll(".show");

    }
}

function randomImg() {
    nuotraukos.sort( function() {
        return 0.5 - Math.random()
    });
    console.log(nuotraukos);
    for(let i=0;i<=7;i++)
    {
        let removeImg = document.querySelector('img');
        const myImg = document.createElement("img");
        myImg.src = 'images/'+nuotraukos[i];
        myImg.alt=[i]+'- img';
        const myDiv = document.querySelector(".imagePlace");
        myDiv.appendChild(myImg);
    }
    let myImg = document.querySelectorAll("img");
    for(let p=0;p<nuotraukos.length; p++) {
        myImg[p].ondblclick = function(e) {
            e.target.src = 'images/2.jpg';
        }
    }
    //rodymas konsolei
    let divShow = document.createElement('div');
    let showButton = document.createElement('button');
    divShow.className = 'col-x1-6';
    divShow.id ='showbtn';
    showButton.innerHTML = 'Parodyti išsaugotus';
    showButton.id = 'showButton';
    document.getElementById('btn')
    document.getElementById('showbtn')

    const showBtn = document.querySelector('#showButton');

    showBtn.addEventListener('click',showSave);

    function showSave(){
         if (document.querySelector('img')!==0){
             const s = localStorage.getItem('saved');
             console.log(s);
             for (i = 0; i < 10; i++){
                 let replaceImg = document.createElement("img");
                 replaceImg.id = 'id';
                 replaceImg.src=JSON.parse(localStorage.getItem('saved'))[i];
                 replaceImg.alt=[i+1] + '-oji foto';
                 document.getElementById('show');
             }
         }
    }

}