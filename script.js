console.log("Test");
function header() {
    var temp = "<h1>Aleksandra</h1>";
    temp += "<h2>Programistka</h2>";

    return temp
}

function contact() {
    var temp = "<h2>Kontakt</h2>";
    temp += "<p>Numer telefonu: +8728437482 </p>";
    temp += "<p>E-mail: yesok@hmail.com </p>";
    temp += '<button class="x-js">X</button>'
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



let Menu = document.querySelector(".Menu-js");
console.log(Menu);
Menu.addEventListener('click', ()=>{
    if(!czyMenu){
        root.innerHTML += 
        `<ul>
            <li>Strona Głowna</li>

            <li><button class="kontakt-js">Kontakt</button></li>
        </ul>`
        let kontakt = document.querySelector('.kontakt-js');
        kontakt.onclick = () => {
            if(!czyKontakt){
                body.innerHTML = contact();
                czyKontakt = true;
                let x = document.querySelector(".x-js");
                x.onclick = () => {
                    body.innerHTML = '';
                czyKontakt = false
                }
            }else{
                body.innerHTML = '';
                czyKontakt = false
            }

    }
        czyMenu = true;
    }else{
        root.innerHTML = header();
        czyMenu = false;
    }

})






