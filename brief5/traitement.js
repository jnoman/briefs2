function f_connection()
{
    if(validation_nom(0) && validation_password(0))
    {
        f_session(0);
        window.location.href = 'reservation.html';
    }
}
function f_inscription()
{
    if(validation_nom(1) && validation_password(1) && confirmation_password(0))
    {
        f_session(1);
        window.location.href = 'reservation.html';   
    }
}
function f_connection_1()
{
    if(validation_nom(0) && validation_password(0))
    {
        f_session(0);
        Hidden_connection();
    }
}
function f_inscription_1()
{
    if(validation_nom(1) && validation_password(1) && confirmation_password(0))
    {
        f_session(1);
        Hidden_inscription();
    }
}
function validation_nom(i)
{
    var nom=document.getElementsByClassName("nom")[i];
    nom.value= nom.value.toUpperCase();
    var valid;
    var reg=/^[A-Z]{3,}$/;
    if(!reg.test(nom.value))
    {
        valid=false;
        nom.style.borderBottomColor="red";
    }
    else
    {
        valid=true;
        nom.style.borderBottomColor="black";
    }
    return valid;
}
function validation_password(i)
{
    var pass=document.getElementsByClassName("password")[i];
    var valid;
    if(pass.value.length<8)
    {
        valid=false;
        pass.style.borderBottomColor="red";
    }
    else
    {
        valid=true;
        pass.style.borderBottomColor="black";
    }
    return valid;
}
function confirmation_password(i)
{
    var pass=document.getElementsByClassName("password")[i];
    var conf_pass=document.getElementsByClassName("conf_password")[i];
    var valid;
    if(validation_password(i))
    {
        if(pass.value !== conf_pass.value)
        {
            valid=false;
            conf_pass.style.borderBottomColor="red";
        }
        else
        {
            valid=true;
            conf_pass.style.borderBottomColor="black";
        }
    }
    return valid;
}

function afficher_connextion()
{
    document.getElementById("bg_connexion").style.visibility="visible";
}
function afficher_inscription()
{
    document.getElementById("bg_inscription").style.visibility="visible";
}
function Hidden_connection()
{
    document.getElementById("bg_connexion").style.visibility="hidden";
}
function Hidden_inscription()
{
    document.getElementById("bg_inscription").style.visibility="hidden";
}
function connection_to_inscription()
{
    Hidden_connection();
    afficher_inscription()
}
function inscription_to_connection()
{
    Hidden_inscription();
    afficher_connextion()
}
function f_session(i)
{
    sessionStorage.setItem("nom", document.getElementsByClassName("nom")[i].value);
}
function f_check_session()
{
    if (!sessionStorage.getItem("nom")) {
        document.getElementById("bg_connexion").style.visibility="visible";
    }
}
var pos=1;
function Slides(i)
{
    pos+=i;
    if(pos==0)
    {
        pos=6;
    }
    if(pos==7)
    {
        pos=1;
    }
    document.getElementById("section_galerie").style.backgroundImage=`url('media/a${pos}.png')`;
}
if(document.getElementById("section_galerie"))
{
    setInterval(() => {
        pos+=1;
        if(pos==7)
        {
            pos=1;
        }
        document.getElementById("section_galerie").style.backgroundImage=`url('media/a${pos}.png')`;
    }, 5000);
}
function deconnection()
{
    if (confirm('Voulez-vous vraiment quitter cette page?')) {
        sessionStorage.removeItem("nom");
        window.location.href= 'gallerie.html';
    }
}

//console.log(sessionStorage.getItem("nom"));