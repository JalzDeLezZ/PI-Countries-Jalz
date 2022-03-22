/* 
export const  isText = (value) => { 
    return !/[^A-Za-z\s\,]/.test(value)
}
export const  isEmail = (value) => { 
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
} */

export const expretion = {
    // text : (inn) => {return !/[^A-Za-z\s\,]/.test(inn)},
    texto: /^[a-zA-Zs]{2,45}$/m,
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    difficulty: /^[1-5]{1}$/m,
    duration: /^(1[0-2]|[1-9])$/m
}