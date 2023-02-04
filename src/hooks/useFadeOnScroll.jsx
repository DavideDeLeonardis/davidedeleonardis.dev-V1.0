const useFadeOnScroll = (classToAdd, removeClass = false) => {
   // Add or remove css class when user visually intersect an element in the page

   let observer = new IntersectionObserver(
      (items) => {
         items.forEach(({ isIntersecting, target }) => {
            if (isIntersecting) target.classList.add(classToAdd);
            if (!isIntersecting && removeClass)
               target.classList.remove(classToAdd);
         });
      },
      { threshold: 0.25 }
   );

   document
      .querySelectorAll('.watch')
      .forEach((element) => observer.observe(element));
};

export default useFadeOnScroll;
