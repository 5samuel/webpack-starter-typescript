import db from './firebase/config';
const usuario={
    nombre: 'Samuel',
    activo:true,
    fechaNaci:0
}

const usuarioRef= db.collection('usuario');
/*db.collection('usuarios')
 .add(usuario)
 .then(docRef=> {
     console.log(docRef)
 })
 .catch(e => console.log('error', e))*/
 usuarioRef 
 .doc('DcHteafFhd0dg6')
 .update({
     activo:false
 })