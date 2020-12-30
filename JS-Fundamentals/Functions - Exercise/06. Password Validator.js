function solve(arg) {
    let isLongEnough = ""
    let digits = 0
    let isAvailable = ""
    LongEnough(arg)
    available(arg)
    function LongEnough(password) {
        if (password.length >= 6 && password.length <= 10) {
            isLongEnough = true
        } else {
            isLongEnough = false
        }
    }
    function available(password) {
        for (let i = 0; i < password.length; i++) {
            if (password[i].toLowerCase() !== password[i].toUpperCase()) {
                isAvailable = true
            } else {
                if (Number(password[i]) >= 0 && Number(password[i]) <= 9) {
                    digits++
                } else {
                    isAvailable = false
                    break;
                }
            }
        }
    }
    if (isLongEnough === true && isAvailable === true && digits >= 2) {
        console.log("Password is valid");
    } else {
        if (!isLongEnough) {
            console.log("Password must be between 6 and 10 characters");
        } if (!isAvailable) {
            console.log("Password must consist only of letters and digits");
        } if (digits < 2) {
            console.log("Password must have at least 2 digits");
        }
    }
}
