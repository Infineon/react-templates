import React from 'react';
import { IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar } from '@infineon/infineon-design-system-react';

function Navbar() {
  return (
    <div>
      <IfxNavbar  show-logo-and-appname="true" application-name="Application name" fixed="undefined" logo-href="http://google.com" logo-href-target="_self">
  <IfxNavbarItem icon="undefined" slot="left-item" target="" href="" >
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

  <IfxNavbarItem href="" target="_blank" slot="left-item" icon="calendar16" show-label="false">
    Menu Item 2
  </IfxNavbarItem>

  <IfxNavbarItem slot="left-item">
    More
    <IfxNavbarItem>Item1</IfxNavbarItem>
    <IfxNavbarItem>Item2</IfxNavbarItem>
  </IfxNavbarItem>

  <IfxSearchBar slot="search-bar-left" is-open="false"></IfxSearchBar>

  <IfxNavbarItem slot="right-item" target="_blank" href="http://google.com" hide-on-mobile="true" show-label="false" icon="cartf16">
    Right Item
  </IfxNavbarItem>
  <IfxNavbarItem slot="right-item" hide-on-mobile="true" show-label='true' icon="airplane16">
    Right Item
    <IfxNavbarItem>Right Item</IfxNavbarItem>
  </IfxNavbarItem>

  <IfxNavbarProfile slot="right-item" image-url="" show-label="true" href="" target="_blank">
    User
    <IfxNavbarItem>Item</IfxNavbarItem>
    <IfxNavbarItem>Item</IfxNavbarItem>
    <IfxNavbarItem>Item</IfxNavbarItem>
    <IfxNavbarItem>Item</IfxNavbarItem>
  </IfxNavbarProfile>
</IfxNavbar>
    </div>
  );
}

export default Navbar;