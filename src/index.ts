import db from './firebase/config';
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

 usuarioRef
 .onSnapshot( snap => {
     const usuarios: any[] =[];

    snap.forEach( snapHijo => {
        usuarios.push ({
            id: snapHijo.id,
            ...snapHijo.data()
        });
        console.log (snapHijo.data)
    });
    
 })