import * as log from "https://deno.land/std@0.99.0/log/mod.ts";

const filename = "./app.log";

const formatter = "{datetime} {levelName} {msg}";

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG", {
      formatter,
    }),

    file: new log.handlers.FileHandler("DEBUG", {
      filename,
      formatter,
    }),
  },

  loggers: {
    default: {
      level: "DEBUG",
      handlers: ["console", "file"],
    },
  },
});
// get default logger.
const Logger = log.getLogger();
console.log(`logfile: ${filename}`);

export { Logger };
