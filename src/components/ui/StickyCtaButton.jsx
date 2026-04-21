import { MessageCircle } from 'lucide-react';
import styled from 'styled-components';
import { contactInfo } from '../../data/siteData';

const Button = styled.a`
  position: fixed;
  inset-inline-start: 1rem;
  inset-block-end: 1rem;
  z-index: 25;
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.9rem 1.1rem;
  border-radius: var(--radius-pill);
  background: #25d366;
  color: #fff;
  font-weight: 800;
  box-shadow: 0 18px 40px rgba(37, 211, 102, 0.28);
  transition: var(--transition-fast);

  &:hover {
    transform: translateY(-2px);
  }
`;

function StickyCtaButton() {
  return (
    <Button href={contactInfo.whatsappHref} target="_blank" rel="noreferrer" aria-label="راسلينا عبر واتساب">
      <MessageCircle size={18} />
      احجزي زيارة الآن
    </Button>
  );
}

export default StickyCtaButton;
