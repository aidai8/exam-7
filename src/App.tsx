import './App.css';
import { useState } from 'react';
import OrderDetails from './components/OrderDetails.tsx';
import ItemList from './components/ItemList';

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

export default App;