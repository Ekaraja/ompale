import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail';

const userSchema = new mongoose.Schema(

    {

        username : {
            type : String,
            required : [true, 'Username est obligatoire !'],
            unique: [true, 'Ce username existe déjà. Choississez un autre.'],
            maxlength: [15, 'Votre username peut avoir 15 charactères max !'],
            minlength: [6, 'Votre username doit au moins avoir 6 charactères !']
        },
        email : {
            type: String,
            required: [true, 'Email est obligatoire !'],
            unique: [true, 'Ce compte existe déjà. Créez un autre.'],
            lowercase: true,
            validate: [isEmail, "Ajoutez un compte d'émail validé ! "]
        },
        password: {
            type: String,
            required: [true, 'Mot de pass est obligatoire !'],
            minlength: [6, 'Votre mot de pass doit au moin avoir 6 charactères !'],
            maxlength: 15,
        },
        // confirmPassword: {
        //     type: String,
        //     required: [true, 'Confirmez votre mot de pass !']
        // }
    }

)
