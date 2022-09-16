import { useTranslation } from 'react-i18next';

const useProjects = () => {
   const { t } = useTranslation();

   return [
      {
         // deliveboo
         id: 480318106,
         name: 'Deliveboo',
         image: require('../images/projects/deliveboo.png'),
         description: t('main_projects.deliveboo.short_d'),
         long_description: t('main_projects.deliveboo.long_d'),
         topics: ['vuejs', 'laravel', 'mysql', 'authentication', 'scss'],
         language: 'PHP',
         url: 'https://lit-atoll-37130.herokuapp.com',
         github_url: 'https://github.com/DavideDeLeonardis/deliveboo',
         isFeatured: true,
         isMain: true,
      },
      {
         // laravel-boolpress
         id: 464647959,
         name: 'Laravel Boolpress',
         image: require('../images/projects/boolpress.png'),
         description: t('main_projects.boolpress.short_d'),
         long_description: t('main_projects.boolpress.long_d'),
         topics: ['vuejs', 'laravel', 'mysql', 'authentication', 'scss'],
         language: 'PHP',
         url: 'https://limitless-basin-36680.herokuapp.com',
         github_url: 'https://github.com/DavideDeLeonardis/laravel-boolpress',
         isFeatured: false,
         isMain: true,
      },
      {
         // vue-netflix
         id: 449656740,
         name: 'Vue Netflix',
         image: require('../images/projects/vue-netflix.png'),
         description: t('main_projects.netflix.short_d'),
         long_description: t('main_projects.netflix.long_d'),
         topics: ['vuejs', 'scss', 'API'],
         language: 'Vue',
         url: 'https://vue-boolflix.web.app',
         github_url: 'https://github.com/DavideDeLeonardis/vue-netflix',
         isFeatured: false,
         isMain: true,
      },
      {
         // portfolio V-1.0
         id: 521026706,
         name: 'DavideDeLeonardis.dev V1.0',
         image: require('../images/projects/portfolio-v1.0.png'),
         description: t('other_projects.portfolio_d'),
         long_description: null,
         topics: ['react', 'custom-hooks', 'scss', 'portfolio'],
         language: 'React',
         url: null,
         github_url:
            'https://github.com/DavideDeLeonardis/davidedeleonardis.dev-V1.0',
         isFeatured: false,
         isMain: false,
      },
      {
         // react-amazon
         id: 497369439,
         name: 'React Amazon',
         image: require('../images/projects/react-amazon.png'),
         description: '',
         long_description: '',
         topics: [],
         language: 'React',
         url: '',
         github_url: '',
         isFeatured: false,
         isMain: false,
      },
      {
         // react-auth-test
         id: 507615722,
         name: 'React Auth',
         image: require('../images/projects/react-auth-test.png'),
         description: '',
         long_description: '',
         topics: [],
         language: 'React',
         url: '',
         github_url: '',
         isFeatured: false,
         isMain: false,
      },
      {
         // vue-boolzapp
         id: 440119535,
         name: 'Vue Boolzapp',
         image: require('../images/projects/vue-boolzapp.png'),
         description: '',
         long_description: '',
         topics: [],
         language: 'Vue',
         url: '',
         github_url: '',
         isFeatured: false,
         isMain: false,
      },
      {
         // vue-instagram
         id: 507411259,
         name: 'Vue Instagram',
         image: require('../images/projects/vue-instagram.png'),
         description: '',
         long_description: '',
         topics: [],
         language: 'Vue',
         url: '',
         github_url: '',
         isFeatured: false,
         isMain: false,
      },
      {
         // proj-vuejs
         id: 451409349,
         name: 'Avada Consultant',
         image: require('../images/projects/vue-proj-vuejs.png'),
         description: '',
         long_description: '',
         topics: [],
         language: 'Vue',
         url: '',
         github_url: '',
         isFeatured: false,
         isMain: false,
      },
      {
         // minefield-game
         id: 434247273,
         name: 'Minefield game',
         image: require('../images/projects/minefield-game.png'),
         description: '',
         long_description: '',
         topics: [],
         language: 'JavaScript',
         url: '',
         github_url: '',
         isFeatured: false,
         isMain: false,
      },
      {
         // laravel-comics
         id: 458602990,
         name: 'Laravel Comics',
         image: require('../images/projects/laravel-comics.png'),
         description: '',
         long_description: '',
         topics: [],
         language: 'Laravel',
         url: '',
         github_url: '',
         isFeatured: false,
         isMain: false,
      },
   ];
};

export default useProjects;
