import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "Contrail",
  version: packageJson.version,
  copyright: `© ${currentYear}, Contrail.`,
  meta: {
    title: "Contrail - Intelligent Operations Dashboard",
    description:
      "Contrail is an intelligent operations dashboard designed to bring complex workflows, data, and activity into one clear operational view.",
  },
};
