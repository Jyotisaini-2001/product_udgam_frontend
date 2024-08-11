
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = function(...classes) {
  return twMerge(clsx(classes));
};
