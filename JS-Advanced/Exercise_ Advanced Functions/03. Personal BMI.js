function solve() {
    let [name , age ,weight , height]=arguments
    function status(bmi) {
        if(bmi < 18.5) {
            return "underweight"
        }else if(bmi < 25) {
            return "normal"
        }else if(bmi < 30) {
            return "overweight"
        }
        return "obese"
    }
    let person = {
        name,
        personalInfo : {
            age,
            weight,
            height
        },
        BMI: Math.round(Number(weight) / ((Number(height) / 100) ** 2)),
        status: status(Math.round(Number(weight) / ((Number(height) / 100) ** 2))),
    }
    if(person.status==="obese" ) {
        person.recommendation='admission required'
    }
    return person
}
