(() => {
  const cfg = window.PORTFOLIO_CONFIG || {};
  const name = cfg.name || "Marec Metzger";
  const email = cfg.email || "marecmetzger@icloud.com";
  const location = cfg.location || "Germany · Remote";
  const languages = cfg.languages || "German & English";

  document.querySelectorAll('[data-name]').forEach(el => el.textContent = name);
  document.querySelectorAll('[data-email]').forEach(el => el.textContent = email);
  document.querySelectorAll('[data-location]').forEach(el => el.textContent = location);
  document.querySelectorAll('[data-languages]').forEach(el => el.textContent = languages);
  document.querySelectorAll('[data-email-link]').forEach(el => el.href = `mailto:${email}`);

  document.title = `${name} — Gaming Short-Form Video Editor`;
  document.getElementById('year').textContent = new Date().getFullYear();

  // Keep only one portfolio video playing at a time.
  const videos = [...document.querySelectorAll('video')];
  videos.forEach(video => {
    video.addEventListener('play', () => {
      videos.forEach(other => { if (other !== video && !other.paused) other.pause(); });
    });
  });
})();
