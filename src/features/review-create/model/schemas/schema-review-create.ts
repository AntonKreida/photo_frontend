import { z } from "zod";


const extension = ["image/png", "image/jpeg", "image/jpg"];

export const ReviewSchema = z.object({
  author: z.string({ required_error: "Укажите свое имя!" }).min(1, "Укажите свое имя!"),
  description: z.string({ required_error: "Оставьте свой отзыв!" }).min(1, "Оставьте свой отзыв!"),
  image: z.instanceof(File, { message: "Выберите фотографию для отзыва!" })
    .refine((file) => file.size <= 2000000, { message: "Размер фотографии не должен превышать 2 МБ" })
    .refine((file) => extension.includes(file.type), { message: "Фотография должна быть в формате png, jpeg, jpg" })
    .optional()
});

export type TReviewSchemaDto = z.infer<typeof ReviewSchema>;
