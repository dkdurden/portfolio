let PROJECT_ID = import.meta.env.SANITY_PROJECT_ID;
let DATASET = import.meta.env.SANITY_DATASET;

export async function query(q) {
  const encodedQuery = encodeURIComponent(q);
  const url = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${encodedQuery}`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.result);
}
