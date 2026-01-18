import Image from 'next/image';

const Team = () => {
    const teamMembers = [
        { id: 1, name: 'Veronica Opl', role: 'Project Manager', image: 'p1.avif' },
        { id: 2, name: 'Alex Rook', role: 'Founder & Head of Strategy', image: 'p2.jpg' },
        { id: 3, name: 'Ryan Phillips', role: 'Creative Director', image: 'p3.avif' },
        { id: 4, name: 'Team Member', role: 'Role', image: 'p4.avif' },
        { id: 5, name: 'Team Member', role: 'Role', image: 'p5.avif' },
        { id: 6, name: 'Team Member', role: 'Role', image: 'p6.jpg' },
        { id: 7, name: 'Team Member', role: 'Role', image: 'p7.avif' },
        { id: 8, name: 'Team Member', role: 'Role', image: 'p8.avif' },
        { id: 9, name: 'Team Member', role: 'Role', image: 'p9.avif' },
        { id: 10, name: 'Team Member', role: 'Role', image: 'p10.avif' },
    ];

    return (
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Column - Team Header */}
                    <div className="lg:col-span-3   rounded-3xl p-8 bg-white min-h-[600px] flex items-start">
                        <span className="text-1xl md:text-2xl font-light text-black">Team</span>
                    </div>

                    {/* Right Grid - Team Members */}
                    <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-black">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="flex flex-col">
                                {/* Image Container */}
                                <div className="relative w-full aspect-[3/4] mb-4 overflow-hidden rounded-2xl bg-gray-100 ">
                                    <Image
                                        src={`/developers/${member.image}`}
                                        alt={member.name}
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-300 "
                                    />
                                </div>

                                {/* Name and Role */}
                                <div>
                                    <h3 className="text-lg md:text-xl font-light mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-black">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;