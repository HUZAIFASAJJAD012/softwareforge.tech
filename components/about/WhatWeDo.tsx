const WhatWeDo = () => {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Column - What we do Header */}
                    <div className="lg:col-span-3  rounded-3xl p-8 bg-white min-h-[600px] flex items-start">
                        <span className="text-1xl md:text-2xl font-light text-black">What we do</span>
                    </div>

                    {/* Right Grid - 3x3 */}
                    <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Row 1 */}
                        <div className="  rounded-3xl p-8  flex flex-col min-h-[280px]">
                            <h3 className="text-2xl md:text-2xl mb-2 text-black">End-to-end</h3>
                            <p className="text-2xl md:text-1xl font-light text-gray-400">creative execution.</p>
                        </div>

                        <div className="border-2 rounded-3xl p-8 bg-[#F0F0F0] flex flex-col min-h-[280px]">
                            <h3 className="text-2xl md:text-3xl font-light mb-6 text-black">Brand</h3>
                            <ul className="space-y-2 text-sm text-gray-500">
                                <li>Positioning & Strategy</li>
                                <li>Verbal strategy</li>
                                <li>Visual identity</li>
                                <li>Naming</li>
                                <li>Logo design</li>
                                <li>Brand guidelines</li>
                                <li>Digital & print assets</li>
                            </ul>
                        </div>

                        <div className="border-2  rounded-3xl p-8 bg-[#F0F0F0] flex flex-col min-h-[280px]">
                            <h3 className="text-2xl md:text-3xl font-light mb-6 text-black">Website</h3>
                            <ul className="space-y-2 text-sm text-gray-500">
                                <li>Digital strategy</li>
                                <li>Art direction</li>
                                <li>UX/UI design</li>
                                <li>Webflow development</li>
                                <li>Shopify development</li>
                                <li>WebGL development</li>
                            </ul>
                        </div>

                        {/* Row 2 */}
                        <div className="border-2  rounded-3xl p-8 bg-[#F0F0F0] flex flex-col min-h-[280px]">
                            <h3 className="text-2xl md:text-3xl font-light mb-6 text-black">Product</h3>
                            <ul className="space-y-2 text-sm text-gray-500">
                                <li>Product strategy</li>
                                <li>Digital product design</li>
                                <li>Packaging design</li>
                                <li>Industrial design</li>
                            </ul>
                        </div>

                        <div className="border-2  rounded-3xl p-8 bg-[#F0F0F0] flex flex-col min-h-[280px]">
                            <h3 className="text-2xl md:text-3xl font-light mb-6 text-black">Content</h3>
                            <ul className="space-y-2 text-sm text-gray-500">
                                <li>Social</li>
                                <li>Photography</li>
                                <li>Video Production</li>
                                <li>Editing</li>
                                <li>Filming / Shooting</li>
                                <li>Motion design</li>
                                <li>3D & animation</li>
                                <li>Storyboarding</li>
                            </ul>
                        </div>

                        {/* Empty Space */}
                        <div className="hidden lg:block border-2 border-red-500 rounded-3xl bg-transparent opacity-0"></div>

                        {/* Row 3 - All Empty */}
                        <div className="hidden lg:block border-2 border-red-500 rounded-3xl bg-transparent opacity-0"></div>
                        <div className="hidden lg:block border-2 border-red-500 rounded-3xl bg-transparent opacity-0"></div>
                        <div className="hidden lg:block border-2 border-red-500 rounded-3xl bg-transparent opacity-0"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;