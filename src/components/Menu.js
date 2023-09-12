import React from 'react'
import recipes from '../recipes'

const Menu = () => {
  return (
    <div className='menu-container'>
        <div>
            <h2>This weeks special!</h2>
            <button>Order Menu</button>
        </div>

        <div className='cards'>
            {
                recipes.map(recipe => <div key={recipe.id} className='menu-items'>
                    <img src={recipe.image} alt="" />
                <div className='menu-content'>
                    <div className='heading'>
                        <h5>{recipe.title}</h5>
                        <p>{recipe.price}</p>
                    </div>
                    <p>{recipe.description}</p>
                    <button className='orderbtn'>Order Now</button>
                </div>
                </div>)

            }
        </div>
    </div>
  )
}

export default Menu