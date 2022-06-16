import './css/menu.css'

const Menu = ({ data }) => {
  return (
    <nav id="d-menu">
      {data.categories.map((el) => (
        el.subCategories.length > 0 ? (
          <span key={el.id}>
            {el.name} <span>⌵</span>
            <ul>
              {el.subCategories.map((subCat) => (
                <li key={subCat.id}>{subCat.name}</li>
              ))}
            </ul>
          </span>
        ) : (
        <span key={el.id}>{el.name}</span>
        )
      ))}
    </nav>
  )
}

export default Menu