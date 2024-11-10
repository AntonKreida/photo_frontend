import { z } from "zod";


export const ReviewSchema = z.object({
  author: z.string({ required_error: "Укажите свое имя!" }).min(1, "Укажите свое имя!"),
  description: z.string({ required_error: "Оставьте свой отзыв!" }).min(1, "Оставьте свой отзыв!"),
});

export type TReviewSchemaDto = z.infer<typeof ReviewSchema>;
