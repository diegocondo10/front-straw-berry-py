import { useMutation } from '@apollo/client';
import PrivateLayout from '@layouts/privateLayout';
import React, { useEffect, useState } from 'react';
import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import DetailItem from '@components/DetailItem';
import { Usuario } from '@services/auth.service';

const ChangePasswordContainer = ({ items, id }) => {
    const [usuario, setUsuario] = useState<any>({});

    useEffect(() => {
        console.log(Usuario.getDataUsuarioLoggedIn());
        setUsuario(Usuario.getDataUsuarioLoggedIn());
    }, []);

    const loading = false;

    return (
        <PrivateLayout loading={loading} title="IPCA | Cambio de Contraseña">
            <main className="container-fluid mb-5">
                <BreadCrumbTitle title="Cambio de Contraseña" items={items} />
                <div className="row justify-content-center">
                    <div className="col-md-8 breadcrumb">
                        <h4 className="text-underline">Información de la Cuenta</h4>
                        <ul className="w-100">
                            <DetailItem label="Usuario:" value={usuario?.username} />
                        </ul>
                        <h4 className="text-underline">Cambio de Contraseña</h4>
                        <ul className="w-100">
                            Contraseña Actual
                        </ul>
                        <ul className="w-100">
                            Contraseña Nueva
                        </ul>
                    </div>
                </div>
            </main>
        </PrivateLayout>

    )
}

export default ChangePasswordContainer;