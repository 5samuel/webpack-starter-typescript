import db from './firebase/config';

const usuario = {
    nombre: 'Samuel',
    activo: true,
    fechaNaci: 0
}

db.collection('usuarios')
.add(usuario)