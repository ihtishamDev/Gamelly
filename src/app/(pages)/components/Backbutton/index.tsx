const Backbutton =()=>{
    return(
        <div className="mt-5">
      <button
        type="button"
        className="text-Black cursor-pointer gap-2 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center "
      >
        <svg
          className="rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
       Back
        
      </button>
      </div>
    )
}
export default Backbutton