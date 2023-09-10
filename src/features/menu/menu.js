import React from 'react';
import '../../assests/css/menu.css'

const Menu = () => {
  // Define your menu data with items and prices
  const menuData = [
    { item: 'Spaghetti Bolognese', price: '$10.99' },
    { item: 'Fish and Chips', price: '$12.99' },
    { item: 'Chicken Nuggets', price: '$8.99' },
    { item: 'Spaghetti Bolognese', price: '$10.99' },
    { item: 'Fish and Chips', price: '$12.99' },
    { item: 'Chicken Nuggets', price: '$8.99' },
    { item: 'Spaghetti Bolognese', price: '$10.99' },
    { item: 'Fish and Chips', price: '$12.99' },
    { item: 'Chicken Nuggets', price: '$8.99' },
    { item: 'Spaghetti Bolognese', price: '$10.99' },
    { item: 'Fish and Chips', price: '$12.99' },
    { item: 'Chicken Nuggets', price: '$8.99' },
    // Add more menu items as needed
  ];

  return (
    <section className="align-items-center d-flex justify-content-center menu">
      <ul className='text-center w-75'>
        {menuData.map((menuItem, index) => (
          <li key={index}>
            {menuItem.item} - {menuItem.price}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
