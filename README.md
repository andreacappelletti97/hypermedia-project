# Group Name

Nuklex

# Group Members

Andrea Cappelletti 10529039 andrea8.cappelletti@mail.polimi.it

Sandro Maglione 10532096 sandro.maglione@mail.polimi.it

# Contribution

## Andrea Cappelletti

Backend, API configuration, Postgresql Database, Router, Dynamic requests

## Sandro Maglione

UI design, Folder structure and project organization, Routes and Components styling, Chatbot implementation

# Techinical documentation

## Server and Database

For the backend technology we decided to implement Supabase, a cloud solution very similar to Firebase, but with a SQL-based database. 

Supabase provides a web platform where you can manage your database tables. The platform allows you to create, edit, and delete tables directly in your browser. Supabase features a PostgreSQL database under the hood. Nonetheless, no connection with the PostgreSQL instance is required, since it is possible to manage the backend (tables and data) directly from the web platform.

Server: [Supabase](https://supabase.io)

Database: [PostgreSQL](https://supabase.io/database)

## Components developed

### Layout

- `layout/HeaderMenu.vue`: Navigation menu of the website, containing the `<header>` tag. Contains the landamark links.
- `layout/FooterSection.vue`: Contains the `<footer>` tag and it includes general information about the company. It is included inside the `default.vue` layout and shared between all the routes of the website.

### Section

- `section/HeroSection.vue`: Included in the homepage of the website (`index.vue`). Contains the hero section with the company slogan and presentation.
- `section/GridSection.vue`: Shared between multiple routes. It contains a shared style and layout for grid of elements to display in different pages. This single component ensures a shared style between the website pages.
- `section/FeatureSection.vue`: Shared between multiple routes. It contains a layout with an image on the left and a title and description on the right (or viceversa). Used to highlight specific section in multiple pages of the website.
- `section/TestimonialsSection.vue`: Layout list for the testimonials section of the website (inside `aboutus.vue`).
- `section/SocialNav.vue`: List of social networks links.

### Base

- `base/GridContainer.vue`: A container that is used inside `GridSection` to display an image and a title.
- `base/OrientationInfo.vue`: Components used to display information about the current and previous pages.
- `base/SectionTitle.vue`: Shared style and layout for the title of each section of the website.
- `base/Chat.vue`: Contains the code to display and use the chatbot in the website. It is included in all pages inside `default.vue` layout.

## Plugins

- `supabase`: Backend-as-a-service plugin. Includes functions to fetch data from backend.
- `mmcc`: Setup for chatbot functionalities (client only).

# NuxtJs

- **`asyncData`**: One of the great feature of NuxtJs is that it provides Server Side Rendering (SSR) out of the box. We enabled SSR in our project in order to improve SEO by preloading the page content on the server. We used the `asyncData` function of NuxtJs to perform some computations on the server (mainly fetching remote data from the backend).
- **layout**: NuxtJs provides a `layout` folder where is possible to define some common layout between all pages of the website. We exploited this feature to add the chat and footer components to every page.
- **plugins**: Using the `plugin` folder, we were able to inject supabase in all pages. In this way, we can access supabase in every page as a plugin. Furthermore, NuxtJs allows to define if the plugin must be loaded only on the server, client, or both. In our case, we used supabase in SSR (`asyncData`), whereas `mmcc.js` for the chat is loaded on the client only.
- **Environment variables**: We used `env` variables (defined in `nuxt.config.js`) for both the chatbot key and supabase url and key.
- **Auto-import components**: Instead of importing the components in all pages, we used an awesome feature provided by NuxtJs. We added `components` in `nuxt.config.js` so we can define a prefix to used for the components of the project. By doing this, NuxtJs will auto-import the component in the page without requiring the import manually.
- **SEO**: To improve the SEO ranking of our website, we used the `head` function provided by NuxtJs in all the pages to define some metadata used by search engines. Furthermore, we created a `robots.txt` file in the `static` folder that allows all agents to visit the website.
- **router**: We used Vue Router (`NuxtLink`) to navigate between internal pages of the website. Furthermore, NuxtJs allows us to define all the routes inside the `pages` folder, without the need to define and connect all the routes manaully.
- **store**: We used NuxtJs `store` folder only for the chatbot implementation.
- **mixins**: We used NuxtJs `mixins` folder only for the chatbot implementation.
- **Typescript**: We used `@nuxt/typescript-build` (defined in `build` inside `nuxt.config.js`) to enable typescript support in the project.

# Additional comments

- **TailwindCSS**: We used TailwindCSS to define the style of our pages and components. This solution allows us to define all the styles as classes directly in the HTML.
- **Firebase**: We deployed the website on Firebase Hosting. We use Firebase Functions to support SSR on Firebase.
- **Supabase**: The backend we used is called [Supabase](https://supabase.io/). Supabase is a Backend-as-a-Service solution, similar to Firebase but featuring a Relational SQL database.
