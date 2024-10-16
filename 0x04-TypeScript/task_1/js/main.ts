interface Teacher {
    readonly firstName: string, 
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string
    [propName: string]: any
}
interface Directors extends Teacher {
    numberOfReports: number
}
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
};

interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}
interface StudentConstructor {
    firstName: string;
    lastName: string;
}
class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;

    constructor({ firstName, lastName }: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return 'Currently working';
    }
    displayName(): string {
        return this.firstName;
    }
}