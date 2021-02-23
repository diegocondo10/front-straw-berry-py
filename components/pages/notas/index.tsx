import { useLazyQuery, useMutation } from '@apollo/client';
import { OptionesColumn } from '@components/table/columns';
import { createNota } from '@graphql/Notas/mutations.gql';
import { getNotasAlumno } from '@graphql/Notas/queries.gql';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import React, { useState } from 'react';
import DialogFormActividad from './DialogFormActividad';

const NotasContainer = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const [isVisible, setVisible] = useState<boolean>(false);

  const [create, { loading: loadingCreate }] = useMutation(createNota);

  const [getNotas, { loading: loadingNotas }] = useLazyQuery(getNotasAlumno, {
    onCompleted: ({ notas }) => {
      setData(notas);
    },
  });

  const [selectedPeriodo, setSelectedPeriodo] = useState(null);
  const [selectedAula, setSelectedAula] = useState(null);
  const [selectedAlumno, setSelectedAlumno] = useState(null);

  const [notas, setData] = useState(null);

  const toggle = () => {
    setVisible(!isVisible);
    setTimeout(() => {
      setSelectedItem(null);
    }, 500);
  };

  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col-lg-4 text-left">
          <div className="form-group">
            <label htmlFor="">Periodos Lectivos</label>
            <Dropdown
              className="w-100 p-inputtext-sm"
              optionLabel="nombre"
              placeholder="Seleccione"
              options={data?.periodos}
              value={selectedPeriodo}
              filter
              onChange={({ value }) => {
                console.log(value);
                setSelectedPeriodo(value);
                setSelectedAula(null);
                setSelectedAlumno(null);
                setData([]);
              }}
            />
          </div>
        </div>
        <div className="col-lg-4 text-left">
          <div className="form-group">
            <label htmlFor="">Aulas</label>
            <Dropdown
              className="w-100 p-inputtext-sm"
              optionLabel="nombre"
              placeholder="Seleccione"
              filter
              options={selectedPeriodo?.aulas}
              value={selectedAula}
              onChange={({ value }) => {
                setSelectedAula(value);
                setSelectedAlumno(null);
                setData([]);
              }}
            />
          </div>
        </div>
        <div className="col-lg-4 text-left">
          <div className="form-group">
            <label htmlFor="">Alumnos</label>
            <Dropdown
              className="w-100 p-inputtext-sm"
              value={selectedAlumno}
              options={selectedAula?.alumnos}
              optionLabel="alumno.personaStr"
              placeholder="Seleccione"
              filter
              onChange={async ({ value }) => {
                setSelectedAlumno(value);
                getNotas({ variables: { idAlumno: value.id } });
              }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Button
            label="Registrar"
            onClick={toggle}
            disabled={
              selectedAlumno === null || selectedPeriodo.estado === 'CERRADO'
            }
          />
        </div>
      </div>
    </div>
  );

  const onClickEditar = (rowData) => {
    setSelectedItem(rowData);
    setVisible(true);
  };

  const onSubmit = (accion: 'add' | 'upt') => async (formData) => {
    if (accion === 'add') {
      formData.alumnoAula = selectedAlumno.id;
      await create({ variables: { input: formData } });
    } else {
    }
    getNotas({ variables: { idAlumno: selectedAlumno.id } });
  };

  return (
    <main className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12">
          <DataTable
            header={header}
            value={notas}
            className="p-datatable-gridlines p-datatable-sm"
            rowGroupMode="rowspan"
            groupField="componente.nombre"
            sortMode="single"
            sortField="componente.nombre"
            sortOrder={1}
            autoLayout
            loading={loadingCreate || loadingNotas}
            emptyMessage="Por favor seleccione un periodo -> aula -> alumno"
          >
            <Column header="COMPONENTES" field="componente.nombre" />
            <Column header="ACTIVIDADES" field="titulo" />
            <Column header="RESULTADO" field="resultado" />
            <Column header="OBSERVACIONES" field="observaciones" />
            <Column header="FECHA" field="createdAt" />

            {OptionesColumn({
              editButton: {
                onClick: onClickEditar,
                isDisabled: (rowData) => selectedPeriodo.estado === 'CERRADO',
              },
            })}
          </DataTable>
        </div>
      </div>

      <DialogFormActividad
        visible={isVisible}
        setVisible={toggle}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        accion={selectedItem ? 'upt' : 'add'}
        onSubmit={onSubmit}
        componentes={data?.componentes}
      />
    </main>
  );
};

export default NotasContainer;
