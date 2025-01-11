import React from 'react';

type OrderItem = {
    id: number;
    name: string;
    price: number;
    count: number;
};

const OrderDetails: React.FC<{ order: OrderItem[]; removeItem: (id: number) => void }> = ({ order, removeItem }) => {
    const totalPrice = order.reduce((sum, item) => sum + item.price * item.count, 0);

    return (
        <div className="order-details">
            <h2>Order Details:</h2>
            <hr />
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
                    <hr />
                    <h3>Total price: {totalPrice} KGS</h3>
                </div>
            )}
        </div>
    );
};

export default OrderDetails;