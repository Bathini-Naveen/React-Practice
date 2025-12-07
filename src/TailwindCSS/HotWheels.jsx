const HotWheels = () => {
  return (
  <>
    <nav className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold ">HotWheels🔥</h1>
        <aside className="flex gap-6">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Cars</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
        </aside>
    </nav>
    <section className=" border h-[70vh] bg-[url(https://images.hdqwalls.com/wallpapers/hot-wheels-and-jet-21.jpg)] bg-center bg-cover flex justify-center items-center">
        <div className="bg-[rgba(0,0,0,0.5)] text-white p-6 rounded-2xl flex justify-center items-center flex-col gap-2.5">
            <h1 className="text-5xl font-bold ">Premium Toy Cars</h1>
            <p>Collect the coolest miniature cars</p>
            <button className="bg-blue-600 px-8 py-3 rounded-4xl hover:bg-blue-800">Shop Now</button>
        </div>
    </section>
    
    <section className="bg-gray-50">
      <h1 className="text-center pt-12 text-2xl font-bold">Featured Toy Cars</h1>
      <article className="flex justify-evenly items-center flex-wrap py-5">
        <div className="p-4 my-4 rounded-2xl bg-white shadow">
          <img src="https://images.unsplash.com/photo-1648711085453-1ad7ef382e69?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2hlZWxzfGVufDB8fDB8fHww" alt="Blue mini supercar"className="h-[150px] w-[300px] object-cover rounded-2xl"/>
          <h1 className="text-xl font-semibold mt-2">Blue Mini Supercar</h1>
          <p className="text-gray-500">High speed mini racer</p>
          <p className="text-blue-600 font-bold mt-4">₹499</p>
        </div>
          <div className="p-4 my-4 rounded-2xl bg-white shadow">
          <img src="https://images.unsplash.com/photo-1648711727240-7ee250483923?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2hlZWxzfGVufDB8fDB8fHww" alt="Blue mini supercar"className="h-[150px] w-[300px] object-cover rounded-2xl"/>
          <h1 className="text-xl font-semibold mt-2">Yellow Drift Car</h1>
          <p className="text-gray-500">Lomited Edision Drift Model</p>
          <p className="text-blue-600 font-bold mt-4">₹599</p>
        </div>
          <div className="p-4 my-4 rounded-2xl bg-white shadow">
          <img src="https://i.ytimg.com/vi/8DHdVqRbVvU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBNm1MKLuCM2rCdMQavC9cYMlOSxQ" alt="Blue mini supercar"className="h-[150px] w-[300px] object-cover rounded-2xl"/>
          <h1 className="text-xl font-semibold mt-2">Red Sports Car</h1>
          <p className="text-gray-500">Futuristic Design and Fast</p>
          <p className="text-blue-600 font-bold mt-4">₹699</p>
        </div>
      </article>
    </section>

    <section className="bg-gray-50">
      <h1 className="text-center pt-12 text-2xl font-bold mb-8">Why Choose Us?</h1>
      <article className="flex justify-evenly items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl m-2">🚗</p>
          <p>Premium Collection</p>
        </div>
                <div className="flex flex-col justify-center items-center">
          <p className="text-2xl m-2">⚡</p>
          <p>fast Delivery</p>
        </div>
                <div className="flex flex-col justify-center items-center">
          <p className="text-2xl m-2">💳</p>
          <p>Secure Payment</p>
        </div>
      </article>
    </section>

    <footer className="h-[60px]  border text-center py-6 bg-black mt-4">
      <p className="text-white">@2025 Toy Cars Store-All Rights Reserved</p>
    </footer>
    </>
   
  )
}

export default HotWheels