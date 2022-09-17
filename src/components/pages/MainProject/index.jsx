import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

import Button from '../../ui/Button';
import default_image from '../../../assets/images/default.png';

import classes from './index.module.scss';

const Project = () => {
   const { state: project, pathname } = useLocation();
   const navigate = useNavigate();
   const { t } = useTranslation();

   useEffect(() => {
      if (project === null) navigate('/');
      window.scrollTo(0, 0);
   }, [project, navigate, pathname]);

   return (
      project && (
         <>
            <div
               className={classes.container}
               style={{
                  backgroundImage: `url('${project.image || default_image}')`,
               }}
            >
               <div className={classes.content}>
                  <h1>{project.name}</h1>
                  <p>{project.long_description}</p>
               </div>
            </div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            a sunt porro necessitatibus, eum inventore in reiciendis animi
            dolorum pariatur. Placeat ea ut amet alias perferendis reprehenderit
            est quisquam beatae obcaecati et harum, ad dolore voluptate expedita
            minima illo error nobis quae vero dignissimos voluptatibus vel qui
            dolor! Fugit deserunt repudiandae sed incidunt! Dolores maiores ea,
            nemo atque ratione aliquam. Doloribus debitis maiores tempore itaque
            omnis? Dolorum ut, odio placeat odit ullam hic sit error doloribus
            architecto. Quasi enim similique magnam quibusdam corrupti sit
            suscipit porro? Tenetur architecto aliquam earum iste. Quos possimus
            a doloremque nesciunt, quasi ab distinctio, tempore fugiat error
            dolore debitis? Iste deleniti, reprehenderit necessitatibus
            inventore quaerat natus tempora pariatur iure dicta quod doloremque
            maiores consectetur amet! Sequi vero architecto dicta, saepe quasi
            ducimus alias error ut perspiciatis rem est velit eligendi nesciunt
            quae dolore nobis officiis ipsum incidunt suscipit soluta, eveniet
            praesentium ex omnis adipisci! Reprehenderit ipsa aut dicta dolore
            minus quia tempore asperiores deleniti nisi vel explicabo, cum
            repellendus saepe animi nesciunt id odio beatae in tenetur ad ex
            nulla maiores aliquam? Totam exercitationem nobis accusamus, esse
            aliquam repellat laudantium autem modi labore at aliquid beatae
            consequuntur inventore nesciunt maxime fugit repellendus saepe
            debitis repudiandae recusandae. Hic assumenda deleniti magnam odit
            rem! Accusamus sapiente sit ullam consequuntur atque suscipit alias
            facere magni ab soluta minus blanditiis temporibus illum odit hic
            qui sint consectetur officiis veniam harum, fugit ipsum magnam optio
            voluptatibus! Modi neque debitis delectus pariatur similique officia
            hic quisquam illo architecto necessitatibus, sequi facilis iure
            iusto molestias reprehenderit voluptate, dolorem fuga saepe
            assumenda, vero sint! Officia, magni voluptatibus? Architecto quae
            ducimus ullam eos repellat saepe officia. Similique totam nemo
            officia eveniet aperiam. Aspernatur voluptatibus sequi sit? Voluptas
            iste odio, molestiae maxime alias sed numquam praesentium recusandae
            voluptatum id odit harum quasi temporibus officiis exercitationem
            accusantium quas illo corporis cumque reprehenderit neque nulla quam
            ex aperiam! Molestias enim in autem doloribus fuga molestiae quas
            modi dolores aperiam nihil provident cum, expedita natus illo quasi
            rem. Quos velit, enim doloremque voluptatibus doloribus sunt fugiat
            ducimus maxime officia quis eligendi veritatis nobis magni totam
            exercitationem nihil sit alias sapiente beatae. Deleniti nam
            perferendis ratione repellat veritatis quisquam fugiat quasi, atque
            velit, officiis impedit praesentium vero. Non excepturi, dolore
            natus minima fugit dignissimos recusandae nostrum ab harum ut quam
            quis ex assumenda hic minus consectetur? Obcaecati, eveniet quasi.
            Maiores officia qui odio veniam iure natus commodi exercitationem.
            Facilis!
            <HashLink to="/#projects">
               <Button>{t('main_projects.go_back')}</Button>
            </HashLink>
         </>
      )
   );
};

export default Project;
