import { body } from "express-validator";

export const movieCreateValidation = ()=> {
    return [
        body("title").isString().withMessage("O título é obrigatório."),
        body("rating").isNumeric().withMessage("A nota é um numero.")
        .custom((value: number) => {
            if(value < 0 || value > 10){
                throw new Error("A nota deve ser um numero entre 0 e 10");
            }
            return true;
        }),
        body("description").isString().withMessage("A descrição é obrigatória."),
        body("director").isString().withMessage("O diretor é obrigatório."),
        body("poster").isURL().withMessage("A imagem precisa ser uma URL."),
    ]
}
