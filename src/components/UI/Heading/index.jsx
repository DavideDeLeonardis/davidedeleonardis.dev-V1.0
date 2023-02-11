// SCSS
import classes from './index.module.scss';

const Heading = ({
   heading,
   h1ClassName,
   subheading,
   pClassName,
   sub_subheading,
}) => {
   return (
      <>
         <h1 className={`${classes['heading-h1']} ${h1ClassName}`}>
            {heading}
         </h1>
         <p className={`${classes['heading-p']} ${pClassName}`}>
            {subheading}
            {sub_subheading && (
               <>
                  <br />
                  {sub_subheading}
               </>
            )}
         </p>
      </>
   );
};

export default Heading;
