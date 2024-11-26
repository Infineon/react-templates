import { IfxBasicTable } from '@infineon/infineon-design-system-react';
import data from './mock-data.json';
import './table.scss';

function Table({ currentPage, postsPerPage }) {

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data[0].rows.slice(indexOfFirstPost, indexOfLastPost);
  
  return (
    <IfxBasicTable 
      row-height='default'
      cols={JSON.stringify(data[1].cols)}
      rows={JSON.stringify(currentPosts)}
      table-height='auto'>
    </IfxBasicTable>
  );
}

export default Table;
