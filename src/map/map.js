const map = (arr = []) => {
  if (!Array.isArray(arr)) throw new TypeError("Arr is not an Array");
  return arr;
};

export default map;
