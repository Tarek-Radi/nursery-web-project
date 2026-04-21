const escapeXml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

export const createPlaceholder = ({
  title,
  subtitle,
  width = 1200,
  height = 900,
  accent = '#E195AB',
  soft = '#FFCCE1',
  sky = '#F2F9FF',
  warm = '#FFF5D7',
  extra = '#BFE4FF',
}) => {
  const safeTitle = escapeXml(title);
  const safeSubtitle = escapeXml(subtitle);
  const borderRadius = Math.round(width * 0.045);
  const titleSize = Math.max(30, Math.round(width * 0.05));
  const subtitleSize = Math.max(16, Math.round(width * 0.024));
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${sky}" />
          <stop offset="1" stop-color="${warm}" />
        </linearGradient>
        <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.96" />
          <stop offset="1" stop-color="#FFFFFF" stop-opacity="0.72" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" rx="${borderRadius}" fill="url(#bg)" />
      <circle cx="${width * 0.18}" cy="${height * 0.2}" r="${width * 0.11}" fill="${soft}" opacity="0.8" />
      <circle cx="${width * 0.82}" cy="${height * 0.2}" r="${width * 0.15}" fill="${accent}" opacity="0.18" />
      <circle cx="${width * 0.76}" cy="${height * 0.72}" r="${width * 0.18}" fill="${extra}" opacity="0.45" />
      <path d="M0 ${height * 0.76} C ${width * 0.16} ${height * 0.62}, ${width * 0.34} ${height * 0.96}, ${width * 0.52} ${height * 0.79} S ${width * 0.85} ${height * 0.68}, ${width} ${height * 0.82} V ${height} H0 Z" fill="#FFFFFF" opacity="0.62" />
      <rect x="${width * 0.1}" y="${height * 0.15}" width="${width * 0.8}" height="${height * 0.58}" rx="${borderRadius * 0.9}" fill="url(#panel)" stroke="${accent}" stroke-opacity="0.18" />
      <rect x="${width * 0.16}" y="${height * 0.24}" width="${width * 0.18}" height="${height * 0.22}" rx="${borderRadius * 0.46}" fill="${soft}" opacity="0.86" />
      <rect x="${width * 0.38}" y="${height * 0.26}" width="${width * 0.22}" height="${height * 0.18}" rx="${borderRadius * 0.38}" fill="${extra}" opacity="0.86" />
      <rect x="${width * 0.65}" y="${height * 0.23}" width="${width * 0.12}" height="${height * 0.14}" rx="${borderRadius * 0.32}" fill="${warm}" opacity="0.92" />
      <circle cx="${width * 0.22}" cy="${height * 0.6}" r="${width * 0.026}" fill="${accent}" opacity="0.9" />
      <circle cx="${width * 0.3}" cy="${height * 0.56}" r="${width * 0.018}" fill="${soft}" opacity="0.95" />
      <circle cx="${width * 0.78}" cy="${height * 0.56}" r="${width * 0.022}" fill="${extra}" opacity="0.95" />
      <rect x="${width * 0.17}" y="${height * 0.68}" width="${width * 0.14}" height="${height * 0.09}" rx="${borderRadius * 0.3}" fill="${accent}" opacity="0.92" />
      <rect x="${width * 0.34}" y="${height * 0.68}" width="${width * 0.12}" height="${height * 0.09}" rx="${borderRadius * 0.3}" fill="${extra}" opacity="0.92" />
      <rect x="${width * 0.49}" y="${height * 0.68}" width="${width * 0.16}" height="${height * 0.09}" rx="${borderRadius * 0.3}" fill="${soft}" opacity="0.96" />
      <rect x="${width * 0.68}" y="${height * 0.68}" width="${width * 0.11}" height="${height * 0.09}" rx="${borderRadius * 0.3}" fill="${warm}" opacity="0.96" />
      <text x="50%" y="${height * 0.48}" text-anchor="middle" font-family="Cairo, Arial" font-size="${titleSize}" font-weight="700" fill="#364056">${safeTitle}</text>
      <text x="50%" y="${height * 0.57}" text-anchor="middle" font-family="Tajawal, Arial" font-size="${subtitleSize}" fill="#5E6475">${safeSubtitle}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};
