function getUniqueElements(arr1, arr2) {
  const combinedArray = arr1.concat(arr2);
  return Array.from(new Set(combinedArray));
}
