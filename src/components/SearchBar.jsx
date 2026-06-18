function SearchBar({ city, setCity, onSearch }) {
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      onSearch()
    }
  }
  return (
    <div>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} 
      onKeyDown={handleKeyDown} />
      <button onClick={onSearch} >Search</button>
    </div>
  )
}
export default SearchBar