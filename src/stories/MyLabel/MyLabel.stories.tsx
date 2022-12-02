import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyLabel from "../../components/MyLabel/MyLabel";

export default {
  title: "UI/MyLabel", // nombre del componente como aparecerá en el sidebar de sb, pero tambien indica en cierta forma el directorio en el que aparecerá
  component: MyLabel,
  argTypes: {
    size: { control: "select" },
    color: { control: "select" },
    fontColor: { control: "color" },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
  label: "Basic Label",
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  label: "All caps label",
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  label: "Secondary color label",
  color: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: "normal",
  label: "Tertiary color label",
  color: "tertiary",
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: "h1",
  label: "Custom font color",
  fontColor: "#5517ac",
};
