export const dict = {
	es: {
		nav: {
			home: 'Inicio',
			about: 'Sobre mí',
			experience: 'Experiencia',
			projects: 'Proyectos',
			education: 'Educación',
			contact: 'Contacto'
		},
		hero: {
			titlePrefix: 'Hola, soy ',
			d1: 'Soy desarrollador con pasión por crear soluciones limpias y escalables.',
			d2: 'Me interesa especialmente el diseño de patrones y arquitecturas que aporten claridad y eficiencia al desarrollo de software.',
			ctaProjects: 'Ver Proyectos',
			ctaContact: 'Contáctame'
		},
		about: {
			title: 'Sobre Mí',
			p1: 'Mi interés por la programación comenzó en bachillerato, me enganchó el reto de resolver problemas como si fueran acertijos. Desde entonces me he enfocado en el desarrollo de aplicaciones tanto del lado del cliente como del servidor.',
			p2: 'Durante mi formación universitaria, profundicé en lenguajes como Java, JavaScript y C#. Profesionalmente, he trabajado principalmente con Angular en el frontend y con C#, Python y Node.js en el backend.',
			p3: 'Mi stack de preferencia en proyectos personales es React/Node.js. Me considero una persona persistente y curiosa. Incluso cuando no estoy trabajando, procuro seguir practicando siempre que puedo, aunque sea un poco. Cada pequeño avance es mejor que quedarse quieto.'
		},
		experience: {
			title: 'Experiencia',
			thewiseseeker: {
				summary: 'Full Stack Developer en plataforma de evaluación de talento basada en inteligencia artificial.',
				bullets: [
					'Desarrollo y mantenimiento de funcionalidades frontend en Angular dentro de una arquitectura de microfrontends, utilizando NgXs para la gestión de estado.',
					'Refactorización y evolución de microservicios backend desarrollados en Python (FastAPI), aplicando buenas prácticas de diseño y separación de responsabilidades.',
					'Optimización de consultas y acceso a datos en MongoDB y SQL mediante SQLAlchemy, garantizando consistencia en la comunicación entre servicios.',
					'Reducción de deuda técnica mediante reorganización de componentes, mejora de cobertura de pruebas y resolución estructurada de incidencias.',
					'Implementación de pruebas unitarias con Jest y documentación interactiva de componentes con Storybook.',
					'Implementación y mantenimiento de pipelines de CI/CD mediante GitHub Actions para automatizar testing y despliegues.',
				],
			},
			mojito360: {
				summary: 'Full Stack Developer en plataforma SaaS de visibilidad logística para seguimiento en tiempo real y optimización de operaciones de transporte.',
				bullets: [
					'Participación en el diseño de la arquitectura del sistema siguiendo principios de Clean Architecture y separación de responsabilidades entre frontend y backend.',
					'Desarrollo y mantenimiento del frontend en Angular, aplicando una arquitectura modular basada en separación por capas (UI, servicios y lógica de dominio).',
					'Implementación de gestión de estado con NgRx (Redux pattern), estructurando flujos asíncronos y mejorando la previsibilidad de la aplicación.',
					'Diseño de un patrón Pub/Sub basado en RxJS (BehaviorSubject), migrando de NgRx y reduciendo boilerplate y complejidad en módulos de menor criticidad.',
					'Optimización del manejo de estado y suscripciones en RxJS, aplicando cancelación adecuada y control del ciclo de vida de los componentes para prevenir race conditions y bloqueos de UI.',
					'Refactorización de componentes siguiendo principios SOLID para mejorar la mantenibilidad y escalabilidad del frontend.',
					'Desarrollo de APIs REST en C# (.NET) con OpenAPI (Swagger), realizando consultas a la base de datos mediante LINQ sobre Azure SQL.',
					'Implementación de Azure Functions como parte del backend serverless gestionando procesos asíncronos y eventos.',
					'Automatización de pipelines CI/CD en Azure DevOps, incluyendo ejecución de pruebas y despliegues controlados por entorno.',
					'Implementación de pruebas end-to-end con Cypress y pruebas unitarias con Jest integradas en el flujo de desarrollo.',
				],
			},
			shop2front: {
				summary: 'Startup de soluciones digitales para comercio electrónico.',
				bullets: [
					'Desarrollo de aplicación móvil híbrida utilizando Ionic y Angular dentro de un monorepo, facilitando la compartición de código y la organización modular del proyecto.',
					'Integración de servicios de autenticación y base de datos en Firebase.',
					'Implementación de interfaz responsive utilizando Bootstrap, HTML, CSS y JavaScript.',
				],
			}
		},
		education: {
			title: 'Educación & Certificaciones',
			degree: 'Ingeniería Informática',
			specialization: 'Especialización en Ingeniería de Software',
			school: 'Universidad Politécnica de Valencia'
		},
		projects: {
			title: 'Proyectos Destacados',
			filterAll: 'Todos',
			descriptions: {
				// dayzMapEditorDescription: "🎮 Editor procedural de mapas para DayZ usando Three.js, React3Fiber, Drei y Turf.js. Carga heightmaps (.asc), dibuja zonas de biomas con Turf.js y posiciona las estructuras seleccionadas automáticamente. Exporta a formatos compatibles con Terrain Builder(.txt).",        
				dayzMapEditorDescription: "🎮 Sistema full-stack para edición y generación procedural de mapas 3D, diseñado bajo una arquitectura modular en pnpm-workspaces con separación clara entre UI, API y capa de negocio.\n\nEl motor procedural está desacoplado de la infraestructura siguiendo principios de arquitectura hexagonal (Core + Geo + Domain), permitiendo escalabilidad, reutilización y testabilidad.\n\nPermite carga de heightmaps, definición de áreas y distribución automática de assets mediante algoritmos geoespaciales. Exporta resultados en formatos compatibles con herramientas externas.\n\nStack: Node.js, Express, React, Three.js (React3Fiber & Drei), Turf.js, TypeScript, MongoDB, Mongoose.",
				myTaskBoard: "🔧 Aplicación full-stack con Next.Js para gestionar tareas con funciones CRUD vía HTTP (GET, POST, PUT, DELETE) y gestión de estados con persistencia en DB.",
				countryQuiz: "🌍 Aplicación en React que genera quizzes dinámicos a partir de una API REST. Manejo de estados, validación en tiempo real y control de flujo del juego.",
				countryPageWorldRanks: "📊 Web app con tabla dinámica y filtros avanzados usando datos de países. Incluye ordenamiento, búsqueda, filtros combinados y navegación entre países relacionados.",
				timeTrackingDashboard: "⏱️ Dashboard responsive con JavaScript, Tailwind, HTML, CSS y JS. Visualiza datos desde JSON local, cambia entre Daily, Weekly y Monthly con actualización dinámica.",
				restCountriesApi: "🌍 Web app en React que consume la API REST Countries para listar, buscar y filtrar países por región. Incluye detalles con navegación entre fronteras y modo claro/oscuro.",
				githubProfile: "🔍 App responsive en JavaScript que integra múltiples endpoints de la GitHub REST API para buscar usuarios, listar repositorios y abrir detalles en nuevas pestañas.",
				simpleCoffeeListing: "☕ Página con listado dinámico de productos usando componentes reutilizables en React. Incluye filtros, datos desde JSON y renderizado condicional.",
				guessTheWordGame: "🧠 Juego en Vanilla JS con lógica de validación, control de intentos y manipulación del DOM. Palabras aleatorias, inputs automáticos y reinicio al fallar.",
				musicPlayer: "🎵 App en Vanilla JS que permite reproducir, pausar y navegar canciones. Control del progreso y estado del reproductor con manipulación directa del DOM.",
				multistepRegisterForm: "📝 Formulario con validaciones de campos, navegación paso a paso y control de estados usando solo HTML, CSS y JavaScript puro.",
				deviceShopCheckout: "🛒 Checkout de una tienda hecho con HTML y CSS. Diseño responsivo usando Flexbox y CSS Grid. Formulario validado y estructura dividida en dos secciones.",
				contactPage: "📬 Formulario de contacto con inputs, select y diseño responsivo. Hecho con HTML y CSS puro, enfocado en buenas prácticas de estructura y maquetación.",
				meetTheTeamSection: "👥 Componente de presentación de equipo con layout en CSS Grid y posicionamiento relativo/absoluto. Diseño adaptable y estructura semántica en HTML.",
				businessBlogCard: "📰 Tarjeta de blog diseñada con Flexbox y CSS. Estructura semántica, imagen superpuesta y estilo limpio con posicionamiento preciso.",
				simpleFeatureSection: "✨ Diseño de 3 tarjetas responsivas con layout en Flexbox anidado. Estructura HTML semántica y estilo CSS limpio con buen manejo de tipografía y espaciado.",
				testimonialPage: "💬 Layout responsivo con Grid y Flexbox. Contiene testimonios, listas con íconos, y estilos adaptativos usando media queries y tipografía cuidada.",
				articleListing: "📝 Listado de artículos con imagen, título y fecha. Construido con Flexbox y estructura semántica, adaptado a distintos tamaños de pantalla.",
				joinOurNewsletter: "📧 Formulario de suscripción con estructura HTML semántica e interfaz estilizada. Uso de input, botón e íconos en una sección visualmente atractiva.",
				minimalBlogCard: "📰 Componente básico de blog con estructura HTML y estilos CSS. Presenta imagen, título, descripción y tag en un formato simple y elegante.",
				simpleFaq: "❓ Implementación básica de FAQ usando HTML y CSS, enfocada en accesibilidad, navegación por teclado y formato claro de preguntas y respuestas.",
				contactForm: "📧 Formulario accesible con validación en tiempo real, mensajes para lectores de pantalla y navegación completa por teclado. Diseño responsivo con feedback visual y toast de éxito.",
				socialLinksProfile: "🔗 Perfil estático con enlaces sociales, diseño responsivo y estados de hover y focus para accesibilidad y mejor experiencia de usuario.",
				blogPreviewCard: "📝 Componente visual estático con diseño responsivo y efectos de hover y focus para mejorar la interacción y accesibilidad."
			}
		},
		contact: {
			title: 'Contacto',
			description:
				'Estoy buscando nuevas oportunidades como desarrollador full-stack en una empresa donde pueda aportar mis conocimientos y seguir desarrollándome profesionalmente.',
			description2: 'No dudes en contactarme si tienes alguna pregunta.',
			locationLabel: 'Ubicación',
			placeholders: {
				name: 'Tu nombre',
				email: 'Tu email',
				subject: 'Asunto',
				message: 'Tu mensaje'
			},
			submit: 'Enviar Mensaje',
			status: {
				success: '✅ Tu mensaje fue enviado con éxito.',
				error: '❌ Hubo un error al enviar tu mensaje.',
				network: '❌ Error de conexión. Intenta más tarde.'
			}
		},
		footer: {
			links: {
				home: 'Inicio',
				about: 'Sobre mí',
				experience: 'Experiencia',
				projects: 'Proyectos',
				contact: 'Contacto'
			}
		}
	},

	en: {
		nav: {
			home: 'Home',
			about: 'About',
			experience: 'Experience',
			projects: 'Projects',
			education: 'Education',
			contact: 'Contact'
		},
		hero: {
			titlePrefix: 'Hi, I am ',
			d1: 'I am a developer passionate about building clean and scalable solutions.',
			d2: 'I am especially interested in patterns and architectures that bring clarity and efficiency to software development.',
			ctaProjects: 'View Projects',
			ctaContact: 'Contact Me'
		},
		about: {
			title: 'About Me',
			p1: 'My interest in programming started in high school; I got hooked by the challenge of solving problems like puzzles. Since then, I have focused on building applications both on the client and server sides.',
			p2: 'During my university studies, I deepened in languages like Java, JavaScript and C#. Professionally, I have mainly worked with Angular on the frontend and with C#, Python and Node.js on the backend.',
			p3: 'My preferred stack for personal projects is React/Node.js. I consider myself persistent and curious. Even when I am not working, I try to keep practicing whenever I can, even just a little. Every small step is better than standing still.'
		},
		experience: {
			title: 'Experience',
			thewiseseeker: {
				summary: 'Full Stack Developer in an AI-powered talent assessment and hiring decision platform.',
				bullets: [
					'Developed and maintained frontend features in Angular within a microfrontends architecture, using NgXs for state management.',
					'Refactored and evolved backend microservices built with Python (FastAPI), applying good design practices and clear separation of concerns.',
					'Optimized data access and queries in MongoDB and SQL through SQLAlchemy, ensuring consistency in communication between services.',
					'Reduced technical debt by reorganizing components, improving test coverage and systematically resolving incidents.',
					'Implemented unit tests with Jest and interactive component documentation with Storybook.',
					'Implemented and maintained CI/CD pipelines with GitHub Actions to automate testing and deployments.',
				],
			},
			mojito360:{
				summary: 'Full Stack Developer in a SaaS logistics visibility platform for real-time tracking and transport operations optimization.',
				bullets: [
					'Contributed to the system architecture design following Clean Architecture principles and clear separation of responsibilities between frontend and backend.',
					'Developed and maintained the frontend in Angular, applying a modular architecture with layered separation (UI, services and domain logic).',
					'Implemented state management with NgRx (Redux pattern), structuring asynchronous flows and improving application predictability.',
					'Designed a Pub/Sub pattern based on RxJS (BehaviorSubject), migrating away from NgRx to reduce boilerplate and complexity in less critical modules.',
					'Optimized state handling and RxJS subscriptions by applying proper cancellation and component lifecycle control to prevent race conditions and UI freezes.',
					'Refactored components following SOLID principles to improve frontend maintainability and scalability.',
					'Developed REST APIs in C# (.NET) with OpenAPI (Swagger), querying Azure SQL databases using LINQ.',
					'Implemented Azure Functions as part of the serverless backend to handle asynchronous processes and events.',
					'Automated CI/CD pipelines in Azure DevOps, including test runs and environment-based controlled deployments.',
					'Implemented end-to-end tests with Cypress and unit tests with Jest integrated into the development workflow.',
				],
			},
			shop2front: {
				summary: 'Startup offering digital solutions for e-commerce.',
				bullets: [
					'Developed a hybrid mobile application using Ionic and Angular within a monorepo, enabling code sharing and modular project organization.',
					'Integrated authentication and database services with Firebase.',
					'Implemented a responsive interface using Bootstrap, HTML, CSS and JavaScript.',
				],
			}
		},
		education: {
			title: 'Education & Certifications',
			degree: 'Computer Engineering',
			specialization: 'Specialization in Software Engineering',
			school: 'Polytechnic University of Valencia'
		},
		projects: {
			title: 'Featured Projects',
			filterAll: 'All',
			descriptions: {
				// dayzMapEditorDescription: "🎮 Procedural map editor for DayZ using Three.js, React3Fiber, Drei and Turf.js. Imports heightmaps (.asc), draws biomes zones with Turf.js and positions the selected structures automatically. Exports to compatible formats with Terrain Builder(.txt).",
				dayzMapEditorDescription: "🎮 Full-stack system for 3D map editing and procedural generation, designed with a modular architecture using pnpm workspaces and a clear separation between UI, API, and business logic layers.\n\nThe procedural engine is decoupled from infrastructure following hexagonal architecture principles (Core + Geo + Domain), enabling scalability, reusability, and testability.\n\nIt supports heightmap importing, area definition, and automatic asset distribution through geospatial algorithms. Results can be exported to formats compatible with external tools.\n\nStack: Node.js, Express, React, Three.js (React3Fiber & Drei), Turf.js, TypeScript, MongoDB, Mongoose.",
				myTaskBoard: "🔧 Full-stack Next.js app to manage tasks with CRUD actions over HTTP (GET, POST, PUT, DELETE) plus state management with DB persistence.",
				countryQuiz: "🌍 React app that generates dynamic quizzes from a REST API. Includes state handling, real-time validation, and game-flow control.",
				countryPageWorldRanks: "📊 Web app with a dynamic table and advanced filters using country data. Supports sorting, search, combined filters, and navigation between related countries.",
				timeTrackingDashboard: "⏱️ Responsive dashboard built with JavaScript, Tailwind, HTML, and CSS. Reads data from local JSON and switches between Daily, Weekly, and Monthly views with dynamic updates.",
				restCountriesApi: "🌍 React web app consuming the REST Countries API to list, search, and filter countries by region. Includes details with border navigation and light/dark mode.",
				githubProfile: "🔍 Responsive JavaScript app integrating multiple GitHub REST API endpoints to search users, list repositories, and open repo details in new tabs.",
				simpleCoffeeListing: "☕ React page with a dynamic product list built from reusable components. Includes filters, JSON data loading, and conditional rendering.",
				guessTheWordGame: "🧠 Vanilla JS game with validation logic, attempt tracking, and DOM manipulation. Features random words, auto-focused inputs, and reset on failure.",
				musicPlayer: "🎵 Vanilla JS app to play, pause, and navigate songs. Manages progress and player state via direct DOM manipulation.",
				multistepRegisterForm: "📝 Form with field validations, step-by-step navigation, and state control using plain HTML, CSS, and JavaScript.",
				deviceShopCheckout: "🛒 Store checkout built with HTML and CSS. Responsive design using Flexbox and CSS Grid, validated form, and two-column layout.",
				contactPage: "📬 Contact form with inputs, a select, and responsive layout. Built with pure HTML and CSS, focusing on structure and markup best practices.",
				meetTheTeamSection: "👥 Team presentation component using CSS Grid and relative/absolute positioning. Adaptive design plus semantic HTML structure.",
				businessBlogCard: "📰 Blog card styled with Flexbox and CSS. Semantic structure, overlapping image, and clean look with precise positioning.",
				simpleFeatureSection: "✨ Three responsive cards using nested Flexbox layouts. Semantic HTML and clean CSS with careful typography and spacing.",
				testimonialPage: "💬 Responsive layout using Grid and Flexbox. Includes testimonials, icon lists, and adaptive styling with media queries and polished typography.",
				articleListing: "📝 Article list showing image, title, and date. Built with Flexbox and semantic structure, adapted for multiple screen sizes.",
				joinOurNewsletter: "📧 Subscription form with semantic HTML structure and a styled interface. Uses input, button, and icons in a visually attractive section.",
				minimalBlogCard: "📰 Minimal blog component using HTML structure and CSS styling. Displays image, title, description, and tag in a simple, elegant format.",
				simpleFaq: "❓ Basic FAQ implementation with HTML and CSS, focused on accessibility, keyboard navigation, and clear question/answer layout.",
				contactForm: "📧 Accessible form with real-time validation, screen-reader messages, and full keyboard navigation. Responsive design with visual feedback and success toast.",
				socialLinksProfile: "🔗 Static profile with social links, responsive layout, and hover/focus states for better accessibility and UX.",
				blogPreviewCard: "📝 Static visual component with responsive design and hover/focus effects to enhance interaction and accessibility."
			}
		},
		contact: {
			title: 'Contact',
			description:
				'I am looking for new opportunities as a full-stack developer in a company where I can contribute my skills and continue growing professionally.',
			description2: 'Feel free to reach out if you have any questions.',
			locationLabel: 'Location',
			placeholders: {
				name: 'Your name',
				email: 'Your email',
				subject: 'Subject',
				message: 'Your message'
			},
			submit: 'Send Message',
			status: {
				success: '✅ Your message was sent successfully.',
				error: '❌ There was an error sending your message.',
				network: '❌ Connection error. Please try again later.'
			}
		},
		footer: {
			links: {
				home: 'Home',
				about: 'About',
				experience: 'Experience',
				projects: 'Projects',
				contact: 'Contact'
			}
		}
	}
} as const;