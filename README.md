### Requisitos

-- Node 16+
-- Yarn 1.22.19
-- NPM 8.1.2

### Ejecutar proyecto

--- npm run install -legacy-peer-deps o yarn --network-timeout 100000 (opcional si hay problemas de conexión)

--- npm run dev --> Ejecutar en modo desarrollo puerto 3000

--- npm run start --> Ejecutar modo producción puerto 4000

### Pequeño resumen

#Encarpetado

```
├───public/
│   ├───favicon-16x16.png
│   ├───favicon-32x32.png
│   ├───favicon.ico
│   ├───index.html
│   ├───logo192.png
│   ├───logo512.png
│   ├───manifest.json
│   └───robots.txt
├───src/
│   ├───Backend/
│   │   ├───api/
│   │   │   └───items/
│   │   │       └───index.js
│   │   ├───dist/
│   │   │   ├───.gz
│   │   │   ├───131.bundle.js
│   │   │   ├───bundle.js
│   │   │   ├───bundle.js.LICENSE.txt
│   │   │   ├───favicon-32x32.png
│   │   │   └───index.html
│   │   ├───middlewares/
│   │   │   └───authorMiddleware.js
│   │   └───index.js
│   ├───FrontEnd/
│   │   ├───Assets/
│   │   │   └───Images/
│   │   │       ├───Icons/
│   │   │       │   └───iconShipping.png
│   │   │       └───logos/
│   │   │           ├───LogoDesktop.png
│   │   │           └───LogoMovil.png
│   │   ├───Components/
│   │   │   ├───Home/
│   │   │   │   ├───Home.jsx
│   │   │   │   └───StyledHome.jsx
│   │   │   ├───Layout/
│   │   │   │   └───MainLayout.jsx
│   │   │   ├───ProductDetail/
│   │   │   │   ├───commons/
│   │   │   │   │   ├───descriptionComponent/
│   │   │   │   │   │   └───descriptionComponent.jsx
│   │   │   │   │   ├───imageComponent/
│   │   │   │   │   │   └───imageComponent.jsx
│   │   │   │   │   └───infoPay/
│   │   │   │   │       ├───infoPay.jsx
│   │   │   │   │       └───StyledInfoPay.jsx
│   │   │   │   ├───index.jsx
│   │   │   │   ├───ProductDetail.jsx
│   │   │   │   └───StyledProductDetail.jsx
│   │   │   ├───SearchPage/
│   │   │   │   ├───components/
│   │   │   │   │   └───CardComponent.jsx
│   │   │   │   ├───StyledComponents/
│   │   │   │   │   └───StyledCard.jsx
│   │   │   │   ├───SearchPage.jsx
│   │   │   │   └───StyledSearchPage.jsx
│   │   │   └───utils/
│   │   │       ├───404/
│   │   │       │   ├───404.jsx
│   │   │       │   └───Styled404.jsx
│   │   │       ├───Breadcrumb/
│   │   │       │   ├───Breadcrumb.jsx
│   │   │       │   └───StyledBreadcrumb.jsx
│   │   │       ├───Footer/
│   │   │       ├───Loader/
│   │   │       │   ├───Loader.jsx
│   │   │       │   └───StyledLoader.jsx
│   │   │       ├───NavBar/
│   │   │       │   ├───deskUtils/
│   │   │       │   │   └───deskNav.jsx
│   │   │       │   ├───movUtils/
│   │   │       │   │   └───movilNav.jsx
│   │   │       │   ├───utils/
│   │   │       │   │   ├───styledUtils/
│   │   │       │   │   │   └───styledSearch.jsx
│   │   │       │   │   └───SearchInput.jsx
│   │   │       │   ├───index.jsx
│   │   │       │   ├───NavBar.jsx
│   │   │       │   └───StyledNavBar.jsx
│   │   │       └───NotFound/
│   │   │           ├───NotFound.jsx
│   │   │           └───StyledNotFound.jsx
│   │   ├───lib/
│   │   │   ├───Hooks/
│   │   │   │   ├───redux.js
│   │   │   │   └───useQuery.js
│   │   │   ├───Redux/
│   │   │   │   ├───feature/
│   │   │   │   │   └───searchReducer.js
│   │   │   │   └───store.js
│   │   │   └───functions.js
│   │   ├───services/
│   │   │   ├───getProductDetail.js
│   │   │   └───getSearch.js
│   │   ├───App.test.js
│   │   ├───globals.scss
│   │   ├───index.jsx
│   │   ├───reportWebVitals.js
│   │   └───setupTests.js
│   └───services/
│       └───index.js
├───.env
├───jsconfig.json
├───nodemon.json
├───package-lock.json
├───package.json
├───README.md
├───webpack.config.js
└───yarn.lock
```

## El proyecto indicaba trabajar con SASS/SCSS, realicé la instalación pero seguí trabajando con StyleComponents por tema de rendimiento y comodidad
