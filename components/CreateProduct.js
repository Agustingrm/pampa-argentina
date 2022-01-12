import gql from "graphql-tag";
import useForm from "../lib/useForm";
import Form from "./styles/Form";
import DisplayError from "./ErrorMessage";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ALL_PRODUCTS_QUERY } from "./Products";
import Router from "next/router";

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $description: String!
    $price: Int!
    $image: [ProductImageCreateInput]
  ) {
    createProduct(
      data: { name: $name, description: $description, price: $price, photo: { create: $image } }
    ) {
      id
      price
      description
      name
    }
  }
`;

export default function CreateProduct() {
  const [imageAmount, setImageAmount] = useState([]);
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    image: [],
    name: "",
    price: 0,
    description: "",
  });
  const [createProduct, { loading, error, data }] = useMutation(CREATE_PRODUCT_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
  });

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        // Submit the inputfields to the backend
        const photoItems = Array.from(inputs.image).map((fileItem) => ({
          image: fileItem,
          altText: inputs.name,
        }));
        inputs.image = photoItems;
        const res = await createProduct();
        clearForm();
        // Redirect to product page after uploading
        Router.push({
          pathname: `/product/${res.data.createProduct.id}`,
        });
      }}
    >
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="image">
          Image or Images
          <input required type="file" id="image" name="image" onChange={handleChange} multiple />
        </label>
        <label htmlFor="name">
          Name of the Product
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price of the Product
          <input
            type="number"
            id="price"
            name="price"
            placeholder="price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description of the Product
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Product</button>
      </fieldset>
    </Form>
  );
}

export { CREATE_PRODUCT_MUTATION };
