import React, { Fragment } from "react";
import Sticky from "react-stickynode";
import Menu from "./Menu.component";

export default () => (
  <div>
    <Sticky enabled={true}>
      <Menu
        id="menu"
        items={[
          { label: "THE BRIDE & GROOM", href: "brideandgroom" },
          { label: "THE WEDDING", href: "wedding" },
          { label: "LOGISTICS", href: "logistics" },
          { label: "THINGS TO DO", href: "thingstodo" },
          { label: "EXPERIENCES", href: "experiences" }
        ]}
      ></Menu>
    </Sticky>
  </div>
);
