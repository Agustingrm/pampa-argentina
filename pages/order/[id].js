import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Head from "next/head";
import ErrorMessage from "../../components/ErrorMessage";
import OrderStyles from "../../components/styles/OrderStyles";
import formatMoney from "../../lib/formatMoney";
import styled from "styled-components";

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order: Order(where: { id: $id }) {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

const BoldSpanStyles = styled.span`
  font-weight: bold;
`;

export default function SingleOrderPage({ query }) {
  const { data, error, loading } = useQuery(SINGLE_ORDER_QUERY, {
    variables: { id: query.id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage error={error} />;
  const { order } = data;
  return (
    <OrderStyles>
      <Head>
        <title>Pampa Argentina - Order</title>
      </Head>
      <p>
        <span>Order Id:</span>
        <span>{order.id}</span>
      </p>
      <p>
        <span>Charge:</span>
        <span>{order.charge}</span>
      </p>
      <p>
        <span>Order Total:</span>
        <span>{formatMoney(order.total)}</span>
      </p>
      <p>
        <span>ItemCount:</span>
        <span>{order.items.length}</span>
      </p>
      <div className="items">
        {order.items.map((item) => (
          <div className="order-item" key={item.id}>
            <img src={item.photo[0].image.publicUrlTransformed} alt={item.title} />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p className="purchase-description">
                <BoldSpanStyles>Quantity:</BoldSpanStyles> {item.quantity}
              </p>
              <p>
                <BoldSpanStyles>Each:</BoldSpanStyles> {formatMoney(item.price)}
              </p>
              <p>
                <BoldSpanStyles>Sub Total:</BoldSpanStyles> {formatMoney(item.price * item.quantity)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </OrderStyles>
  );
}
