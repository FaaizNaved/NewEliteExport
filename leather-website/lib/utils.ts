import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

/**
 * tailwind-merge cannot see the custom scales declared in `globals.css`, so it
 * files `text-display` under text-colour and drops it when a real colour
 * follows. Teaching it the house tokens keeps size and colour independent.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["eyebrow", "display-sm", "display", "display-lg"] }],
      "text-color": [
        {
          text: [
            "ink",
            "bark",
            "leather",
            "chestnut",
            "tan",
            "camel",
            "brass",
            "brass-deep",
            "cream",
            "parchment",
            "mist",
            "stone",
          ],
        },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
