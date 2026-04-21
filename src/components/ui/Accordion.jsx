import { useState } from 'react';
import styled from 'styled-components';
import { ChevronDown } from 'lucide-react';

const List = styled.div`
  display: grid;
  gap: 0.85rem;
`;

const Item = styled.div`
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(167, 188, 214, 0.34);
  overflow: hidden;
`;

const Toggle = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 1.15rem;
  text-align: right;
  color: var(--color-text);
  font-weight: 800;
`;

const IconWrap = styled.span`
  inline-size: 2.1rem;
  block-size: 2.1rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(255, 204, 225, 0.46);
  color: var(--color-accent-dark);
  transform: rotate(${({ $open }) => ($open ? '180deg' : '0deg')});
  transition: var(--transition-fast);
  flex-shrink: 0;
`;

const Panel = styled.div`
  max-height: ${({ $open }) => ($open ? '16rem' : '0')};
  padding: ${({ $open }) => ($open ? '0 1.15rem 1.15rem' : '0 1.15rem')};
  overflow: hidden;
  transition:
    max-height var(--transition-smooth),
    padding var(--transition-fast);

  p {
    color: var(--color-muted);
  }
`;

function Accordion({ items, defaultIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultIndex);

  return (
    <List>
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <Item key={item.question}>
            <Toggle
              type="button"
              aria-expanded={open}
              aria-controls={`faq-panel-${index}`}
              id={`faq-trigger-${index}`}
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <span>{item.question}</span>
              <IconWrap $open={open}>
                <ChevronDown size={16} />
              </IconWrap>
            </Toggle>
            <Panel
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
              $open={open}
            >
              <p>{item.answer}</p>
            </Panel>
          </Item>
        );
      })}
    </List>
  );
}

export default Accordion;
