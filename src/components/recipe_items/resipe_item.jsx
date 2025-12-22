import './resipe_item.css'

function RecipeItem({image, title, onSelect}) {
    return (<div className="recipe_container" onClick={() => onSelect(title)}>
        <div className="recipe_icon"><img src={image} alt={title}/></div>
        <div className="title_container"><h1>{title}</h1></div>
    </div>)
}

export default RecipeItem