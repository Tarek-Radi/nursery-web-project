import styled from 'styled-components';
import { PlayCircle } from 'lucide-react';
import { Card, Pill } from '../../styles/primitives';

const Wrapper = styled(Card)`
  display: grid;
  gap: 1rem;
`;

const Thumb = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: calc(var(--radius-xl) - 0.6rem);
  background: var(--color-bg);

  img {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
  }
`;

const PlayBadge = styled.span`
  position: absolute;
  inset: auto auto 1rem 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.65rem 0.9rem;
  border-radius: var(--radius-pill);
  background: rgba(47, 51, 68, 0.78);
  color: #fff;
  font-weight: 700;
`;

const Meta = styled.div`
  display: grid;
  gap: 0.7rem;

  p {
    color: var(--color-muted);
  }
`;

function VideoCard({ item }) {
  return (
    <Wrapper>
      <Thumb>
        <video controls width="100%">
          <source src={item.video} type="video/mp4" />
        </video>

        <PlayBadge>
          <PlayCircle size={16} />
          {item.duration}
        </PlayBadge>
      </Thumb>

      <Meta>
        <Pill>{item.category}</Pill>
        <h3>{item.title}</h3>
        <p>{item.caption}</p>
      </Meta>
    </Wrapper>
  );
}

export default VideoCard;
