export const searchBored = (query) => {
  return fetch(`http://www.boredapi.com/api/activity/?type=${query}`);
};
