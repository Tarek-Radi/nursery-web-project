import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import BackToTopButton from '../ui/BackToTopButton';
import StickyCtaButton from '../ui/StickyCtaButton';

const SkipLink = styled.a`
  position: absolute;
  inset-block-start: -4rem;
  inset-inline-start: 1rem;
  z-index: 100;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-pill);
  background: #fff;
  box-shadow: var(--shadow-soft);

  &:focus {
    inset-block-start: 1rem;
  }
`;

const Main = styled.main`
  min-height: 100vh;
`;

function SiteLayout() {
  return (
    <>
      <SkipLink href="#main-content">تجاوز إلى المحتوى الرئيسي</SkipLink>
      <ScrollToTop />
      <Header />
      <Main id="main-content">
        <Outlet />
      </Main>
      <Footer />
      <StickyCtaButton />
      <BackToTopButton />
    </>
  );
}

export default SiteLayout;
