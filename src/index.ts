import db from './firebase/config';
import {retronarDocumento} from './herpers/mostrar-documentos';
const usuario={
    nombre: 'Samuel',
    activo:true,
    fechaNaci:0
}
//actualizacion 
const usuarioRef= db.collection('usuarios');
/*db.collection('usuarios')
 .add(usuario)
 .then(docRef=> {
     console.log(docRef)
 })
 .catch(e => console.log('error', e))*/
 /*usuarioRef 
 .doc('DcHteafFhd0dg6')
 .update({
     activo:false
 })*/
 //borrado de impformacion 
 /*usuarioRef
 .doc('RDG6dgg6sGHFhf7d')
 .delete()
 .then (() => console.log('borrado'))
 .catch(e => console.log('error', e));*/

 /*usuarioRef
 .onSnapshot( snap => {
    retronarDocumento(snap);
    
 })*/

 //usuarioRef.where('Salario', '>',1800 ).get().then( retronarDocumento);

/* usuarioRef.where('Salario', '>', 1800 )
 .where('usuario', '<', 2300)
 .get().then( retronarDocumento);*/

 
 usuarioRef.where('Salario', '>', 1800 )
 .where('uactivo','==', true)
 .get().then( retronarDocumento);
