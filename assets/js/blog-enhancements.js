// Reading Progress Bar
document.addEventListener('DOMContentLoaded', function() {
  // Create progress bar
  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress';
  document.body.insertBefore(progressBar, document.body.firstChild);
  
  // Update progress on scroll
  window.addEventListener('scroll', function() {
    const article = document.querySelector('.post-content');
    if (!article) return;
    
    const articleHeight = article.offsetHeight;
    const articleTop = article.offsetTop;
    const articleBottom = articleTop + articleHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;
    
    // Calculate how much of the article has been read
    const articleStart = articleTop - windowHeight;
    const articleEnd = articleBottom;
    const totalReadableHeight = articleEnd - articleStart;
    const readProgress = (scrollTop - articleStart) / totalReadableHeight;
    
    // Update progress bar width
    const progressPercentage = Math.max(0, Math.min(100, readProgress * 100));
    progressBar.style.width = progressPercentage + '%';
  });
  
  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});