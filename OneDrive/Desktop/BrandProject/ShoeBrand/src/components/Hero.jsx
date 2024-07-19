import React from 'react'

const Hero = () => {
  return (
    <main className="hero container">
        <div className='hero-content'>
        <h1> YOUR FEET DESERVES THE BEST</h1>
            <p> YOUR FEET DESERVES THE BEST AND WERE HERE TO HELP YOU WITH OUR 
                SHOES. 
            </p>
        </div>

        <div className="hero-btn">
            <button>Shop</button>
            <button>Category</button>
        </div>

        <div className="shopping">
            <p>Also Available On</p>

            <div className="brand-icons">
                <img src="/images/shop.png" alt="amezon-logo" />
    
            </div>
        </div>
        <div className='hero-image'>
        <img src="/images/shoe_image.png" alt="shoe-png" />
        </div>
    </main>
  )
}

export default Hero;
