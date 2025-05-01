import { reactRouter } from "@react-router/dev/vite";
import { sentryReactRouter, type SentryReactRouterBuildOptions } from '@sentry/react-router';
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const sentryConfig: SentryReactRouterBuildOptions = {
    org: "jsmastery-wi",
    project: "javascript-react",
    // An auth token is required for uploading source maps.
    authToken: "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"
    // ...
  };




export default defineConfig(config => {
    return {
    plugins: [tailwindcss(),tsconfigPaths(), reactRouter(),sentryReactRouter(sentryConfig, config)],
    sentryConfig, // Also pass the config here!
    ssr:{
        noExternal:[/@syncfusion/]
      }
    };

  });
