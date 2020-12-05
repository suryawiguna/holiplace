export default (number) => {
  const formattedNumber = new Intl.NumberFormat("id-ID");
  return formattedNumber.format(number);
}