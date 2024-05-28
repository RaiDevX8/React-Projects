const Cards = () => {
    return (
        <div className="justify-between pt-10 bg-blue-400 pl-5 pr-5 pb-10  flex flex-wrap sm:flex-col md:flex-row align-middle items-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://source.unsplash.com/800x600/?sunset,mountains" alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">current events</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, 
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#funding</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#money</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#helping</span>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://source.unsplash.com/800x600/?children,happy" alt="Happy children" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Happy Children</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, n
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#kids</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#happiness</span>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://source.unsplash.com/800x600/?boys,road" alt="Boys walking down a road" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">helping poor</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#boys</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#road</span>
                </div>
            </div>
        </div>
    );
};

export default Cards;
