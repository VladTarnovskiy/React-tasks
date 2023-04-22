// eslint-disable-next-line import/prefer-default-export
export const getDataFromApi = async (
  value: string,
  pageNum: number,
  perPageNum: number,
  imgSort: string
) => {
  const url = `https://api.unsplash.com/search/photos?page=${pageNum}&per_page=${perPageNum}&order_by=${imgSort}&query=${value}&client_id=_G-CEdAh_ell-uiSFlqCmINuadGChAQovi-i-wsPf3Q`;
  const response = await fetch(url);
  if (!response.ok) {
    throw Error('Could not fetch the data for that resource.');
  }
  const results = await response.json();
  const data = await results.results;
  return data;
};
