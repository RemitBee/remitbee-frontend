export function ValidationCustomerRegistration(data){
    let error = {}
    error.valid = true;

    const namePattern = /^[A-Za-z ]+$/;
    const numberPattern = /\d{8}/;
    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (data.name===""){
        error.name = "Name should not be empty";
        error.valid = false;
    }else if (!namePattern.test(data.name)){
        error.name = "Only letters should be contained"
        error.valid = false;
    }

    if (data.accountNumber===""){
        error.accountNumber = "Account number should not be empty"
        error.valid = false;
    }else if (!numberPattern.test(data.accountNumber)){
        error.accountNumber = "Invalid account number. 8 digits should be contained."
        error.valid = false;
    }

    if (data.email===""){
        error.email="Email address should not be empty";
        error.valid = false;
    }else if (!emailPattern.test(data.email)){
        error.email="Invalid email";
        error.valid = false;
    }

    if (data.password===""){
        error.password="password should not be empty";
        error.valid = false;
    }else if (!passwordPattern.test(data.password)){
        error.password = "Password should contain lowercase and uppercase letter,digit and a symbol";
        error.valid = false;
    }

    if (data.confirmPassword==="" || data.confirmPassword!==data.password){
        error.confirmPassword = "Password does not match";
        error.valid = false;
    }
    console.log(error);
    return error;
}

export function ValidationAdminRegistration(data){
    let error = {}
    error.valid = true;

    const namePattern = /^[A-Za-z ]+$/;
    const nicNumber = /\d{3}/;
    const numberPattern = /\d{3}/;
    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (data.name===""){
        error.name = "Name should not be empty";
        error.valid = false;
    }else if (!namePattern.test(data.name)){
        error.name = "Only letters should be contained"
        error.valid = false;
    }

    if (data.employeeNumber===""){
        error.employeeNumber = "Account number should not be empty"
        error.valid = false;
    }else if (!numberPattern.test(data.employeeNumber)){
        error.employeeNumber = "Invalid account number. 3 digits should be contained."
        error.valid = false;
    }

    if (data.email===""){
        error.email="Email address should not be empty";
        error.valid = false;
    }else if (!emailPattern.test(data.email)){
        error.email="Invalid email";
        error.valid = false;
    }

    if (data.password===""){
        error.password="password should not be empty";
        error.valid = false;
    }else if (!passwordPattern.test(data.password)){
        error.password = "Password should contain lowercase and uppercase letter,digit and a symbol";
        error.valid = false;
    }

    if (data.confirmPassword==="" || data.confirmPassword!==data.password){
        error.confirmPassword = "Password does not match";
        error.valid = false;
    }
    console.log(error);
    return error;
}