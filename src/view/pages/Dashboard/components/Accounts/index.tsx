import { EyeIcon } from "../../../../components/icons/EyeIcon";

import { SwiperSlide, Swiper } from "swiper/react";

import 'swiper/css'
import { AccountsSliderNavigation } from "./AccountsSliderNavigation";
import { AccountCard } from "./AccountCard";
import { useAccountsController } from "./useAccountsController";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { cn } from "../../../../../app/utils/cn";
import { Spinner } from "../../../../components/Spinner";
import { PlusIcon } from "@radix-ui/react-icons";


export function Accounts() {

  const { sliderState, setSliderState, windowWidth, areValuesVisible, toggleValuesVisibility, isLoading, accounts } = useAccountsController()
  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
      
      { isLoading && (
        <div className="h-full w-full flex items-center justify-center">
          <Spinner className="text-teal-950/50 fill-white w-10 h-10" />  
        </div>
      )}
      
      { !isLoading && (
        <>
          <div>
            <span className="tracking-[0.5px] text-white block">Saldo total</span>
            <div className="flex items-center gap-2">

              <strong className={cn(
                "text-2xl tracking-[-1px] text-white",
                !areValuesVisible && 'blur-md'
              )}>
                {formatCurrency(1000)}
              </strong>

              <button onClick={toggleValuesVisibility} className="w-8 h-12 flex items-center justify-center">
                <EyeIcon open={!areValuesVisible} />
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
            { accounts.length === 0 && (
              <>
                <div className="mb-4" slot="container-start" >
                    <strong className="text-white tracking-[-1px] text-lg font-bold">
                      Minhas Contas
                    </strong>                  
                </div>

                <button
                  className="mt-4 h-52 rounded-2xl border-2 border-dashed border-teal-600 flex flex-col items-center justify-center gap-4 text-white" >
                  <div className="w-11 h-11 rounded-full border-2 border-dashed border-white flex items-center justify-center" >
                    <PlusIcon className="w-6 h-6" />
                  </div>
                  <span className="tracking-[-0.5px] font-medium block w-32 text-center">
                    Cadastre uma nova conta
                  </span>
                </button>
              </>
            ) }      
           
            { accounts.length > 0 && (
              <div> {/* div auxiliar para envolver o swiper */}
                <Swiper 
                  spaceBetween={16} 
                  slidesPerView={ windowWidth >= 800 ? 2.1 : 1.2 }
                  onSlideChange={swiper => {
                    setSliderState({
                      isBeginning: swiper.isBeginning,
                      isEnd: swiper.isEnd
                    })
                  }} >   
                  {/* cabeçalho do slide */}       
                  <div className="flex items-center justify-between mb-4" slot="container-start" >
                    <strong className="text-white tracking-[-1px] text-lg font-bold">
                      Minhas Contas
                    </strong>
                  
                    <AccountsSliderNavigation
                      isBeginning={sliderState.isBeginning}
                      isEnd={sliderState.isEnd}
                    />
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
              </div> 
            ) }
          </div>
        </>
      ) }
    </div>
  )
}