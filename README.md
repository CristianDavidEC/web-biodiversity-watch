# Biodiversity Watch - Aplicación Web

Esta es una aplicación web desarrollada con React para el monitoreo y seguimiento de la biodiversidad.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- Node.js (versión 14.0.0 o superior)
- npm (incluido con Node.js)
- Git
- Un editor de código (recomendamos Visual Studio Code)

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/CristianDavidEC/web-biodiversity-watch.git
cd web-biodiversity-watch
```

2. Instala las dependencias:

```bash
npm install
```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```
REACT_APP_API_URL=tu_url_api
REACT_APP_GOOGLE_MAPS_API_KEY=tu_api_key
```

2. Configura las variables de entorno según tu entorno de desarrollo.

## Ejecución del Proyecto

### Modo Desarrollo

Para ejecutar la aplicación en modo desarrollo:

```bash
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

### Conexión con Dispositivo Móvil

Para acceder a la aplicación desde tu dispositivo móvil:

1. Asegúrate de que tu computadora y el dispositivo móvil estén en la misma red WiFi
2. Encuentra la dirección IP de tu computadora:
   - Windows: Abre CMD y escribe `ipconfig`
   - Mac/Linux: Abre Terminal y escribe `ifconfig`
3. En tu dispositivo móvil, abre el navegador y accede a:
   `http://[TU_IP_LOCAL]:3000`

### Construcción para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `build`.

## Scripts Disponibles

- `npm start`: Inicia la aplicación en modo desarrollo
- `npm test`: Ejecuta las pruebas
- `npm run build`: Construye la aplicación para producción
- `npm run eject`: Expulsa la configuración de Create React App (¡usar con precaución!)

## Estructura del Proyecto

```
web-biodiversity-watch/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   └── App.js
├── package.json
└── README.md
```

## Solución de Problemas

### Problemas Comunes

1. **Error de puerto en uso**

   - Si el puerto 3000 está ocupado, la aplicación intentará usar otro puerto
   - Puedes especificar un puerto diferente: `PORT=3001 npm start`

2. **Errores de dependencias**

   - Si encuentras errores de dependencias, intenta:
     ```bash
     rm -rf node_modules
     npm install
     ```

3. **Problemas de conexión móvil**
   - Verifica que el firewall no esté bloqueando el puerto 3000
   - Asegúrate de que ambos dispositivos estén en la misma red

## Soporte

Si encuentras algún problema o tienes preguntas, por favor:

1. Revisa la documentación
2. Abre un issue en el repositorio
3. Contacta al equipo de desarrollo

## Contribución

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.
