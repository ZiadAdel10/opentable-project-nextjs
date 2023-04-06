function Form() {
  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 text-gray-700 bg-white"
        placeholder="First name"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 text-gray-700 bg-white"
        placeholder="Last name"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 text-gray-700 bg-white"
        placeholder="Phone number"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 text-gray-700 bg-white"
        placeholder="Email"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 text-gray-700 bg-white"
        placeholder="Occasion (optional)"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 text-gray-700 bg-white"
        placeholder="Requests (optional)"
      />
      <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
        Complete reservation
      </button>
      <p className="mt-4 text-sm text-gray-700">
        By clicking “Complete reservation” you agree to the OpenTable Terms of
        Use and Privacy Policy. Standard text message rates may apply. You may
        opt out of receiving text messages at any time.
      </p>
    </div>
  );
}

export default Form;
