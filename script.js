console.log('JOE AUTO RAVEN');

d = document.createElement('div');
d.innerText = 'Joe auto raven login in progress';
d.style.backgroundColor = 'red';
d.style.color = 'white';
d.style.fontWeight = '900';
document.body.insertBefore(d, document.body.firstChild);

//cant use href as sometimes #something on end
//if (location.href == "https://www.vle.cam.ac.uk/login/index.php") {
if (location.origin == "https://www.vle.cam.ac.uk" &&
    location.pathname == "/login/index.php") {
    console.log('JOE: redirecting to authentication page');
    // redirect to authentication page
    location.href = "https://www.vle.cam.ac.uk/auth/raven/login.php";
} else {
    console.log('JOE: clicking login!');
    // the auto fill is not available to the form (.value will be empty string)
    // until the user clicks anywhere on the page. therefore complete auto
    // login not possible with chrome autofill: https://stackoverflow.com/questions/35049555/chrome-autofill-autocomplete-no-value-for-password
    // workaround is to have password here in plaintext !
    //setTimeout(()=>{
        //console.log(document.getElementById('pwd').value);
        //document.getElementsByTagName('form')[0].requestSubmit()
        //document.querySelector('input[value="Login"]').click();
    //}, 4000); //wait 1 second before trying to click login
    document.getElementById('userid').value = 'CHANGE TO USERNAME';
    document.getElementById('pwd').value = 'CHANGE TO PASSWORD';
    document.getElementsByTagName('form')[0].requestSubmit();
}
