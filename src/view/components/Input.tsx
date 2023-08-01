import { ComponentProps, forwardRef } from 'react'

//usando ComponentProps vc pode criar uma interface que estende de um elemento HTML, e atribuindo as props dessa interface a um elemento, faz com q ele automaticamente
//recebe todos os atributos do elemento HTML
interface InputProps extends ComponentProps<'input'> {
  name: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, id, name, ...props }, ref ) => {
  const inputId =  id ?? name;
  
  return (
    <div className='relative'>
      <input 
        ref={ref}
        { ...props }
        id={inputId}
        className='w-full bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 pt-4 
                   peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none'
        placeholder=' '
      />

      <label 
          htmlFor={inputId} 
          className='absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700
                     peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all '>
        { placeholder }
      </label>
    </div>
  )
})