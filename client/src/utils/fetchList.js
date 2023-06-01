async function fetchList() {
  const res = await fetch("http://localhost:5000/getLists");
  if (!res.ok) {
    throw new Error("Error fetching list in fetchList");
  }

  return res.json();
}

export default fetchList;
