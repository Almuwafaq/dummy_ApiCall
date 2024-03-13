import { Link } from "react-router-dom"
import Rating from "../rating/Rating"

/* eslint-disable react/prop-types */
const Cards = ({image,title, price, rating,description, to}) => {
  return (
    <Link to={to} className="bg-white drop-shadow-lg rounded-[0.5rem] w-fit min-h-fit space-y-[2rem]  p-[1rem] ">
      <div className="flex justify-center w-[10rem] " >
        <img src={image} alt="image" />
      </div>
      <div className="flex justify-between">
        <h1 className="w-[15rem] " >{title}</h1>
              <p>${ price}</p>
          </div>
          <div className="flex flex-col gap-y-[2rem] items-center">
              <p><Rating rate={ rating.rate} /></p>
              <p className="text-center w-[20rem] " >{description}</p>
          </div>
    </Link>
  )
}

export default Cards
