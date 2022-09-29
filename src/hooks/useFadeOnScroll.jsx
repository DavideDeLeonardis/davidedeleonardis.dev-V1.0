const useFadeOnScroll = (classToAdd) => {
   const callback = (items) => {
      items.forEach((item) => {
         if (item.isIntersecting) item.target.classList.add(classToAdd);
         else item.target.classList.remove(classToAdd);
      });
   };

   let observer = new IntersectionObserver(callback, { threshold: 0.25 });

   document
      .querySelectorAll('.watch')
      .forEach((element) => observer.observe(element));
};

export default useFadeOnScroll;
