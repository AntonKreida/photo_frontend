import { z } from "zod";
import { FileWithPreview } from "@shared/";


export const ReviewSchema = z.object({
  author: z.string({ required_error: "Укажите свое имя!" }).min(1, "Укажите свое имя!"),
  description: z.string({ required_error: "Оставьте свой отзыв!" }).min(1, "Оставьте свой отзыв!"),
  image: z.instanceof(FileWithPreview, { message: "Выберите фотографию для отзыва!" }),
});

export type TReviewSchemaDto = z.infer<typeof ReviewSchema>;
