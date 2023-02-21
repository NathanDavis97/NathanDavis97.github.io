import React from "react";

import { ImageContainer } from "./ImageContainer";
import keeprPic from "../images/keepr.png";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ImageContainer",
  component: ImageContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ImageContainer {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "ImageContainer",
  src: keeprPic,
};
