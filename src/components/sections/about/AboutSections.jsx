import styled from 'styled-components';
import Reveal from '../../common/Reveal';
import SectionHeading from '../../common/SectionHeading';
import { achievements, aboutStory, founder, safeEnvironmentPillars, trustPoints, visionMissionValues } from '../../../data/aboutData';
import { getIcon } from '../../../utils/iconMap';
import { Card, Container, Pill, Section } from '../../../styles/primitives';

const StoryGrid = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 1.05fr 0.95fr;
  }
`;

const StoryCard = styled(Card)`
  display: grid;
  gap: 1rem;
`;

const StoryImage = styled.img`
  width: 100%;
  aspect-ratio: 5 / 4.3;
  object-fit: cover;
  border-radius: calc(var(--radius-xl) - 0.6rem);
`;

const ValuesGrid = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const ValueCard = styled(Card)`
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

const FounderGrid = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 0.72fr 1.08fr;
  }
`;

const FounderImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 4.8;
  object-fit: cover;
  border-radius: calc(var(--radius-xl) - 0.5rem);
`;

const BulletList = styled.ul`
  display: grid;
  gap: 0.7rem;
  color: var(--color-muted);
`;

const PillarsGrid = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const SplitLayout = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 0.88fr 1.12fr;
  }
`;

const AchievementGrid = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const AchievementCard = styled(Card)`
  display: grid;
  gap: 0.7rem;
  border-style: ${({ $placeholder }) => ($placeholder ? 'dashed' : 'solid')};
  background: ${({ $placeholder }) =>
    $placeholder ? 'rgba(242, 249, 255, 0.72)' : 'linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.88))'};
`;

export function AboutStorySection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="قصتنا"
            title="مكان يوازن بين الحنان والتنظيم حتى يبدأ الطفل يومه مطمئنًا"
            description="نعمل في Roomy على خلق بيئة يشعر فيها الطفل أنه مرحب به ومحبوب، وفي الوقت نفسه نمنحه روتينًا منظمًا يساعده على التعلم والنمو."
          />
        </Reveal>

        <StoryGrid>
          <Reveal>
            <StoryCard>
              {aboutStory.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </StoryCard>
          </Reveal>

          <Reveal delay={100}>
            <StoryCard>
              <StoryImage src={founder.image} alt={founder.name} />
              <Pill>رعاية تثق بها</Pill>
            </StoryCard>
          </Reveal>
        </StoryGrid>
      </Container>
    </Section>
  );
}

export function VisionMissionSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="الرؤية والرسالة والقيم"
            title="أساسنا التربوي واضح، لكنه يُقدَّم بلطف يليق بسنوات الطفولة الأولى"
            description="ننظر إلى كل يوم داخل الحضانة كفرصة لبناء الثقة، العادات الجميلة، والفضول الإيجابي لدى الطفل."
          />
        </Reveal>

        <ValuesGrid>
          {visionMissionValues.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.label} delay={index * 80}>
                <ValueCard>
                  <IconBadge>
                    <Icon size={18} />
                  </IconBadge>
                  <Pill>{item.label}</Pill>
                  <p>{item.text}</p>
                </ValueCard>
              </Reveal>
            );
          })}
        </ValuesGrid>
      </Container>
    </Section>
  );
}

export function FounderSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="إشراف تربوي"
            title="ميس رحمة مصطفى قاسم تتابع التجربة من تفاصيلها الصغيرة"
            description="وجود إشراف تربوي قريب من الطفل والأسرة يجعل التجربة أوضح وأكثر اطمئنانًا منذ اليوم الأول."
          />
        </Reveal>

        <FounderGrid>
          <Reveal>
            <Card>
              <FounderImage src={founder.image} alt={founder.name} />
            </Card>
          </Reveal>

          <Reveal delay={110}>
            <StoryCard>
              <Pill>{founder.title}</Pill>
              <h3>{founder.name}</h3>
              <p>{founder.bio}</p>
              <BulletList>
                {founder.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </BulletList>
            </StoryCard>
          </Reveal>
        </FounderGrid>
      </Container>
    </Section>
  );
}

export function SafeEnvironmentSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="بيئة آمنة وفلسفة رعاية"
            title="الأمان عندنا ليس فقط في المكان، بل أيضًا في الإيقاع اليومي وطريقة التعامل"
            description="نهتم بالمساحات، بالنظام، وبمشاعر الطفل في نفس الوقت حتى يبقى اليوم الدراسي مريحًا ومفيدًا."
          />
        </Reveal>

        <PillarsGrid>
          {safeEnvironmentPillars.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.title} delay={index * 70}>
                <ValueCard>
                  <IconBadge>
                    <Icon size={18} />
                  </IconBadge>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </ValueCard>
              </Reveal>
            );
          })}
        </PillarsGrid>
      </Container>
    </Section>
  );
}

export function TrustAchievementsSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="بناء الثقة والإنجازات"
            title="صممنا هذا الجزء ليعرض إنجازات الحضانة وأهم المحطات القابلة للإضافة مستقبلًا"
            description="يمكن تحديث هذه المساحة بسهولة لاحقًا لإبراز الأحداث الموسمية، الإنجازات التعليمية، أو أي مؤشرات مميزة تخص الحضانة."
          />
        </Reveal>

        <SplitLayout>
          <Reveal>
            <StoryCard>
              <Pill>لماذا يثق بنا أولياء الأمور؟</Pill>
              <BulletList>
                {trustPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </BulletList>
            </StoryCard>
          </Reveal>

          <AchievementGrid>
            {achievements.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <AchievementCard $placeholder={item.isPlaceholder}>
                  <Pill>{item.category}</Pill>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span style={{ color: 'var(--color-muted)', fontWeight: 700 }}>{item.date}</span>
                </AchievementCard>
              </Reveal>
            ))}
          </AchievementGrid>
        </SplitLayout>
      </Container>
    </Section>
  );
}
