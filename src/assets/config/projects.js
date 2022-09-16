import { useTranslation } from 'react-i18next';

const useProjects = () => {
   const { t } = useTranslation();

   return [
      {
         // deliveboo
         id: 480318106,
         name: 'Deliveboo',
         image: require('../images/projects/deliveboo.png'),
         description: t('projects.deliveboo.short_d'),
         long_description: t('projects.deliveboo.long_d'),
         topics: [
            'Laravel',
            'Blade',
            'MySQL',
            'Vuejs',
            'Authentication',
            'SCSS',
         ],
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
         description: t('projects.boolpress.short_d'),
         long_description: t('projects.boolpress.long_d'),
         topics: [
            'Laravel',
            'Blade',
            'MySQL',
            'Vuejs',
            'Authentication',
            'SCSS',
         ],
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
         description: t('projects.netflix.short_d'),
         long_description: t('projects.netflix.long_d'),
         topics: ['Vuejs', 'SCSS', 'API'],
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
         description: t('projects.portfolio.short_d'),
         long_description: null,
         topics: ['React', 'Custom hooks', 'SCSS', 'Portfolio'],
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
         description: t('projects.react_amazon.short_d'),
         long_description: null,
         topics: ['React', 'React context', 'SCSS', 'Firebase database'],
         language: 'React',
         url: 'https://react--clone-d9242.web.app/',
         github_url: 'https://github.com/DavideDeLeonardis/amazon-react',
         isFeatured: false,
         isMain: false,
      },
      {
         // react-auth-test
         id: 507615722,
         name: 'React Auth',
         image: require('../images/projects/react-auth-test.png'),
         description: t('projects.react_auth_test.short_d'),
         long_description: null,
         topics: ['React', 'React context', 'SCSS', 'Firebase auth'],
         language: 'React',
         url: null,
         github_url: 'https://github.com/DavideDeLeonardis/react-auth',
         isFeatured: false,
         isMain: false,
      },
      {
         // vue-boolzapp
         id: 440119535,
         name: 'Vue Boolzapp',
         image: require('../images/projects/vue-boolzapp.png'),
         description: t('projects.vue_boolzapp.short_d'),
         long_description: null,
         topics: ['HTML', 'CSS', 'Vuejs'],
         language: 'Vue',
         url: 'https://vue-boolzapp.firebaseapp.com',
         github_url: 'https://github.com/DavideDeLeonardis/boolzapp-vue',
         isFeatured: false,
         isMain: false,
      },
      {
         // vue-instagram
         id: 507411259,
         name: 'Vue Instagram',
         image: require('../images/projects/vue-instagram.png'),
         description: t('projects.vue_instagram.short_d'),
         long_description: null,
         topics: ['Vuejs', 'SCSS'],
         language: 'Vue',
         url: 'https://vue-boolgram.web.app/',
         github_url: 'https://github.com/DavideDeLeonardis/vue-instagram',
         isFeatured: false,
         isMain: false,
      },
      {
         // avada-consultant
         id: 451409349,
         name: 'Avada Consultant',
         image: require('../images/projects/vue-proj-vuejs.png'),
         description: t('projects.avada_consultant.short_d'),
         long_description: null,
         topics: ['Vuejs', 'SCSS'],
         language: 'Vue',
         url: 'https://proj-vuejs.web.app/',
         github_url: 'https://github.com/DavideDeLeonardis/avada-consultant',
         isFeatured: false,
         isMain: false,
      },
      {
         // minefield-game
         id: 434247273,
         name: 'Minefield game',
         image: require('../images/projects/minefield-game.png'),
         description: t('projects.minefield_game.short_d'),
         long_description: null,
         topics: ['HTML', 'CSS', 'JavaScript'],
         language: 'JavaScript',
         url: 'https://minefield-game-4f94b.web.app/',
         github_url: 'https://github.com/DavideDeLeonardis/minefield-game',
         isFeatured: false,
         isMain: false,
      },
      {
         // laravel-comics
         id: 458602990,
         name: 'Laravel Comics',
         image: require('../images/projects/laravel-comics.png'),
         description: t('projects.laravel_comics.short_d'),
         long_description: null,
         topics: ['Laravel', 'Blade'],
         language: 'Laravel',
         url: 'https://ancient-spire-31420.herokuapp.com/',
         github_url: 'https://github.com/DavideDeLeonardis/laravel-comics',
         isFeatured: false,
         isMain: false,
      },
   ];
};

export default useProjects;
