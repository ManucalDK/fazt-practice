# Explicacion para el esquema de desarrollo express

## Paquetes
* **bcryptjs :** modulo para encriptar y cifrar claves.
* **connect-flash :** modulo para mostrar mensajes de informacion entre vistas (error y exito de peeticiones por ejemplo).
* **express :** framework mas popular de node para la construccion de aplicaciones.
* **express-handlebars :** framework de plantillas handlebars ya configurado para express.
* **express-pg-session :** modulo de express para gestionar las sesiones desde postgresql.
* **express-session :** modulo de express para la gestion y manejo de variables de session en el servidor.
* **express-validator :** modulo de express para validar la informacion (tipo, formato, valor), util cuando se envia informacion desde formularios. 
* **morgan :**  permite gestionar logs y mensajes de la informacion que solicitan las aplicaciones clientes al servidor.
* **passport :** paquete para la gestion de autenticacion del lado del servidor.
* **passport-local :** paquete para la gestion de autenticacion en modo local (usamos nuestro propio metodo de autenticacion - usuario y clave).
* **pg :** driver de conexion a postgresql.
* **timeago.js :** paquete js para el manejo de fechas.
* **nodemon :** paquete que detecta cambios automaticamente en el codigo y recompila los cambios en lugar de recompilar la aplicacion completa

## Configuracion de directorios
* crear carpetas
 src
 -> lib, public, routes, views (layouts, partials)
 - index.js, database, keys

 index.js 
    const express = require('express')

    //inicializacion
        inicializar express y bd

        const app=express();

    //settings
        configuracion de servidor
        app.set('port', process.env.PORT || 4000);

    //middlewares
        gestion de peticiones 
        const morgan = require('morgan')
        app.use(morgan('dev'))

    //variables globales
        app.add

    //rutas

    //public


    //iniciar servidor
    app.listen(app.get('port'), ()=>{
        console.log('se inicia servidor en el puerto', app.get('port));
    })

packageJSON
quitar test
poner "dev": "nodemon src/index.js"

configurar routes/index.js


base index.js condiurar handlebars 
    const exphbs = require('express-handlebars')

    app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars.js')
    }))

    app.set('view engine', '.hbs')

    configurar path para ser usado dentro de los objetos de configuracion


    //midlewares
    app.use(express.urlencoded({extended: false})) //solo informacion basica o codificado
    app.use(express.json())

    //publics
    app.use(express.static(path.join(__dirname, 'public')))
