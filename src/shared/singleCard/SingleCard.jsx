import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import Rating from "../rating/Rating"

/* eslint-disable react/prop-types */
const SingleCard = () => {
  const [singleProduct, setSingleProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    (async () => {
      const detail = await axios(`https://fakestoreapi.com/products/${id}`)

      setSingleProduct(detail.data)
    })()
  }, [singleProduct])

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className=" bg-white shadow-lg rounded-[0.5rem] w-fit min-h-fit space-y-[2rem]  p-[1rem] ">
        <div className="flex justify-center w-[10rem] ">
          <img src={singleProduct.image} alt="image" />
        </div>
        <div className="flex justify-between">
          <h1 className="w-[15rem] " >{singleProduct.title}</h1>
          <p>${singleProduct.price}</p>
        </div>
        <div className="flex flex-col gap-y-[2rem] items-center">
          {/* <p>
            <Rating rate={singleProduct.rating.rate} />
          </p> */}
          <p className="text-center w-[20rem] ">{singleProduct.description}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleCard
