import PageHero from '../components/common/PageHero';
import PageMeta from '../components/common/PageMeta';
import {
  AboutStorySection,
  FounderSection,
  SafeEnvironmentSection,
  TrustAchievementsSection,
  VisionMissionSection,
} from '../components/sections/about/AboutSections';
import { aboutHero } from '../data/aboutData';

function AboutPage() {
  return (
    <>
      <PageMeta
        title="من نحن"
        description="تعرّفوا على رؤية حضانة Roomy ورسالتها، وعلى إشراف ميس رحمة مصطفى قاسم وفلسفة الرعاية الآمنة للأطفال."
      />
      <PageHero
        eyebrow={aboutHero.eyebrow}
        title={aboutHero.title}
        description={aboutHero.description}
        image={aboutHero.image}
        imageAlt="من نحن في حضانة Roomy"
        pills={['إشراف تربوي مباشر', 'حب وأمان', 'شراكة مع الأسرة']}
      />
      <AboutStorySection />
      <VisionMissionSection />
      <FounderSection />
      <SafeEnvironmentSection />
      <TrustAchievementsSection />
    </>
  );
}

export default AboutPage;
