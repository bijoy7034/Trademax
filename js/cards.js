function nav_contact(){
    var tempParams = {
        from_name: document.getElementById('email1').value,
        email_id: document.getElementById('email1').value,
        message:document.getElementById('message1').value,
        mobile_no:document.getElementById("mobile_no").value,
    };

    emailjs.send("service_76531l9","template_uno22oj",tempParams)
    .then(function(res){
        document.getElementById('contact_if').innerHTML = "You will get a phone call soon.."
    })
}