window.addEventListener("DOMContentLoaded", function(){
    document.body.addEventListener('scroll', (e) => {
        let scrollTop = e.target.scrollTop;
        if(scrollTop > 20) {
            e.target.classList.add('scroll');
        } else {
            e.target.classList.remove('scroll');
        }
    });
});