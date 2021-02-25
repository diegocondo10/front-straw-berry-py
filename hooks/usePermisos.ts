import { useUsuario } from 'contexts/UserProvider';

const usePermisos = () => {
  const { usuario } = useUsuario();

  const hasPerm = (permiso) => (item) => item.nombre === permiso;
  const verificarPermiso = (permiso) => {
    console.log('USUARIO: ', usuario);
    console.log(usuario);
    return (
      usuario?.permisos?.includes(hasPerm(permiso)) ||
      usuario?.grupos
        ?.map?.((grupo) => grupo.permisos)
        ?.flat?.()
        ?.includes?.(hasPerm(permiso))
    );
  };

  return { verificarPermiso };
};

export default usePermisos;
