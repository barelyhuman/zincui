/**
 * @typedef {object} StyleDef
 * @property {string} name
 * @property {string} base
 * @property {string[]} forElements
 * @property {object} variants
 */

/**@type {StyleDef[]}*/
export const styles = [];

defineStyle({
  name: "button",
  forElements: ["button"],
  base: "animate-enter inline-flex h-12 items-center justify-center px-6 font-medium transition focus:outline-none focus:ring",
  variants: {
    variants: {
      variant: {
        default: "bg-muted/10 hover:bg-muted/20 rounded-full",
        ghost:
          "rounded-md px-2.5 py-1.5 transition hover:bg-muted/10 focus:outline-none focus:ring focus:ring-inset",
        link: "font-medium bg-base hover:bg-base text-iris underline-offset-2 after:inline-block after:whitespace-pre hover:underline link",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-7 px-3.5",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
});

/**
 * @param {StyleDef} style
 */
function defineStyle(style) {
  styles.push(style);
}
