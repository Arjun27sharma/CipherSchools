const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")


const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : [true, "Please Enter your first name"],
        maxLength : [30, "Name cannot exceed 30 characters"],
        minLength : [4, "Name should have more than 4 characters"]
    },
    lastname : {
        type : String,
        required : [true, "Please Enter your last name"],
        maxLength : [30, "Name cannot exceed 30 characters"],
        minLength : [4, "Name should have more than 4 characters"]
    },
    email : {
        type : String,
        required : [true, "Please Enter your Email"],
        unique : true,
        validate : [validator.isEmail, "Please Enter a valid Email"]
    },
    password : {
        type : String,
        required : [true, "Please Enter your Password"],
        minLength : [8, "Password should be greater than 8 characters"],
        select : false
    },
    phone : {
        type : String,
        minLength : [10, "Password should be greater than 8 characters"],
    },
    avatar : {
            public_id : {
                type : String,
                required : true
            },
            url : {
                type : String,
                required : true
            }
    },
    about : {
        type : String
    },
    links : {
        linkedin : {
            type : String,
        },
        github : {
            type : String,
        },
        facebook : {
            type : String,
        },
        instagram : {
            type : String,
        },
        twitter : {
            type : String,
        },
        web : {
            type : String,
        }

    },
    professional : {
        highesteducation:{
            type : String,
        },
        role : {
            type : String
        }
    },
    interest : {
        type : Array,
    },

    resetPasswordToken : String,
    resetPasswordExpire : Date,
})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10);

})

//JWT TOKEN
userSchema.methods.getJWTToken = function(){
    return jwt.sign(
        {id : this._id}, 
        process.env.JWT_SECRET, 
        {expiresIn : process.env.JWT_EXPIRE,}
    )
}

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}


//generating password reste token
userSchema.methods.getResetPasswordToken = function () {

    //generating token
    const resetToken = crypto.randomBytes(20).toString("hex");

    //Hashing the resetToken and adding it to the userschema
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    this.resetPasswordExpire = Date.now() + 15*60*1000;

    return resetToken;
}


module.exports = mongoose.model("User", userSchema)