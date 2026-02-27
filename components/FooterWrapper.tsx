import { getFooter } from '@/lib/footer';
import Footer from './Footer';

export default async function FooterWrapper() {
    const data = await getFooter();
    return <Footer data={data} />;
}
