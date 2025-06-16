# VozOculta 🎧

**VozOculta** es una plataforma anónima donde puedes **subir audios contando tus historias** y escuchar las de otros.

## 🚀 Funcionalidades
- Subida de archivos de audio (.mp3, .wav, etc.)
- Reproducción directa desde la web
- Almacenamiento anónimo y local
- Estilo moderno y oscuro

## 🧑‍💻 Cómo ejecutarlo localmente

```bash
git clone https://github.com/Historias-audios/VozOculta.git
cd VozOculta
npm install
npm start
```

Accede a la app en [http://localhost:3000](http://localhost:3000)

## ☁️ Deploy automático con Render

1. Crea una cuenta en [Render](https://render.com)
2. Crea un nuevo Web Service conectado a este repo
3. Configura:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Root Directory:** (vacío)
4. ¡Listo! Render te dará una URL pública como:  
   `https://vozoculta.onrender.com`

## 📂 Estructura del proyecto

```
vozoculta/
├── public/           # Archivos estáticos (HTML, CSS, JS)
├── uploads/          # Audios subidos (ignorado en Git)
├── server.js         # Servidor Express
├── package.json      # Dependencias y scripts
└── .gitignore
```

---

**Desarrollado con ❤️ para compartir historias que merecen ser escuchadas.**
