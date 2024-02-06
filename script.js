console.log("Test");
function header() {
    var temp = '<h1 class="tekst-center">Harry Potter</h1>';
    
    return temp
}

function headerIMG() {

    var temp = '<img src="R.jpeg">';
    return temp
}

function contact() {
    var temp = `
    <div>
        <h2>Kontakt</h2>
        <p>Numer telefonu: +8728437482 </p>
        <p>E-mail: yesok@hmail.com </p>
    </div>
    <div>
        <button class="x-js btn btn-danger">X</button>
    </div>
    `;
    return temp
}


function menu() {
    let temp = `

    <ul class="list-group">
    <li class="list-group-item text-center"><button class="home-js btn btn btn-link">Strona Głowna</button></li>

    <li class="list-group-item text-center"><button class="kontakt-js btn btn-link">Kontakt</button></li>
    </ul>
    `
    return temp;
}


function homePage() {
    let temp =`
    Harry Potter – cykl siedmiu powieści fantasy autorstwa brytyjskiej pisarki J.K. Rowling, wydawanych od 1997 do 2007 roku. Cykl przedstawia świat magii, czyli społeczność czarodziejów, istniejącą równolegle do świata niemagicznego, tak zwanego mugolskiego. Głównymi bohaterami są nastoletni Harry Potter oraz jego przyjaciele: Ron Weasley i Hermiona Granger, uczniowie Szkoły Magii i Czarodziejstwa w Hogwarcie. Najważniejszym wątkiem powieści jest walka czarodziejów, w szczególności Harry’ego, z czarnoksiężnikiem Lordem Voldemortem, dążącym do zyskania nieśmiertelności i przejęcia władzy w świecie magii.
    <div>
        <button class="x-js btn btn-danger">X</button>
    </div>
    `
    return temp
}

let root = document.querySelector(".root");
console.log(root);
let body = document.querySelector('.body')
console.log(body)

root.innerHTML = "<h1>Aleksandra</h1>";
root.innerHTML += "<h2>Programistka</h2>";
root.innerHTML +="<p>Uczę się</p>";
root.innerHTML += '<img src="OIP.jpeg">';
root.innerHTML += '<b>Obrazek króliczka</b>';

root.innerHTML = header();

let czyMenu = false;
let czyKontakt = false;
let czyHome = false;



let Menu = document.querySelector(".Menu-js");
console.log(Menu);
Menu.addEventListener('click', ()=>{
    if(!czyMenu){
        root.innerHTML += menu();
        root.innerHTML += headerIMG();
        let kontakt = document.querySelector('.kontakt-js');
        let home = document.querySelector('.home-js')

        kontakt.onclick = () => {
            if(!czyKontakt){
                body.innerHTML = contact();
                root.innerHTML = headerIMG();
                czyKontakt = true;
                czyHome = false;
                let x = document.querySelector(".x-js");
                x.onclick = () => {
                    body.innerHTML = '';
                    czyKontakt = false
                }
            } else {
                body.innerHTML = '';
                czyKontakt = false;

            }

    }
    home.onclick = () => {
        if(!czyHome){
            body.innerHTML = homePage();
            root.innerHTML = headerIMG();
            czyHome = true;
            czyKontakt = false;
            let x = document.querySelector(".x-js");
            x.onclick = () => {
                body.innerHTML = '';
                czyKontakt = false
            }
        }else{
            body.innerHTML = '';
            czyHome = false;
        }
    }
        czyMenu = true;
    }else{
        root.innerHTML = header();
        czyMenu = false;
    }

})







