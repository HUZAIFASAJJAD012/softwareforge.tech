import DetailHeader from '@/components/landing/DetailHeader';
import PortfolioFooter from '@/components/landing/PortfolioFooter';
// import '../../app/globals.css';


export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <DetailHeader />
      {children}
      <PortfolioFooter />
    </>
  );
}
