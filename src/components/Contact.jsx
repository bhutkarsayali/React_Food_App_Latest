const Contact = () => {
  return (
    <div className="w-10/12 m-auto mt-[180px] p-10">
      <h1 className="font-bold text-2xl text-center">Contact Us</h1>
      <form className="flex flex-col">
        <input
          type="text"
          className="search-input bg-white shadow-lg shadow-black mt-5"
          placeholder="name"
        />
        <input
          type="text"
          className="search-input bg-white shadow-lg shadow-black mt-5"
          placeholder="message"
        />
        <button className="filter-btn w-80 mt-5">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
