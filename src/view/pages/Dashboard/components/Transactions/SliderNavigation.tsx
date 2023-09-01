import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

export function SliderNavigation() {
  const swipper = useSwiper()

  return (
    <>
      <button
       className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-100 z-10 w-12 h-12 flex items-center justify-center "
       onClick={() => swipper.slidePrev()} >
        <ChevronLeftIcon />
      </button>

      <button
       className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-100 z-10 w-12 h-12 flex items-center justify-center "
       onClick={() => swipper.slideNext()} >
        <ChevronRightIcon />
      </button>
    </>
  )
}