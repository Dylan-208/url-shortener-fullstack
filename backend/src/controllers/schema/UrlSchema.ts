import { object, string } from "yup";

export const urlBase = object().shape({
  url: string().required("Url é necessária").url("O formato deve ser uma url"),
});

export const slugBase = object().shape({
  slug: string().required(),
});
