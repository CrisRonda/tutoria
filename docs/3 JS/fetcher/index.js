require("isomorphic-unfetch");

const fetcher = async ({ url, options = {} }) => {
  const res = await fetch(url, options);
  if (res.status >= 400) {
    throw new Error("Bad response from server");
  }
  return res.json();
};

module.exports = {
  fetcher,
};
