var noms=[];
noms[0]=["KAWASAKI | ULTRA LX","MANSORY | BLACK MARLIN","YAMAHA | WAVERUNNER","KAWASAKI | ULTRA 310X","KAWASAKI | STX 310X","YAMAHA | SUPERJET"];
noms[1]=["YAMAHA | YZ250","SUZUKI | RM-Z450","APOLLO | RFZ","TRIUMPH | TIGER","APOLLO | GO4IT","CROSSFIRE CFR250"];
noms[2]=["KAYAC | MALIBU","Planche de Surf","kiteboarding","KAYAC | Aleutian","Windsurfing ","Surf Boat | Supreme"];
noms[3]=["YAMAHA | GRIZZLY 600","TORONTO | 1000W","ARCTIC CAT | 150","VIPER | ULTRA 350CC","STELS | GURPAD","BRAZEN | GT250"];
noms[4]=["JEEP | MOPAR","JEEP | RUBICON","JEEP | GLADIATOR","Mercedes-Benz G-Class","JEEP | WILLYS","JEEP | RUBICON"];
noms[5]=["SKI-DOO | GSX","YAMAHA | SIDEWINDER","Polaris 600 | Switchback Pro-S","Yamaha | Snoscoot","Arctic | Cat","Switchback | Assault"];
var prix=[];
prix[0]=[2000,3000,2500,3000,1800,1500];
prix[1]=[300,400,350,300,250,300];
prix[2]=[100,80,600,100,300,6000];
prix[3]=[400,400,350,500,450,500];
prix[4]=[700,700,400,4000,400,500];
prix[5]=[900,1400,1000,600,900,1200];
function Slides_produit(j,i)
{
    var div_produit=document.getElementsByClassName("slide_produit")[j].style.backgroundImage;
    var pos=Number(div_produit.charAt(12));
    var cate=div_produit.charAt(11);
    pos+=i;
    if(pos==0)
    {
        pos=6;
    }
    if(pos==7)
    {
        pos=1;
    }
    document.getElementsByClassName("slide_produit")[j].style.backgroundImage=`url('media/${cate}${pos}.png')`;
    document.getElementsByClassName("produi_nom")[j].innerHTML=noms[j][pos-1];
    document.getElementsByClassName("produi_prix")[j].innerHTML=" A partire de "+prix[j][pos-1]+" DH";
}
function get_dom()
{
    var cate=['b','c','d','e','f','g'];
    for(var j=0;j<6;j++)
    {
        document.getElementsByClassName("slide_produit")[j].style.backgroundImage=`url('media/${cate[j]}1.png')`;
    }
    for(var j=0;j<6;j++)
    {
        document.getElementsByClassName("produi_nom")[j].innerHTML=noms[j][0];
    }
    for(var j=0;j<6;j++)
    {
        document.getElementsByClassName("produi_prix")[j].innerHTML=" A partire de "+prix[j][0]+" DH";
    }
}

function reservation()
{
    if(date_naissance() && date_debut_location() && date_fin_location()){
        validation_inscription();
    }
}
function date_naissance()
{
    var valid=false;
    var element = document.getElementById("date_naissance");
    if(element.value !== "")
    {
        var date=new Date(element.value).getFullYear();
        var d = new Date().getFullYear();
        if((d-date)>21)
        {
            valid=true;
            element.style.borderColor="black";
        }
        else
         {
            element.style.borderColor="red";
            alert("l'age doit etre supérieur ou bien égale 21");
         }
    }
    else
    {
        element.style.borderColor="red";
    }
    return valid;
}
function date_debut_location()
{
    var valid=false;
    var element = document.getElementById("date_debut_location");
    if(element.value !== "")
    {
        var date=new Date(element.value);
        var d = new Date();
        if(date>d)
        {
            valid=true;
            element.style.borderColor="black";
        }
        else
         {
            element.style.borderColor="red";
            alert("date debut de location doit etre supérieur la date d'aujourdhui");
         }
    }
    else
    {
        element.style.borderColor="red";
    }
    return valid;
}
function date_fin_location()
{
    var valid=false;
    var element = document.getElementById("date_fin_location");
    var element1 = document.getElementById("date_debut_location");
    if(element.value !== "")
    {
        var date=new Date(element.value);
        var d = new Date(element1.value);
        if(date>=d)
        {
            valid=true;
            element.style.borderColor="black";
        }
        else
         {
            element.style.borderColor="red";
            alert("date fin de location doit etre supérieur la date date debut de location");
         }
    }
    else
    {
        element.style.borderColor="red";
    }
    return valid;
}
var k=0;
function validation_inscription()
{
    var age=((new Date().getFullYear())-(new Date(document.getElementById("date_naissance").value).getFullYear()));
    var ele=document.getElementsByClassName('slide_produit')[k];
    var element=document.getElementById("validation_inscription1");
    var element1=element.children;
    element1[1].src=`media/${ele.style.backgroundImage.substring(11, 13)}.png`;
    var fin = document.getElementById("date_fin_location");
    var debut = document.getElementById("date_debut_location");
    var nbr_jour=(new Date(fin.value)- new Date(debut.value))/(1000 * 60 * 60 * 24)+1 ;
    var jour;
    if(nbr_jour==1)
    {
        jour="jour"
    }
    else
    {
        jour="jours"
    }
    var nbr_personne=document.getElementById("nbr_personne").value;
    var personne;
    if(nbr_personne==1)
    {
        personne="seul personne"
    }
    else
    {
        personne="personnes"
    }
    element1[2].innerHTML="Bonjour "+sessionStorage.getItem("nom")+" vous avez  "+age+" ans<br>vous avez réservé "+ele.children[2].innerHTML+" de la période de "+nbr_jour+" "+jour+" pour "+nbr_personne+" "+personne;
    document.getElementById("validation_inscription").style.visibility="visible";
}
function Hidden_validation_inscription()
{
    document.getElementById("validation_inscription").style.visibility="hidden";
}

function c1(i) {
    var htmlString=`<table>
        <tr>
            <td><p>Date naissance :</p></td>
            <td><p>Nombre personne :</p></td>
        </tr>
        <tr>
            <td><input type="date" id="date_naissance" onchange="date_naissance()"></td>
            <td>
                <select name="nbr_personne" id="nbr_personne">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </td>
        </tr>
        <tr>
            <td><p>Date debut location</p></td>
            <td><p>Date fin location</p></td>
        </tr>
        <tr>
            <td><input type="date" id="date_debut_location" onchange="date_debut_location()"></td>
            <td><input type="date" id="date_fin_location" onchange="date_fin_location()"></td>
        </tr>
        <tr>
            <td colspan="2"><button onclick="reservation()">réservation</button></td>
        </tr>
    </table>`;
    var div = document.createElement('div');
    div.setAttribute("class", "form_reservation");
    div.innerHTML = htmlString;
    document.getElementsByClassName("slide_produit")[i].after(div);
    var btn_reserve=document.getElementsByClassName("btn_reserve");
    var slid1=document.getElementsByClassName("slid-1");
    var slid_1=document.getElementsByClassName("slid_1");
    btn_reserve[i].style="display: none";
    for(j=0;j<6;j++)
    {
        btn_reserve[j].disabled=true;
    }
    document.getElementsByClassName("btn_annuler")[i].style="display: inline";
    k=i;
  }
  function annuler(i)
  {
    var btn_reserve=document.getElementsByClassName("btn_reserve");
    document.getElementsByClassName("btn_annuler")[i].style="display: none";
    btn_reserve[i].style="display: inline";
    for(j=0;j<6;j++)
    {
        btn_reserve[j].disabled=false;
    }
    var list = document.getElementById("section");
    list.removeChild(list.childNodes[(i+1)*4]);
  }