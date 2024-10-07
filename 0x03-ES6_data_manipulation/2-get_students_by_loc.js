export default function getStudentsByLocation(arr, element) {
  const filteredByCity = arr.filter((x) => x.location === element);
  return filteredByCity;
}
