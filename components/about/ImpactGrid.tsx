import Image from 'next/image';

const ImpactGrid = () => {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Column - Impact Section */}
                    <div className="lg:col-span-3   rounded-3xl p-8 bg-white min-h-[600px] flex items-start">
                        <span className="text-1xl md:text-2xl font-light text-black">Impact</span>
                    </div>

                    {/* Right Grid - 3x3 Grid */}
                    <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Row 1 */}
                        <div className="border-2  rounded-3xl p-6 bg-[#F5F5F5] flex flex-col justify-between min-h-[200px]">
                            <h3 className="text-2xl md:text-3xl font-light mb-2 text-black">
                                We are creatives
                            </h3>
                            <p className="text-2xl md:text-3xl font-light text-gray-400">
                                with values.
                            </p>
                        </div>

                        {/* Empty Space */}
                        <div className="hidden md:block border-2 border-red-500 rounded-3xl bg-transparent opacity-0"></div>

                        <div className="border-2  rounded-3xl p-6 bg-[#F5F5F5] flex flex-col justify-between min-h-[200px]">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-4xl md:text-5xl font-light text-black">06</span>
                                <span className="text-2xl">🤝</span>
                            </div>
                            <p className="text-sm md:text-base">Pro-bonos completed</p>
                        </div>

                        {/* Row 2 */}
                        <div className="border-2 rounded-3xl p-6 bg-[#F5F5F5] flex flex-col justify-between min-h-[200px]">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-4xl md:text-5xl font-light text-black">1,178</span>
                                <span className="text-2xl">🌳</span>
                            </div>
                            <p className="text-sm md:text-base">Trees planted</p>
                        </div>

                        <div className="border-2 rounded-3xl p-6 bg-[#F5F5F5] flex flex-col justify-between min-h-[200px]">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-4xl md:text-5xl font-light text-black">274.96</span>
                                <span className="text-2xl">☁️</span>
                            </div>
                            <p className="text-sm md:text-base">Sequestered tn of CO₂</p>
                        </div>

                        <div className="border-2 rounded-3xl p-6 bg-[#F5F5F5] flex flex-col justify-between min-h-[200px]">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-4xl md:text-5xl font-light text-black">21</span>
                                <span className="text-2xl">📍</span>
                            </div>
                            <p className="text-sm md:text-base">Locations planted</p>
                        </div>

                        {/* Row 3 */}
                        {/* Empty Space */}


                        <div className="border-2 rounded-3xl p-6 bg-[#F5F5F5] flex flex-col justify-between min-h-[200px]">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-4xl md:text-5xl font-light text-black">11</span>
                                <span className="text-2xl">😊</span>
                            </div>
                            <p className="text-sm md:text-base">Employees offset</p>
                        </div>


                        <div className="border-2 rounded-3xl p-6 bg-[#F5F5F5] flex flex-col justify-between min-h-[200px]">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-4xl md:text-5xl font-light text-black">89.9</span>
                            </div>
                            <p className="text-sm md:text-base">B Corp Score pending</p>
                        </div>

                        {/* Empty Space */}
                        <div className="hidden md:block border-2 border-red-500 rounded-3xl bg-transparent opacity-0"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactGrid;