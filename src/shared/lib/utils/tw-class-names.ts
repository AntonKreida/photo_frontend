import classNames, { ArgumentArray } from "classnames";
import { extendTailwindMerge } from "tailwind-merge";


const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {}
  }
});

export const twClassNames = (...classes: ArgumentArray) => customTwMerge(classNames(...classes));
