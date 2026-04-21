import { createPlaceholder } from '../utils/createPlaceholder';

export const galleryHero = {
  eyebrow: 'المعرض والوسائط',
  title: 'مساحات مرئية جاهزة لعرض صور الأطفال والفعاليات والأنشطة اليومية',
  description:
    'صممنا المعرض ليكون سهل التوسعة مستقبلًا، مع تصنيفات واضحة، لايتبوكس للصور، وبطاقات فيديو قابلة للتحديث لاحقًا.',
  image: '/images/spotlight.jpg',
};

export const galleryCategories = ['الكل', 'الفصول', 'الأنشطة', 'الفعاليات', 'اللعب الخارجي'];

export const galleryItems = [
  {
    title: 'ركن القصص',
    caption: 'لحظات هادئة تزرع حب الاستماع واللغة.',
    category: 'الفصول',
    image: '/images/story.jpeg',
    alt: 'ركن القصص داخل حضانة Roomy',
  },
  {
    title: 'أنشطة الألوان',
    caption: 'تجارب فنية ممتعة تنمّي الخيال والتعبير.',
    category: 'الأنشطة',
    image: '/images/c.jpg',
    alt: 'نشاط فني للأطفال في حضانة Roomy',
  },
  {
    title: 'يوم العائلة المفتوح',
    caption: 'مساحة للتقارب بين الأسرة والطفل داخل الحضانة.',
    category: 'الفعاليات',
    image: '/images/fam.jpg',
    alt: 'فعالية يوم العائلة المفتوح في حضانة Roomy',
  },
  {
    title: 'اللعب الحركي',
    caption: 'حركة منظمة تساعد على التوازن والثقة والمرح.',
    category: 'اللعب الخارجي',
    image: '/images/playy.jpg',
    alt: 'مساحة اللعب الحركي الخارجي في حضانة Roomy',
  },
  {
    title: 'أركان الفصل',
    caption: 'تنظيم بصري مريح يناسب الاستكشاف اليومي.',
    category: 'الفصول',
    image: '/images/kk.jpg',
    alt: 'فصل منظم داخل حضانة Roomy',
  },
  {
    title: 'نشاط الحواس منتسوري',
    caption: 'خامات بسيطة وآمنة لتجارب لمسية ممتعة.',
    category: 'الأنشطة',
    image: '/images/ment.jpeg',
    alt: 'نشاط حسي للأطفال في حضانة Roomy',
  },
];

export const videoItems = [
  {
    title: 'جولة سريعة داخل الحضانة',
    caption: 'فيديو تعريفي بالمكان والأركان الأساسية.',
    duration: '01:12',
    category: 'تعريفي',
    video: '/images/OA.mp4',
    thumbnail: createPlaceholder({
      title: 'أضف فيديو هنا',
      subtitle: 'جولة سريعة داخل الحضانة',
      width: 1000,
      height: 720,
    }),
  },
  {
    title: 'لحظات من الأنشطة اليومية',
    caption: 'مقاطع قصيرة للأنشطة الجماعية والفنية.',
    duration: '00:48',
    category: 'أنشطة',
    video: '/images/LL.mp4',
    thumbnail: createPlaceholder({
      title: 'أضف فيديو هنا',
      subtitle: 'لحظات من اليوم داخل Roomy',
      width: 1000,
      height: 720,
      accent: '#D986A8',
    }),
  },
  // {
  //   title: 'فعالية موسمية',
  //   caption: 'مكان مناسب لإضافة فيديو فعالية أو احتفال.',
  //   duration: '00:55',
  //   category: 'فعاليات',
  //   thumbnail: createPlaceholder({
  //     title: 'أضف فيديو هنا',
  //     subtitle: 'فعالية موسمية أو مناسبة خاصة',
  //     width: 1000,
  //     height: 720,
  //     accent: '#A6C7EE',
  //   }),
  // },
];

export const futureMediaCards = [
  // {
  //   icon: 'Image',
  //   title: 'أضف صورة هنا',
  //   text: 'بطاقة مخصصة لإضافة صورة جديدة لأي نشاط أو فصل أو لحظة يومية.',
  // },
  // {
  //   icon: 'Video',
  //   title: 'أضف فيديو هنا',
  //   text: 'مساحة قابلة لإضافة فيديو ترويجي أو جولة داخلية أو مقطع من الفعاليات.',
  // },
  // {
  //   icon: 'Images',
  //   title: 'أضف ألبوم فعالية هنا',
  //   text: 'يمكن تخصيص هذه البطاقة لألبوم احتفال أو ورشة أو أسبوع تعليمي كامل.',
  // },
  // {
  //   icon: 'Award',
  //   title: 'أضف إنجاز هنا',
  //   text: 'اربطوا أي إنجاز بصورة أو فيديو أو شهادة مستقبلية في هذه المساحة بسهولة.',
  // },
];
