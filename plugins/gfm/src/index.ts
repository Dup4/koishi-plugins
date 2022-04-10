import { Context, Schema, Logger, segment } from "koishi";
import { render, Options as MdOptions } from "koishi-plugin-capture-website";
import { escape } from "querystring";

export const name = "gfm";

const logger = new Logger("gfm");

if (process.env.NODE_ENV === "development") {
  logger.level = Logger.DEBUG;
}

export const using = [] as const;

export interface Config {}

export const Config: Schema<Config> = Schema.object({});

const htmlBody = `
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
<meta name="color-scheme" content="light dark">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sindresorhus/github-markdown-css@5.1.0/github-markdown.css">
<style>
body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: #0d1117;
  }
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
</head>
<body>
<article class="markdown-body">
#content
</article>
</body>
</html>
`;

export function apply(ctx: Context, config: Config) {
  ctx
    .command("gfm <content:rawtext>", { authority: 2 })
    .option("darkMode", "-d Emulate preference of dark color scheme")
    .action(async ({ session, options }, content: string) => {
      escape(content);

      let mdOptions: MdOptions = {};
      Object.assign(mdOptions, options);

      mdOptions.viewport = "800x80";
      mdOptions.fullPage = true;

      const html = await ctx.http.post("https://api.github.com/markdown", {
        text: content,
      });

      logger.debug(html);

      try {
        const image = await render(
          htmlBody.replace("#content", html),
          mdOptions
        );
        return segment.image(image);
      } catch (error) {
        return error.message;
      }
    });
}
