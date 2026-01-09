import './recipe.css'
import {useState} from "react";
import RecipeItem from '../recipe_items/resipe_item.jsx'
import Ingredients from "../ingredients/ingredients.jsx";
import Step from "../step/step.jsx"
import Footer from "../footer/footer.jsx"
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, onClose, modalContainer }) => {
    if (!isOpen || !modalContainer) return null;

    return createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="modal-title">Ошибка!</h2>
                <p className="modal-text">Выберите рецепт.</p>
                <button className="modal-button" onClick={onClose}>
                    Ок
                </button>
            </div>
        </div>,
        modalContainer
    );
};


function Recipe() {
    const [buttonText, setButtonText] = useState(null);
    const [ingredients, setIngredients] = useState([]);
    const [container_visibility, setContainer_visibility] = useState("main_container_invisible");
    const [submitClicked, setSubmitClicked] = useState(false);

    const handleSelect = (title) => {
        setButtonText(title);
        setSubmitClicked(true);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = () => {
        if(!submitClicked) {
            setIsModalOpen(true);
            return;
        }

        if (buttonText === dranikiRecipe.title) {
            setIngredients(dranikiRecipe)
        } else if (buttonText === friedPotatoRecipe.title) {
            setIngredients(friedPotatoRecipe)
        } else if (buttonText === friedChampionsInSourCreamRecipe.title) {
            setIngredients(friedChampionsInSourCreamRecipe)
        }

        setContainer_visibility("main_container");
    }

    let dranikiRecipe = {
        title: "Драники",
        image: "https://recipeday.ru/wp-content/uploads/2025/08/file_1275-680x680.jpg",
        ingredient1: "Картофель крупный - 7 шт.",
        ingredient2: "Лук - 1 шт.",
        ingredient3: "Яйцо куриное - 1 шт.",
        ingredient4: "Мука пшеничная - 4 ст.л.",
        ingredient5: "Соль,перец черный молотый - по вкусу",
        ingredient6: "Растительное масло - для жарки",

        step1: "Натрите картофель на крупной или мелкой терке. Размер не имеет значения, это — дело вкуса.",
        step2: "Измельчите лук блендером или на терке. Смешайте с картофелем и отожмите лишний сок через марлю или специальную ткань, чтобы драники получились хрустящими.",
        step3: "В отдельной миске смешайте яйцо со специями. Сюда же можно выдавить один зубчик чеснока, если вы его любите.",
        step4: "Соедините овощную смесь с яйцами, хорошенько перемешайте и добавьте муку. В результате у вас получится что-то вроде густого теста, как на оладьи.",
        step5: "Разогрейте сковороду, смажьте растительным маслом. Выложите тесто столовой ложкой, сформируйте небольшие кружочки, но не слишком толстые, иначе драники получатся сырыми внутри. Жарьте деруны с каждой стороны до золотистости.",
        step6: "Подавайте к столу со сметаной или любой другой подходящей заправкой.",
    }
    let friedPotatoRecipe = {
        title: "Жаренная картошка",
        image: "https://www.russianfood.com/dycontent/images_upl/549/big_548315.jpg",
        ingredient1: "Картофель - 3-4 шт",
        ingredient2: "Подсолнечное масло - 2 ст.л.",
        ingredient3: "Сливочное масло - 1 ст.л.",
        ingredient4: "Соль - по вкусу",
        ingredient5: "Перец черный молотый - по вкусу",

        step1: "Обычно, способ как пожарить картошку у нас меняется в зависимости от того, будет это гарнир, самостоятельное блюдо или просто хрустящее лакомство. Такой рецепт позволяет получить, во-первых, хрустящий картофель, чем-то напоминающий картофель «фри» из заведений быстрого питания. И, во-вторых, объем блюда может варьироваться от одной картошины до бесконечности – было бы желание! Для себя одного я беру 3 картошины среднего размера.",
        step2: "Советую жарить картофель со средним содержанием крахмала – так он не будет разваливаться и будет слегка упругим. Другими словами в результате жарки пюре вы не получите. Очистить картошины, тщательно удаляя «глазки» и повреждения. Поздней весной в картофеле присутствуют темные участки – их надо удалить. Очищенные клубни вымыть и насухо вытереть.",
        step3: "Для жарки я нарезаю картошины на брусочки, толщиной до 10 мм, даже чуть меньше. Клубни продолговатые, нарезайте вдоль – получится длинная «соломка». Сложить нарезку в миску и посолить. Солить надо достаточно щедро, даже немного больше чем обычно вкус соли это важно. Каких либо других специй я не использую. Перемешать картошку с солью и дать ей постоять 2-3 мин, чтобы соль растворилась. После этого добавить 2 ст.л. подсолнечного масла без запаха – практически все масло в магазинах рафинированное и с нейтральным ароматом.",
        step4: "Аромат блюда дает добавка сливочного масла. Часто я использую жировую смесь из растительного и сливочного масла – получается бесподобно. Растопить в сковородке кусочек сливочного масла. Когда оно начнет шипеть, выложить в него весь подготовленный картофель и перемешать. Перемешивайте широкой лопаткой, это удобно и нет возможности значительно повредить форму нарезки.",
        step5: "Итак, как пожарить картошку, чтобы было очень вкусно. Жарить надо на сильном огне, не накрывая сковородку крышкой. Важный момент – надо практически непрерывно перемешивать нарезку для равномерной обжарки. Кроме того, при помешивании кусочки не слипаются. Обычно, блюдо готово через 15 мин. По желанию, можно немного увеличить время, для получения более сильного румянца.",
        step6: "Не пережаривайте – картошины нарезаны достаточно тонко, и очень легко пересушиваются, как чипсы, или темнеют. Степень и качество обжарки отличается от «фри», так как жарка во фритюре происходит одновременно по всей поверхности. В нашем случае приходится перемешивать, и поверхность обжаривается не идеально равномерно. Готовую картошку можно сразу подавать. Или, если считаете нужным, выложить ее на бумажную салфетку, чтоб та впитала остатки жира.",
    }
    let friedChampionsInSourCreamRecipe = {
        title: "Жареные шампиньоны в сметане",
        image: "https://kopilka-kulinara.ru/upload/information_system_57/2/7/1/item_2712/item_2712.webp",
        ingredient1: "Шампиньоны - 700 гр",
        ingredient2: "Лук - 2 шт.",
        ingredient3: "Сметана - 200 гр",
        ingredient4: "Соль,перец черный молотый - по вкусу",
        ingredient5: "Растительное масло - для жарки",

        step1: "Мытые грибы разрежьте на четыре части. Если грибы крупные порежьте их тонкими пластинами.",
        step2: "Лук порежьте полукольцами.",
        step3: "Разогрейте сковороду, добавьте растительное масло и выложите грибы. Жарить грибы на среднем огне периодически помешивая.",
        step4: "Грибы жарить до тех пор пока не исчезнет вся жидкость. Добавить лук, перемешать. Жарить грибы и лук до золотистого цвета.",
        step5: "Добавить сметану, соль и перец. Перемешать. Когда сметана закипит, сковороду накрыть крышкой и тушить на медленном огне 10-15 минут.",
        step6: "Жареные грибы с луком со сметаной готовы. Приятного аппетита!",
    };



    return (
        <div>
            <div className="choose_recipe_container">
                <RecipeItem{...dranikiRecipe} onSelect={handleSelect}/>
                <RecipeItem{...friedPotatoRecipe} onSelect={handleSelect}/>
                <RecipeItem{...friedChampionsInSourCreamRecipe} onSelect={handleSelect}/>
            </div>
            <div className="button_container">
                <button className="button" onClick={() => {  //disabled={!submitClicked}
                    handleSubmit()
                }}>
                    {buttonText ? `Выбрать ${buttonText}` : "Выберите рецепт"}
                </button>
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    modalContainer={document.getElementById("modal-root")}
                />
            </div>
            <div className={container_visibility}>
                <Ingredients {...ingredients} />
                <Step {...ingredients}/>
                <Footer/>
            </div>
        </div>
    )
}

export default Recipe