import { Button } from "react-bootstrap";

const CartTable = ({ cart, setCart }) => {
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const removeItem = (item) => {
    setCart(cart.filter((i) => i.id !== item.id));
  }; 

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Shopping Cart</h5>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${item.price * item.quantity}</td>
                <td>
                  <Button variant="danger" onClick={() => removeItem(item)}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="3">Total Price</td>
              <td>${calculateTotalPrice()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartTable;