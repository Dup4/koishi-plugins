// @ts-nocheck
import { Context, segment } from "koishi";
import captureWebsite from "capture-website";

export const name = "capture-website";

function makeDefaultOptions(options) {
  if (!options.viewport) {
    options.viewport = "1280x800";
  }

  if (!options.type) {
    options.type = "png";
  }

  // if (!options.quality) {
  //   options.quality = 1;
  // }

  if (!options["scale-factor"]) {
    options["scale-factor"] = 2;
  }

  if (!options.timeout) {
    options.timeout = 60;
  }

  if (!options.delay) {
    options.delay = 0;
  }

  if (!options["disable-animations"]) {
    options["disable-animations"] = false;
  }
}

export function apply(ctx: Context) {
  ctx
    .command("capture-website <url>", "Capture Website", { authority: 2 })
    .alias("cw")
    .option("output", "Image file path (writes it to stdout if omitted)")
    .option("viewport", "-v ViewPort [default: 1280x800]")
    .option("type", "Image type: png|jpeg|webp  [default: png]")
    .option(
      "quality",
      "Image quality: 0...1 (Only for JPEG and WebP)  [default: 1]"
    )
    .option("scale-factor", "-s Scale the webpage `n` times  [default: 2]")
    .option("list-devices", "Output a list of supported devices to emulate")
    .option(
      "emulate-device",
      "Capture as if it were captured on the given device"
    )
    .option(
      "fullPage",
      "-f Capture the full scrollable page, not just the viewport"
    )
    .option("no-default-background", "Make the default background transparent")
    .option(
      "timeout",
      "Seconds before giving up trying to load the page. Specify `0` to disable.  [default: 60]"
    )
    .option(
      "delay",
      "Seconds to wait after the page finished loading before capturing the screenshot  [default: 0]"
    )
    .option(
      "wait-for-element",
      "Wait for a DOM element matching the CSS selector to appear in the page and to be visible before capturing the screenshot"
    )
    .option(
      "element",
      "Capture the DOM element matching the CSS selector. It will wait for the element to appear in the page and to be visible."
    )
    .option(
      "hide-elements",
      "Hide DOM elements matching the CSS selector (Can be set multiple times)"
    )
    .option(
      "remove-elements",
      "Remove DOM elements matching the CSS selector (Can be set multiple times)"
    )
    .option("click-element", "Click the DOM element matching the CSS selector")
    .option(
      "scroll-to-element",
      "Scroll to the DOM element matching the CSS selector"
    )
    .option(
      "disable-animations",
      "Disable CSS animations and transitions  [default: false]"
    )
    .option(
      "no-javascript",
      "Disable JavaScript execution (does not affect --module/--script)"
    )
    .option(
      "module",
      "Inject a JavaScript module into the page. Can be inline code, absolute URL, and local file path with `.js` extension. (Can be set multiple times)"
    )
    .option(
      "script",
      "Same as `--module`, but instead injects the code as a classic script"
    )
    .option(
      "style",
      "Inject CSS styles into the page. Can be inline code, absolute URL, and local file path with `.css` extension. (Can be set multiple times)"
    )
    .option("header", "Set a custom HTTP header (Can be set multiple times)")
    .option("user-agent", "Set the user agent")
    .option("cookie", "Set a cookie (Can be set multiple times)")
    .option("authentication", "Credentials for HTTP authentication")
    .option("debug", "Show the browser window to see what it's doing")
    .option("dark-mode", "-d Emulate preference of dark color scheme")
    .option("launch-options", "Puppeteer launch options as JSON")
    .option("overwrite", "Overwrite the destination file if it exists")
    .option(
      "inset",
      "Inset the screenshot relative to the viewport or `--element`. Accepts a number or four comma-separated numbers for top, right, left, and bottom."
    )
    .option(
      "clip",
      "Position and size in the website (clipping region). Accepts comma-separated numbers for x, y, width, and height."
    )
    .option("no-block-ads", "Disable ad blocking")
    .action(async ({ session, options }, url: string) => {
      makeDefaultOptions(options);
      console.log(options);
      return segment.image(await captureWebsite.buffer(url, options));
    });
}
