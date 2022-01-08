import styled from "styled-components";
import CartStyles from "./styles/CartStyles";
import formatMoney from "../lib/formatMoney";
import { useUser } from "./User";
import calcTotalPrice from "../lib/calcTotalPrice";
import CloseButton from "./styles/CloseButton";
import { useCart } from "../Context/cartState";
import RemoveFromCart from "./RemoveFromCart";

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
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
`;

function CartItem({ cartItem }) {
  const { product } = cartItem;
  if (!product) return null;
  console.log(product);
  return (
    <CartItemStyles>
      <img width="100" src={product.photo[0].image.publicUrlTransformed} alt={product.name} />
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
  console.log(me);
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
      </footer>
    </CartStyles>
  );
}
