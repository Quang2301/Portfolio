document.addEventListener('DOMContentLoaded', function () {
  function smoothScrollTo(targetY, duration = 1200) {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, startY + distance * progress);
      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }
    requestAnimationFrame(animation);
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
          smoothScrollTo(targetPosition, 1200); // 1200ms for slower scroll
        }
      }
    });
  });
});

<img src="Asset/268254576_13NHA_CHUQuang_020-Copy-1.jpg" alt="Quang Chu" />
