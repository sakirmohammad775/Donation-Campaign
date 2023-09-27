

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className=" mb-5 text-black text-5xl font-bold">I Grow By Helping People In Need</h1>
                    <div className="flex">
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search here...." type="text" name="search"/>
                    <button className="btn bg-rose-600 border-none text-white">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;