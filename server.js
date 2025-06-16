const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

app.post('/upload', upload.single('audio'), (req, res) => {
  if (!req.file) return res.status(400).send('No se subió archivo');
  const ext = path.extname(req.file.originalname);
  const newPath = path.join('uploads', req.file.filename + ext);
  fs.renameSync(req.file.path, newPath);
  res.redirect('/');
});

app.get('/audios', (req, res) => {
  const files = fs.readdirSync('uploads').filter(file => /\.(mp3|wav|ogg)$/i.test(file));
  res.json(files);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
