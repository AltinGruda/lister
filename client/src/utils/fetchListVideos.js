async function fetchListVideos({ queryKey }) {
  const id = queryKey[1];
  const res = await fetch(`http://localhost:5000/getListVideos/${id}`);
  if (!res.ok) {
    throw new Error("Error fetching list in fetchList");
  }
  return res.json();
}

export default fetchListVideos;
