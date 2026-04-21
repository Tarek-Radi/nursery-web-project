import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Card } from '../../styles/primitives';

const SliderCard = styled(Card)`
  display: grid;
  gap: 1.25rem;
`;

const QuoteIcon = styled.span`
  inline-size: 3rem;
  block-size: 3rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(255, 204, 225, 0.45);
  color: var(--color-accent-dark);
`;

const QuoteText = styled.p`
  font-size: clamp(1.02rem, 2vw, 1.15rem);
  color: var(--color-text);
`;

const Meta = styled.div`
  display: grid;
  gap: 0.25rem;

  span {
    color: var(--color-muted);
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const Buttons = styled.div`
  display: inline-flex;
  gap: 0.65rem;
`;

const ArrowButton = styled.button`
  inline-size: 2.9rem;
  block-size: 2.9rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(167, 188, 214, 0.34);
  color: var(--color-text);
`;

const Dots = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
`;

const Dot = styled.button`
  inline-size: ${({ $active }) => ($active ? '1.8rem' : '0.65rem')};
  block-size: 0.65rem;
  border-radius: var(--radius-pill);
  background: ${({ $active }) => ($active ? 'var(--color-accent)' : 'rgba(167, 188, 214, 0.45)')};
  transition: var(--transition-fast);
`;

function TestimonialSlider({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [items.length]);

  const current = items[activeIndex];

  return (
    <SliderCard aria-live="polite">
      <QuoteIcon>
        <Quote size={18} />
      </QuoteIcon>
      <QuoteText>{current.text}</QuoteText>

      <Controls>
        <Meta>
          <strong>{current.name}</strong>
          <span>{current.relation}</span>
        </Meta>

        <Buttons>
          <ArrowButton
            type="button"
            aria-label="الشهادة السابقة"
            onClick={() => setActiveIndex((currentIndex) => (currentIndex - 1 + items.length) % items.length)}
          >
            <ArrowRight size={16} />
          </ArrowButton>
          <ArrowButton
            type="button"
            aria-label="الشهادة التالية"
            onClick={() => setActiveIndex((currentIndex) => (currentIndex + 1) % items.length)}
          >
            <ArrowLeft size={16} />
          </ArrowButton>
        </Buttons>
      </Controls>

      <Dots aria-label="مؤشرات الشهادات">
        {items.map((item, index) => (
          <Dot key={item.name} type="button" $active={index === activeIndex} onClick={() => setActiveIndex(index)} aria-label={`عرض شهادة ${index + 1}`} />
        ))}
      </Dots>
    </SliderCard>
  );
}

export default TestimonialSlider;
