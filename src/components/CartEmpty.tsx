import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

const CartEmpty = (props) => {
  return (
    <div class="cart cart--empty">
      <h2>Корзина пустая <icon>😕</icon></h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.<br/>
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src="../src/assets/img/empty-cart.png" alt="Empty cart"/>
      <Link to="/" class="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  )
}

export default CartEmpty
