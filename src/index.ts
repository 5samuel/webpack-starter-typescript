import db  from './farebase/config';

const usuario={
    nombre: 'samuel',
    activo: true,
    fechanaci: 0
}

db.collection('usuarios')
.add( usuario )

