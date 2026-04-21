import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: ${({ $open }) => ($open ? 'grid' : 'none')};
  place-items: center;
  padding: 1rem;
  background: rgba(29, 33, 46, 0.72);
  backdrop-filter: blur(10px);
`;

const Dialog = styled.div`
  inline-size: min(68rem, 100%);
  background: #fff;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-soft);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.15rem;
  border-bottom: 1px solid rgba(167, 188, 214, 0.34);
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 16 / 11;
  object-fit: cover;
  background: var(--color-bg);
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.15rem;

  p {
    color: var(--color-muted);
  }
`;

const Actions = styled.div`
  display: inline-flex;
  gap: 0.65rem;
`;

const IconButton = styled.button`
  inline-size: 2.85rem;
  block-size: 2.85rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(242, 249, 255, 0.92);
  border: 1px solid rgba(167, 188, 214, 0.34);
  color: var(--color-text);
`;

function Lightbox({ items, activeIndex, onClose, onNext, onPrevious }) {
  const open = activeIndex !== null;
  const activeItem = open ? items[activeIndex] : null;

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'ArrowLeft') {
        onNext();
      }

      if (event.key === 'ArrowRight') {
        onPrevious();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose, onNext, onPrevious, open]);

  if (!activeItem) {
    return null;
  }

  return (
    <Overlay $open={open} role="dialog" aria-modal="true" aria-label={activeItem.title} onClick={onClose}>
      <Dialog onClick={(event) => event.stopPropagation()}>
        <Header>
          <div>
            <strong>{activeItem.title}</strong>
            <p>{activeItem.caption || activeItem.category}</p>
          </div>
          <IconButton type="button" aria-label="إغلاق المعاينة" onClick={onClose}>
            <X size={18} />
          </IconButton>
        </Header>

        <Image src={activeItem.image} alt={activeItem.alt || activeItem.title} />

        <Footer>
          <p>{activeItem.caption}</p>
          <Actions>
            <IconButton type="button" aria-label="الصورة السابقة" onClick={onPrevious}>
              <ArrowRight size={18} />
            </IconButton>
            <IconButton type="button" aria-label="الصورة التالية" onClick={onNext}>
              <ArrowLeft size={18} />
            </IconButton>
          </Actions>
        </Footer>
      </Dialog>
    </Overlay>
  );
}

export default Lightbox;
