function display_home()
{
    document.getElementById("home").style.display= 'block';
    document.getElementById("education").style.display= 'none';
    document.getElementById("skills").style.display= 'none';
    document.getElementById("contact").style.display= 'none';
    document.getElementById("dropdown").style.display="none";
}
function display_education()
{
    document.getElementById("home").style.display= 'none';
    document.getElementById("education").style.display= 'block';
    document.getElementById("skills").style.display= 'none';
    document.getElementById("contact").style.display= 'none';
    document.getElementById("dropdown").style.display="none";
}
function display_skills()
{
    document.getElementById("home").style.display= 'none';
    document.getElementById("education").style.display= 'none';
    document.getElementById("skills").style.display= 'block';
    document.getElementById("contact").style.display= 'none';
    document.getElementById("dropdown").style.display="none";
}
function display_contact()
{
    document.getElementById("home").style.display= 'none';
    document.getElementById("education").style.display= 'none';
    document.getElementById("skills").style.display= 'none';
    document.getElementById("contact").style.display= 'block';
    document.getElementById("dropdown").style.display="none";
}
function display_dropdown()
{
    if(document.getElementById("dropdown").style.display=="none")
    {
        document.getElementById("dropdown").style.display="block";
    }
    else
    {
        document.getElementById("dropdown").style.display="none";
    }
}
function time_caller()
{
    setTimeout('display_time()',1000);
}
function display_time()
{
document.getElementById("date").innerHTML=new Date().toLocaleString();
time_caller();
if(window.innerWidth>625)
{
    document.getElementById("dropdown").style.display="none";
}


}
function sendEmail()
{
    console.log(document.getElementById("inp-name").value);
    console.log(document.getElementById("inp-email").value);
    console.log(document.getElementById("inp-textarea").value);
    document.getElementById("inp-textarea").value="";
    document.getElementById("inp-email").value="";
    document.getElementById("inp-name").value="";
}
