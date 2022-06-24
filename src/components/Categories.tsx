import {useState} from 'react'


const Categories = ({categoryId, setCategoryId}) => {

  const [categories, setCategories] = useState([
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
  ])

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) =>
          <li
            className={categoryId === i ? 'active' : ''}
            onClick={() => setCategoryId(i)}
            key={i}
          >{item}</li>
        )}
      </ul>
    </div>
  )
}

export default Categories
