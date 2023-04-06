function SearchSideBar() {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2 text-gray-700 font-wdc font-[700]">Region</h1>
        <p className="font-400 text-reg text-gray-700 font-sans">Toronto</p>
        <p className="font-400 text-reg text-gray-700 font-sans">Ottawa</p>
        <p className="font-400 text-reg text-gray-700 font-sans">Montreal</p>
        <p className="font-400 text-reg text-gray-700 font-sans">Hamilton</p>
        <p className="font-400 text-reg text-gray-700 font-sans">Kingston</p>
        <p className="font-400 text-reg text-gray-700 font-sans">Niagara</p>
      </div>
      <div className="border-b pb-4 mt-3 text-gray-700 font-sans">
        <h1 className="mb-2 font-wdc font-[700]">Cuisine</h1>
        <p className="font-400 ">Mexican</p>
        <p className="font-400 ">Italian</p>
        <p className="font-400 ">Chinese</p>
      </div>
      <div className="mt-3 pb-4 text-[#374151]">
        <h1 className="mb-2  font-wdc font-[700]">Price</h1>
        <div className="flex">
          <button className="border w-full text-reg font-light rounded-l p-2">
            $
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2">
            $$
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchSideBar;
