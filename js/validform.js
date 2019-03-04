

function validationForm()
{ 
    var fnom=document.getElementById('nom').value;
    var fprenom=document.getElementById('prenom').value;
    var fadresse=document.getElementById('adresse').value;
    var femail=document.getElementById('email').value;
    var fpwd=document.getElementById('pwd').value;
    var fmsg=document.getElementById('msg').value;
     var regexemail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
     var regexmdp=/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/

   console.log(fpwd)


    
    if (fnom==""||fprenom==""||fadresse==""||femail==""||fpwd==""||fmsg=="")
    {
        alert("please enter the information ,one of the input is empty");
        return false;
    }
    if(!regexemail.test(femail))
    {
        alert('email invalid')
    }

    
    
    if(!regexmdp.test(fpwd))
{
    alert("mdp invalid")
}
else
alert("formulaire bien validée")







}
