import PageMeta from '../components/common/PageMeta';
import {
  ContactPreviewSection,
  FaqPreviewSection,
  FeaturedActivitiesSection,
  FeaturedProgramsSection,
  HomeHeroSection,
  HomeIntroSection,
  QuickCtaSection,
  TestimonialsSection,
  WhyChooseUsSection,
} from '../components/sections/home/HomeSections';

function HomePage() {
  return (
    <>
      <PageMeta
        title="الصفحة الرئيسية"
        description="حضانة Roomy تقدم بيئة دافئة وآمنة للأطفال مع برامج تعليم مبكر وأنشطة ممتعة وتواصل سهل مع أولياء الأمور."
      />
      <HomeHeroSection />
      <HomeIntroSection />
      <WhyChooseUsSection />
      <FeaturedProgramsSection />
      {/* <FeaturedActivitiesSection /> */}
      <TestimonialsSection />
      <QuickCtaSection />
      <FaqPreviewSection />
      <ContactPreviewSection />
    </>
  );
}

export default HomePage;
