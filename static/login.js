const submitButton = document.getElementById('submitButton');


    function login(e){
        e.preventDefault();
        setCookie("email",document.getElementById('email').value,0.1);
        setCookie("password",document.getElementById('pwd').value,0.1);
        location.reload(true);
    };
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};