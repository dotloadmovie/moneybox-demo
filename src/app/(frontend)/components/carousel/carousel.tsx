'use client'

import { Category } from '@/payload-types'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { PrevButton, NextButton, usePrevNextButtons } from './carousel-button'
import './carousel.css'
import CategoryItem from '../category-item/category-item'

type CarouselProps = {
  items: Category[]
}

const Carousel = ({ items }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {items.map((val, index) => (
            <div className="embla__slide" key={val.id}>
              <CategoryItem>{val.Name}</CategoryItem>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carousel
