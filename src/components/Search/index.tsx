import { useContext, useRef, useState, useCallback } from 'react'

import styles from './Search.module.scss'
import debounce from 'lodash.debounce'

import { useDispatch } from 'react-redux'
import { setSearchValue } from '../../redux/slices/filterSlice'


const Search = () => {
  const dispatch = useDispatch()


  const [value, setValue] = useState('')

  const inputRef = useRef()

  const onClickClear = () => {
    setValue('')
    dispatch(setSearchValue(''))
    inputRef.current.focus()
  }

  const updateSearchValue = useCallback(
    debounce(str => {
      dispatch(setSearchValue(str))
    }, 250),
    []
  )

  const onChangeInput = e => {
    setValue(e.target.value)
    updateSearchValue(e.target.value)
  }

  return (
    <div className={styles.root}>
      <input
        onChange={onChangeInput}
        value={value}
        className={styles.input}
        type="text" placeholder="Поиск пиццы..."
        ref={inputRef}
      />
      {
        value.length > 0 && <span className={styles.clean} onClick={onClickClear}>Очистить</span>
      }
    </div>

  )
}


export default Search
