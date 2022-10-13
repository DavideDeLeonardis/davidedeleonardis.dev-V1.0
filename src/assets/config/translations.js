export const translationsEn = {
   header: {
      projects: 'Projects',
      contact: 'Contact me',
      curriculum: 'Resume',
      qr_code: require('../images/resume/qrcode-EN.png'),
      resume: require('../images/resume/resume-EN.pdf'),
      resume_p_rext: 'See my Resume',
      resume_o: 'or',
      resume_p_scan: 'Scan me!',
   },
   intro: {
      hi_intro: 'Hi, my name is',
      nice_intro: 'Nice to have you here!',
      description_intro:
         "I love to build things for the web and I'm always <blue>enthusiastic</blue> about improving my tech skills!",
   },
   about: {
      p1: "I'm a student attending the second year in a business school, and besides the interest for economics I'm also a <span>Jr. Full-stack Web Developer </span> and <a>x2 Salesforce Certified</a> .",
      p2: "I constantly improve my programming knowledge both in front-end and in back-end technologies, developing responsive and intuitive web application in <b>React/Vue</b> and <b>PHP</b>, even though now I'm switching to <b>MERN stack</b>.",
      p3: "Doesn't matter how challenging the project is, if you've an idea, <a>contact me</a> and let's enjoy developing it!",
      tech_work: "Some technologies I've worked with:",
   },
   main_projects: {
      heading: 'Some Projects',
      main_ls: 'Main language:',
      main_lp: 'Main languages:',
      go_back: 'Go Back',
   },
   other_projects: {
      heading: 'Other Projects',
      p: 'Some of my other works.',
      show_more: 'Show more',
      show_less: 'Show less',
      selectAll: 'All',
      learn_more: 'Learn More',
   },
   projects: {
      deliveboo: {
         short_d:
            'Food delivery web app made with Laravel and Vue.js; customers can order from their favourite restaurants through a simulated Braintree payment gateway, and restaurateurs can register and insert dishes based also on the statistics displayed in their personal area.',
         // FINIRE
         long_d:
            'Deliveboo is a food delivery web app that allows customers to order from their favorite restaurants inserting only the data necessary for delivery. Restaurateurs can register in the platform and create, modify and delete dishes based also on the statistics displayed in the personal area and the history of orders. Customers can simulate payment through a Braintree payment integration and restaurateurs can view statistics of their activiy from a chart made with Chart.js. The entire app is build with Laravel fetching a MySQL database, while pages are created with Blade for the back-office and Vue.js for the front-office.',
         intro: 'INTRO EN',
      },
      laravel_boolpress: {
         short_d:
            "Content Management System made with Laravel and MVC pattern, possibility of authentication and registration with multiple privileges; posts are viewable, editable or deletable based on the user's role.",
         // FINIRE
         long_d: 'Long description laravel-boolpress',
         intro: 'Content Management System',
      },
      custom_select_component: {
         short_d:
            'Custom select component made with React.js and TypeScript. Accessibility commands through keyboard interactions are available both in single and multiple selection. Accessibility commands are inserted through a custom hook and a useRef hook; notice that select component are completely manually created.',
         // 'Custom select component made with React.js and TypeScript. <blue>Accessibility commands</blue> through keyboard interactions are available both in <blue>single and multiple selection</blue>. <technicals>Accessibility commands are inserted through a custom hook and a useRef hook; notice that select component are completely manually created.</technicals>',
         // FINIRE
         long_d: 'Long description TS',
         intro: 'INTRO EN',
      },
      vue_netflix: {
         short_d:
            "Netflix home page clone in Vue.js; select a category and search your favourite movies! Possibility of see movie's details.",
         long_d: null,
      },
      portfolio_v1: {
         short_d:
            'Portfolio website V1 made with React.js. <technicals>- Portfolio previous version fetched GitHub API in order to render repositories (branch still visible), actually projects are defined in a custom hook, also main and other project are the same component with different props and conditions.</technicals>',
         // FINIRE
         long_d: 'Long description',
         intro: 'INTRO EN',
      },
      react_amazon: {
         short_d:
            'Amazon home page clone made with React.js. <blue>Add to cart</blue> products you choose, <blue>insert your data and order!</blue> Soon product details. <technicals>- Cart actions are defined by a Context provider and requests are handled by a Firebase database.</technicals>',
         long_d: null,
      },
      react_auth_test: {
         short_d:
            'Authentication test app made with React.js, possibility of <blue>log in, log out and change password</blue>. <technicals>- Authentication is handled with Firebase auth API, a Context provider defines requests, stores and retrieves the auth token.</technicals>',
         long_d: null,
      },
      vue_boolzapp: {
         short_d:
            'Whatsapp Web home page made with Vue.js CDN. <blue>Start the chat</blue> and wait for the automatic reply, <blue>delete messages or entire chats</blue>, <blue>increase/decrease font size</blue> and <blue>switch day/night mode</blue>. <technicals>- Functions are defined in only one Vue instance and messages are send through a counter that changes for every chat.</technicals>',
         long_d: null,
      },
      vue_instagram: {
         short_d:
            'Instagram web home page made with Vue.js; possibility of <blue>show stories</blue>, <blue>like posts</blue>, <blue>add comments</blue> and <blue>show all comments</blue>.',
         long_d: null,
      },
      avada_consultant: {
         short_d: 'Static consulting company site made with Vue.js.',
         long_d: null,
      },
      minefield_game: {
         short_d:
            'Minefield game in JS plain. <blue>Select the difficulty level</blue>, <blue>click the play button</blue> and try to not hit bombs! Bombs are 5 in easy mode, 10 in medium and 15 in impossible.',
         long_d: null,
      },
      laravel_comics: {
         short_d:
            'Clone of DC-comics homepage made with Laravel, <blue>click on single comic</blue> to see details. <technicals>- Data represented in Blade pages and routes are completely defined in routes directory.</technicals>',
         long_d: null,
      },
      show_details: 'Show Details',
      see_demo: 'See Demo',
      see_github: 'See on GitHub',
   },
   contact: {
      heading: 'Get In Touch!',
      paragraph:
         'Feel free to reach out if you want to collaborate with me or just to say hi!',
      placeholderName: 'Name',
      labelName: 'Name',
      errorName: 'Name must not be empty.',
      errorEmail: 'Please enter a valid email.',
      placeholderMessage: 'Your Message',
      send: 'Send',
      sending: 'Sending...',
      message_success: 'Message sent!',
      message_fail:
         'Something went wrong, click on the mail icon in the right side of page.',
   },
   footer: {
      code: 'Source code available',
   },
};

export const translationsIt = {
   header: {
      projects: 'Progetti',
      contact: 'Contatti',
      curriculum: '<span>CV</span>',
      qr_code: require('../images/resume/qrcode-EN.png'), // cambiare in IT
      resume: require('../images/resume/resume-EN.pdf'), // cambiare in IT
      resume_p_rext: 'Visualizza CV',
      resume_o: 'oppure',
      resume_p_scan: 'Scannerizzami!',
   },
   intro: {
      hi_intro: 'Ciao, mi chiamo',
      nice_intro: 'Bello averti qui!',
      description_intro:
         'Adoro creare cose per il web e sono sempre <blue>entusiasta</blue> di migliorare le mie competenze informatiche!',
   },
   about: {
      p1: "Frequento il secondo anno in una facoltà di economia, e oltre all'interesse per quest'ultima sono anche un <span>Jr. Full-stack Web Developer </span> e <a>x2 Salesforce Certified</a> .",
      p2: 'Miglioro costantemente le mie conoscenze di programmazione sia nelle tecnologie front-end che back-end, sviluppando applicazioni web adattive e intuitive in <b>React/Vue</b> e <b>PHP</b>, anche se in questo momento sto passando allo <b>stack MERN</b>.',
      p3: "Non importa quanto impegnativo sia il progetto, se hai un'idea, <a>contattami</a> e divertiamoci a svilupparla!",
      tech_work: 'Alcune tecnologie con cui ho lavorato:',
   },
   main_projects: {
      heading: 'Alcuni progetti',
      main_ls: 'Linguaggio principale:',
      main_lp: 'Linguaggi principali:',
      go_back: 'Indietro',
   },
   other_projects: {
      heading: 'Altri Progetti',
      p: 'Alcuni dei miei altri lavori.',
      show_more: 'Mostra di più',
      show_less: 'Mostra di meno',
      selectAll: 'Tutti',
      learn_more: 'Scopri di più',
   },
   projects: {
      deliveboo: {
         short_d:
            "Deliveboo è una web app che permette di ordinare dai propri ristoranti preferiti inserendo solamente i dati necessari per la consegna. I ristoratori possono registrarsi sulla piattaforma e creare, modificare e eliminare i piatti, basandosi anche sulle statistiche mostrate nell'area personale.",
         // FINIRE
         long_d: 'Lunga descrizione deliveboo',
         intro: 'INTRO IT',
      },
      laravel_boolpress: {
         short_d:
            'Content Management System creato con Laravel e pattern MVC, possibilità di autenticazione e registrazione con privilegi multipli; i post sono visitabili, modificabili e eliminabili in base al roulo stabilito.',
         // FINIRE
         long_d: 'Lunga descrizione laravel-boolpress',
         intro: 'Content Management System',
      },
      custom_select_component: {
         short_d:
            'Componente custom di selezione singola o multipla creato con React.js e TypeScript; possibilità di navigare fra gli elementi della pagina e selezionarli tramite interazione con la tastiera. I comandi di accessibilità sono implementati tramite un custom hook e un useRef hook; si noti che il componente select è stato creato completamente a mano.',
         // 'Componente custom di selezione <blue>singola o multipla</blue> creato con React.js e TypeScript; possibilità di navigare fra gli elementi della pagina e selezionarli tramite <blue>interazione con la tastiera</blue>. <technicals>I comandi di accessibilità sono implementati tramite un custom hook e un useRef hook; si noti che il componente select è stato creato completamente a mano.</technicals>',
         // FINIRE
         long_d: 'Descrizione lunga TS',
         intro: 'INTRO IT',
      },
      vue_netflix: {
         short_d:
            'Homepage di Netflix in Vue.js; seleziona una categoria e cerca i tuoi film preferiti! Possibilità di vedere i dettagli del singolo film.',
         long_d: null,
      },
      portfolio_v1: {
         short_d:
            "Sito portfolio V1 costruito in React.js. <technicals>- La versione precedente chiamava le API di GitHub renderizzando le repository (branch ancora visibile), nell'attuale versione i dati di ogni progetto sono definiti in un custom hook e per renderizzare tutti i progetti è stato usato un solo componente con diverse props e condizioni.</technicals>",
         // FINIRE
         long_d: 'Descrizione lunga',
         intro: 'INTRO IT',
      },
      react_amazon: {
         short_d:
            'Clone della homepage di Amazon in React.js. <blue>Aggiungi al carrello</blue> prodotti a tua scelta, <blue>inserisci i tuoi dati e ordina!</blue> Dettagli del signolo prodotto SOON. <technicals>- Le azioni/funzioni per il carrello sono definite da un Context provider e le varie richieste sono gestite da un database Firebase.</technicals>',
         long_d: null,
      },
      react_auth_test: {
         short_d:
            "App di autenticazione creata con React.js, possibilità di <blue>log in, log out e cambio password</blue>. <technicals>- L'autenticazione è gestita tramite API di Firebase auth, un Context provider definisce le richieste, immagazzinando e recuperando il token di autenticazione.</technicals>",
         long_d: null,
      },
      vue_boolzapp: {
         short_d:
            "Homepage di Whatsapp Web creata con la CDN di Vue.js. <blue>Inizia la chat</blue> e attendi la risposta automatica, <blue>elimina messaggi o intere chat</blue>, <blue>aumenta/diminuisci la grandezza del font</blue> e <blue>cambia modalità giorno/notte</blue>. <technicals>- Le funzioni sono definite in un'unica istanza di Vue e i messaggi sono inviati tramite un contatore che cambia per ogni chat.</technicals>",
         long_d: null,
      },
      vue_instagram: {
         short_d:
            'Homepage di Instagram Web creata con Vue.js; possibiltà di <blue>mostare stories</blue>, <blue>mettere like ai post</blue>, <blue>lasciare commenti e mostrarli tutti</blue>.',
         long_d: null,
      },
      avada_consultant: {
         short_d:
            'Sito statico di una società di consulenza, creato in Vue.js.',
         long_d: null,
      },
      minefield_game: {
         short_d:
            'Gioco del campo minato in JS plain. <blue>Seleziona la difficoltà</blue>, <blue>premi play</blue> e prova a non colpire le bombe! Le bombe sono 5 in modalità facile, 10 in modalità media e 15 in modalità impossibile.',
         long_d: null,
      },
      laravel_comics: {
         short_d:
            'Clone della homepage del sito della DC-comics creato in Laravel, <blue>clicca sui comics</blue> per vederne i dettagli. <technicals>- I dati sono rappresentati in pagine Blade e tutte le rotte sono definite nella routes directory.</technicals>',
         long_d: null,
      },
      show_details: 'Mostra Dettagli',
      see_demo: 'Vai al Sito',
      see_github: 'Vedi su GitHub',
   },
   contact: {
      heading: 'Contattami!',
      paragraph:
         'Contattami pure se vuoi collaborare o anche solo per farmi un saluto!',
      placeholderName: 'Nome',
      labelName: 'Nome',
      errorName: 'Il nome non può essere vuoto.',
      errorEmail: 'Inserisci una mail valida.',
      placeholderMessage: 'Messaggio',
      send: 'Invia',
      sending: 'Inviando...',
      message_success: 'Messaggio inviato!',
      message_fail:
         "Qualcosa è andato storto, clicca sull' icona della mail sul lato destro della pagina",
   },
   footer: {
      code: 'Codice sorgente disponibile',
   },
};
