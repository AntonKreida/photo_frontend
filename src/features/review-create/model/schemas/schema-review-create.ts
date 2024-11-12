import { z } from "zod";


export const ReviewSchema = z.object({
  author: z.string({ required_error: "Укажите свое имя!" }).min(1, "Укажите свое имя!"),
  description: z.string({ required_error: "Оставьте свой отзыв!" }).min(1, "Оставьте свой отзыв!"),
  image: z.instanceof(File, { message: "Выберите фотографию для отзыва!" }).optional(),
});

export type TReviewSchemaDto = z.infer<typeof ReviewSchema>;
