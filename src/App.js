import './App.css';

function App() {
  const recipes = [
    {
      picture: "https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1",
      name: "Paneer butter masala"
    },
    {
      picture: "https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__1200_0_0_0_auto.jpg",
      name: "Biryani"
    },
    {
      picture: "https://www.honeywhatscooking.com/wp-content/uploads/2020/10/Baked-Gobi-Manchurian43.jpg",
      name: "Gobi manchurian"
    },
    {
      picture: "https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/malabar_parotta.jpg",
      name: "Parotta"
    },
    {
      picture: "https://www.cookingclassy.com/wp-content/uploads/2018/08/tandoori-chicken-11-500x500.jpg",
      name: "Chicken tandoori"
    }
  ];
  return (
    <div className="App">
      <div className="recipe-list-container">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-container">
            <img className="recipe-picture" src={recipe.picture} alt={recipe.name} />
            <p className="recipe-name">{recipe.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
