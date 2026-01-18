import Image from 'next/image';
import Companies from '@/components/about/Companies';
import ImpactGrid from '@/components/about/ImpactGrid';
import Team from '@/components/about/Team';
import Awards from '@/components/about/Awards';
import WhatWeDo from '@/components/about/WhatWeDo';

const AboutFluidPage = () => {


    return (
        <>
            <WhatWeDo />
            <Companies />
            <ImpactGrid />
            <Team />
            <Awards />
        </>
    );
};

export default AboutFluidPage;