import { Context, Next, Session } from "koishi";

export const name = "demo";

export function apply(ctx: Context) {
  ctx
    .command("demo <message>", "Demo", { authority: 1 })
    .action(({ session, options }, message) => {
      return "Demo";
    });
}
