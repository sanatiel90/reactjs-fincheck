import { ComponentProps, forwardRef } from 'react'
import { CrossCircledIcon } from '@radix-ui/react-icons'
import { cn } from '../../app/utils/cn';

//usando ComponentProps vc pode criar uma interface que estende de um elemento HTML, e atribuindo as props dessa interface a um elemento, faz com q ele automaticamente
//recebe todos os atributos do elemento HTML
interface InputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

//usando forwardRef para que componente input possa receber a prop "ref"; 
export const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, id, name, error, className, ...props }, ref) => {
  const inputId =  id ;
  
  return (
    <div className='relative'>
      <input         
        { ...props }
        ref={ref}
        name={name}
        id={inputId}                
        className={
          cn('w-full bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 pt-4 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none', 
              error && '!border-red-900',
              className)
        }
        placeholder=' '
      />

      <label 
          htmlFor={inputId} 
          className='absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700
                     peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all '>
        { placeholder }
      </label>

      { error && 
        <div className='flex gap-2 items-center mt-2 text-red-900' >
          <CrossCircledIcon />
          <span className='text-xs' >{error}</span>
        </div>
      }
    </div>
  )
})
Input.displayName = 'Input'