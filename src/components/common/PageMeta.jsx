import { useEffect } from 'react';

const ensureMeta = (name) => {
  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }

  return tag;
};

function PageMeta({ title, description }) {
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.title = title ? `${title} | حضانة Roomy` : 'حضانة Roomy | معانا طفلك يكبر ويتعلم بحب وأمان';
    ensureMeta('description').setAttribute('content', description);
  }, [description, title]);

  return null;
}

export default PageMeta;
