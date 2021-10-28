export default async function fetchDefault() {
  // calculate date 1 week ago from today - method should work while crossing months and years
  const currentDate = new Date();
  const oneWeekAgo = new Date(currentDate.setDate(currentDate.getDate() - 7));
  const yyyy = oneWeekAgo.getFullYear();
  const mm = String(oneWeekAgo.getMonth() + 1).padStart(2, "0");
  const dd = String(oneWeekAgo.getDate()).padStart(2, "0");
  const inputDate = yyyy + "-" + mm + "-" + dd;

  const data = fetch(
    "https://api.nasa.gov/planetary/apod?api_key=NRBwI2gQUZo7Cj4zV1SmTXuAL8bNYhLqHCCcb380&start_date=" +
      inputDate
  )
    .then((response) => response.json())
    .then((fetchData) => {
      return fetchData;
    });

  return data;
}

// module.exports = fetchDefault;
// export default fetchDefault();
