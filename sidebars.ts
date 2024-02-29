import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */

  docusaurusSidebar: [
    {
      type: "autogenerated",
      dirName: "docusaurus",
    },
  ],
  codingSidebar: [
    {
      type: "autogenerated",
      dirName: "coding",
    },
  ],
  scssSidebar: [
    {
      type: "autogenerated",
      dirName: "scss",
    },
  ],
  // reactSidebar: [
  //   {
  //     type: "autogenerated",
  //     dirName: "react",
  //   },
  // ],
  // vueSidebar: [
  //   {
  //     type: "autogenerated",
  //     dirName: "vue",
  //   },
  // ],
  // dockerSidebar: [
  //   {
  //     type: "autogenerated",
  //     dirName: "docker",
  //   },
  // ],
  // linuxSidebar: [
  //   {
  //     type: "autogenerated",
  //     dirName: "linux",
  //   },
  // ],
};

export default sidebars;
