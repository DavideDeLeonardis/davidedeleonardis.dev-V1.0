const useFadeOnScroll = (classToAdd, removeClass = false) => {
   const callback = (items) => {
      items.forEach((item) => {
         if (item.isIntersecting) item.target.classList.add(classToAdd);
         if (!item.isIntersecting && removeClass)
            item.target.classList.remove(classToAdd);
      });
   };

   let observer = new IntersectionObserver(callback, { threshold: 0.25 });

   document
      .querySelectorAll('.watch')
      .forEach((element) => observer.observe(element));
};

export default useFadeOnScroll;
