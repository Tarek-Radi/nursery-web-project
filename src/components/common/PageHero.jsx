import styled from 'styled-components';
import { PageHeroContent, PageHeroGrid, PageHeroShell, PageHeroText, PageHeroTitle, PageHeroVisual, Pill, VisualImage } from '../../styles/primitives';
import { brand } from '../../data/siteData';

const Shell = styled(PageHeroShell)`
  &::before {
    content: '';
    position: absolute;
    inset-block-start: 1.5rem;
    inset-inline-end: clamp(-7rem, -6vw, -2rem);
    inline-size: 18rem;
    block-size: 18rem;
    background: rgba(255, 204, 225, 0.6);
    filter: blur(18px);
    border-radius: 50%;
    z-index: -1;
  }
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

function PageHero({ eyebrow, title, description, image, imageAlt, pills = [] }) {
  return (
    <Shell>
      <PageHeroGrid>
        <PageHeroContent>
          <Pill>{eyebrow}</Pill>
          <PageHeroTitle>{title}</PageHeroTitle>
          <PageHeroText>{description}</PageHeroText>
          {pills.length ? (
            <TagRow>
              {pills.map((pill) => (
                <Pill key={pill}>{pill}</Pill>
              ))}
            </TagRow>
          ) : null}
        </PageHeroContent>

        <PageHeroVisual>
          <VisualImage src={image || brand.heroImage} alt={imageAlt || title} loading="eager" />
        </PageHeroVisual>
      </PageHeroGrid>
    </Shell>
  );
}

export default PageHero;
