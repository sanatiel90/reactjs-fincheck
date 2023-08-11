import { EyeIcon } from "../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";
import { SwiperSlide, Swiper } from "swiper/react";

import 'swiper/css'
import { AccountsSliderNavigation } from "./AccountsSliderNavigation";

export function Accounts() {
  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
      <div>
        <span className="tracking-[0.5px] text-white block">Saldo total</span>
        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px] text-white">
            R$ 1000,00
          </strong>

          <button className="w-8 h-12 flex items-center justify-center">
            <EyeIcon open />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <div> {/* div auxiliar para envolver o swiper */}
          <Swiper spaceBetween={16} slidesPerView={2.1} >   
            {/* cabeçalho do slide */}       
            <div className="flex items-center justify-between mb-4" slot="container-start" >
              <strong className="text-white tracking-[-1px] text-lg font-bold">
                Minhas Contas
              </strong>
            
              <AccountsSliderNavigation />
            </div>

                <SwiperSlide>
                  <AccountCard 
                    name="Nubank"
                    balance={1250}
                    color="#7950F2"
                    type="CASH" />              
                </SwiperSlide>

                <SwiperSlide>
                  <AccountCard 
                    name="XP"
                    balance={1360.60}
                    color="#333"
                    type="INVESTMENT" />
                </SwiperSlide>
                
                <SwiperSlide>
                  <AccountCard 
                    name="Carteira"
                    balance={2500}
                    color="#0F0"
                    type="CHECKING" />
                </SwiperSlide>                    
           
          </Swiper>
        </div> {/* fim div auxiliar para envolver o swiper */}
      </div>
    </div>
  )
}