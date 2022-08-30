import * as Yup from 'yup';

export type Product = {
  id: string,
  title: string,
  description: string,
  imageUrl: string,
  price: number,
  count: number,
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  // imageUrl: Yup.string().required(),
  price: Yup.number().required(),
  count: Yup.number().required(),
});
