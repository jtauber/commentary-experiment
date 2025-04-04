console.log("PAGE RELOADED")
document.addEventListener('DOMContentLoaded', () => {
  const refs = document.querySelectorAll('.ref');
  const lemmas = document.querySelectorAll('.lemma');
  const tooltips = document.querySelectorAll('.irr-anchor');

  tooltips.forEach(tooltip => {
    tooltip.addEventListener('mouseover', function(){
      console.log(this.getAttribute('id'));
    });
  });

  refs.forEach(ref => {
    
    ref.addEventListener('click', function() {
      const refId = this.getAttribute('data-ref');
      const targetComment = document.getElementById(refId); 
      var text = this.innerHTML;
      
      refs.forEach(ref => { 
        const refId = ref.getAttribute('data-ref');
        const targetComment = document.getElementById(refId);
        
        if (ref.innerHTML.indexOf(text) == -1 && text.indexOf(ref.innerHTML) == -1) {
          targetComment.classList.remove('show');
          ref.classList.remove('active');
        } 
      })

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