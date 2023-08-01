import { Outlet } from 'react-router-dom'
import illustration from '../../assets/illustration.png'
import { Logo } from '../components/Logo'


export function AuthLayout() {
  return (
    <div className="flex w-full h-full">
      {/*painel esquerdo: Outlet, vai ser o form de login ou de register */}
      <div className="w-full h-full flex justify-center items-center flex-col gap-16 lg:w-1/2 ">
        <Logo classname='text-gray-500 h-6 '  />
        <div className='w-full max-w-[504px] mx '>
          <Outlet />  { /* aqui será algum componente definido no componente Router, como <Login /> ou <Register /> */ }
        </div>
      </div>
      
      {/*painel direito: vai ficar no layout pra sempre mostrar seja no login ou no register*/}
      <div className="w-1/2 h-full justify-center items-center p-8 relative hidden lg:flex ">
        <img src={illustration} className='object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-[32px]' />
        <div className='max-w-[656px] bottom-8 mx-8 bg-white p-10 absolute rounded-b-[32px] text-green-300'>
          <Logo classname='text-teal-900 h-8' />
          <p className='text-gray-700 font-medium text-xl mt-6' >
            Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  )
}