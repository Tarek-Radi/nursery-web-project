import styled from 'styled-components';
import { brand, contactInfo, footerColumns, socialLinks, workingHours } from '../../data/siteData';
import { getIcon } from '../../utils/iconMap';
import { Card, Container } from '../../styles/primitives';
import { Link } from 'react-router-dom';

const Shell = styled.footer`
  padding-block: 1.25rem 2rem;
`;

const FooterCard = styled(Card).attrs({ as: 'div' })`
  padding: clamp(1.5rem, 3vw, 2rem);
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: 1.1fr repeat(3, minmax(0, 1fr));
  }
`;

const BrandText = styled.p`
  margin-top: 1rem;
  color: var(--color-muted);
  max-width: 26rem;
`;

const BrandHead = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
`;

const BrandMark = styled.span`
  inline-size: 3.25rem;
  block-size: 3.25rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-accent), #f1b1c5);
  color: #fff;
  font-family: 'Cairo', sans-serif;
  font-weight: 800;
`;

const ColumnTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  display: grid;
  gap: 0.75rem;
  color: var(--color-muted);
`;

const FooterLink = styled(Link)`
  color: inherit;
  transition: var(--transition-fast);

  &:hover {
    color: var(--color-accent-dark);
  }
`;

const FooterAnchor = styled.a`
  color: inherit;
  transition: var(--transition-fast);

  &:hover {
    color: var(--color-accent-dark);
  }
`;

const SocialRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SocialLink = styled.a`
  inline-size: 2.85rem;
  block-size: 2.85rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(225, 149, 171, 0.22);
  color: var(--color-text);
  transition: var(--transition-fast);

  &:hover {
    transform: translateY(-2px);
    color: var(--color-accent-dark);
  }
`;

const Bottom = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  color: var(--color-muted);
  font-size: 0.95rem;
`;

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Shell>
      <Container>
        <FooterCard>
          <Grid>
            <div>
              <BrandHead>
                <BrandMark>R</BrandMark>
                <div>
                  <h3>{brand.arabicName}</h3>
                  <span>{brand.tagline}</span>
                </div>
              </BrandHead>
              <BrandText>{brand.description}</BrandText>
            </div>

            {footerColumns.map((column) => (
              <div key={column.title}>
                <ColumnTitle>{column.title}</ColumnTitle>
                <List>
                  {column.items.map((item) => (
                    <li key={item.label}>
                      <FooterLink to={item.to}>{item.label}</FooterLink>
                    </li>
                  ))}
                </List>
              </div>
            ))}

            <div>
              <ColumnTitle>التواصل والمتابعة</ColumnTitle>
              <List>
                <li>
                  <FooterAnchor href={contactInfo.phoneHref}>{contactInfo.phone}</FooterAnchor>
                </li>
                <li>
                  <FooterAnchor href={contactInfo.emailHref}>{contactInfo.email}</FooterAnchor>
                </li>
                <li>
                  <FooterAnchor href={contactInfo.addressHref} target="_blank" rel="noreferrer">
                    {contactInfo.address}
                  </FooterAnchor>
                </li>
                {workingHours.slice(0, 2).map((item) => (
                  <li key={item.day}>
                    {item.day}: {item.hours}
                  </li>
                ))}
              </List>

              <SocialRow style={{ marginTop: '1rem' }}>
                {socialLinks.map((item) => {
                  const Icon = getIcon(item.icon);
                  return (
                    <SocialLink key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                      <Icon size={18} />
                    </SocialLink>
                  );
                })}
              </SocialRow>
            </div>
          </Grid>

          <Bottom>
            <span>© {year} حضانة Roomy. جميع الحقوق محفوظة.</span>
            <span>تم تصميم الموقع ليكون عربيًا بالكامل، متجاوبًا، وسهل التوسعة للصور والإنجازات والفعاليات.</span>
          </Bottom>
        </FooterCard>
      </Container>
    </Shell>
  );
}

export default Footer;
