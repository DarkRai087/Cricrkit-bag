import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [invoiceItems, setInvoiceItems] = useState([]);

  const subtotal = (paymentSuccess ? invoiceItems : cartItems).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const gstRate = 0.08;
  const gstAmount = subtotal * gstRate;
  const total = subtotal + gstAmount;

  useEffect(() => {
    if (cartItems.length > 0 && !paymentSuccess) {
      setInvoiceItems([...cartItems]);
    }
  }, [cartItems, paymentSuccess]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInvoiceItems([...cartItems]);
    setTimeout(() => {
      setPaymentSuccess(true);
      dispatch(clearCart());
    }, 1000);
  };

  const handleContinueShopping = () => {
    navigate('/');
  };

  if (cartItems.length === 0 && !paymentSuccess) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
          <Link to="/" className="text-blue-500 hover:underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

      {paymentSuccess ? (
        <div className="text-center">
          <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={200} />
          <div className="mb-8">
            <div className="inline-block bg-green-500 rounded-full p-4 animate-bounce">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">Payment Successful!</h2>
            <p className="text-gray-600 mt-2">Thank you for your purchase.</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 max-w-lg mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Invoice</h3>
            <div className="border-b pb-4 mb-4">
              <p className="text-gray-600">Billed to: {formData.name}</p>
              <p className="text-gray-600">
                Address: {formData.address}, {formData.city}, {formData.postalCode}
              </p>
            </div>
            <div className="mb-4">
              {invoiceItems.map(item => (
                <div key={item.id} className="flex justify-between mb-2">
                  <span className="text-gray-600">
                    {item.title} (x{item.quantity})
                  </span>
                  <span className="text-gray-800">₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-800">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">GST (8%)</span>
                <span className="text-gray-800">₹{gstAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold text-gray-800">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleContinueShopping}
            className="mt-6 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Shipping Information</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="address">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <label className="block text-gray-700 mb-2" htmlFor="city">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 mb-2" htmlFor="postalCode">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">Payment Information</h2>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="cardNumber">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <label className="block text-gray-700 mb-2" htmlFor="expiry">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 mb-2" htmlFor="cvv">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors mt-6"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between mb-2">
                  <span className="text-gray-600">
                    {item.title} (x{item.quantity})
                  </span>
                  <span className="text-gray-800">₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">GST (8%)</span>
                  <span className="text-gray-800">₹{gstAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-gray-800">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;