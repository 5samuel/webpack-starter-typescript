import db from './firebase/config';
import {retronarDocumento} from './herpers/mostrar-documentos';
const usuario={
    nombre: 'melisa',
    activo:true,
    fechaNaci:47853
}

const usuarioRef= db.collection('usuarios');
usuarioRef.orderBy('usuario')
    .get().then(retronarDocumento)