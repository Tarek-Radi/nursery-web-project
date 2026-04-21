import styled from 'styled-components';
import Reveal from '../../common/Reveal';
import SectionHeading from '../../common/SectionHeading';
import { activities, admissionsInfo, dailyRoutine, learningHighlights, pastEvents, programs } from '../../../data/programsData';
import { getIcon } from '../../../utils/iconMap';
import { Card, Container, Pill, PrimaryLink, Section } from '../../../styles/primitives';

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

const FeatureList = styled.ul`
  display: grid;
  gap: 0.55rem;
  color: var(--color-muted);
`;

const DualLayout = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const GridTwo = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const InfoCard = styled(Card)`
  display: grid;
  gap: 0.8rem;
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

const RoutineList = styled.div`
  display: grid;
  gap: 1rem;
`;

const RoutineItem = styled(Card)`
  display: grid;
  gap: 0.6rem;
`;

const TimeBadge = styled(Pill)`
  width: fit-content;
  background: rgba(255, 245, 215, 0.95);
`;

const AdmissionsGrid = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 1.1fr 0.9fr;
  }
`;

const EventGrid = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const EventCard = styled(Card)`
  display: grid;
  gap: 0.9rem;
  border-style: ${({ $placeholder }) => ($placeholder ? 'dashed' : 'solid')};

  img {
    width: 100%;
    aspect-ratio: 16 / 11;
    object-fit: contain;
    border-radius: calc(var(--radius-xl) - 0.55rem);
  }
`;

export function ProgramsGridSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="برامجنا"
            title="اخترنا لكل مرحلة عمرية ما يناسبها من روتين، أنشطة، وأهداف تربوية"
            description="هذه البرامج قابلة للتطوير لاحقًا بسهولة من ملفات البيانات، ويمكن إضافة برامج جديدة أو تعديل الأعمار والوصف دون إعادة تصميم الصفحة."
          />
        </Reveal>

        <ProgramsGrid>
          {programs.map((program, index) => (
            <Reveal key={program.title} delay={index * 70}>
              <ProgramCard>
                <Pill>{program.age}</Pill>
                <h3>{program.title}</h3>
                <span style={{ color: 'var(--color-accent-dark)', fontWeight: 700 }}>{program.schedule}</span>
                <p>{program.description}</p>
                <FeatureList>
                  {program.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </FeatureList>
              </ProgramCard>
            </Reveal>
          ))}
        </ProgramsGrid>
      </Container>
    </Section>
  );
}

export function ActivitiesHighlightsSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="الأنشطة وخبرات التعلم"
            title="أنشطة يومية تساند النمو اللغوي والحركي والاجتماعي بصورة طبيعية"
            description="لا نفصل بين اللعب والتعلم، بل نستخدم النشاط اليومي نفسه كوسيلة لبناء مهارات جديدة بطريقة محببة."
          />
        </Reveal>

        <DualLayout>
          <GridTwo>
            {activities.map((item, index) => {
              const Icon = getIcon(item.icon);
              return (
                <Reveal key={item.title} delay={index * 60}>
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
          </GridTwo>

          <GridTwo>
            {learningHighlights.map((item, index) => {
              const Icon = getIcon(item.icon);
              return (
                <Reveal key={item.title} delay={index * 60}>
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
          </GridTwo>
        </DualLayout>
      </Container>
    </Section>
  );
}

export function DailyRoutineSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="الروتين اليومي"
            title="نحب أن يكون اليوم واضحًا ومتوازنًا حتى يشعر الطفل بالاستقرار"
            description="الروتين الثابت يخفف التوتر، ويجعل الطفل أكثر استعدادًا للمشاركة والاندماج مع الأنشطة والميسات."
          />
        </Reveal>

        <RoutineList>
          {dailyRoutine.map((item, index) => (
            <Reveal key={item.time} delay={index * 60}>
              <RoutineItem>
                <TimeBadge>{item.time}</TimeBadge>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </RoutineItem>
            </Reveal>
          ))}
        </RoutineList>
      </Container>
    </Section>
  );
}

export function AdmissionsSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="التقديم والتسجيل"
            title="خطوات بسيطة وواضحة تساعد الأسرة على اتخاذ القرار براحة"
            description="نفضل أن تبدأ العلاقة معنا بزيارة وتعريف كامل بالبرنامج المناسب، ثم نمضي مع الأسرة بخطوات مرتبة وواضحة."
          />
        </Reveal>

        <AdmissionsGrid>
          <Reveal>
            <InfoCard>
              <Pill>خطوات الالتحاق</Pill>
              <FeatureList>
                {admissionsInfo.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </FeatureList>
            </InfoCard>
          </Reveal>

          <Reveal delay={100}>
            <InfoCard>
              <Pill>الأوراق والملاحظات</Pill>
              <FeatureList>
                {admissionsInfo.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </FeatureList>
              <FeatureList style={{ marginTop: '0.5rem' }}>
                {admissionsInfo.notes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </FeatureList>
              <div>
                <PrimaryLink to="/contact">ابدأوا خطوة الحجز</PrimaryLink>
              </div>
            </InfoCard>
          </Reveal>
        </AdmissionsGrid>
      </Container>
    </Section>
  );
}

export function PastEventsSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="فعاليات وتجارب سابقة"
            title="هذا القسم مخصص لإبراز الأعمال السابقة والأنشطة والورش القابلة للإضافة المستمرة"
            description="كل بطاقة تدعم العنوان، الوصف، الصورة، التاريخ، والتصنيف لتسهيل إدارة المحتوى مستقبلًا."
          />
        </Reveal>

        <EventGrid>
          {pastEvents.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <EventCard $placeholder={item.isPlaceholder}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <Pill>{item.category}</Pill>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span style={{ color: 'var(--color-muted)', fontWeight: 700 }}>{item.date}</span>
              </EventCard>
            </Reveal>
          ))}
        </EventGrid>
      </Container>
    </Section>
  );
}
