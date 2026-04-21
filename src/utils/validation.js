const egyptianPhoneRegex = /^(?:\+?2)?01[0125][0-9]{8}$/;

export const validateContactForm = (values) => {
  const errors = {};

  if (!values.parentName.trim()) {
    errors.parentName = 'من فضلك اكتب اسم ولي الأمر.';
  }

  if (!values.phone.trim()) {
    errors.phone = 'من فضلك اكتب رقم هاتف صحيح للتواصل.';
  } else if (!egyptianPhoneRegex.test(values.phone.trim())) {
    errors.phone = 'يرجى كتابة رقم موبايل مصري صحيح يبدأ بـ 01.';
  }

  if (!values.childName.trim()) {
    errors.childName = 'من فضلك اكتب اسم الطفل.';
  }

  if (!values.childAge.trim()) {
    errors.childAge = 'يرجى تحديد عمر الطفل.';
  }

  if (!values.message.trim()) {
    errors.message = 'اكتب لنا نبذة قصيرة عن احتياجك أو موعد الزيارة المناسب.';
  } else if (values.message.trim().length < 12) {
    errors.message = 'الرسالة قصيرة جدًا. أضف تفاصيل بسيطة حتى نساعدك بشكل أفضل.';
  }

  return errors;
};

export const buildWhatsAppMessage = (values) => {
  const lines = [
    'السلام عليكم، أرغب في الاستفسار عن التقديم في حضانة Roomy.',
    '',
    `اسم ولي الأمر: ${values.parentName}`,
    `رقم الهاتف: ${values.phone}`,
    `اسم الطفل: ${values.childName}`,
    `عمر الطفل: ${values.childAge}`,
    `البرنامج المفضل: ${values.program || 'أرغب في معرفة الأنسب'}`,
    '',
    `التفاصيل: ${values.message}`,
  ];

  return encodeURIComponent(lines.join('\n'));
};
