import PageHero from '../components/common/PageHero';
import PageMeta from '../components/common/PageMeta';
import {
  ActivitiesHighlightsSection,
  AdmissionsSection,
  DailyRoutineSection,
  PastEventsSection,
  ProgramsGridSection,
} from '../components/sections/programs/ProgramsSections';
import { programsHero } from '../data/programsData';

function ProgramsPage() {
  return (
    <>
      <PageMeta
        title="البرامج والأنشطة"
        description="اكتشفوا برامج حضانة Roomy، الأنشطة اليومية، الروتين المنظم، وتجارب التعلم المناسبة لكل مرحلة عمرية."
      />
      <PageHero
        eyebrow={programsHero.eyebrow}
        title={programsHero.title}
        description={programsHero.description}
        image={programsHero.image}
        imageAlt="برامج وأنشطة حضانة Roomy"
        pills={['تعلم باللعب', 'أنشطة يومية', 'استعداد للمدرسة']}
      />
      <ProgramsGridSection />
      <ActivitiesHighlightsSection />
      <DailyRoutineSection />
      <AdmissionsSection />
      <PastEventsSection />
    </>
  );
}

export default ProgramsPage;
