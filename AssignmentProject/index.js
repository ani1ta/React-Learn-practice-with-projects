const timelineMindmap = document.getElementById('timelineMindmap');
const detailsPanel = document.getElementById('detailsPanel');

timelineMindmap.addEventListener('mouseover', (event) => {
  const target = event.target;
  if (target.classList.contains('sub-sub-phase')) {
    const phase = target.closest('.phase').dataset.phase;
    const subPhase = target.closest('.sub-phase').dataset.subPhase;
    const subSubPhase = target.dataset.subSubPhase;
    detailsPanel.textContent = `Phase: ${phase}, Sub-Phase: ${subPhase}, Sub-Sub-Phase: ${subSubPhase}`;
  }
});

timelineMindmap.addEventListener('mouseout', () => {
  detailsPanel.textContent = 'Details Panel';
});
