/* Source screen: Dashboard Dark (Figma id 0:3) */
/* This script constructs a static, pixel-placed layout using the provided Figma JSON coordinates. */

/* Root frame from screen_0:3.json */
const FIGMA_ROOT = { x: -3889, y: -2313, width: 2490, height: 1922 };

/* We normalize X using an offset so the sidebar aligns to x=0 (child x:-3896 => left 0). */
const OFFSET_X = 3896; // -(-3896)
const OFFSET_Y = 2313; // -(-2313)

/* Helpers to translate Figma absolute coords to canvas-relative coords */
function fx(x) { return Math.round(x + OFFSET_X); }
function fy(y) { return Math.round(y + OFFSET_Y); }

/* Small factory helpers */
function addRect(parent, { id, x, y, w, h, className = '', radius = 16, style = {} }) {
  const el = document.createElement('div');
  el.className = ['node', 'shape', className].filter(Boolean).join(' ');
  el.id = id;
  Object.assign(el.style, {
    left: fx(x) + 'px',
    top: fy(y) + 'px',
    width: Math.round(w) + 'px',
    height: Math.round(h) + 'px',
    borderRadius: (radius ?? 16) + 'px'
  }, style);
  parent.appendChild(el);
  return el;
}
function addText(parent, { id, x, y, w, h, text, className = '', style = {} }) {
  const el = document.createElement('div');
  el.className = ['node', 'pre-line', className].filter(Boolean).join(' ');
  el.id = id;
  Object.assign(el.style, {
    left: fx(x) + 'px',
    top: fy(y) + 'px',
    width: (w != null ? Math.round(w) + 'px' : 'auto'),
    height: (h != null ? Math.round(h) + 'px' : 'auto'),
  }, style);
  el.textContent = text ?? '';
  parent.appendChild(el);
  return el;
}
function addImage(parent, { id, x, y, w, h, src, className = '', style = {}, alt = '' }) {
  const el = document.createElement('img');
  el.className = ['node', 'img-node', className].filter(Boolean).join(' ');
  el.id = id;
  Object.assign(el.style, {
    left: fx(x) + 'px',
    top: fy(y) + 'px',
    width: Math.round(w) + 'px',
    height: Math.round(h) + 'px',
    position: 'absolute'
  }, style);
  el.src = src;
  el.alt = alt || id || 'asset';
  parent.appendChild(el);
  return el;
}

/* Build the static composition */
function render() {
  const canvas = document.getElementById('canvas');
  if (!canvas) return;

  // Canvas size from Figma root
  canvas.style.width = FIGMA_ROOT.width + 'px';
  canvas.style.height = FIGMA_ROOT.height + 'px';

  // Sidebar (Rectangle 15, style_3)
  addRect(canvas, {
    id: 'sidebar',
    x: -3896, y: -2313, w: 277, h: 1920,
    className: 'surface--sidebar',
    radius: 0
  });

  // Topbar (Rectangle 17, style_4)
  addRect(canvas, {
    id: 'topbar',
    x: -3619, y: -2313, w: 2220, h: 110,
    className: 'surface--topbar',
    radius: 0
  });

  // Home icon in sidebar (placeholder image from figma_image_0_69.png)
  addImage(canvas, {
    id: 'icon-home',
    x: -3880, y: -2138, w: 30, h: 30,
    src: '/assets/figmaimages/figma_image_0_69.png',
    alt: 'home'
  });

  // Brand: "Your Company" (Text 0:33)
  addText(canvas, {
    id: 'brand',
    x: -3876, y: -2213, w: 239, h: 38,
    text: 'Your Company',
    className: 'text-h2 semibold',
    style: { color: 'var(--text-primary)' }
  });

  // Sidebar nav items (subset; from 0:34..0:41)
  addText(canvas, {
    id: 'nav-dashboard',
    x: -3846, y: -2141, w: 239, h: 38,
    text: 'Dashboard',
    className: 'text-body semibold'
  });
  addText(canvas, {
    id: 'nav-dashboard-light',
    x: -3846, y: -2078, w: 239, h: 38,
    text: 'Dashboard Light',
    className: 'text-body'
  });
  addText(canvas, {
    id: 'nav-dashboard-dark',
    x: -3846, y: -2015, w: 239, h: 38,
    text: 'Dashboard Dark',
    className: 'text-body semibold'
  });
  addText(canvas, {
    id: 'nav-employee',
    x: -3846, y: -1952, w: 239, h: 38,
    text: 'Employee Board',
    className: 'text-body'
  });

  // Topbar search inputs (Rectangles 19 and 18)
  addRect(canvas, {
    id: 'search-left',
    x: -3555, y: -2281, w: 386, h: 46,
    className: 'input',
    radius: 8
  });
  addRect(canvas, {
    id: 'search-right',
    x: -1902, y: -2281, w: 386, h: 46,
    className: 'input',
    radius: 8
  });
  addText(canvas, {
    id: 'search-placeholder',
    x: -1886, y: -2276, w: 160, h: 36,
    text: 'Search here..',
    className: 'text-body',
    style: { color: 'var(--text-placeholder)' }
  });

  // KPI top row - Purple card ("purple board" 0:13)
  addRect(canvas, {
    id: 'kpi-revenue',
    x: -3574, y: -2148, w: 462, h: 332,
    className: 'card--purple'
  });
  addText(canvas, {
    id: 'kpi-revenue-title',
    x: -3554, y: -2126, w: 148, h: 36,
    text: 'revenue',
    className: 'text-h3 semibold'
  });
  addText(canvas, {
    id: 'kpi-revenue-value',
    x: -3554, y: -2100, w: 219, h: 53,
    text: '$920.035',
    className: 'text-h1 bold'
  });

  // Purple card inline bars (group 0:73)
  [
    { x: -3554.449, y: -2014, w: 32.928, h: 171, color: 'var(--accent-purple-600)' },
    { x: -3504.029, y: -1978, w: 32.928, h: 133, color: 'var(--accent-purple-500)' },
    { x: -3453.609, y: -2039, w: 32.928, h: 194, color: 'var(--accent-purple-600)' },
    { x: -3403.188, y: -1905, w: 32.928, h: 60,  color: 'var(--accent-purple-500)' },
    { x: -3352.768, y: -1954, w: 32.928, h: 109, color: 'var(--accent-purple-600)' },
  ].forEach((b, i) => {
    addRect(canvas, {
      id: `kpi-revenue-bar-${i+1}`,
      x: b.x, y: b.y, w: b.w, h: b.h,
      className: '',
      radius: 6,
      style: { background: b.color, border: 'none', boxShadow: 'none' }
    });
  });

  // Purple card avatars (using available PNG placeholder)
  addImage(canvas, {
    id: 'kpi-revenue-avatar-1',
    x: -3255, y: -2118, w: 51, h: 49,
    src: '/assets/figmaimages/figma_image_0_69.png',
    className: 'round',
    alt: 'avatar'
  });
  addImage(canvas, {
    id: 'kpi-revenue-avatar-2',
    x: -3218, y: -2118, w: 51, h: 49,
    src: '/assets/figmaimages/figma_image_0_69.png',
    className: 'round',
    alt: 'avatar'
  });
  addImage(canvas, {
    id: 'kpi-revenue-avatar-3',
    x: -3184, y: -2118, w: 50, h: 49,
    src: '/assets/figmaimages/figma_image_0_69.png',
    className: 'round',
    alt: 'avatar'
  });
  addText(canvas, {
    id: 'kpi-revenue-avatar-extra',
    x: -3164, y: -2104, w: 36, h: 21,
    text: '25+',
    className: 'text-body semibold'
  });

  // Yellow card ("yellow board" 0:18)
  addRect(canvas, {
    id: 'kpi-expenses',
    x: -3058, y: -2144, w: 458, h: 332,
    className: 'card--yellow'
  });
  addText(canvas, {
    id: 'kpi-expenses-title',
    x: -3042, y: -2126, w: 148, h: 36,
    text: 'Expenses',
    className: 'text-h3 semibold'
  });
  addText(canvas, {
    id: 'kpi-expenses-value',
    x: -3042, y: -2100, w: 219, h: 53,
    text: '$920.035',
    className: 'text-h1 bold'
  });

  // Promo "green board" (Group 4, base rect 0:20)
  addRect(canvas, {
    id: 'promo-green',
    x: -2529, y: -2143.412, w: 497.595, h: 539.082,
    className: 'card--green',
    radius: 20,
    style: { background: 'linear-gradient(135deg, var(--accent-green-500) 0%, var(--accent-teal-600) 100%)' }
  });
  addText(canvas, {
    id: 'promo-headline',
    x: -2499, y: -2100, w: 392, h: 106,
    text: 'Your finance , safe and secure',
    className: 'text-h1 bold'
  });
  addText(canvas, {
    id: 'promo-body',
    x: -2499, y: -1993, w: 392, h: 270,
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    className: 'text-body'
  });
  addText(canvas, {
    id: 'promo-stat',
    x: -2362, y: -1696, w: 152, h: 71,
    text: '15k+\nHappy Clients',
    className: 'text-title bold'
  });

  // "My Progress" card (0:28) + donut (0:101..0:105)
  addRect(canvas, {
    id: 'my-progress',
    x: -1967, y: -2144, w: 476, h: 537,
    className: 'panel',
  });
  // Donut background ring (approx)
  addRect(canvas, {
    id: 'my-progress-donut-bg',
    x: -1819, y: -2125, w: 167, h: 167,
    className: '',
    radius: 999,
    style: { background: 'transparent', border: '14px solid var(--ocean-surface-muted)' }
  });
  // Donut foreground (approx 75%)
  addRect(canvas, {
    id: 'my-progress-donut-fg',
    x: -1819, y: -2125, w: 167, h: 167,
    className: '',
    radius: 999,
    style: {
      background: 'transparent',
      border: '14px solid var(--accent-teal-500)',
      clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'
    }
  });
  addText(canvas, {
    id: 'my-progress-percent',
    x: -1771, y: -2071, w: 152, h: 60,
    text: '75%',
    className: 'text-h1 bold center'
  });
  addText(canvas, {
    id: 'my-progress-title',
    x: -1839, y: -1897, w: 392, h: 53,
    text: 'My Progress',
    className: 'text-h1 bold'
  });
  // CTA button (Rectangle 35 + label)
  addRect(canvas, {
    id: 'my-progress-cta',
    x: -1848, y: -1751, w: 252, h: 80,
    className: '',
    radius: 12,
    style: { background: 'var(--accent-blue-500)', border: 'none' }
  });
  addText(canvas, {
    id: 'my-progress-cta-label',
    x: -1815, y: -1734, w: 180, h: 45,
    text: 'More Details',
    className: 'text-title bold',
    style: { color: '#fff' }
  });
  // Check icon inside circle (placeholder)
  addImage(canvas, {
    id: 'my-progress-check',
    x: -1753, y: -1989, w: 48, h: 48,
    src: '/assets/figmaimages/figma_image_0_69.png',
    alt: 'check'
  });

  // Large panel: Project Overview (Rectangle 26)
  addRect(canvas, {
    id: 'project-overview',
    x: -3574, y: -1112, w: 1254, h: 673,
    className: 'panel'
  });
  addText(canvas, {
    id: 'project-overview-title',
    x: -3532, y: -1554, w: 171, h: 30,
    text: 'Project Overview',
    className: 'text-h2 semibold'
  });

  // To-do panel (Rectangle 25)
  addRect(canvas, {
    id: 'todo-panel',
    x: -2707, y: -1572, w: 387, h: 415,
    className: 'panel'
  });
  addText(canvas, {
    id: 'todo-title',
    x: -2693, y: -1546, w: 180, h: 26,
    text: 'My To Do Items',
    className: 'text-title semibold'
  });
  addText(canvas, {
    id: 'todo-actions',
    x: -2508, y: -1546, w: 211, h: 23,
    text: 'View All  +  Add To Do',
    className: 'text-body text-accent'
  });

  // Active Projects header row (Rectangle 69)
  addRect(canvas, {
    id: 'active-projects-header',
    x: -3572, y: -998, w: 1253, h: 114,
    className: 'panel--muted',
    radius: 16
  });
  addText(canvas, {
    id: 'active-projects-title',
    x: -3531, y: -1069, w: 308, h: 53,
    text: 'Active Projects',
    className: 'text-h1 bold'
  });
  // Export action (placeholder image)
  addImage(canvas, {
    id: 'export-icon',
    x: -2741, y: -1078, w: 62, h: 62,
    src: '/assets/figmaimages/figma_image_0_69.png',
    alt: 'export'
  });
  addText(canvas, {
    id: 'export-label',
    x: -2660, y: -1069, w: 308, h: 53,
    text: 'Export Report',
    className: 'text-h1 bold text-accent'
  });

  // Table rows (Rectangles 70..73)
  [
    { id: 'row-1', x: -3572, y: -885, h: 114 },
    { id: 'row-2', x: -3572, y: -780, h: 114 },
    { id: 'row-3', x: -3572, y: -675, h: 114 },
    { id: 'row-4', x: -3572, y: -570, h: 131 },
  ].forEach((r, idx) => {
    addRect(canvas, {
      id: `active-row-${idx+1}`,
      x: r.x, y: r.y, w: 1253, h: r.h,
      className: 'panel',
      radius: idx === 3 ? 16 : 0
    });
  });

  // Table headings
  addText(canvas, { id: 'th-project', x: -3531, y: -963, w: 198, h: 38, text: 'Project Name', className: 'text-h3 semibold' });
  addText(canvas, { id: 'th-lead',    x: -3286, y: -963, w: 198, h: 38, text: 'Project Lead', className: 'text-h3 semibold' });
  addText(canvas, { id: 'th-progress',x: -3026, y: -963, w: 198, h: 38, text: 'Progress', className: 'text-h3 semibold' });
  addText(canvas, { id: 'th-status',  x: -2725, y: -963, w: 198, h: 38, text: 'Status', className: 'text-h3 semibold' });
  addText(canvas, { id: 'th-due',     x: -2538, y: -963, w: 198, h: 38, text: 'Due Date', className: 'text-h3 semibold' });

  // Row 1 values
  addText(canvas, { id: 'r1-project', x: -3532, y: -847, w: 198, h: 38, text: 'Bender project', className: 'text-body' });
  addText(canvas, { id: 'r1-lead',    x: -3286, y: -847, w: 198, h: 38, text: 'Johnson', className: 'text-body' });
  addRect(canvas, { id: 'r1-progress-bg', x: -3038, y: -836, w: 163, h: 17, className: 'progress', radius: 6 });
  addRect(canvas, { id: 'r1-progress-fill', x: -3038, y: -836, w: 100, h: 17, className: 'progress__fill', radius: 6, style: { position: 'absolute', left: fx(-3038) + 'px', top: fy(-836) + 'px' } });
  addRect(canvas, { id: 'r1-status', x: -2760, y: -850, w: 163, h: 46, className: 'pill', radius: 12, style: { background: 'color-mix(in srgb, var(--accent-blue-500) 22%, transparent)' } });
  addText(canvas, { id: 'r1-status-label', x: -2733, y: -844, w: 109, h: 30, text: 'Inprogress', className: 'text-body semibold' });
  addText(canvas, { id: 'r1-due',     x: -2538, y: -850, w: 198, h: 38, text: '06 Jan 2024', className: 'text-body' });

  // Row 2
  addText(canvas, { id: 'r2-project', x: -3533, y: -734, w: 198, h: 38, text: 'Batman', className: 'text-body' });
  addText(canvas, { id: 'r2-lead',    x: -3286, y: -734, w: 198, h: 38, text: 'William', className: 'text-body' });
  addRect(canvas, { id: 'r2-progress-bg', x: -3038, y: -723, w: 163, h: 17, className: 'progress', radius: 6 });
  addRect(canvas, { id: 'r2-progress-fill', x: -3038, y: -723, w: 44, h: 17, className: 'progress__fill', radius: 6, style: { position: 'absolute', left: fx(-3038) + 'px', top: fy(-723) + 'px' } });
  addRect(canvas, { id: 'r2-status', x: -2760, y: -738, w: 163, h: 46, className: 'pill', radius: 12, style: { background: 'color-mix(in srgb, var(--accent-yellow-500) 28%, transparent)' } });
  addText(canvas, { id: 'r2-status-label', x: -2721, y: -730, w: 84, h: 30, text: 'Pending', className: 'text-body semibold text-pending' });
  addText(canvas, { id: 'r2-due',     x: -2538, y: -740, w: 198, h: 38, text: '06 Jan 2024', className: 'text-body' });

  // Row 3
  addText(canvas, { id: 'r3-project', x: -3534, y: -638, w: 198, h: 38, text: 'Candy', className: 'text-body' });
  addText(canvas, { id: 'r3-lead',    x: -3286, y: -638, w: 198, h: 38, text: 'Paul', className: 'text-body' });
  addRect(canvas, { id: 'r3-progress-bg', x: -3038, y: -627, w: 163, h: 17, className: 'progress', radius: 6 });
  addRect(canvas, { id: 'r3-progress-fill', x: -3038, y: -627, w: 137, h: 17, className: 'progress__fill', radius: 6, style: { position: 'absolute', left: fx(-3038) + 'px', top: fy(-627) + 'px' } });
  addRect(canvas, { id: 'r3-status', x: -2760, y: -642, w: 163, h: 46, className: 'pill', radius: 12, style: { background: 'color-mix(in srgb, var(--accent-green-500) 28%, transparent)' } });
  addText(canvas, { id: 'r3-status-label', x: -2736, y: -633, w: 115, h: 30, text: 'Completed', className: 'text-body semibold text-complete' });
  addText(canvas, { id: 'r3-due',     x: -2538, y: -637, w: 198, h: 38, text: '30 Jan 2024', className: 'text-body' });

  // Row 4
  addText(canvas, { id: 'r4-project', x: -3535, y: -520, w: 198, h: 38, text: 'Throwing', className: 'text-body' });
  addText(canvas, { id: 'r4-lead',    x: -3286, y: -520, w: 198, h: 38, text: 'Ellisebeth', className: 'text-body' });
  addRect(canvas, { id: 'r4-progress-bg', x: -3038, y: -509, w: 163, h: 17, className: 'progress', radius: 6 });
  addRect(canvas, { id: 'r4-progress-fill', x: -3038, y: -509, w: 88, h: 17, className: 'progress__fill', radius: 6, style: { position: 'absolute', left: fx(-3038) + 'px', top: fy(-509) + 'px' } });
  addRect(canvas, { id: 'r4-status', x: -2760, y: -524, w: 163, h: 46, className: 'pill', radius: 12, style: { background: 'color-mix(in srgb, var(--accent-blue-500) 22%, transparent)' } });
  addText(canvas, { id: 'r4-status-label', x: -2736, y: -517, w: 109, h: 30, text: 'Inprogress', className: 'text-body semibold' });
  addText(canvas, { id: 'r4-due',     x: -2538, y: -521, w: 198, h: 38, text: '11  Jan 2024', className: 'text-body' });

  // Right column panels (Events and All Projects) - shell rectangles only for brevity
  addRect(canvas, { id: 'events-panel', x: -2268, y: -1562, w: 777, h: 743, className: 'panel' });
  addText(canvas, { id: 'events-title', x: -2218, y: -1532, w: 151, h: 68, text: 'Events', className: 'text-h1 bold' });

  addRect(canvas, { id: 'all-projects-panel', x: -2266, y: -775, w: 769, h: 336, className: 'panel' });
  addText(canvas, { id: 'all-projects-title', x: -1968, y: -719, w: 196, h: 53, text: 'All Projects', className: 'text-h2 semibold' });
  // Simple donut proxy at (ellipse 31..34)
  addRect(canvas, { id: 'all-projects-donut-bg', x: -2228, y: -718, w: 221, h: 221, className: '', radius: 999, style: { background: 'transparent', border: '18px solid var(--ocean-surface-muted)' } });
  addText(canvas, { id: 'all-projects-center', x: -2188, y: -654, w: 141, h: 92, text: '62\nComplete', className: 'text-h2 bold center' });

  // Small decorative/auxiliary icon (placeholder)
  addImage(canvas, {
    id: 'dollar-icon',
    x: -2660, y: -1748, w: 41, h: 41,
    src: '/assets/figmaimages/figma_image_0_69.png',
    alt: 'dollar'
  });
}

/* Scale canvas to fit viewport width without exceeding 1.0 scale */
function applyScale() {
  const wrapper = document.getElementById('canvas-wrapper');
  if (!wrapper) return;
  const canvasWidth = FIGMA_ROOT.width;
  const viewportWidth = Math.max(320, window.innerWidth - 32);
  const scale = Math.min(1, viewportWidth / canvasWidth);
  wrapper.style.transform = `scale(${scale})`;
}

/* Init */
window.addEventListener('DOMContentLoaded', () => {
  render();
  applyScale();
});
window.addEventListener('resize', applyScale);
