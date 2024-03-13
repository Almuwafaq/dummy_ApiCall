import { useEffect, useState } from "react"
import Cards from "../../shared/cards/Cards"

const Home = () => {
  const [products, setProducts] = useState([])
  const [searchIt, setSearchIt] = useState("")

  const getAllProducts = async () => {
    const getDetail = await fetch("https://fakestoreapi.com/products")
    const details = await getDetail.json()
    setProducts(details)
  }

  const filterIt = async (e) => {
    e.preventDefault()
    const getDetail = await fetch("https://fakestoreapi.com/products")
    const details = await getDetail.json()
    const fliter = await details.filter(
      (filtering) => filtering.category === searchIt
    )
    setProducts(fliter)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <div className="p-[5rem] min-h-screen space-y-[3rem] ">
      <form onSubmit={filterIt} className="flex gap-x-[2rem] " >
        <input
          value={searchIt}
          onChange={(e) => setSearchIt(e.target.value)}
          type="text"
          placeholder="search"
          className="w-full py-[0.8rem] px-[1rem] rounded-[0.5rem] border outline-none "
        />
        <button className="py-[0.8rem] text-white px-[1rem] text-center rounded-[0.5rem] bg-blue-500 ">search</button>
      </form>
      <div className="grid grid-cols-3 gap-[2rem] ">
        {/* <p onClick={getAllProducts} >call</p> */}

        {products.map((product) => (
          <Cards key={product.id} {...product} to={`/card/${product.id} `} />
        ))}
      </div>
    </div>
  )
}

export default Home
