const { Link } = ReactRouterDOM;

const Home = () => {
    return <div className="flex flex-col bg-blue-900 w-full h-full mt-5">
        <section className="w-full flex flex-col items-center justify-center bg-gray-900">
            <h1 className="text-teal-100 font-bold text-4xl text-center tracking-widest">My Songify</h1>
            <p className="max-w-xl text-white mt-10 bg-gray-800 px-10 py-3 text-center shadow-xl rounded-lg">Amet anim aliqua amet laboris culpa deserunt ad id et magna voluptate voluptate. Culpa deserunt ad culpa labore sit ea cillum ullamco. Nisi consequat do ea sunt.
  In amet duis mollit minim reprehenderit. Ex ad sint aliquip magna. </p>
        </section>
        <section className="flex flex-col md:flex-row items-center justify-around py-32 bg-gray-900">
            <div className="border-0 sm:border-r-4 border-teal-500 w-full md:w-1/3 md:px-8 md:py-2">
                <h2 className="px-3 py-2 md:py-0 md:px-0 text-center md:text-right font-bold uppercase text-white text-3xl sm:text-4xl">Keep Track
                    <br className="hidden md:block" /> of the <br className="hidden md:block" />
                    <span className="text-teal-500">Best Music</span> <br className="hidden md:block" />in the <br className="hidden md:block" />
                    <span className="text-teal-500">Industry</span>
                </h2>
            </div>
            <div className="w-full md:w-2/3 md:h-full grid grid-rows-2 grid-cols-2 md:gap-4 md:px-8 md:py-2">
                <TopAlbumsCard />
                <TopAlbumsCard />
                <TopAlbumsCard />
                <TopAlbumsCard />
            </div>
        </section>
        <section className="flex flex-col items-center justify-center py-32 bg-gray-400">
            <h2 className="text-center font-semibold uppercase text-teal-700 text-3xl">
                Start Your Journey
                     </h2>
            <Link to="/register"
                className="mt-10 px-8 sm:px-10 md:px-24 py-4 text-xl bg-teal-700 text-teal-100 rounded shadow-xl hover:bg-teal-800">
                Register
                 </Link>
        </section>
        <section id="about" className="flex flex-col items-center bg-gray-900 py-24">
            <h2 className="text-center text-teal-100 tracking-wider border-b-2 border-teal-500  pb-3 font-semibold uppercase text-white text-3xl">
                About this Project
                     </h2>
            <p className="mt-5 md:mt-8 bg-gray-800 px-4 sm:px-8 md:px-10 py-3  text-white rounded-lg shadow-lg">
                This project has been created to test the insides <br className="hidden sm:block" />
                     of websites like Tidal and Spotify which are <br className="hidden sm:block" />
                     used for listening to songs.
                     </p>
        </section>

    </div >
    //     return <div className="bg-blue-800">
    //         <section className="flex flex-col items-center justify-center px-10 py-2 bg-gray-900 mt-5">
    //             <h1 className="text-teal-100 font-bold text-4xl text-center tracking-widest">My Songify</h1>
    //             <p className="max-w-xl text-white mt-10 bg-gray-800 px-10 py-3 text-center shadow-xl rounded-lg">Amet anim aliqua amet laboris culpa deserunt ad id et magna voluptate voluptate. Culpa deserunt ad culpa labore sit ea cillum ullamco. Nisi consequat do ea sunt.
    // In amet duis mollit minim reprehenderit. Ex ad sint aliquip magna. </p>
    //         </section>
    //         <section className="flex flex-col md:flex-row items-center justify-around py-32 bg-gray-900">
    //             <div className="border-0 sm:border-r-4 border-teal-500 w-full md:w-1/3 md:px-8 md:py-2">
    //                 <h2 className="px-3 py-2 md:py-0 md:px-0 text-center md:text-right font-bold uppercase text-white text-3xl sm:text-4xl">Keep Track
    //                 <br className="hidden md:block" /> of the <br className="hidden md:block" />
    //                     <span className="text-teal-500">Best Music</span> <br className="hidden md:block" />in the <br className="hidden md:block" />
    //                     <span className="text-teal-500">Industry</span>
    //                 </h2>
    //             </div>
    //             <div className="w-full md:w-2/3 md:h-full grid grid-rows-2 grid-cols-2 md:gap-4 md:px-8 md:py-2">
    //                 <TopAlbumsCard />
    //                 <TopAlbumsCard />
    //                 <TopAlbumsCard />
    //                 <TopAlbumsCard />
    //             </div>
    //         </section>
    //         <section className="flex flex-col items-center justify-center py-32 bg-gray-400">
    //             <h2 className="text-center font-semibold uppercase text-teal-700 text-3xl">
    //                 Start Your Journey
    //                 </h2>
    //             <Link to="/register"
    //                 className="mt-10 px-8 sm:px-10 md:px-24 py-4 text-xl bg-teal-700 text-teal-100 rounded shadow-xl hover:bg-teal-800">
    //                 Register
    //             </Link>
    //         </section>
    //         <section id="about" className="flex flex-col items-center bg-gray-900 py-24">
    //             <h2 className="text-center text-teal-100 tracking-wider border-b-2 border-teal-500  pb-3 font-semibold uppercase text-white text-3xl">
    //                 About this Project
    //                 </h2>
    //             <p className="mt-5 md:mt-8 bg-gray-800 px-4 sm:px-8 md:px-10 py-3  text-white rounded-lg shadow-lg">
    //                 This project has been created to test the insides <br className="hidden sm:block" />
    //                 of websites like Tidal and Spotify which are <br className="hidden sm:block" />
    //                 used for listening to songs.
    //                 </p>
    //         </section>
    //     </div>
}

const TopAlbumsCard = () => {
    return <div className="row-span-1 flex flex-col w-32 h-32 bg-gray-700  rounded-lg shadow-lg overflow-hidden">
        <div style={{ height: '75%' }} className="w-full bg-gray-800"></div>
        <div className="inline-flex items-center space-x-2 text-gray-200 px-3 py-2"><span>Like</span> <span>1K</span></div>
    </div>
}