import React, { useRef } from 'react';
import { ContainerSidebar } from './style';
import FilterForm from './filterForm/FilterForm';
import { MainContainer } from '../layouts/style';

const SidebarComponent = () => {
  const _searchForm = useRef();
  const _filterForm = useRef();

  return (
      <ContainerSidebar>
        <div className="page-sidebar">
          {/* <FilterForm
          ref={_filterForm}
          searchForm={_searchForm}
          onChange={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 300);
          }}
        /> */}
        </div>
      </ContainerSidebar>
  )
}

export default SidebarComponent
