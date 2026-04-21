import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { brand, navLinks } from '../../data/siteData';
import { Container, PrimaryLink } from '../../styles/primitives';

const Shell = styled.header`
  position: fixed;
  inset-block-start: 0;
  inset-inline: 0;
  z-index: 30;
  padding-block: 0.85rem;
`;

const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 4.25rem;
  padding: 0.65rem 0.85rem;
  border-radius: var(--radius-pill);
  border: 1px solid ${({ $scrolled }) => ($scrolled ? 'rgba(167, 188, 214, 0.36)' : 'rgba(255, 255, 255, 0.6)')};
  background: ${({ $scrolled }) =>
    $scrolled ? 'rgba(255, 255, 255, 0.88)' : 'rgba(255, 255, 255, 0.78)'};
  box-shadow: ${({ $scrolled }) => ($scrolled ? 'var(--shadow-soft)' : 'none')};
  backdrop-filter: blur(16px);
  transition: var(--transition-fast);
`;

const BrandLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  min-width: 0;
`;

const BrandMark = styled.span`
  inline-size: 3rem;
  block-size: 3rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--color-accent), #f5b6cb);
  color: #fff;
  font-family: 'Cairo', sans-serif;
  font-weight: 800;
  box-shadow: var(--shadow-glow);
`;

const BrandText = styled.span`
  display: grid;
  gap: 0.08rem;

  strong {
    font-family: 'Cairo', sans-serif;
    font-size: 1.05rem;
  }

  small {
    color: var(--color-muted);
    font-size: 0.88rem;
    white-space: nowrap;
  }

  @media (max-width: 520px) {
    small {
      display: none;
    }
  }
`;

const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: 0.45rem;

  ${({ theme }) => theme.media.lg} {
    display: flex;
  }
`;

const NavItem = styled(NavLink)`
  padding: 0.78rem 1rem;
  border-radius: var(--radius-pill);
  font-weight: 700;
  color: var(--color-muted);
  transition: var(--transition-fast);

  &.active {
    background: rgba(255, 204, 225, 0.5);
    color: var(--color-accent-dark);
  }

  &:hover {
    color: var(--color-text);
    background: rgba(255, 255, 255, 0.76);
  }
`;

const Actions = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
`;

const MobileButton = styled.button`
  inline-size: 3rem;
  block-size: 3rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--color-text);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(225, 149, 171, 0.2);

  ${({ theme }) => theme.media.lg} {
    display: none;
  }
`;

const MobilePanel = styled.div`
  width: var(--container-inline);
  margin-inline: auto;
  display: grid;
  gap: 0.75rem;
  margin-top: 0.65rem;
  padding: ${({ $open }) => ($open ? '1rem' : '0')};
  max-height: ${({ $open }) => ($open ? '26rem' : '0')};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  overflow: hidden;
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(167, 188, 214, 0.36);
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(16px);
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition:
    max-height var(--transition-smooth),
    opacity var(--transition-fast),
    padding var(--transition-fast);

  ${({ theme }) => theme.media.lg} {
    display: none;
  }
`;

const MobileNavItem = styled(NavLink)`
  padding: 1rem 1.1rem;
  border-radius: var(--radius-md);
  background: rgba(242, 249, 255, 0.7);
  color: var(--color-text);
  font-weight: 700;
  border: 1px solid transparent;
  transition: var(--transition-fast);

  &.active {
    background: rgba(255, 204, 225, 0.55);
    border-color: rgba(225, 149, 171, 0.28);
  }
`;

const DesktopCta = styled(PrimaryLink)`
  display: none;

  ${({ theme }) => theme.media.lg} {
    display: inline-flex;
  }
`;

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Shell>
      <Inner $scrolled={scrolled}>
        <BrandLink to="/" aria-label="الذهاب إلى الصفحة الرئيسية">
          <BrandMark>R</BrandMark>
          <BrandText>
            <strong>{brand.arabicName}</strong>
            <small>{brand.tagline}</small>
          </BrandText>
        </BrandLink>

        <DesktopNav aria-label="التنقل الرئيسي">
          {navLinks.map((item) => (
            <NavItem key={item.to} to={item.to} end={item.to === '/'}>
              {item.label}
            </NavItem>
          ))}
        </DesktopNav>

        <Actions>
          <DesktopCta to="/contact">احجزي الآن</DesktopCta>
          <MobileButton
            type="button"
            aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </MobileButton>
        </Actions>
      </Inner>

      <MobilePanel id="mobile-menu" $open={menuOpen}>
        {navLinks.map((item) => (
          <MobileNavItem key={item.to} to={item.to} end={item.to === '/'}>
            {item.label}
          </MobileNavItem>
        ))}
        <PrimaryLink to="/contact">احجزي زيارة تعريفية</PrimaryLink>
      </MobilePanel>
    </Shell>
  );
}

export default Header;
