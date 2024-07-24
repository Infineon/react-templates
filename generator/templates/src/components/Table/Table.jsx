import { IfxBasicTable } from '@infineon/infineon-design-system-react';
import './table.scss';

function Table() {

  const cols = [
    {"headerName":"Manufacturer","field":"Manufacturer","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Model","field":"model","sortable":true,"unSortIcon":true},
    {"headerName":"Price","field":"price"},
    {"headerName":"Age","field":"age"}
  ];

  const rows = [
    {"Manufacturer":"Toyota","model":"Prius","price":35000,"age":10},
    {"Manufacturer":"Ford","model":"Mondeo","price":32000,"age":12},
    {"Manufacturer":"Porsche","model":"Boxster","price":72000}, 
    {"Manufacturer":"Suzuki","model":"Vitara","price":35000,"age":10}, 
    {"Manufacturer":"Honda","model":"Civic","price":35000,"age":10}, 
    {"Manufacturer":"Nissan","model":"Maxima","price":35000,"age":10}, 
    {"Manufacturer":"Tesla","model":"S","price":35000,"age":10}, 
    {"Manufacturer":"Volkswagen","model":"Golf","price":35000,"age":10}, 
    {"Manufacturer":"Seat","model":"Ibiza","price":35000,"age":10}, 
    {"Manufacturer":"Lada","model":"Niva","price":35000,"age":10}, 
    {"Manufacturer":"Dacia","model":"Sandero","price":35000,"age":10}, 
    {"Manufacturer":"Renault","model":"Captur","price":35000,"age":10}, 
    {"Manufacturer":"Hyundai","model":"Ioniq 5","price":35000,"age":10}
  ];

  return (
    <IfxBasicTable 
    row-height='default'
    cols={JSON.stringify(cols)}
    rows={JSON.stringify(rows)}
    table-height='auto'>
    </IfxBasicTable>
  );
}

export default Table;