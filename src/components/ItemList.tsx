import React from 'react';
import foodIcon from '../assets/icons/food-icon.png';
import drinkIcon from '../assets/icons/drink-icon.png';

const ItemList: React.FC<{ addToOrder: (item: { id: number; name: string; price: number }) => void }> = ({ addToOrder }) => {
    const items = [
        { id: 1, name: 'Hamburger', price: 80, category: 'food' },
        { id: 2, name: 'Cheeseburger', price: 90, category: 'food' },
        { id: 3, name: 'Fries', price: 45, category: 'food' },
        { id: 4, name: 'Coffee', price: 70, category: 'drink' },
        { id: 5, name: 'Tea', price: 50, category: 'drink' },
        { id: 6, name: 'Cola', price: 40, category: 'drink' },
    ];

    const foodItems = items.filter(item => item.category === 'food');
    const drinkItems = items.filter(item => item.category === 'drink');

    return (
        <div className="item-list">
            <h2>Add items:</h2>
            <hr />

            <div className="item-buttons">
                <div className="category">
                    <h3>Food</h3>
                    {foodItems.map((item) => (
                        <button key={item.id} onClick={() => addToOrder(item)}>
                            <img src={foodIcon} alt="Food Icon" style={{ width: '20px', marginRight: '8px' }} />
                            {item.name} - {item.price} KGS
                        </button>
                    ))}
                </div>

                <div className="category">
                    <h3>Drinks</h3>
                    {drinkItems.map((item) => (
                        <button key={item.id} onClick={() => addToOrder(item)}>
                            <img src={drinkIcon} alt="Drink Icon" style={{ width: '20px', marginRight: '8px' }} />
                            {item.name} - {item.price} KGS
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ItemList;