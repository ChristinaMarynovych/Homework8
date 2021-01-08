class Student {
    constructor(university, course, fullName) {
        this.marks = [5, 4, 4, 5];
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.study = true;
    }

getInfo() {
    return `Студент(ка) ${this.course} курсу ${this.university} м.Львів, ${this.fullName}`;
    }

getMarks() {
 return this.marks;
    }

set setMarks(mark) {
    return this.marks.push(mark);
    }

getAverageMark() {
    let sum = 0;
    this.marks.forEach((mark) => {
        sum = sum + mark;
    });
return (sum / this.marks.length);
    }

dismiss() {
    if (this.study === true) {
        this.study = false;
    return this.marks = [null];
    } else {
    return 'Виключений'
            }
    }

recover() {
    if (this.study === false) {
        this.study = true;
    return this.marks = [5, 4, 4, 5, 5];
    } else {
    return 'Поновлено';
            }
    }
}

const khrystyna = new Student('ЛНУ ім. Івана Франка', '5', 'Маринович Христина Богданівна');
console.log(khrystyna.getInfo());
console.log('Оцінки:', khrystyna.getMarks());
khrystyna.setMarks = 5;
console.log('Оцінки після контрольної:', khrystyna.getMarks());
console.log('Середня оцінка:', khrystyna.getAverageMark());
console.log('Студента виключено', khrystyna.dismiss());
console.log('Оцінки:', khrystyna.getMarks());
console.log('Студента поновлено', khrystyna.recover());
console.log('Оцінки:', khrystyna.getMarks());



