import type { StoryObj } from "@storybook/react";
import React from "react";

import App from "@/App";

export default {
  component: App,
  title: "App",
};

export const Default: StoryObj<typeof App> = {
  render: () => <App />,
};
