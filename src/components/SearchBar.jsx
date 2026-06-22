import { useRef, useEffect } from "react"
function SearchBar({ city, setCity, onSearch }) {
  const inputElement = useRef(null)
  useEffect(() => {
    inputElement.current.focus()
  },[])
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      onSearch()
    }
  }
  return (
    <div className="flex gap-4 mb-4">
      <input className="flex-1 bg-gray-800 border border-gray-600 focus:outline-none
      focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-2 text-white placeholder-gray-400"
      type="text" value={city} onChange={(e) => setCity(e.target.value)} 
      onKeyDown={handleKeyDown} ref={inputElement} placeholder="Enter city.." />
      <button className="bg-blue-600 rounded-lg px-4 py-2 text-white hover:bg-blue-700 cursor-pointer" onClick={onSearch} >Search</button>
    </div>
  )
}
export default SearchBar