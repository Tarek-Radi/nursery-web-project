import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const containerStyles = css`
  width: var(--container-inline);
  margin-inline: auto;
`;

export const surfaceStyles = css`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.88) 100%);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-soft);
  border-radius: var(--radius-xl);
  backdrop-filter: blur(18px);
`;

export const sectionStyles = css`
  padding-block: var(--section-space);
  position: relative;
`;

export const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  min-height: 3.25rem;
  padding-inline: 1.25rem;
  border-radius: var(--radius-pill);
  font-weight: 800;
  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-fast),
    background-color var(--transition-fast),
    border-color var(--transition-fast),
    color var(--transition-fast);

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const primaryButtonStyles = css`
  ${buttonBase};
  background: linear-gradient(135deg, var(--color-accent) 0%, #f2a8bd 100%);
  color: #fff;
  box-shadow: var(--shadow-glow);

  &:hover {
    box-shadow: 0 24px 44px rgba(225, 149, 171, 0.25);
  }
`;

export const secondaryButtonStyles = css`
  ${buttonBase};
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(225, 149, 171, 0.25);
  color: var(--color-text);
`;

export const ghostButtonStyles = css`
  ${buttonBase};
  background: transparent;
  color: var(--color-accent-dark);
  min-height: auto;
  padding-inline: 0;
`;

export const Container = styled.div`
  ${containerStyles};
`;

export const Section = styled.section`
  ${sectionStyles};
`;

export const Card = styled.article`
  ${surfaceStyles};
  padding: clamp(1.25rem, 2.8vw, 1.75rem);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 25px 50px rgba(225, 149, 171, 0.35);
  }
`;

export const SectionHeaderWrap = styled.header`
  display: grid;
  gap: 0.9rem;
  max-width: 46rem;
  margin-bottom: clamp(1.8rem, 4vw, 3rem);
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 0.95rem;
  border-radius: var(--radius-pill);
  background: rgba(255, 204, 225, 0.58);
  color: var(--color-accent-dark);
  font-weight: 800;
  font-size: 0.95rem;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.03em;
`;

export const SectionDescription = styled.p`
  font-size: clamp(1rem, 2vw, 1.08rem);
  color: var(--color-muted);
`;

export const Grid = styled.div`
  display: grid;
  gap: clamp(1rem, 2vw, 1.5rem);
`;

export const PrimaryLink = styled(Link)`
  ${primaryButtonStyles};
`;

export const SecondaryLink = styled(Link)`
  ${secondaryButtonStyles};
`;

export const PrimaryButton = styled.button`
  ${primaryButtonStyles};
`;

export const SecondaryButton = styled.button`
  ${secondaryButtonStyles};
`;

export const InlineLink = styled(Link)`
  ${ghostButtonStyles};
`;

export const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 0.85rem;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(167, 188, 214, 0.32);
  color: var(--color-text);
  font-weight: 700;
`;

export const PageHeroShell = styled.section`
  padding-top: clamp(7rem, 12vw, 8.8rem);
  padding-bottom: clamp(3rem, 7vw, 4.75rem);
  position: relative;
  overflow: clip;
`;

export const PageHeroGrid = styled.div`
  ${containerStyles};
  display: grid;
  gap: 1.5rem;
  align-items: center;

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 0.85fr 1.15fr;
    gap: 2.5rem;
  }
`;

export const PageHeroContent = styled.div`
  display: grid;
  gap: 1.15rem;
`;

export const PageHeroTitle = styled.h1`
  font-size: clamp(2.25rem, 5vw, 4rem);
  max-width: 14ch;
`;

export const PageHeroText = styled.p`
  font-size: clamp(1rem, 2vw, 1.12rem);
  color: var(--color-muted);
  max-width: 40rem;
`;

export const PageHeroVisual = styled.div`
  ${surfaceStyles};
  padding: 0.5rem;
  position: relative;
  width: 200%;
  max-width: 450px;
  justify-self: start;
`;
export const VisualImage = styled.img`
  width: 100%;
  border-radius: calc(var(--radius-xl) - 0.75rem);
  object-fit: contain;
  background: #fff; /* مهم عشان الفراغ يبقى شكله حلو */
`;
