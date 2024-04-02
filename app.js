const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

const activoController = require('./controllers/activoController');
const ubicacionController = require('./controllers/ubicacionController');
const responsableController = require('./controllers/responsableController');

app.get('/', (req, res) => {
    res.send('Meta 3.1 Implementar servicio de web REST')
});

/**
 * Métodos para trabajar con los activos
 */
app.get('/activos', activoController.obtenerDatos);
app.get('/activos/id:id', activoController.obtenerPorId);
app.get('/activos/serie:serie', activoController.obtenerPorNumSerie);
app.post('/activos', activoController.agregarActivo);
app.put('/activos/id:id', activoController.actualizarActivo);
app.delete('/activos/id:id', activoController.eliminarActivo);

/**
 * Métodos para trabajar con los responsables
 */
app.get('/responsables', responsableController.obtenerDatos);
app.get('/responsables/id:id', responsableController.obtenerPorId);
app.get('/responsables/numEmpleado:num', responsableController.obtenerPorNumeroEmpleado);
app.post('/responsables', responsableController.agregarResponsable);
app.put('/responsables/id:id', responsableController.actualizarResponsable);
app.delete('/responsables/id:id', responsableController.eliminarResponsable);

/**
 * Métodos para trabajar con las ubicaciones
 */
app.get('/ubicaciones', ubicacionController.obtenerDatos);
app.get('/ubicaciones/id:id', ubicacionController.obtenerPorId);
app.post('/ubicaciones', ubicacionController.agregarUbicacion);
app.put('/ubicaciones/id:id', ubicacionController.actualizarUbicacion);
app.delete('/ubicaciones/id:id', ubicacionController.eliminarUbicacion);

app.listen(port, () => {
    console.log('Servidor escuchando puerto: ', port)
}).on('error', err => {
    console.log('Error al iniciar servidor: ', err)
});