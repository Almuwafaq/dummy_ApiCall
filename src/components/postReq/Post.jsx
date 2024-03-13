import axios from "axios"
import { useState } from "react"

const Post = () => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")

  const submitData = async (e) => {
    e.preventDefault()
      try {
        
          if (!price ) {
              
              throw new Error("fill this field" )
          }
      await axios({
        method: "post",
        url: "https://fakestoreapi.com/products",
        data: {
          title: title,
          price: price,
          description: description,
          category: category,
          image: image,
        },
      })
     
        
    } catch (error) {
        console.log("show error:", error)
    }
  }

  return (
    <div className="flex justify-center items-center  h-screen">
      <form
        onSubmit={submitData}
        action=""
        className="flex  flex-col gap-[2rem]"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="w-[20rem] py-[0.8rem] px-[1rem] rounded-[0.5rem] border outline-none "
          placeholder="title"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          className="w-[20rem] py-[0.8rem] px-[1rem] rounded-[0.5rem] border outline-none "
          placeholder="price"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="w-[20rem] py-[0.8rem] px-[1rem] rounded-[0.5rem] border outline-none "
          placeholder="description"
        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          className="w-[20rem] py-[0.8rem] px-[1rem] rounded-[0.5rem] border outline-none "
          placeholder="category"
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="file"
          className="w-[20rem] py-[0.8rem] px-[1rem] rounded-[0.5rem] border outline-none "
          placeholder="image"
        />
        <div className="flex justify-center">
          <button className="py-[0.8rem] text-white px-[1rem] text-center rounded-[0.5rem] bg-blue-500 ">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Post
