const Search = ({searchHandler}) => {
    return (
        <div className="search">
            <input type="text" name="search" id="search"
                onChange={(e) => searchHandler(e.target.value)} />
            <button>search</button>
        </div>
    )
}
export default Search