import validator from "validator";
import { z } from "zod";


const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/gi;

export const schemaFeedback = z.object({
  name: z.string({ required_error: "Укажите свое имя!" }).min(1, "Укажите свое имя!"),
  phone: z.string({ required_error: "Оставьте свой телефон!" }).min(1, "Оставьте свой телефон!").regex(phoneRegex, "Не правильный формат номера!"),
  message: z.string().optional(),
}).refine((data) => validator.isMobilePhone(data.phone.replace(/[\s()-]/gi,""), ["ru-RU", "kk-KZ", "uk-UA", "be-BY"]), {
  message: "Не правильный формат номера",
  path: ["clientPhone"],
});

export type TSchemaFeedbackDto = z.infer<typeof schemaFeedback>;
