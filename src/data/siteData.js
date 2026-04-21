import { createPlaceholder } from '../utils/createPlaceholder';

export const brand = {
  name: 'Roomy Nursery',
  arabicName: 'حضانة Roomy',
  tagline: 'معانا طفلك يكبر ويتعلم بحب وأمان 💛',
  description:
    'مكان دافئ وآمن لرعاية وتعليم الأطفال، بإشراف ميس رحمة مصطفى قاسم، حيث نجمع بين الحنان، التعلم، والأنشطة الهادفة داخل بيئة عربية مريحة.',
  heroImage: createPlaceholder({
    title: 'حضانة Roomy',
    subtitle: 'بيئة دافئة وآمنة للتعلم واللعب الهادف',
    width: 1600,
    height: 1100,
  }),
};

export const navLinks = [
  { label: 'الصفحة الرئيسية', to: '/' },
  { label: 'من نحن', to: '/about' },
  { label: 'البرامج والأنشطة', to: '/programs' },
  { label: 'المعرض والوسائط', to: '/gallery' },
  { label: 'تواصل معنا', to: '/contact' },
];

export const contactInfo = {
  phone: '01107872769',
  phoneHref: 'tel:+201107872769',
  whatsappNumber: '+2001107872769',
  whatsappHref: 'https://wa.me/201012345678',
  email: 'rahmaamostafaqasssem@gmail.com',
  emailHref: 'mailto:rahmaamostafaqasssem@gmail.com',
  address: 'حدائق حلوان، القاهرة، مصر',
  addressHref: 'https://maps.google.com/?q=Nasr%20City%20Cairo%20Egypt',
  mapEmbed: 'https://www.google.com/maps?q=Nasr%20City%20Cairo%20Egypt&output=embed',
};

export const socialLinks = [
  { label: 'واتساب', href: contactInfo.whatsappHref, icon: 'MessageCircle' },
  { label: 'فيسبوك', href: 'https://www.facebook.com/share/1ED5uzXhw1/', icon: 'Facebook' },
  { label: 'إنستجرام', href: 'https://www.instagram.com/room.y_?igsh=d3J6cmM1cm85M21s', icon: 'Instagram' },
  // { label: 'يوتيوب', href: 'https://youtube.com/@roomynursery', icon: 'Youtube' },
];

export const contactCards = [
  { title: 'رقم التواصل', value: contactInfo.phone, href: contactInfo.phoneHref, icon: 'PhoneCall' },
  { title: 'واتساب', value: 'راسلينا مباشرة للحجز والاستفسار', href: contactInfo.whatsappHref, icon: 'MessageCircle' },
  { title: 'البريد الإلكتروني', value: contactInfo.email, href: contactInfo.emailHref, icon: 'Mail' },
  { title: 'العنوان', value: contactInfo.address, href: contactInfo.addressHref, icon: 'MapPin' },
];

export const workingHours = [
  { day: 'الأحد - الخميس', hours: '8:00 صباحًا - 4:00 مساءً' },
  { day: 'السبت', hours: '10:00 صباحًا - 2:00 ظهرًا للحجوزات والزيارات' },
  { day: 'الجمعة', hours: 'إجازة أسبوعية' },
];

export const footerColumns = [
  {
    title: 'روابط سريعة',
    items: navLinks,
  },
  {
    title: 'خدماتنا',
    items: [
      { label: 'برامج تعليم مبكر', to: '/programs' },
      { label: 'أنشطة يومية ممتعة', to: '/programs' },
      { label: 'معرض الصور والفيديو', to: '/gallery' },
      { label: 'حجز زيارة تعريفية', to: '/contact' },
    ],
  },
];

export const trustStats = [
  { value: '+20', label: 'أسرة تواصلت معنا بثقة خلال آخر المواسم' },
  { value: '1:6', label: 'متابعة قريبة داخل المجموعات الصغيرة' },
  { value: '+15', label: 'نشاطًا أسبوعيًا بين تعليم ولعب واكتشاف' },
];
