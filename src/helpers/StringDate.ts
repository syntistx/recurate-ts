export const toDate = (date:string) => {
  if (date == null) {
    return 'N/A';
  }
  const formate = new Date(date);
  const day = formate.getDate();
  const month = formate.toLocaleString('default', { month: 'short' });
  const year = formate.getFullYear();
  return `${month} ${day}, ${year}`;
};
