const express = require('express');
const path = require('path');
const app = express();

// Carpeta pública
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});