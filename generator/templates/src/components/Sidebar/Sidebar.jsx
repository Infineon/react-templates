import { IfxSidebar, IfxSidebarItem, IfxSidebarTitle } from '@infineon/infineon-design-system-react';
import './sidebar.scss';

function Sidebar() {
  return (
    <IfxSidebar application-name="Application name">
      <IfxSidebarTitle>Menu Items</IfxSidebarTitle>
      <IfxSidebarItem icon="image-16" number-indicator="5">Menu Item</IfxSidebarItem>
      <IfxSidebarItem icon="image-16" number-indicator="1">Menu Item</IfxSidebarItem>
      <IfxSidebarItem icon="image-16" number-indicator="23">Menu Item</IfxSidebarItem>

      <IfxSidebarItem active="false">
        Header Section
        <IfxSidebarItem icon="image-16" active="false" >
        Menu Item
          <IfxSidebarItem target="_blank" active="false" icon="image-16">
          Menu Item
          </IfxSidebarItem>
    
          <IfxSidebarItem target="_blank" active="false" icon="image-16" value="thisPage">
          Menu Item
          </IfxSidebarItem>
    
          <IfxSidebarItem target="_blank" active="false" icon="image-16">
          Menu Item
          </IfxSidebarItem>
        </IfxSidebarItem>
    
        <IfxSidebarItem icon="image-16" active="false">
          Second layer
          <IfxSidebarItem target="_blank" icon="image-16" active="false">
          Menu Item
          </IfxSidebarItem>
        </IfxSidebarItem>
    
        <IfxSidebarItem icon="image-16" active="false">
          Second layer
          <IfxSidebarItem target="_blank" icon="image-16" active="false">
          Menu Item
          </IfxSidebarItem>
        </IfxSidebarItem>
      </IfxSidebarItem>
      
      <IfxSidebarItem>
      Header Section
      <IfxSidebarItem icon="image-16">
        Menu Item
        <IfxSidebarItem active="false" is-action-item="false" target="_blank" icon="image-16">
        Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem is-action-item="true" icon="image-16" value="thisPage">
        Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem is-action-item="false" target="_blank" icon="image-16">
        Menu Item
        </IfxSidebarItem>
      </IfxSidebarItem>
      <IfxSidebarItem icon="image-16">
        Menu Item
        <IfxSidebarItem target="_blank" icon="image-16">
        Menu Item
        </IfxSidebarItem>
      </IfxSidebarItem>
      <IfxSidebarItem icon="image-16">
        Menu Item
        <IfxSidebarItem target="_blank" icon="image-16">
        Menu Item
        </IfxSidebarItem>
      </IfxSidebarItem>
      </IfxSidebarItem>
  
      <IfxSidebarItem>
      Header Section
      <IfxSidebarItem icon="image-16">
        Menu Item
        <IfxSidebarItem href="http://google.com" target="_blank" icon="image-16">
        Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem href="http://google.com" target="_blank" icon="image-16">
        Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem href="http://google.com" target="_blank" icon="image-16">
        Menu Item
        </IfxSidebarItem>
      </IfxSidebarItem>
      <IfxSidebarItem icon="image-16">
        Menu Item
        <IfxSidebarItem href="http://google.com" target="_blank" icon="image-16">
        Menu Item
        </IfxSidebarItem>
      </IfxSidebarItem>
      <IfxSidebarItem icon="image-16">
        Menu Item
        <IfxSidebarItem href="http://google.com" target="_blank" icon="image-16">
        Menu Item
        </IfxSidebarItem>
      </IfxSidebarItem>
      </IfxSidebarItem>
    </IfxSidebar>
  );
}

export default Sidebar;