export const SortOrder = {
  Ascending: 'ascending',
  Descending: 'descending',
};

export const SortType = {
  String: 'string',
  Number: 'number',
};

export const sort = (data, getKey, sortOrder, sortType) => {
  const orderOfSort =
    sortOrder === SortOrder.Ascending
      ? 1
      : sortOrder === SortOrder.Descending
      ? -1
      : 1;

  return [...data].sort((a, b) => {
    const x =
      sortType === SortType.String
        ? (getKey(a) || '').toString().toLowerCase().trim()
        : +getKey(a);
    const y =
      sortType === SortType.String
        ? (getKey(b) || '').toString().toLowerCase().trim()
        : +getKey(b);

    const result = x < y ? -1 : x > y ? 1 : 0;

    return result * orderOfSort;
  });
};
