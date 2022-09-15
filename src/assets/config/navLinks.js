import { useTranslation } from 'react-i18next';

export const useNavTranslate = () => {
   const { t } = useTranslation();

   return [
      {
			id: 1,
         to: 'about',
         linkName: 'About Me',
      },
      {
			id: 2,
         to: 'projects',
         linkName: t('header.projects'),
      },
      // {
		//		id: 3,
      //    to: '#experience',
      //    linkName: 'Experience',
      // },
      {
			id: 4,
         to: 'contact',
         linkName: t('header.contact'),
      },
   ];
};
