export function convertDateToNumber(text) {
  let array = text.split(' ');
  let day = array[0];
  let month = array[1];
  let year = array[2];
  switch (month) {
    case 'January':
      month = '01';
      break;
    case 'February':
      month = '02';
      break;
    case 'March':
      month = '03';
      break;
    case 'April':
      month = '04';
      break;
    case 'May':
      month = '05';
      break;
    case 'June':
      month = '06';
      break;
    case 'July':
      month = '07';
      break;
    case 'August':
      month = '08';
      break;
    case 'September':
      month = '09';
      break;
    case 'October':
      month = '10';
      break;
    case 'November':
      month = '11';
      break;
    case 'December':
      month = '12';
      break;
    default:
      month = '01';
  }
  return `${year}-${month}-${day}`;
}