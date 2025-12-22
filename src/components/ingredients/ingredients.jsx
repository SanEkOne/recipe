import './ingredients.css'

function Ingredients({
                         ingredient1,
                         ingredient2,
                         ingredient3,
                         ingredient4,
                         ingredient5,
                         ingredient6})
{
    return (
        <div className="container">
            <h1 className="ingredients_title">Ингредиенты</h1>
            <div className="ingredients">
                <h1>{ingredient1}</h1>
                <hr className="line"/>
                <h1>{ingredient2}</h1>
                <hr className="line"/>
                <h1>{ingredient3}</h1>
                <hr className="line"/>
                <h1>{ingredient4}</h1>
                <hr className="line"/>
                <h1>{ingredient5}</h1>
                <hr className="line"/>
                <h1>{ingredient6}</h1>
            </div>
        </div>
    )
}

export default Ingredients;