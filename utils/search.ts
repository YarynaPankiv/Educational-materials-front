export const search = (array, input, getStringFromItem) => {
  const startWith = array.filter((item) =>
    getStringFromItem(item).toLowerCase().startsWith(input.toLowerCase())
  );

  const contains = array.filter(
    (item) =>
      getStringFromItem(item).toLowerCase().indexOf(input.toLowerCase()) !== -1
  );

  const subtractStartWithFromContains = contains.filter(
    (containsItem) =>
      !startWith.some(
        (startWithItem) =>
          getStringFromItem(containsItem) === getStringFromItem(startWithItem)
      )
  );

  return [...startWith, ...subtractStartWithFromContains];
};
