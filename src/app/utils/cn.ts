import { twMerge } from 'tailwind-merge';  //lib para fazer merge das classes tailwind, quando houve uso repetido da msm class, vai usar apenas a ultima
import clsx from 'clsx';  //lib para fazer renderizacao condicional de classes css
import { ClassValue } from 'clsx';

//funcao util q junta as duas libs acima
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}