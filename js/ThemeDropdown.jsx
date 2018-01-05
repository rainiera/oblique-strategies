import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownContent, DropdownItem} from "bloomer";

export default class ThemeSelector extends React.Component {
  render() {
    <Dropdown>
      <DropdownTrigger>
        <Button isOutlined="isOutlined" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>Dropdown button</span>
          <Icon icon="angle-down" isSize="small"/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownContent>
          <DropdownItem href="#">First item</DropdownItem>
          <DropdownItem href="#" isActive="isActive">Second item</DropdownItem>
          <DropdownItem href="#">Third item</DropdownItem>
          <DropdownDivider/>
          <DropdownItem href="#">Item between dividers</DropdownItem>
          <DropdownDivider/>
          <DropdownItem>
            <p>You can insert
              <strong>any type of content</strong>
              within the dropdown menu.</p>
          </DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    </Dropdown>
  }
}
