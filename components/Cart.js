import styled from "styled-components";
import CartStyles from "./styles/CartStyles";
import formatMoney from "../lib/formatMoney";
import { useUser } from "./User";
import calcTotalPrice from "../lib/calcTotalPrice";
import CloseButton from "./styles/CloseButton";
import { useCart } from "../Context/cartState";
import RemoveFromCart from "./RemoveFromCart";
import { Checkout } from "./Checkout";

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
    width: 100px;
  }
  h3,
  p {
    margin: 0;
  }
  @media all and (max-width: 850px) {
    img {
      width: 50px;
      align-self: center;
    }
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const LoggedUserCartStyle = styled.h2`
  @font-face {
    font-family: "ZCOOL QingKe HuangYou";
    src: url("/static/ZCOOLQingKeHuangYou-Regular.ttf") format("ttf");
    font-weight: normal;
    font-style: normal;
  }
  font-family: ZCOOL QingKe HuangYou;
  font-size: 3rem;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  padding: 0 20px;
  margin: 0;
  background-color: var(--green);
  color: white;
  line-height: 5rem;
  @media all and (max-width: 850px) {
    font-size: 2rem;
  }
`;

function CartItem({ cartItem }) {
  const { product } = cartItem;
  if (!product) return null;
  return (
    <CartItemStyles>
      <img src={product.photo[0].image.publicUrlTransformed} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>
          {formatMoney(product.price * cartItem.quantity)} -
          <em>
            {cartItem.quantity} &times; {formatMoney(product.price)} each
          </em>
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </CartItemStyles>
  );
}

export default function Cart() {
  const me = useUser();
  const { cartOpen, closeCart } = useCart();
  if (!me) return null;
  return (
    <CartStyles open={cartOpen}>
      <header>
        <LoggedUserCartStyle>{me.name}&apos;s Cart</LoggedUserCartStyle>
        <CloseButton onClick={closeCart}>&times;</CloseButton>
      </header>
      <ul>
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{formatMoney(calcTotalPrice(me.cart))}</p>
        <Checkout />
      </footer>
    </CartStyles>
  );
}
