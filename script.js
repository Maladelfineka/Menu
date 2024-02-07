//--------------------------------------------

function header() {
    let temp = "<h1>Harry Potter</h1>";

    return temp
}
function headerImg() {
    let temp = header();
    temp += '<img src="R.jpeg">';
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

function menuComponent() {
    let temp = `

    <ul class="list-group">
    <li class="list-group-item text-center"><button class="home-js btn btn btn-link">Strona Głowna</button></li>

    <li class="list-group-item text-center"><button class="history-js btn btn-link">History</button></li>

    <li class="list-group-item text-center"><button class="kontakt-js btn btn-link">Kontakt</button></li>

    </ul>
    `
    return temp;
}

function homePage() {
    let temp = `
   <p class=tekst>
   Harry Potter – cykl siedmiu powieści fantasy autorstwa brytyjskiej pisarki J.K. Rowling, wydawanych od 1997 do 2007 roku. Cykl przedstawia świat magii, czyli społeczność czarodziejów, istniejącą równolegle do świata niemagicznego, tak zwanego mugolskiego. Głównymi bohaterami są nastoletni Harry Potter oraz jego przyjaciele: Ron Weasley i Hermiona Granger, uczniowie Szkoły Magii i Czarodziejstwa w Hogwarcie. Najważniejszym wątkiem powieści jest walka czarodziejów, w szczególności Harry’ego, z czarnoksiężnikiem Lordem Voldemortem, dążącym do zyskania nieśmiertelności i przejęcia władzy w świecie magii.
   </p>
   <div>
        <button class="x-home-js btn btn-danger">X</button>
    </div>
    `
    return temp;
}

function historyPage() {
    let temp = `
    <p>
        Harry James[17] Potter (ur. 31 lipca 1980 r.) — czarodziej półkrwi, jedyne dziecko Jamesa i Lily Potterów. Najbardziej znany czarodziej XX w.
        Swoją sławę „zawdzięcza” proroctwu wypowiedzianemu na początku 1980 roku przez Sybillę Trelawney dotyczącą Lorda Voldemorta i chłopca urodzonego pod koniec siódmego miesiąca. W tym okresie urodziło się dwóch chłopców, jednakże, to właśnie Harry został wybrany jako równy Czarnemu Panu.

        W październiku 1981 roku Lord Voldemort zabił rodziców Harry’ego ukrywających się przy pomocy zaklęcia Fideliusa w Dolinie Godryka, pragnących za wszelką cenę uchronić swoje, zaledwie roczne i jedyne dziecko. Wydał ich Peter Pettigrew, który nawet nie chciał myśleć by zginąć za swojego przyjaciela i jego żonę. Ta wczesna próba usunięcia przeszkody na drodze do panowania nad światem czarodziejów nie powiodła się i doprowadziła do końca Pierwszej Wojny Czarodziejów, co było równoznaczne z upadkiem Czarnego Pana. Od tej chwili cały świat, znał Harry’ego jako „Chłopca, który przeżył”, czyli jedyną osobę, która do tej pory przeżyła mordercze zaklęcie.
    </p>
    <div>
        <button class="x-history-js btn btn-danger">X</button>
    </div>`
    return temp
}



function kontaktLogika() {
    let kontakt = document.querySelector('.kontakt-js')
    kontakt.onclick = () => {
        if (!czyKontakt) {
            root.innerHTML = header();
            body.innerHTML = contact();
            czyKontakt = true;
            czyHome = false;
            czyHistroy = false;
            let x = document.querySelector('.x-js');
            x.onclick = () => {
                body.innerHTML = '';
                czyKontakt = false;
            }
         
        }else{
            body.innerHTML = '';
            czyKontakt = false;
            root.innerHTML = header();
        }

    }
}

function homeLogika () {
    let home = document.querySelector('.home-js')
    home.onclick = ()=>{
        if (!czyHome) {
            body.innerHTML = homePage()
            root.innerHTML = headerImg();
            czyHome = true;
            czyKontakt = false;
            czyHistroy = false;
            let x = document.querySelector('.x-home-js');
            x.onclick = () => {
                body.innerHTML = '';
                czyKontakt = false;
            }
         
        }else{
            body.innerHTML = '';
            czyHome = false;
            root.innerHTML = header();
        }
    }

}

function historyLogika() {
    let history = document.querySelector('.history-js')
    history.onclick = ()=>{
        if (!czyHistroy) {
            body.innerHTML = historyPage();
            root.innerHTML = header();
            czyKontakt = false;
            czyHome = false;
            czyHistroy = true;
            let x = document.querySelector(".x-history-js");
            x.onclick = () => {
                body.innerHTML = '';
                czyHistroy = false;
            }


        }else{
            body.innerHTML ='';
            czyHistroy = false;
            root.innerHTML = header();
        }
    }
}

let root = document.querySelector('.root');

let body = document.querySelector('.body');

root.innerHTML = header()
let menu = document.querySelector(".menu-js");

let czyMenu = false;
let czyKontakt = false;
let czyHome = false;
let czyHistroy = false;

menu.addEventListener('click', () => {
    if (!czyMenu) {
        root.innerHTML += menuComponent();
        kontaktLogika()
        homeLogika()
        historyLogika()
        czyMenu = true;
    } else {
        root.innerHTML = header();
        czyMenu = false;
    }

})







