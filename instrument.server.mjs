import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://7719c3710e57f8798d35fcb5f2d2cf61@o4509217356513280.ingest.us.sentry.io/4509217357561856",

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
