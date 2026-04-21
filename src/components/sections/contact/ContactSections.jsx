import { useState } from 'react';
import styled from 'styled-components';
import Reveal from '../../common/Reveal';
import SectionHeading from '../../common/SectionHeading';
import { contactPageHighlights, enrollmentCta, formPrograms } from '../../../data/contactData';
import { contactCards, contactInfo, socialLinks, workingHours } from '../../../data/siteData';
import { getIcon } from '../../../utils/iconMap';
import { buildWhatsAppMessage, validateContactForm } from '../../../utils/validation';
import { Card, Container, Pill, PrimaryButton, PrimaryLink, Section } from '../../../styles/primitives';

const HighlightsGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1rem;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const HighlightCard = styled(Card)`
  display: grid;
  gap: 0.75rem;
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

const ContactGrid = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 0.96fr 1.04fr;
  }
`;

const DetailGrid = styled.div`
  display: grid;
  gap: 0.85rem;
`;

const DetailCard = styled.a`
  display: grid;
  gap: 0.35rem;
  padding: 1rem 1.1rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(167, 188, 214, 0.34);
  transition: var(--transition-fast);

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(225, 149, 171, 0.32);
  }

  span {
    color: var(--color-muted);
  }
`;

const HoursList = styled.ul`
  display: grid;
  gap: 0.7rem;
  color: var(--color-muted);
`;

const SocialRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  inline-size: 2.9rem;
  block-size: 2.9rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(167, 188, 214, 0.34);
  color: var(--color-text);
  transition: var(--transition-fast);

  &:hover {
    transform: translateY(-2px);
    color: var(--color-accent-dark);
  }
`;

const MapFrame = styled.iframe`
  width: 100%;
  min-height: 22rem;
  border: 0;
  border-radius: calc(var(--radius-xl) - 0.45rem);
`;

const FormCard = styled(Card)`
  display: grid;
  gap: 1rem;
`;

const Form = styled.form`
  display: grid;
  gap: 1rem;
`;

const FieldGrid = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Field = styled.div`
  display: grid;
  gap: 0.45rem;
`;

const Label = styled.label`
  font-weight: 800;
`;

const sharedInputStyles = `
  width: 100%;
  border-radius: var(--radius-md);
  border: 1px solid rgba(167, 188, 214, 0.36);
  background: rgba(255, 255, 255, 0.9);
  padding: 0.9rem 1rem;
  transition: var(--transition-fast);

  &:focus {
    border-color: rgba(225, 149, 171, 0.45);
  }
`;

const Input = styled.input`
  ${sharedInputStyles}
`;

const Select = styled.select`
  ${sharedInputStyles}
`;

const Textarea = styled.textarea`
  ${sharedInputStyles}
  min-height: 9rem;
  resize: vertical;
`;

const ErrorText = styled.span`
  color: var(--color-danger);
  font-size: 0.92rem;
  font-weight: 700;
`;

const StatusMessage = styled.p`
  color: ${({ $type }) => ($type === 'success' ? 'var(--color-success)' : 'var(--color-danger)')};
  font-weight: 700;
`;

const CtaCard = styled(Card)`
  margin-top: 1rem;
  display: grid;
  gap: 0.9rem;
  background: linear-gradient(135deg, rgba(255, 245, 215, 0.86) 0%, rgba(255, 204, 225, 0.78) 100%);
`;

function ContactSections() {
  const [values, setValues] = useState({
    parentName: '',
    phone: '',
    childName: '',
    childAge: '',
    program: formPrograms[0],
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setValues((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: '',
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateContactForm(values);

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setStatus({ type: 'error', message: 'يرجى مراجعة الحقول المطلوبة قبل الإرسال.' });
      return;
    }

    const message = buildWhatsAppMessage(values);
    window.open(`${contactInfo.whatsappHref}?text=${message}`, '_blank', 'noopener,noreferrer');
    setStatus({
      type: 'success',
      message: 'تم تجهيز رسالتك على واتساب. إذا لم يفتح تلقائيًا يمكنك مراسلتنا مباشرة من زر واتساب.',
    });
  };

  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="نحن قريبون منكم"
            title="اختاروا الطريقة الأنسب للتواصل أو املؤوا النموذج لنرتب معكم الخطوة التالية"
            description="جهزنا هذه الصفحة لتكون واضحة ومباشرة، سواء للحجز، الاستفسار عن البرامج، أو طلب زيارة تعريفية للمكان."
          />
        </Reveal>

        <HighlightsGrid>
          {contactPageHighlights.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.title} delay={index * 70}>
                <HighlightCard>
                  <IconBadge>
                    <Icon size={18} />
                  </IconBadge>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </HighlightCard>
              </Reveal>
            );
          })}
        </HighlightsGrid>

        <ContactGrid>
          <Reveal>
            <Card>
              <Pill>بيانات التواصل</Pill>
              <DetailGrid style={{ marginTop: '1rem' }}>
                {contactCards.map((item) => (
                  <DetailCard key={item.title} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                    <strong>{item.title}</strong>
                    <span>{item.value}</span>
                  </DetailCard>
                ))}
              </DetailGrid>

              <Pill style={{ marginTop: '1rem' }}>ساعات العمل</Pill>
              <HoursList style={{ marginTop: '1rem' }}>
                {workingHours.map((item) => (
                  <li key={item.day}>
                    {item.day}: {item.hours}
                  </li>
                ))}
              </HoursList>

              <SocialRow>
                {socialLinks.map((item) => {
                  const Icon = getIcon(item.icon);
                  return (
                    <SocialLink key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                      <Icon size={18} />
                    </SocialLink>
                  );
                })}
              </SocialRow>

              <div style={{ marginTop: '1rem' }}>
                <MapFrame
                  loading="lazy"
                  title="خريطة حضانة Roomy"
                  src={contactInfo.mapEmbed}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <FormCard id="contact-form">
              <Pill>نموذج التواصل</Pill>
              <Form onSubmit={handleSubmit} noValidate>
                <FieldGrid>
                  <Field>
                    <Label htmlFor="parentName">اسم ولي الأمر</Label>
                    <Input id="parentName" name="parentName" type="text" value={values.parentName} onChange={handleChange} aria-invalid={Boolean(errors.parentName)} />
                    {errors.parentName ? <ErrorText>{errors.parentName}</ErrorText> : null}
                  </Field>
                  <Field>
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input id="phone" name="phone" type="tel" value={values.phone} onChange={handleChange} aria-invalid={Boolean(errors.phone)} />
                    {errors.phone ? <ErrorText>{errors.phone}</ErrorText> : null}
                  </Field>
                </FieldGrid>

                <FieldGrid>
                  <Field>
                    <Label htmlFor="childName">اسم الطفل</Label>
                    <Input id="childName" name="childName" type="text" value={values.childName} onChange={handleChange} aria-invalid={Boolean(errors.childName)} />
                    {errors.childName ? <ErrorText>{errors.childName}</ErrorText> : null}
                  </Field>
                  <Field>
                    <Label htmlFor="childAge">عمر الطفل</Label>
                    <Input id="childAge" name="childAge" type="text" placeholder="مثال: 3 سنوات" value={values.childAge} onChange={handleChange} aria-invalid={Boolean(errors.childAge)} />
                    {errors.childAge ? <ErrorText>{errors.childAge}</ErrorText> : null}
                  </Field>
                </FieldGrid>

                <Field>
                  <Label htmlFor="program">البرنامج المطلوب</Label>
                  <Select id="program" name="program" value={values.program} onChange={handleChange}>
                    {formPrograms.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </Select>
                </Field>

                <Field>
                  <Label htmlFor="message">تفاصيل الاستفسار أو موعد مناسب للزيارة</Label>
                  <Textarea id="message" name="message" value={values.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} />
                  {errors.message ? <ErrorText>{errors.message}</ErrorText> : null}
                </Field>

                <PrimaryButton type="submit">إرسال عبر واتساب</PrimaryButton>

                {status.type !== 'idle' ? (
                  <StatusMessage $type={status.type} role="status" aria-live="polite">
                    {status.message}
                  </StatusMessage>
                ) : null}
              </Form>

              <CtaCard>
                <h3>{enrollmentCta.title}</h3>
                <p>{enrollmentCta.text}</p>
                <PrimaryLink to="/programs">شاهدوا البرامج أولًا</PrimaryLink>
              </CtaCard>
            </FormCard>
          </Reveal>
        </ContactGrid>
      </Container>
    </Section>
  );
}

export default ContactSections;
