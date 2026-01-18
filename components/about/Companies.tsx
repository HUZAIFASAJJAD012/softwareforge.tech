import Image from 'next/image';

const Companies = () => {
    const companies = [
        { id: 1, name: 'Ocean Bottle' },
        { id: 2, name: 'Get Your Guide' },
        { id: 3, name: 'Kelloggs' },
        { id: 4, name: 'Epic Games' },
        { id: 5, name: 'Yahoo' },
        { id: 6, name: 'Vorboss' },
        { id: 7, name: 'TechCrunch' },
        { id: 8, name: 'The Emissions Capture Company' },
        { id: 9, name: 'PrimaryBid' },
        { id: 10, name: 'Innovation Group' },
        { id: 11, name: '8VC' },
        { id: 12, name: 'Cloe Cassandro' },
        { id: 13, name: 'Stanleys' },
        { id: 14, name: 'The Seaweed Company' },
        { id: 15, name: 'Pronto' },
        { id: 16, name: 'Overlord' },
        { id: 17, name: 'Givenchy' },
    ];

    return (
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 lg:gap-16 items-center justify-items-center">
                    {companies.map((company) => (
                        <div
                            key={company.id}
                            className="w-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                        >
                            <Image
                                src={`/svg/${company.id}.svg`}
                                alt={company.name}
                                width={120}
                                height={40}
                                className="w-auto h-8 md:h-10 max-w-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Companies;