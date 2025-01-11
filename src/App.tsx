import './App.css'
import React, { useState } from 'react';

type OrderItem = {
    id: number;
    name: string;
    price: number;
    count: number;
};

const App = () => {
    const [order, setOrder] = useState<OrderItem[]>([]);

    const addToOrder = (item: { id: number; name: string; price: number }) => {
        setOrder((prevOrder) => {
            const existingItem = prevOrder.find((i) => i.id === item.id);
            if (existingItem) {
                return prevOrder.map((i) =>
                    i.id === item.id ? { ...i, count: i.count + 1 } : i
                );
            }
            return [{ ...item, count: 1 }, ...prevOrder];
        });
    };

    const removeItem = (id: number) => {
        setOrder((prevOrder) => prevOrder.filter((item) => item.id !== id));
    };

    return (
        <div className="app">
            <OrderDetails order={order} removeItem={removeItem} />
            <ItemList addToOrder={addToOrder} />
        </div>
    );
};

const OrderDetails: React.FC<{ order: OrderItem[]; removeItem: (id: number) => void }> = ({ order, removeItem }) => {
    const totalPrice = order.reduce((sum, item) => sum + item.price * item.count, 0);

    return (
        <div className="order-details">
            <h2>Order Details:</h2>
            <hr></hr>
            {order.length === 0 ? (
                <p>Order is empty! Please add some items!</p>
            ) : (
                <div>
                    <ul>
                        {order.map((item) => (
                            <li key={item.id}>
                                {item.name} x{item.count} - {item.price * item.count} KGS
                                <button onClick={() => removeItem(item.id)}>X</button>
                            </li>
                        ))}
                    </ul>
                    <hr></hr>
                    <h3>Total price: {totalPrice} KGS</h3>
                </div>
            )}
        </div>
    );
};

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
            <hr></hr>
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

export default App;
