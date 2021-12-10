import slugify from "slugify";

const titleToSlug = (title: string): string => {
  return slugify(title, {
    lower: true,
    strict: true,
    locale: "pt-BR",
  });
};

export default titleToSlug;
