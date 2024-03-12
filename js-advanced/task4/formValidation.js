function validate() {
    $("#company").on("change", showHideCompany);

    $("#submit").on("click", function (ev) {
        ev.preventDefault();

        let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
        let passwordRegex = /^\w{5,15}$/;
        let emailRegex = /@.*\./;
        let companyNumberRegex = /^[1-9]{1}[0-9]{3}$/;

        let username = document.getElementById("username");
        let email = document.getElementById("email");
        let pass = document.getElementById("password");
        let pass1 = document.getElementById("confirm-password");
        let isCompany = document.getElementById("company").value;
        let companyNum = document.getElementById("companyNumber");

        let isValid = true;

        if (!username.value.match(usernameRegex)) {
            isValid = false;
            username.style.border = "1px solid red";
        }
        if (!email.value.match(emailRegex)) {
            isValid = false;
            email.style.border = "1px solid red";
        }
        if (!pass.value.match(passwordRegex)) {
            isValid = false;
            pass.style.border = "1px solid red";
        }
        if (!pass1.value.match(passwordRegex)) {
            isValid = false;
            pass1.style.border = "1px solid red";
        }
        if (!companyNum.value.match(companyNumberRegex)) {
            isValid = false;
            companyNum.style.border = "1px solid red";
        }
    });

    function showHideCompany() {
        if ($(this).is(":checked")) {
            $("#companyInfo").css("display", "block");
        } else {
            $("#companyInfo").css("display", "none");
        }
    }
}
