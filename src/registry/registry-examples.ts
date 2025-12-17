import type { Registry } from "shadcn/schema";

export const examples: Registry["items"] = [
  {
    name: "apple-hello-effect-vi-demo",
    type: "registry:example",
    registryDependencies: ["@shubhkdesign/apple-hello-effect"],
    files: [
      {
        path: "examples/apple-hello-effect-vi-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "apple-hello-effect-en-demo",
    type: "registry:example",
    registryDependencies: ["@shubhkdesign/apple-hello-effect"],
    files: [
      {
        path: "examples/apple-hello-effect-en-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "theme-switcher-demo",
    type: "registry:example",
    registryDependencies: ["@shubhkdesign/theme-switcher"],
    files: [
      {
        path: "examples/theme-switcher-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "wheel-picker-demo",
    type: "registry:example",
    registryDependencies: ["@shubhkdesign/wheel-picker"],
    files: [
      {
        path: "examples/wheel-picker-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "wheel-picker-form-demo",
    type: "registry:example",
    registryDependencies: ["@shubhkdesign/wheel-picker", "form"],
    files: [
      {
        path: "examples/wheel-picker-form-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "work-experience-demo",
    type: "registry:example",
    registryDependencies: ["@shubhkdesign/work-experience"],
    files: [
      {
        path: "examples/work-experience-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
