import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  inset-inline-end: 1rem;
  inset-block-end: 1rem;
  z-index: 25;
  inline-size: 3.25rem;
  block-size: 3.25rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #fff;
  background: linear-gradient(135deg, var(--color-accent), #f3b1c6);
  box-shadow: var(--shadow-glow);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '14px')});
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: var(--transition-fast);
`;

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Button type="button" aria-label="العودة إلى أعلى الصفحة" $visible={visible} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <ArrowUp size={18} />
    </Button>
  );
}

export default BackToTopButton;
