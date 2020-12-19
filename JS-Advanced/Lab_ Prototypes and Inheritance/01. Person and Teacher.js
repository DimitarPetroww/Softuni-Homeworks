function personAndTeacher()  {
    class Person {
        constructor(name , email) {
            Object.assign(this , {name , email})
        }
    }

    class Teacher extends Person{
        constructor(name , email , subject) {
            super(name , email)
            this.subject=subject
        }
    }


    return {
        Person,
        Teacher
    }
}
