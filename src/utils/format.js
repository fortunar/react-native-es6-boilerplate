export function capitalize(string) {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return null;
}

export function formatPhoneNumber(number) {
	if (number.length == 10) {
		return `(${number.substring(0,3)}) ${number.substring(3,6)}-${number.substring(6,10)}`;
	} else {
		return number;
	}
}