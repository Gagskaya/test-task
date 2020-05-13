import React, { useState } from 'react'
import classNames from 'classnames'

export const Sort = ({ sortData, orderData }) => {
  const [activeSort, setActiveSort] = useState('id');
  const [activeOrder, setActiveOrder] = useState('increase');
  const sortItems = (name) => {
    setActiveSort(name);
    sortData(name);
  }
  const orderItems = name => {
    setActiveOrder(name);
    orderData(name);
  }
  return (
    <div className="app__sort">
      <h4 className="app__sort-title">
        Сортировка
          </h4>
      <div className="app__sort-tabs">
        <span name='id' className={classNames('tab', activeSort === 'id' && 'active')} onClick={() => sortItems('id')} >ID</span>
        <span name="name" className={classNames('tab', activeSort === 'name' && 'active')} onClick={() => sortItems('name')} >Имя</span>
        <span name="age" className={classNames('tab', activeSort === 'age' && 'active')} onClick={() => sortItems('age')}>Возраст</span>
      </div>
      <div className="app__sort-tabs">
        <span name="increase" className={classNames('tab', activeOrder === 'increase' && 'active')} onClick={() => orderItems('increase')}>По возрастанию</span>
        <span name="decrease" className={classNames('tab', activeOrder === 'decrease' && 'active')} onClick={() => orderItems('decrease')}>По убыванию</span>
      </div>
    </div>
  )
}
