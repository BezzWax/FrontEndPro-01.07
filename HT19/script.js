class Student {
    constructor(firstName, lastName, age, marks) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.marks = marks;
        this.attendances = new Array(25).fill(undefined);
        this.workDay = 0;
        this.sumAttendances = 0;
        this.avarageMark = 0;
    } 

    

    getStudentInfo(){
       
        let temp = 0;
        for(let element of this.marks){
            temp += element;
        }

        for(let el of this.attendances){
            if(el == true){
                this.sumAttendances++;
            }
        }


        this.avarageMark =  temp / this.marks.length;

        return `Student ${this.firstName} ${this.lastName} is ${this.age} years old, average mark ${this.avarageMark}`;
    }

    

    present(){
        if(this.workDay < 25){
            this.attendances[this.workDay] = true;
            this.workDay++;
        }
        else {
            console.log('Education is ending - t');
            return this.attendances;
        }
    }

    absent(){
        if(this.workDay < 25){
            this.attendances[this.workDay] = false;
            this.workDay++;
        }
        else {
            console.log('Education is ending - f');
            return this.attendances;
        }
    }

    summary(){

        if(this.avarageMark > 90 && this.sumAttendances / 25 > 0.9){
            console.log('Exelent');
        } else if ((this.avarageMark > 90 && this.sumAttendances / 25 < 0.9) || (this.avarageMark < 90 && this.sumAttendances / 25 > 0.9)){
            console.log('Good');
        } else {
            console.log('Can better');
        }

    }

}

const student1 = new Student("John", "Weak", 18, [85, 90, 99, 95]);
const student2 = new Student("Morty", "Smith", 19, [92, 88, 76, 84, 91]);

console.log(student1.getStudentInfo());
console.log(student2.getStudentInfo());

student1.present();
student1.absent();
student1.present();

student2.present();
student2.present();
student2.absent();

console.log(student1.attendances);
console.log(student2.attendances);

console.log(student1.summary());
console.log(student2.summary());
