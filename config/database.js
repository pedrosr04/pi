const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connec('localhost', { useMongoClient: true});

mongoose.connection.on('connected', () => {
    console.log('Conectando ao banco de dados! ');
});

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão: ' + err);
});

mongoose.connection.on('disconnect', () => {
    console.log('Desconectado :( ');
});