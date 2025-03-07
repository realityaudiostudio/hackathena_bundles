// FAQCard.js
import React, { useState } from 'react'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'

export const FAQCard = ({ question, answer, level, className }) => {
    const [isOpen, isSetOpen] = useState(false)
    const handleDropDown = () => {
        isSetOpen((prev) => !prev)
    }

    let cardStyle
    if (level === 0) {
        cardStyle = 'q-card-0'
    } else if (level === 1) {
        cardStyle = 'q-card-1'
    } else {
        cardStyle = 'q-card'
    }

    return (
        <div className={'min-w-[260px] ' + className} onClick={handleDropDown}>
            <div className="relative">
                <div
                    className={`w-full h-full z-1 absolute top-0 right-0 bg-white border-r-2 border-[#d4d4d4] rounded-xl transition-all duration-500 ease-in-out ${isOpen && level === 1 ? 'opacity-100' : 'opacity-0'
                        }`}
                ></div>
                <div className="relative z-2">
                    <div
                        className={`${cardStyle} flex rounded-sm gap-4 justify-between items-center`}
                    >
                        <div className="uppercase break-words text-[14px] sm:text-[16px] md:text-[18px] text-white">
                            {question}
                        </div>
                        <button
                            type="button"
                            className="text-lg sm:text-xl md:text-2xl text-[#6A4B4D]"
                        >
                            {!isOpen ? <SlArrowDown /> : <SlArrowUp />}
                        </button>
                    </div>

                    <div
                        className={`grid overflow-hidden ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                            } transition-[grid] duration-500`}
                    >
                        <div
                            className={`text-[13px] sm:text-[14px] md:text-[16px] bg-white min-h-[0px] rounded-b-xl text-[#4b4b4b] ${isOpen
                                    ? 'h-auto p-4 md:p-6 border-2 border-[#d4d4d4] border-t-0 '
                                    : 'h-0 p-0 border-0'
                                }transition-all duration-500`}
                        >
                            {answer}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQCard