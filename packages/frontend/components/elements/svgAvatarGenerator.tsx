import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/micah";

export const svgAvatarGenerator = (seed: any, config: any) => {
  let svg = createAvatar(style, {
    seed: seed,
    mouth: ["laughing", "smile", "smirk"],
    ...config,
  });

  return svg;
};

export default svgAvatarGenerator;
