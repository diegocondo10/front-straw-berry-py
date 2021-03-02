import HrefButton from '@components/Buttons/HrefButton';
import useReportes from '@hooks/useReportes';
import _ from 'lodash';
import { Column } from 'primereact/column';
import { ContextMenu } from 'primereact/contextmenu';
import { DataTable } from 'primereact/datatable';
import React, { useRef, useState } from 'react';
import TitleBreadCrumb from 'src/components/BreadCrumbs/titleBreadCrumb';
import { IndexColumn, OptionesColumn } from 'src/components/table/columns';
const PeriodosContainer = ({ data }) => {
  const { getReporte } = useReportes();
  const [selectedPeriodo, setSelectedPeriodo] = useState(null);

  const cm = useRef(null);

  const header = (
    <div className="d-flex flex-row justify-content-center justify-content-sm-between mt-1 mb-2 flex-wrap">
      <HrefButton
        label="Agregar"
        icon="pi pi-plus"
        href="/matriculas/periodos/create"
        className="mt-1"
        permiso="PERIODO_LECTIVO__AGREGAR"
      />
    </div>
  );

  const menuModel = [
    {
      label: 'Reportes',
      icon: 'pi pi-print',
      items: [
        {
          label: 'General',
          icon: 'pi pi-paperclip',
          command: _.throttle(async () => {
            await getReporte('reporte-general-total-alumnos', {
              id: selectedPeriodo.id,
            });
          }, 2000),
        },
      ],
    },
  ];
  return (
    <main className="container-fluid">
      <TitleBreadCrumb
        title="Periodos Lectivos"
        items={[{ title: 'Periodos Lectivos', active: true }]}
      />
      <ContextMenu
        model={menuModel}
        ref={cm}
        onHide={() => setSelectedPeriodo(null)}
      />
      <div className="row justify-content-center">
        <div className="col-md-12 datatable-doc-demo">
          <DataTable
            className="p-datatable-gridlines shadow-lg p-datatable-sm"
            value={data?.periodosLectivos}
            rowHover
            paginator
            header={header}
            autoLayout
            rows={10}
            rowsPerPageOptions={[10, 25, 50]}
            emptyMessage="No se han encontrado resultados"
            contextMenuSelection={selectedPeriodo}
            onContextMenuSelectionChange={(e) => setSelectedPeriodo(e.value)}
            onContextMenu={(e) => cm.current.show(e.originalEvent)}
          >
            {IndexColumn()}
            <Column
              className="text-center"
              header="Nombre"
              field="nombre"
              sortable
              filter
              reorderable
              style={{ width: '350px' }}
            />
            <Column
              className="text-center"
              header="Fecha de inicio"
              field="fechaInicio"
              sortable
              filter
              reorderable
              style={{ width: '200px' }}
            />
            <Column
              className="text-center"
              header="Fecha de fin"
              field="fechaFin"
              sortable
              filter
              reorderable
              style={{ width: '200px' }}
            />
            <Column
              className="text-center"
              header="Fecha de fin de clases"
              field="fechaFinClases"
              sortable
              filter
              reorderable
              style={{ width: '220px' }}
            />
            <Column
              className="text-center"
              header="Coodinador/a"
              field="coordinador.personaStr"
              sortable
              filter
              reorderable
              style={{ width: '220px' }}
            />
            <Column
              className="text-center"
              header="Sub coordinador/a"
              field="subCoordinador.personaStr"
              sortable
              filter
              reorderable
              style={{ width: '220px' }}
            />
            <Column
              className="text-center"
              header="Director/a"
              field="director.personaStr"
              sortable
              filter
              reorderable
              style={{ width: '220px' }}
            />
            <Column
              className="text-center"
              header="Estado"
              field="estado"
              sortable
              filter
              reorderable
              style={{ width: '150px' }}
            />
            {OptionesColumn({
              permisoEdit: 'PERIODO_LECTIVO__EDITAR',
              permisoDetail: 'PERIODO_LECTIVO__DETALLE',
              editPath: ({ id }) => `/matriculas/periodos/update?id=${id}`,
              detailPath: ({ id }) => `/matriculas/periodos/detail?id=${id}`,
            })}
          </DataTable>
        </div>
      </div>
    </main>
  );
};

export default PeriodosContainer;
