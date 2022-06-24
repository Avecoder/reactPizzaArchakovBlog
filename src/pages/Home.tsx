import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Pagination from '../components/Pagination'
import Skeleton from '../components/PizzaBlock/Skeleton'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setSort, setCurrentPage, setFilters } from '../redux/slices/filterSlice'
import { fetchPizza } from '../redux/slices/pizzasSlice'
import { useState, useEffect, useContext } from 'react'
import { list } from '../components/Sort'
import axios from 'axios'




const Home = () => {

  const dispatch = useDispatch()
  const { categoryId, sortType, currentPage, searchValue } = useSelector(state => state.filter)
  const { items, status } = useSelector(state => state.pizza)
  const navigate = useNavigate()


  const setCategoryId = i => {
    dispatch(setCategory(i))
  }

  const setSortType = item => {
    dispatch(setSort(item))
  }


  useEffect(() => {
    if(window.location.search) {
      const params = qs.parse(window.location.search.substring(1))

      const sort = list.find(obj => obj.sortProperty === params.sortProperty)


      dispatch(setFilters({
        ...params,
        sort
      }))
    }
  }, [])

  const fetchPizzas = async () => {

    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    const params = {
      sortBy,
      order,
      category,
      search,
      currentPage
    }

    dispatch(fetchPizza(params))

    window.scroll(0, 0)
  }

  useEffect(() => {
    fetchPizzas()
    const queryString = qs.stringify({
      sortProperty: sortType.sortProperty,
      categoryId,
      currentPage
    })

    console.log(queryString)

    navigate(`?${queryString}`)

  }, [categoryId, sortType, searchValue, currentPage])




  const pizzas = items.filter(obj => {
    if(obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
      return true
    }
    return false
  }).map((obj) => <PizzaBlock  {...obj} key={obj.id}/>)


  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)

  const onChangePage = number => {
    dispatch(setCurrentPage(number))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} setCategoryId={setCategoryId}></Categories>
        <Sort sortType={sortType} setSortType={setSortType}></Sort>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {
        status === 'error' ? (
          <div className="content__error-info">
            <h2>Произошла ошибка <icon>😕</icon></h2>
            <p>К сожалению, не удалось получить пиццы. Попробуйте повторить попытку позже.</p>
          </div>
        )
        : (
          <div className="content__items">
            { status === 'loading'
              ? skeleton
              : pizzas
            }
          </div>
        )
      }
      <Pagination currentPage={currentPage} onChangePage={onChangePage}></Pagination>
    </div>
  )
}


export default Home
