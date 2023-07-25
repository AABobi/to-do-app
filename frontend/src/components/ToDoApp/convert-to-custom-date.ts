export function convertToCustomDate(unknowDate: string | undefined | Date) {
  if (!unknowDate) {
    return ;
  }
  let date;
  if (typeof unknowDate === 'string') {
     date = new Date(unknowDate);
  } else {
     date = unknowDate;
  }
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day.toString().padStart(2, "0")}.${month
    .toString()
    .padStart(2, "0")}.${year}`;
}
