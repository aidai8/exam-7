import React from 'react';

const ItemList: React.FC<{ addToOrder: (item: { id: number; name: string; price: number }) => void }> = ({ addToOrder }) => {
    const items = [
        { id: 1, name: 'Hamburger', price: 80 },
        { id: 2, name: 'Cheeseburger', price: 90 },
        { id: 3, name: 'Fries', price: 45 },
        { id: 4, name: 'Coffee', price: 70 },
        { id: 5, name: 'Tea', price: 50 },
        { id: 6, name: 'Cola', price: 40 },
    ];

    return (
        <div className="item-list">
            <h2>Add items:</h2>
            <hr />
            <div className="item-buttons">
                {items.map((item) => (
                    <button key={item.id} onClick={() => addToOrder(item)}>
                        {item.name} - {item.price} KGS
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ItemList;
