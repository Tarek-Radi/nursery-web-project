import { Eyebrow, SectionDescription, SectionHeaderWrap, SectionTitle } from '../../styles/primitives';

function SectionHeading({ eyebrow, title, description }) {
  return (
    <SectionHeaderWrap>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <SectionTitle>{title}</SectionTitle>
      {description ? <SectionDescription>{description}</SectionDescription> : null}
    </SectionHeaderWrap>
  );
}

export default SectionHeading;
