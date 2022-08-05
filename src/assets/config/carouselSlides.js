import { repos } from "./repos";

/* Add images in carousel:
		INSERT REPO NAME IN favourites 
		ADD images[i] AT THE END IN export slides
*/

const favourites = [
   { name: "deliveboo" },
   { name: "laravel-boolpress" },
   { name: "react-amazon" },
   { name: "vue-netflix" },
];

const findImageOfFavourites = () => {
   let images = [];

   favourites.forEach((favourite) => {
      for (let index = 0; index < repos.length; index++) {
         const repo = repos[index];
         if (favourite.name === repo.name) {
            images.push({ image: repo.imageHorizontal, name: repo.name });
         }
      }
   });

   return images;
};

const images = findImageOfFavourites().map((image, index) => (
   <div className="carousel-img-container">
      <a key={index} href="/">
         <img
            src={image.image}
            alt={`${
               image.name.charAt(0).toUpperCase() + image.name.slice(1)
            } from Davide De Leonardis`}
         />
      </a>
   </div>
));

export const slides = [images[0], images[1], images[2], images[3]];
