async function fetchChannels(value) {
  console.log(value);
  const res = await fetch(`http://localhost:5000/search?search_query=${value}`);
  if (!res.ok) {
    throw new Error("Error fetching list in fetchList");
  }
  return res.json();
}

export default fetchChannels;
