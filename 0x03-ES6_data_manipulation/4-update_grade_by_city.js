export default function updateStudentGradeByCity(studentsList, city, newGradesList) {
  return studentsList
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeEntry = newGradesList.find(
        (studentGrade) => student.id === studentGrade.studentId,
      );

      const updatedStudent = { ...student };

      if (gradeEntry) {
        updatedStudent.grade = gradeEntry.grade;
      } else {
        updatedStudent.grade = 'N/A';
      }

      return updatedStudent;
    });
}
