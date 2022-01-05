import Link from "next/link";
import ItemStyles from "./styles/ItemStyles";
import Title from "./styles/Title";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";
import Image from "next/image";

export default function Product({ product }) {
  return (
    <ItemStyles>
      <img src={product?.photo[0]?.image?.publicUrlTransformed} alt={product.name} />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <p>{product.description}</p>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
    </ItemStyles>
  );
}
