import { IfxNavbar, IfxNavbarItem, IfxSearchBar } from '@infineon/infineon-design-system-react';
import React, { useState } from 'react';
import { IfxNavbarProfile } from '@infineon/infineon-design-system-react';
import './navbar.scss';

function Navbar() {
  
  const [userName] = useState("");
  const [userNameShort] = useState("");

  return (
    <IfxNavbar  show-logo-and-appname="true" application-name="Application name" fixed="false" logo-href="http://google.com" logo-href-target="_self">
      <IfxNavbarItem target="_blank" slot="left-item" icon="" show-label="true" >
        Menu Item 1
        <IfxNavbarItem icon="calendar16">
          Layer 1 Nested Item 1
          <IfxNavbarItem>
            Layer 2 Nested Item 2
            <IfxNavbarItem href="http://google.com" target="_blank">Link Layer 3 Nested Item 1</IfxNavbarItem>
            <IfxNavbarItem>Layer 3 Nested Item 2</IfxNavbarItem>
            <IfxNavbarItem>Layer 3 Nested Item 3</IfxNavbarItem>
            <IfxNavbarItem>Layer 3 Nested Item 4</IfxNavbarItem>
          </IfxNavbarItem>
          <IfxNavbarItem >Layer 2 Nested Item 3</IfxNavbarItem>
          <IfxNavbarItem>Layer 2 Nested Item 4</IfxNavbarItem>
          <IfxNavbarItem>Layer 2 Nested Item 5</IfxNavbarItem>
        </IfxNavbarItem>
    
        <IfxNavbarItem>
          Layer 1 Nested Item 2
          <IfxNavbarItem>Layer 2 Item 1</IfxNavbarItem>
          <IfxNavbarItem>Layer 2 Item 2</IfxNavbarItem>
          <IfxNavbarItem>Layer 2 Item 3</IfxNavbarItem>
        </IfxNavbarItem>
    
        <IfxNavbarItem>Nested Item 3</IfxNavbarItem>
    
        <IfxNavbarItem>
          Layer 1 Nested Item 4
          <IfxNavbarItem>Nested Item 4</IfxNavbarItem>
        </IfxNavbarItem>
    
      </IfxNavbarItem>
      <IfxNavbarItem href="" target="_blank" slot="left-item" icon="" show-label="true">
        Menu Item 2
      </IfxNavbarItem>
      <IfxNavbarItem target="_blank" slot="left-item" icon="" show-label="true">
      More
      <IfxNavbarItem>Item1</IfxNavbarItem>
      <IfxNavbarItem>Item2</IfxNavbarItem>
      </IfxNavbarItem>
  
      <IfxSearchBar slot="search-bar-left" is-open="false"></IfxSearchBar>
  
      <IfxNavbarItem slot="right-item" target="_blank" href="http://google.com" hide-on-mobile="true" show-label="true" icon="bell-16"></IfxNavbarItem>
      <IfxNavbarItem slot="right-item" hide-on-mobile="true" show-label='true' icon="cart-16">
        Label
      </IfxNavbarItem>
      <IfxNavbarItem slot="right-item" hide-on-mobile="true" show-label='true' icon="globe-16"></IfxNavbarItem>
    
      <IfxNavbarProfile user-name={userName} slot="right-item" image-url={userNameShort} show-label="true" href="" target="_blank"></IfxNavbarProfile>
    </IfxNavbar>
  );
}

export default Navbar;