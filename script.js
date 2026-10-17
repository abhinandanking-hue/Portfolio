const contentGrid = document.querySelector('.content-grid');
const previousColumnButton = document.getElementById('previousColumn');
const nextColumnButton = document.getElementById('nextColumn');

if (contentGrid && previousColumnButton && nextColumnButton) {
  const updateColumnControls = () => {
    previousColumnButton.disabled = contentGrid.scrollLeft <= 0;
    nextColumnButton.disabled =
      contentGrid.scrollLeft + contentGrid.clientWidth >= contentGrid.scrollWidth - 1;
  };

  previousColumnButton.addEventListener('click', () => {
    contentGrid.scrollBy({ left: -contentGrid.clientWidth * 0.8, behavior: 'smooth' });
  });

  nextColumnButton.addEventListener('click', () => {
    contentGrid.scrollBy({ left: contentGrid.clientWidth * 0.8, behavior: 'smooth' });
  });

  contentGrid.addEventListener('scroll', updateColumnControls, { passive: true });
  window.addEventListener('resize', updateColumnControls);
  updateColumnControls();
}

const projectCards = [...document.querySelectorAll('.project-card')];
const projectDialogBackdrop = document.getElementById('projectDialogBackdrop');
const projectDialog = document.getElementById('projectDialog');
const projectDialogContent = document.getElementById('projectDialogContent');
const workPanel = projectDialogBackdrop?.closest('.work-panel');
const imageViewerBackdrop = document.getElementById('imageViewerBackdrop');
const imageViewer = document.getElementById('imageViewer');
const viewerImage = imageViewer?.querySelector('.viewer-image');
const viewerCaption = imageViewer?.querySelector('.viewer-caption');
const viewerCount = imageViewer?.querySelector('.viewer-count');

const projectDetails = [
  {
    description: 'I led a 22-month enterprise UX transformation, aligning governance and a shared design system across 10 Shell applications.',
    company: 'Shell — Upstream Digital',
    context: 'Enterprise UX transformation',
    year: '2022–2023',
    contribution: 'Principal UX Designer & DesignOps Lead; UX strategy, governance, and design system',
    tools: 'Figma, Pega, Storybook',
    slideDeck: true,
    images: [
      ['./assets/shell-01.png', 'I led a 22-month enterprise UX transformation, aligning governance and a shared design system across 10 Shell applications.'],
      ['./assets/shell-02.png', 'Fragmented workflows, legacy platforms, and missing standards drove 47 inconsistencies and only 22% accessibility compliance.'],
      ['./assets/shell-03.png', 'I owned UX strategy, governance, and DesignOps, grew the team from two to six, and aligned 12+ business leaders.'],
      ['./assets/shell-04.png', 'I sequenced the work across trust, UX audit, governance, design-system development, and platform modernization.'],
      ['./assets/shell-05.png', 'I audited all 10 applications through heuristic evaluation, component inventory, and accessibility review to establish priorities.'],
      ['./assets/shell-06.png', 'I established review gates, a cross-functional governance board, and a 50-page UX handbook to guide adoption.'],
      ['./assets/shell-07.png', 'I delivered 64 production components with Figma, Storybook documentation, design tokens, and automated accessibility testing.'],
      ['./assets/shell-08.png', 'I redesigned a 14-step well-planning workflow into five stages, reducing cycle time 42% and data-entry errors 80%.'],
      ['./assets/shell-09.png', 'The program reported consistency rising from 28% to 85%, accessibility compliance from 22% to 95%, and NPS up 32 points.'],
      ['./assets/shell-10.png', 'The governance framework and design system remain in use, supporting new applications and platform upgrades at Shell.']
    ]
  },
  {
    description: 'A web-based platform concept to help service teams coordinate vehicle jobs, engineer assignments, inspections, and service progress.',
    company: 'ABN Car Care Center',
    context: 'The project explored how to improve a service process involving paper-based job sheets, manual updates, and limited visibility into job status.',
    year: '2021',
    contribution: 'Research, workflow mapping, persona and empathy mapping, information architecture, wireframes, and low- and high-fidelity prototypes.',
    tools: 'Figma, Microsoft Forms, Chrome, Google Sheets, Microsoft Teams',
    images: [
      ['./assets/car-care/image01.png', 'I used the Double Diamond process to move from understanding service challenges to developing and refining design solutions.'],
      ['./assets/car-care/image02.png', 'Research with service engineers and managers highlighted gaps in job tracking, quality checks, and customer updates.'],
      ['./assets/car-care/image03.png', 'Mapping the existing process revealed manual handoffs, paper-based records, and limited visibility into job progress.'],
      ['./assets/car-care/image04.png', 'The manager persona helped ground design decisions in the needs of someone coordinating service jobs, staff, approvals, and escalations.'],
      ['./assets/car-care/image05.png', 'The empathy map highlighted the need for clearer job visibility, faster updates, and more consistent service coordination.'],
      ['./assets/car-care/image06.png', 'I organized the platform around service oversight, fleet and staff management, safety, and customer communication.'],
      ['./assets/car-care/image07.png', 'The task-board wireframe groups work by progress stage, helping managers scan assignments and follow service jobs.'],
      ['./assets/car-care/image08.png', 'The inspection concept lets engineers document vehicle checks visually, supporting a clearer service record.'],
      ['./assets/car-care/image09.png', 'The dashboard brings service activity, customer visits, completed jobs, and escalations together for a quick overview.'],
      ['./assets/car-care/image10.png', 'The service timeline presents job milestones and updates, making progress easier for customers and staff to follow.']
    ]
  },
  {
    description: 'I designed a food app to help travelers and foodies discover trusted local restaurants, understand food choices, and personalize meals to suit their preferences.',
    company: 'Accenture',
    context: 'Finding a good meal involves more than taste. Diners also want reliable information, nutrition details, convenience, and a positive experience—especially when they are new to a city or managing dietary preferences.',
    year: '2015',
    contribution: 'Research, competitor analysis, personas, empathy mapping, workflows, wireframes, high-fidelity designs, and prototypes',
    tools: 'Microsoft Excel, Skype, Microsoft Word, Microsoft PowerPoint, Adobe Creative Cloud, and InVision',
    images: [
      ['./assets/best-food/Image01.png', 'I used an iterative Lean UX approach to explore diner needs, shape ideas, and refine the experience through prototyping and testing.'],
      ['./assets/best-food/Image02.png', 'Responses from 200 participants highlighted the value of trustworthy food information, healthier choices, customization, and travel support.'],
      ['./assets/best-food/Image03.png', 'The competitor review helped identify opportunities to make restaurant discovery and meal selection more useful to diners.'],
      ['./assets/best-food/Image05.png', 'Alice represents diners looking for food choices that fit their health goals and busy routines.'],
      ['./assets/best-food/Image06.png', 'The empathy map helped connect Alice’s concerns with opportunities to make food choices feel clearer and more trustworthy.'],
      ['./assets/best-food/Image08.png', 'I sketched an early browsing layout to explore how diners could scan and compare food options.'],
      ['./assets/best-food/Image09.png', 'The discovery screen brings nearby restaurants and food options together to support choosing where to eat.'],
      ['./assets/best-food/Image10.png', 'The menu experience brings dish details and meal choices together to support more personalized ordering.'],
      ['./assets/best-food/Image11.png', 'The mobile menu view adapts food browsing and selection for diners on smaller screens.'],
      ['./assets/best-food/Image12.png', 'I connected key screens in a prototype flow to explore the journey from restaurant discovery toward ordering.']
    ]
  },
];

let activeProjectIndex = -1;
let activeImageIndex = 0;
let returnFocusElement = null;
let projectCloseTimeout = 0;

const renderProject = (index) => {
  const card = projectCards[index];
  const details = projectDetails[index];
  if (!card || !details || !projectDialogContent) return;

  activeProjectIndex = index;
  const title = card.querySelector('.project-title')?.textContent.trim() || 'Project details';
  const detailRows = [
    ['Company', details.company],
    ['Context', details.context],
    ['Year', details.year],
    ['Contribution', details.contribution],
    ['Tools', details.tools]
  ];
  if (details.link) {
    detailRows.push(['Link', `<a href="${details.link[1]}" target="_blank" rel="noreferrer">${details.link[0]}</a>`]);
  }
  const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);

  projectDialogContent.innerHTML = `
    <h2 id="projectDialogTitle">${escapeHtml(title)}</h2>
    <p class="project-dialog-description">${escapeHtml(details.description)}</p>
    <dl class="project-details">
      ${detailRows.map(([label, value]) => `<div class="project-detail"><dt>${escapeHtml(label)}</dt><dd>${label === 'Link' ? value : escapeHtml(value)}</dd></div>`).join('')}
    </dl>
    <h3>Selected work</h3>
    <div class="detail-gallery${details.slideDeck ? ' is-slide-deck' : ''}">
      ${details.images.map(([src, caption], imageIndex) => `
        <button class="detail-image-button" type="button" data-image-index="${imageIndex}" aria-label="Expand image ${imageIndex + 1}: ${escapeHtml(caption)}">
          <img src="${src}" alt="${escapeHtml(caption)}" loading="lazy" />
          <span>${escapeHtml(caption)}</span>
        </button>
      `).join('')}
    </div>`;
  projectDialogContent.scrollTop = 0;
}

const openProject = (index, sourceCard) => {
  if (!projectDialogBackdrop || !projectDialog) return;
  window.clearTimeout(projectCloseTimeout);
  returnFocusElement = sourceCard || projectCards[index];
  renderProject(index);
  projectDialogBackdrop.hidden = false;
  workPanel?.classList.add('project-open');
  void projectDialog.offsetHeight;
  projectDialogBackdrop.classList.add('is-open');
  document.querySelector('.project-dialog .dialog-close')?.focus();
}

const closeProject = () => {
  if (!projectDialogBackdrop) return;
  projectDialogBackdrop.classList.remove('is-open');
  activeProjectIndex = -1;
  const finishClose = () => {
    if (projectDialogBackdrop.classList.contains('is-open')) return;
    projectDialogBackdrop.hidden = true;
    workPanel?.classList.remove('project-open');
    returnFocusElement?.focus();
  };
  projectCloseTimeout = window.setTimeout(finishClose, 460);
}

projectDialog?.addEventListener('transitionend', (event) => {
  if (event.target === projectDialog && event.propertyName === 'transform') {
    window.clearTimeout(projectCloseTimeout);
    if (!projectDialogBackdrop?.classList.contains('is-open')) {
      projectDialogBackdrop.hidden = true;
      workPanel?.classList.remove('project-open');
      returnFocusElement?.focus();
    }
  }
});

const renderViewerImage = () => {
  const images = projectDetails[activeProjectIndex]?.images;
  if (!images?.length || !viewerImage || !viewerCaption || !viewerCount) return;
  const [src, caption] = images[activeImageIndex];
  viewerImage.src = src;
  viewerImage.alt = caption;
  viewerCaption.textContent = caption;
  viewerCount.textContent = `${activeImageIndex + 1} / ${images.length}`;
}

const openImageViewer = (index) => {
  if (!imageViewerBackdrop || !imageViewer) return;
  activeImageIndex = index;
  renderViewerImage();
  imageViewerBackdrop.hidden = false;
  imageViewer.querySelector('.viewer-close')?.focus();
}

const closeImageViewer = () => {
  if (!imageViewerBackdrop) return;
  imageViewerBackdrop.hidden = true;
  projectDialogContent?.querySelector(`[data-image-index="${activeImageIndex}"]`)?.focus();
}

const moveImage = (step) => {
  const images = projectDetails[activeProjectIndex]?.images;
  if (!images?.length) return;
  activeImageIndex = (activeImageIndex + step + images.length) % images.length;
  renderViewerImage();
}

projectCards.forEach((card, index) => {
  card.addEventListener('click', () => openProject(index, card));
  card.addEventListener('keydown', (event) => {
    if (event.target !== card || !['Enter', ' '].includes(event.key)) return;
    event.preventDefault();
    openProject(index, card);
  });
});

projectDialogBackdrop?.querySelector('.dialog-close')?.addEventListener('click', closeProject);
projectDialogBackdrop?.querySelector('.close-project-button')?.addEventListener('click', closeProject);
projectDialogBackdrop?.querySelector('.previous-project')?.addEventListener('click', () => {
  renderProject((activeProjectIndex - 1 + projectCards.length) % projectCards.length);
});
projectDialogBackdrop?.querySelector('.next-project')?.addEventListener('click', () => {
  renderProject((activeProjectIndex + 1) % projectCards.length);
});
projectDialogBackdrop?.addEventListener('click', (event) => {
  if (event.target === projectDialogBackdrop) closeProject();
});
projectDialogContent?.addEventListener('click', (event) => {
  const imageButton = event.target.closest('[data-image-index]');
  if (imageButton) openImageViewer(Number(imageButton.dataset.imageIndex));
});

imageViewerBackdrop?.querySelector('.viewer-close')?.addEventListener('click', closeImageViewer);
imageViewerBackdrop?.querySelector('.viewer-previous')?.addEventListener('click', () => moveImage(-1));
imageViewerBackdrop?.querySelector('.viewer-next')?.addEventListener('click', () => moveImage(1));
imageViewerBackdrop?.addEventListener('click', (event) => {
  if (event.target === imageViewerBackdrop) closeImageViewer();
});

document.addEventListener('keydown', (event) => {
  const trapFocus = (container) => {
    const focusable = [...container.querySelectorAll(
      'a[href], button:not(:disabled), [tabindex]:not([tabindex="-1"])'
    )].filter((element) => element.getClientRects().length);
    if (!focusable.length || event.key !== 'Tab') return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  if (!imageViewerBackdrop?.hidden) {
    if (event.key === 'Escape') closeImageViewer();
    if (event.key === 'ArrowLeft') moveImage(-1);
    if (event.key === 'ArrowRight') moveImage(1);
    trapFocus(imageViewer);
    return;
  }
  if (projectDialogBackdrop?.hidden) return;
  if (event.key === 'Escape') {
    closeProject();
  } else if (event.key === 'ArrowLeft') {
    renderProject((activeProjectIndex - 1 + projectCards.length) % projectCards.length);
  } else if (event.key === 'ArrowRight') {
    renderProject((activeProjectIndex + 1) % projectCards.length);
  }
  trapFocus(projectDialog);
});
