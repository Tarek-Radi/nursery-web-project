import PageHero from '../components/common/PageHero';
import PageMeta from '../components/common/PageMeta';
import ContactSections from '../components/sections/contact/ContactSections';
import { createPlaceholder } from '../utils/createPlaceholder';

const contactHeroImage = createPlaceholder({
  title: 'تواصلوا معنا',
  subtitle: 'خطوة سهلة للحجز والاستفسار والزيارة',
  width: 1100,
  height: 860,
});

function ContactPage() {
  return (
    <>
      <PageMeta
        title="تواصل معنا"
        description="تواصلوا مع حضانة Roomy عبر واتساب أو الهاتف أو نموذج التواصل لحجز زيارة تعريفية والاستفسار عن البرامج."
      />
      <PageHero
        eyebrow="تواصل معنا"
        title="نحن جاهزون للرد على استفساراتكم ومساعدتكم في اختيار البداية المناسبة لطفلكم"
        description="هذه الصفحة صممت لتجعل الحجز والتواصل سهلين وسريعين، مع نموذج واضح وبيانات مباشرة وخريطة الوصول."
        image={contactHeroImage}
        imageAlt="التواصل مع حضانة Roomy"
        pills={['واتساب مباشر', 'خريطة واضحة', 'زيارة تعريفية']}
      />
      <ContactSections />
    </>
  );
}

export default ContactPage;
