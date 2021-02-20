import db from './farebase/config';

const usuario ={
    nombre: 'Samuel',
    Activo: true,
    fechanaci: 0

}
db.collection('usuarios')
  .add( usuario )