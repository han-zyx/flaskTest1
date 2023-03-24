function queryForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var details = document.getElementById("details").value;
    var subject = document.getElementById("subject").value;
    var emailRangeCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (name == "") {
        alert("Please enter your Name");
        return false;
    }

    if (email == "") {
        alert("Please enter your Email");
        return false;
    }


    if (!emailRangeCheck.test(email)) {
        alert("Please enter a valid Email");
        return false;
    }


    if (subject == "") {
        alert("Please select a subject for your inquiry.");
        return false;
    }

    if (details == "") {
        alert("Please enter a inquiry");
        return false;
    }




// function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        details: document.getElementById("details").value,
    };

    const serviceID = "Fake news Detector Pro";
    const templateID = "template_rc184pf";

    emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("details").value = "";
            console.log(res);
            alert("your message sent successfully");
        })
        .catch((err) => console.log(err));
    // }   
}