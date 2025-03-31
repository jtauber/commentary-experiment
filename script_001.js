document.addEventListener('DOMContentLoaded', () => {
  const refs = document.querySelectorAll('.ref');
  const lemmas = document.querySelectorAll('.lemma');

  refs.forEach(ref => {
    ref.addEventListener('click', function() {
      const refId = this.getAttribute('data-ref');
      const targetComment = document.getElementById(refId);
      
      if (targetComment) {
        if (targetComment.classList.contains('show')) {
          targetComment.classList.remove('show');
          this.classList.remove('active');
        } else {
          ref.classList.add('active');
          targetComment.classList.add('show');
          targetComment.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  });
});