const fetchDay = async (inputDate) => {
  const data = fetch(
    "https://api.nasa.gov/planetary/apod?api_key=NRBwI2gQUZo7Cj4zV1SmTXuAL8bNYhLqHCCcb380&date=" +
      inputDate
  )
    .then((response) => response.json())
    .then((fetchData) => {
      return fetchData;
    });

  return data;
};

module.exports = fetchDay;
export default fetchDay();
