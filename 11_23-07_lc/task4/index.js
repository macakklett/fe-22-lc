function findMissingIds(ids) {
  // const [min, max] = ids.reduce(
  //   ([min, max], el) => [Math.min(min, el), Math.max(max, el)],
  //   [ids[0], ids[0]],
  // );

  const min = Math.min(...ids);
  const max = Math.max(...ids);

  const arr = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  return arr.filter(el => !ids.includes(el));
}
console.log(findMissingIds([1, 2, 4, 5])); // ===> [3]
console.log(findMissingIds([10, 13, 14])); // ===> [11, 12]
console.log(findMissingIds([20, 18, 17, 14])); // ===> [15, 16, 19]

// findMissingIds([1, 2, 4, 5]); // ===> [3]
// findMissingIds([10, 13, 14]); // ===> [11, 12]
// findMissingIds([20, 18, 17, 14]);
