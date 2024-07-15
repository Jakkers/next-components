import React from "react";
import * as Separator from "@radix-ui/react-separator";
import SeperatorStyle from "@/components/SeperatorStyle.module.css";

const SeparatorDemo = () => (
  <div style={{ width: "100%", maxWidth: 300, margin: "0 15px" }}>
    <div className="Text" style={{ fontWeight: 500 }}>
      This is a Sperator Component
    </div>
    <div className="Text">From an open-source UI component library Radix.</div>
    <Separator.Root
      className={SeperatorStyle.SeparatorRoot}
      style={{ margin: "15px 0" }}
    />
    <div style={{ display: "flex", height: 20, alignItems: "center" }}>
      <div className="Text">Blog</div>
      <Separator.Root
        className={SeperatorStyle.SeparatorRoot}
        decorative
        orientation="vertical"
        style={{ margin: "0 15px" }}
      />
      <div className="Text">Docs</div>
      <Separator.Root
        className={SeperatorStyle.SeparatorRoot}
        decorative
        orientation="vertical"
        style={{ margin: "0 15px" }}
      />
      <div className="Text">Source</div>
    </div>
  </div>
);

export default SeparatorDemo;
