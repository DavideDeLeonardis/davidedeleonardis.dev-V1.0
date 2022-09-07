import Heading from '../ui/Heading';
import Slider3d from './Slider-3d';
import profileImage from '../../assets/images/profile.jpg';

import classes from './index.module.scss';

const About = () => {
   return (
      <section id="about" className={classes.about}>
         <Heading heading={'About Me'} h1ClassName={classes.h1Main} />
         <div className={classes['container']}>
            <div className={classes['content']}>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione sunt inventore aperiam harum alias voluptatum repellat
                  quas soluta excepturi iure necessitatibus laborum cupiditate
                  aliquam, quis placeat fugiat. Nobis, ullam. Explicabo eaque
                  architecto quasi, qui assumenda doloremque asperiores
                  repellendus sapiente iure sunt, quos numquam libero rem
                  officiis, minima omnis praesentium pariatur. Accusamus libero
                  soluta enim adipisci possimus porro, in exercitationem
                  corrupti. Nihil voluptatum sint doloribus veritatis vel!
                  Fugiat tempora consectetur aperiam adipisci, non atque
                  voluptatibus quas labore deleniti quibusdam, quia sit!
                  Veritatis esse a odit, necessitatibus exercitationem incidunt
                  dicta! Voluptatem ad praesentium ut temporibus magni
                  consequuntur eligendi voluptatibus vitae maxime deleniti totam
                  dolore commodi quia, aspernatur asperiores quaerat veritatis,
                  pariatur illo ab, repellendus minima. Quidem labore corporis
                  cupiditate sequi laudantium impedit exercitationem
                  consequuntur eligendi voluptatibus vitae maxime deleniti totam
                  dolore commodi quia, aspernatur asperiores quaerat veritatis,
                  pariatur illo ab, repellendus minima. Quidem labore corporis
                  cupiditate sequi laudantium impedit exercitationem ù
                  consequuntur eligendi voluptatibus vitae maxime deleniti totam
                  dolore commodi quia, aspernatur asperiores quaerat veritatis,
                  pariatur illo ab, repellendus minima
               </p>
               <div className={classes['slider-container']}>
                  <Slider3d />
               </div>
            </div>
            <div className={classes['img-container']}>
               <img src={profileImage} alt="Profile" />
            </div>
         </div>
      </section>
   );
};

export default About;
