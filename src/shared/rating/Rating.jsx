/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io"

const Rating = ({ rate }) => {
  return (
    <div className="flex gap-3 ">
      <div>
        {rate >= 1 ? (
          <IoMdStar className="text-[0.8rem] text-yellow-500 " />
        ) : rate >= 0.5 ? (
          <IoMdStarHalf className="text-[0.8rem] text-yellow-500 " />
        ) : (
          <IoMdStarOutline className="text-[0.8rem] text-yellow-500 " />
        )}
      </div>
      <div>
        {rate >= 2 ? (
          <IoMdStar className="text-[0.8rem] text-yellow-500 " />
        ) : rate >= 1.5 ? (
          <IoMdStarHalf className="text-[0.8rem] text-yellow-500 " />
        ) : (
          <IoMdStarOutline className="text-[0.8rem] text-yellow-500 " />
        )}
      </div>
      <div>
        {rate >= 3 ? (
          <IoMdStar className="text-[0.8rem] text-yellow-500 " />
        ) : rate >= 2.5 ? (
          <IoMdStarHalf className="text-[0.8rem] text-yellow-500 " />
        ) : (
          <IoMdStarOutline className="text-[0.8rem] text-yellow-500 " />
        )}
      </div>
      <div>
        {rate >= 4 ? (
          <IoMdStar className="text-[0.8rem] text-yellow-500 " />
        ) : rate >= 3.5 ? (
          <IoMdStarHalf className="text-[0.8rem] text-yellow-500 " />
        ) : (
          <IoMdStarOutline className="text-[0.8rem] text-yellow-500 " />
        )}
      </div>
      <div>
        {rate == 5 ? (
          <IoMdStar className="text-[0.8rem] text-yellow-500 " />
        ) : rate >= 4.5 ? (
          <IoMdStarHalf className="text-[0.8rem] text-yellow-500 " />
        ) : (
          <IoMdStarOutline className="text-[0.8rem] text-yellow-500 " />
        )}
      </div>
    </div>
  )
}

export default Rating
