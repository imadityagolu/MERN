import { useState } from 'react';
import { MdShoppingCart } from "react-icons/md";

const initialCart = [
  { id: 1, name: 'iPhone 16 Pro', price: 399.99, image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/312743853/CM/HM/IA/4630526/apple-iphone-14-pro-max-128gb-deep-purple-mobile-phone-1000x1000.png' },
  { id: 2, name: 'Google Pixel', price: 499.99, image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1723573859/Croma%20Assets/Communication/Mobiles/Images/309160_0_ccr72w.png?tr=w-360' },
  { id: 3, name: 'Xiaomi Redmi Note 2', price: 199.99, image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718891338/Croma%20Assets/Communication/Mobiles/Images/307339_0_ioldto.png?tr=w-360' },
  { id: 4, name: 'Samsung Galaxy S7', price: 299.99, image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1737619515/Croma%20Assets/Communication/Mobiles/Images/313341_0_ddny1b.png?tr=w-360' },
].map((product) => ({ ...product, quantity: 1 }));

function App() {
  const [cart, setCart] = useState(initialCart);

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="">
        <header className="w-full bg-indigo-600 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">My Cart</h1>
          <div className="flex items-center space-x-2">
            <MdShoppingCart className="text-2xl" />
            <span className="text-sm rounded-xl border p-2">{totalItems}</span>
          </div>
        </header>
      </div>

      <div className="max-w-4xl mx-auto p-4 min-h-screen flex flex-col items-center">
        <h2 className="text-3xl font-bold">Your Items</h2>

        <div className="mt-5 w-full max-w-2xl">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">Cart is empty</p>
          ) : (
            <div className="space-y-1">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-white rounded-lg shadow">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-indigo-600 text-sm mt-1 hover:underline"
                    >
                      remove
                    </button>
                  </div>
                  <div className="flex items-center space-x-2 mt-5">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center hover:bg-indigo-700"
                    >
                      -
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center hover:bg-indigo-700"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-1 w-full max-w-2xl flex justify-between items-center p-4 bg-white">
          <p className="text-lg font-semibold">Total Price = </p>
          <div className="flex items-center space-x-4">
            <p className="text-lg font-semibold">${totalCost.toFixed(2)}</p>
            
          </div>
        </div>


        <div>
        <button
              onClick={clearCart}
              className="bg-indigo-200 text-indigo-800 px-4 py-2 rounded hover:bg-indigo-400"
            >
              Clear all items from Cart
            </button>
        </div>

      </div>
    </>
  );
}

export default App;