export function ValidationAdminRegistration(data){
    let error = {}
    error.valid = true;

    const namePattern = /^[A-Za-z ]+$/;
    const nicPattern = /\d{12}/;
    const contactPattern = /\d{3}-\d{7}/;
    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (data.adminName===""){
        error.adminName = "Name should not be empty";
        error.valid = false;
    }else if (!namePattern.test(data.adminName)){
        error.adminName = "Only letters should be contained"
        error.valid = false;
    }

    if (data.adminNic===""){ // checked
        error.adminNic = "Contact number should not be empty"
        error.valid = false;
    }else if (!nicPattern.test(data.adminNic)){
        error.adminNic = "Invalid contact number. Should contain 12 digits"
        error.valid = false;
    }

    if (data.adminContact===""){ // checked
        error.adminContact = "Contact number should not be empty"
        error.valid = false;
    }else if (!contactPattern.test(data.adminContact)){
        error.adminContact = "Invalid contact number. format should like XXX-XXXXXXX"
        error.valid = false;
    }

    if (data.adminEmail===""){ // checked
        error.adminEmail="Email address should not be empty";
        error.valid = false;
    }else if (!emailPattern.test(data.adminEmail)){
        error.adminEmail="Invalid email";
        error.valid = false;
    }

    if (data.adminPassword===""){ // ok
        error.adminPassword="password should not be empty";
        error.valid = false;
    }else if (!passwordPattern.test(data.adminPassword)){
        error.adminPassword = "Password should contain lowercase and uppercase letter,digit and a symbol";
        error.valid = false;
    }

    if (data.confirmPassword==="" || data.confirmPassword!==data.adminPassword){
        error.confirmPassword = "Password does not match";
        error.valid = false;
    }
    console.log(error);
    return error;
}