// Define virtual page paths
const sectionPages = {
  home: '/home',
  about: '/about',
  services: '/services',
  contact: '/contact'
};

// Send virtual page view to GA4
function sendVirtualPageView(sectionId) {
  const path = sectionPages[sectionId];
  gtag('event', 'page_view', {
    page_path: path,
    page_title: sectionId.charAt(0).toUpperCase() + sectionId.slice(1)
  });
}

// Observe section changes using IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sendVirtualPageView(entry.target.id);
      }
    });
  },
  {
    threshold: 0.6
  }
);

// Track each section
document.querySelectorAll('section').forEach((section) => {
  observer.observe(section);
});
