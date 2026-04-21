import styled from 'styled-components';
import SectionHeading from '../../common/SectionHeading';
import Reveal from '../../common/Reveal';
import Accordion from '../../ui/Accordion';
import TestimonialSlider from '../../ui/TestimonialSlider';
import {
  contactPreview,
  faqPreview,
  featuredActivitiesPreview,
  featuredProgramsPreview,
  homeHero,
  homeSpotlightImage,
  introCards,
  quickCta,
  testimonials,
  whyChooseUs,
} from '../../../data/homeData';
import { brand, contactCards, contactInfo, trustStats, workingHours } from '../../../data/siteData';
import { getIcon } from '../../../utils/iconMap';
import {
  Card,
  Container,
  InlineLink,
  Pill,
  PrimaryLink,
  SecondaryLink,
  Section,
  SectionDescription,
  SectionTitle,
  containerStyles,
} from '../../../styles/primitives';

const HeroSection = styled.section`
  position: relative;
  min-height: min(100svh, 980px);
  padding-top: clamp(7rem, 12vw, 9rem);
  padding-bottom: 4rem;
  overflow: clip;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.58) 0%, rgba(242, 249, 255, 0.62) 48%, rgba(255, 245, 215, 0.42) 100%),
    url(${brand.heroImage}) center / cover no-repeat;
`;

const HeroGrid = styled.div`
  ${containerStyles};
  display: grid;
  gap: 1.5rem;
  align-items: center;

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 1.08fr 0.92fr;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  display: grid;
  gap: 1.15rem;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4.7rem);
  max-width: 11ch;
`;

const HeroText = styled.p`
  max-width: 38rem;
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: var(--color-muted);
`;

const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
`;

const HeroVisual = styled(Card)`
  display: grid;
  gap: 1rem;
  padding: 1rem;
`;

const HeroImage = styled.img`
  width: 100%;
  border-radius: calc(var(--radius-xl) - 0.6rem);
  aspect-ratio: 1 / 1.03;
  object-fit: cover;
`;

const MiniGrid = styled.div`
  display: grid;
  gap: 0.85rem;
`;

const MiniCard = styled.div`
  padding: 1rem 1.1rem;
  border-radius: var(--radius-md);
  background: rgba(242, 249, 255, 0.78);
  border: 1px solid rgba(167, 188, 214, 0.3);

  h3 {
    font-size: 1rem;
    margin-bottom: 0.35rem;
  }

  p {
    color: var(--color-muted);
  }
`;

const GridThree = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const GridFour = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const InfoCard = styled(Card)`
  display: grid;
  gap: 0.85rem;
`;

const IconBadge = styled.span`
  inline-size: 3rem;
  block-size: 3rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(255, 204, 225, 0.48);
  color: var(--color-accent-dark);
`;

const StatGrid = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const StatCard = styled(Card)`
  text-align: center;

  strong {
    display: block;
    font-size: clamp(1.75rem, 3vw, 2.2rem);
    color: var(--color-accent-dark);
    margin-bottom: 0.5rem;
  }
`;

const ProgramsGrid = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const ProgramCard = styled(Card)`
  display: grid;
  gap: 0.85rem;
`;

const AgeTag = styled(Pill)`
  width: fit-content;
  background: rgba(255, 245, 215, 0.95);
`;

const ActivitiesLayout = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 1.1fr 0.9fr;
  }
`;

const AsideVisual = styled(Card)`
  display: grid;
  gap: 1rem;

  img {
    width: 100%;
    aspect-ratio: 4 / 4.5;
    object-fit: cover;
    border-radius: calc(var(--radius-xl) - 0.6rem);
  }
`;

const TestimonialsLayout = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 0.95fr 1.05fr;
  }
`;

const CtaCard = styled(Card)`
  display: grid;
  gap: 1rem;
  background: linear-gradient(135deg, rgba(255, 204, 225, 0.78) 0%, rgba(255, 245, 215, 0.86) 100%);
`;

const ContactGrid = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 0.95fr 1.05fr;
  }
`;

const ContactCardsGrid = styled.div`
  display: grid;
  gap: 0.85rem;
`;

const ContactItem = styled.a`
  display: grid;
  gap: 0.3rem;
  padding: 1rem 1.05rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(167, 188, 214, 0.32);
  transition: var(--transition-fast);

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(225, 149, 171, 0.32);
  }

  span {
    color: var(--color-muted);
  }
`;

const MapFrame = styled.iframe`
  width: 100%;
  min-height: 24rem;
  border: 0;
  border-radius: calc(var(--radius-xl) - 0.35rem);
`;

const HoursList = styled.ul`
  display: grid;
  gap: 0.65rem;
  color: var(--color-muted);
`;

export function HomeHeroSection() {
  return (
    <HeroSection>
      <HeroGrid>
        <Reveal>
          <HeroContent>
            <Pill>{homeHero.eyebrow}</Pill>
            <HeroTitle>{homeHero.title}</HeroTitle>
            <HeroText>{homeHero.description}</HeroText>

            <PillRow>
              {homeHero.highlights.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </PillRow>

            <ActionRow>
              <PrimaryLink to={homeHero.primaryAction.to}>{homeHero.primaryAction.label}</PrimaryLink>
              <SecondaryLink to={homeHero.secondaryAction.to}>{homeHero.secondaryAction.label}</SecondaryLink>
            </ActionRow>
          </HeroContent>
        </Reveal>

        <Reveal delay={120}>
          <HeroVisual>
            <HeroImage src={homeSpotlightImage} alt="مشهد ترحيبي داخل حضانة Roomy" />
            <MiniGrid>
              {homeHero.infoCards.map((card) => (
                <MiniCard key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </MiniCard>
              ))}
            </MiniGrid>
          </HeroVisual>
        </Reveal>
      </HeroGrid>
    </HeroSection>
  );
}

export function HomeIntroSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="بداية مطمئنة"
            title="كل تفصيلة عندنا معمولة لتخلي الطفل مرتاح والأسرة واثقة"
            description="نركز في Roomy على الراحة النفسية، اللعب الهادف، والمتابعة اليومية لأننا نعرف أن أول تجربة خارج البيت تفرق كثيرًا في شخصية الطفل."
          />
        </Reveal>

        <GridThree>
          {introCards.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.title} delay={index * 80}>
                <InfoCard>
                  <IconBadge>
                    <Icon size={18} />
                  </IconBadge>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </InfoCard>
              </Reveal>
            );
          })}
        </GridThree>

        <StatGrid style={{ marginTop: '1rem' }}>
          {trustStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 70}>
              <StatCard>
                <strong>{stat.value}</strong>
                <p>{stat.label}</p>
              </StatCard>
            </Reveal>
          ))}
        </StatGrid>
      </Container>
    </Section>
  );
}

export function WhyChooseUsSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="ليه تختارونا؟"
            title="لأن الطفل يحتاج مكانًا يشعره بالأمان قبل أن يطلب منه التعلّم"
            description="نجمع بين الحنان والتنظيم، وبين اللعب والتعليم، لنقدّم تجربة يومية مريحة وفعّالة في نفس الوقت."
          />
        </Reveal>

        <GridFour>
          {whyChooseUs.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.title} delay={index * 70}>
                <InfoCard>
                  <IconBadge>
                    <Icon size={18} />
                  </IconBadge>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </InfoCard>
              </Reveal>
            );
          })}
        </GridFour>
      </Container>
    </Section>
  );
}

export function FeaturedProgramsSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="برامج مختارة"
            title="برامجنا مبنية على عمر الطفل واحتياجه الحقيقي"
            description="كل برنامج له أهدافه وطريقة دعمه الخاصة، مع مرونة تساعد الأسرة على اختيار المسار الأنسب لطفلها."
          />
        </Reveal>

        <ProgramsGrid>
          {featuredProgramsPreview.map((program, index) => (
            <Reveal key={program.title} delay={index * 80}>
              <ProgramCard>
                <AgeTag>{program.age}</AgeTag>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </ProgramCard>
            </Reveal>
          ))}
        </ProgramsGrid>

        <Reveal delay={220}>
          <div style={{ marginTop: '1rem' }}>
            <InlineLink to="/programs">عرض كل البرامج والأنشطة</InlineLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export function FeaturedActivitiesSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="أنشطة محببة"
            title="يوم الطفل معنا مليء بالحركة والفضول والضحك والتجربة"
            description="نختار الأنشطة بحيث تكون ممتعة وقريبة من عالم الطفل، وفي نفس الوقت تحمل هدفًا تربويًا بسيطًا وواضحًا."
          />
        </Reveal>

        <ActivitiesLayout>
          <GridFour>
            {featuredActivitiesPreview.map((item, index) => {
              const Icon = getIcon(item.icon);
              return (
                <Reveal key={item.title} delay={index * 70}>
                  <InfoCard>
                    <IconBadge>
                      <Icon size={18} />
                    </IconBadge>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </InfoCard>
                </Reveal>
              );
            })}
          </GridFour>

          <Reveal delay={120}>
            <AsideVisual>
              <img src={homeSpotlightImage} alt="أنشطة تعليمية تفاعلية داخل حضانة Roomy" />
              <SectionTitle as="h3" style={{ fontSize: '1.7rem' }}>
                نشاط اليوم ليس مجرد وقت للترفيه
              </SectionTitle>
              <SectionDescription>
                كل تجربة فنية أو حركية أو لغوية مصممة لتقوّي مهارة صغيرة داخل الطفل، وتزيد إحساسه بالقدرة والمتعة.
              </SectionDescription>
            </AsideVisual>
          </Reveal>
        </ActivitiesLayout>
      </Container>
    </Section>
  );
}

export function TestimonialsSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="شهادات أولياء الأمور"
            title="ثقة الأسر هي أفضل دليل على أثر التجربة"
            description="نحرص دائمًا أن تكون تجربة الطفل والأسرة معًا مطمئنة وواضحة، وهذا ينعكس في ردود الفعل التي تصلنا."
          />
        </Reveal>

        <TestimonialsLayout>
          <Reveal>
            <Card>
              <SectionTitle as="h3" style={{ fontSize: '1.7rem', marginBottom: '0.8rem' }}>
                نعدكم بتجربة هادئة وواضحة
              </SectionTitle>
              <HoursList>
                <li>استقبال لطيف للأطفال الجدد ومراعاة لمشاعرهم.</li>
                <li>رسائل متابعة منتظمة تبقيكم قريبين من يوم طفلكم.</li>
                <li>أنشطة متنوعة ومتوازنة بين التعليم واللعب.</li>
              </HoursList>
            </Card>
          </Reveal>

          <Reveal delay={90}>
            <TestimonialSlider items={testimonials} />
          </Reveal>
        </TestimonialsLayout>
      </Container>
    </Section>
  );
}

export function QuickCtaSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <CtaCard>
            <Pill>خطوة سهلة</Pill>
            <SectionTitle as="h2">{quickCta.title}</SectionTitle>
            <SectionDescription>{quickCta.text}</SectionDescription>
            <ActionRow>
              <PrimaryLink to={quickCta.primaryTo}>{quickCta.primaryLabel}</PrimaryLink>
              <SecondaryLink to={quickCta.secondaryTo}>{quickCta.secondaryLabel}</SecondaryLink>
            </ActionRow>
          </CtaCard>
        </Reveal>
      </Container>
    </Section>
  );
}

export function FaqPreviewSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="أسئلة شائعة"
            title="إجابات سريعة تساعدكم قبل الزيارة أو التقديم"
            description="جمعنا أكثر الأسئلة التي تتكرر من أولياء الأمور حتى تكون الصورة أوضح من البداية."
          />
        </Reveal>

        <ContactGrid>
          <Reveal>
            <Accordion items={faqPreview} />
          </Reveal>

          <Reveal delay={90}>
            <Card>
              <SectionTitle as="h3" style={{ fontSize: '1.65rem', marginBottom: '0.85rem' }}>
                ما زال لديكم سؤال؟
              </SectionTitle>
              <SectionDescription style={{ marginBottom: '1rem' }}>
                يسعدنا الرد على أي استفسار حول البرامج، مواعيد الزيارة، أو طريقة التأقلم في أول الأيام.
              </SectionDescription>
              <PrimaryLink to="/contact">تواصلوا معنا الآن</PrimaryLink>
            </Card>
          </Reveal>
        </ContactGrid>
      </Container>
    </Section>
  );
}

export function ContactPreviewSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading eyebrow="زورونا" title={contactPreview.title} description={contactPreview.text} />
        </Reveal>

        <ContactGrid>
          <Reveal>
            <Card>
              <SectionTitle as="h3" style={{ fontSize: '1.6rem', marginBottom: '0.8rem' }}>
                تفاصيل التواصل
              </SectionTitle>
              <ContactCardsGrid>
                {contactCards.map((item) => (
                  <ContactItem key={item.title} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                    <strong>{item.title}</strong>
                    <span>{item.value}</span>
                  </ContactItem>
                ))}
              </ContactCardsGrid>

              <SectionTitle as="h4" style={{ fontSize: '1.2rem', marginTop: '1.2rem', marginBottom: '0.7rem' }}>
                مواعيد العمل
              </SectionTitle>
              <HoursList>
                {workingHours.map((item) => (
                  <li key={item.day}>
                    {item.day}: {item.hours}
                  </li>
                ))}
              </HoursList>

              <div style={{ marginTop: '1rem' }}>
                <PrimaryLink to="/contact">احجزي زيارة تعريفية</PrimaryLink>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <Card>
              <MapFrame
                loading="lazy"
                title="خريطة حضانة Roomy"
                src={contactInfo.mapEmbed}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>
          </Reveal>
        </ContactGrid>
      </Container>
    </Section>
  );
}
