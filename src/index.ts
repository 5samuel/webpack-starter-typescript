import db from './firebase/config';

const usuario = {
    nombre: 'Samuel',
    activo: true,
    fechaNaci: 0
}
const usuarioRef = db.collection('usuarios');
/*db.collection('usuarios')
.add(usuario)
.then(docRef => {
    console.log(docRef )
})
.catch(e => console.log('error', e))*/

usuarioRef 
     .doc('01')
     .update({
         activo: false
     })