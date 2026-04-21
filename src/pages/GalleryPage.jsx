import PageHero from '../components/common/PageHero';
import PageMeta from '../components/common/PageMeta';
import {
  FutureMediaSection,
  GalleryShowcaseSection,
  VideoShowcaseSection,
} from '../components/sections/gallery/GallerySections';
import { galleryHero } from '../data/galleryData';

function GalleryPage() {
  return (
    <>
      <PageMeta
        title="المعرض والوسائط"
        description="شاهدوا معرض حضانة Roomy القابل للتوسعة بالصور والفيديوهات والألبومات والوسائط الخاصة بالفعاليات والأنشطة."
      />
      <PageHero
        eyebrow={galleryHero.eyebrow}
        title={galleryHero.title}
        description={galleryHero.description}
        image={galleryHero.image}
        imageAlt="معرض حضانة Roomy"
        pills={['معرض صور', 'بطاقات فيديو', 'مساحة مستقبلية للوسائط']}
      />
      <GalleryShowcaseSection />
      <VideoShowcaseSection />
      <FutureMediaSection />
    </>
  );
}

export default GalleryPage;
