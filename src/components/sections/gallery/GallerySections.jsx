import { useMemo, useState } from 'react';
import styled from 'styled-components';
import Reveal from '../../common/Reveal';
import SectionHeading from '../../common/SectionHeading';
import Lightbox from '../../ui/Lightbox';
import VideoCard from '../../ui/VideoCard';
import { futureMediaCards, galleryCategories, galleryItems, videoItems } from '../../../data/galleryData';
import { getIcon } from '../../../utils/iconMap';
import { Card, Container, Pill, Section } from '../../../styles/primitives';

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.2rem;
`;

const FilterButton = styled.button`
  padding: 0.7rem 1rem;
  border-radius: var(--radius-pill);
  background: ${({ $active }) => ($active ? 'rgba(255, 204, 225, 0.58)' : 'rgba(255, 255, 255, 0.82)')};
  color: ${({ $active }) => ($active ? 'var(--color-accent-dark)' : 'var(--color-text)')};
  border: 1px solid ${({ $active }) => ($active ? 'rgba(225, 149, 171, 0.34)' : 'rgba(167, 188, 214, 0.32)')};
  font-weight: 800;
  transition: var(--transition-fast);
`;

const GalleryGrid = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const GalleryCard = styled.button`
  width: 100%;
  padding: 0;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(167, 188, 214, 0.32);
  box-shadow: var(--shadow-soft);
  text-align: right;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 25px 50px rgba(225, 149, 171, 0.35);
  }

  /* تكبير الصورة */
  &:hover img {
    transform: scale(1.08);
  }

  /* نور خفيف */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 192, 203, 0.12);
    opacity: 0;
    transition: 0.3s;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 11;
  object-fit: contain;
  background: #fff;
  transition: transform 0.4s ease;
`;

const GalleryBody = styled.div`
  display: grid;
  gap: 0.7rem;
  padding: 1rem;

  p {
    color: var(--color-muted);
  }
`;

const VideoGrid = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const FutureGrid = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const FutureCard = styled(Card)`
  display: grid;
  gap: 0.8rem;
  border-style: dashed;
  background: rgba(242, 249, 255, 0.76);
`;

const IconBadge = styled.span`
  inline-size: 3rem;
  block-size: 3rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(255, 204, 225, 0.45);
  color: var(--color-accent-dark);
`;

export function GalleryShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'الكل') {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="معرض الصور"
            title="بطاقات مرئية مرتبة حسب الفئة ليسهل عرض الصور الحالية وإضافة المزيد لاحقًا"
            description="يمكن فتح الصور في معاينة كبيرة، كما يمكن تعديل أو إضافة الفئات والعناصر بسهولة من ملف البيانات."
          />
        </Reveal>

        <FilterRow>
          {galleryCategories.map((category) => (
            <FilterButton key={category} type="button" $active={category === activeCategory} onClick={() => setActiveCategory(category)}>
              {category}
            </FilterButton>
          ))}
        </FilterRow>

        <GalleryGrid>
          {filteredItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <GalleryCard type="button" onClick={() => setActiveIndex(index)} aria-label={`عرض ${item.title}`}>
                <GalleryImage src={item.image} alt={item.alt} loading="lazy" />
                <GalleryBody>
                  <Pill>{item.category}</Pill>
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </GalleryBody>
              </GalleryCard>
            </Reveal>
          ))}
        </GalleryGrid>

        <Lightbox
          items={filteredItems}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNext={() => setActiveIndex((current) => (current + 1) % filteredItems.length)}
          onPrevious={() => setActiveIndex((current) => (current - 1 + filteredItems.length) % filteredItems.length)}
        />
      </Container>
    </Section>
  );
}

export function VideoShowcaseSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="الفيديوهات"
            title="بطاقات فيديو قابلة لإضافة معاينات وجولات ومقاطع من الفعاليات"
            description="كل بطاقة مجهزة للصورة المصغرة، المدة، التصنيف، والنص التعريفي، ويمكن ربطها لاحقًا بفيديو فعلي بسهولة."
          />
        </Reveal>

        <VideoGrid>
          {videoItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <VideoCard item={item} />
            </Reveal>
          ))}
        </VideoGrid>
      </Container>
    </Section>
  );
}

export function FutureMediaSection() {
  return (
    <Section>
      <Container>
        <Reveal>

        </Reveal>

        <FutureGrid>
          {futureMediaCards.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.title} delay={index * 60}>
                <FutureCard>
                  <IconBadge>
                    <Icon size={18} />
                  </IconBadge>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </FutureCard>
              </Reveal>
            );
          })}
        </FutureGrid>
      </Container>
    </Section>
  );
}
