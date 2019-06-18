export const sortByField = (data, field) => data.sort((a, b) => a[field].localeCompare(b[field]));

export default sortByField;
