import Image from 'next/image';
import Link from 'next/link';

const Awards = () => {
    const awards = [
        { id: 1, category: 'HM', award: 'Orpetron', client: 'Copilot', date: 'Dec \'23' },
        { id: 2, category: 'HM', award: 'Awwwards', client: 'Copilot', date: 'Dec \'23' },
        { id: 3, category: 'KUDOS', award: 'CSSDA', client: 'Silverfox Events', date: 'Sept \'23' },
        { id: 4, category: 'UI', award: 'CSSDA', client: 'Silverfox Events', date: 'Sept \'23' },
        { id: 5, category: 'UI', award: 'CSSDA', client: 'Silverfox Events', date: 'Sept \'23' },
        { id: 6, category: 'SOTD', award: 'Awwwards', client: 'Axis Arbor', date: 'Feb \'23' },
    ];

    return (
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Column - Awards Header */}
                    <div className="lg:col-span-3   p-8 bg-white min-h-[600px] flex items-start">
                        <span className="text-1xl md:text-1xl font-light text-black">Awards & recognitions</span>
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-9 flex flex-col gap-6">
                        {/* Stats Boxes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Award wins */}
                            <div className="border-2  rounded-3xl p-8 bg-[#F5F5F5]">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-5xl md:text-6xl font-light text-black">16</span>
                                    <span className="text-2xl text-black">🏆</span>
                                </div>
                                <span className="text-lg md:text-xl font-light text-black">Award wins</span>
                            </div>

                            {/* Nominations */}
                            <div className="border-2  rounded-3xl p-8 bg-[#F5F5F5]">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-5xl md:text-6xl font-light text-black">18</span>
                                    <span className="text-2xl text-black">⭐</span>
                                </div>
                                <span className="text-lg md:text-xl font-light text-black">Nominations</span>
                            </div>
                        </div>

                        {/* Awards List */}
                        <div className="flex flex-col gap-2">
                            {awards.map((award) => (
                                <Link
                                    key={award.id}
                                    href="#"
                                    className="grid grid-cols-4 gap-3 p-2 hover:bg-gray-50 transition-colors cursor-pointer rounded-lg border-1 border-gray-200 bg-white"
                                >
                                    <div className="text-xs md:text-sm text-black">{award.category}</div>
                                    <div className="text-xs md:text-sm text-gray-600">{award.award}</div>
                                    <div className="text-xs md:text-sm text-gray-600">{award.client}</div>
                                    <div className="text-xs md:text-sm text-gray-600 text-right">{award.date}</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;