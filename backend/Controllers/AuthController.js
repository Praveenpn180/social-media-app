import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { doSms , verifyOtp } from "../helpers/twilioHelper.js";


// Registering new user
export const registerUser = async (req, res) => {


    // hashing using bcrypt



    const { email,phone } = req.body
    try {

        const oldUser = await UserModel.findOne({ email })
        if (oldUser) {
            return res.status(400).json({ message: "Email is already registerd" })
        }else{
            const oldPhone = await UserModel.findOne({phone})
            if (oldPhone) {
                return res.status(400).json({ message: "Phone Number is already registerd" })
            }else{
                const otpSend = await doSms(phone)

                if (otpSend) {
                    return res.status(200).json(true)
                }

            }
            
        }
        

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const otpVerification = async (req, res) => {
    console.log(req);
    try {
        const { firstName, lastName, email, password, phone, otpcode } = req.body

        const optVerify = await verifyOtp(phone, otpcode)
        console.log(optVerify+"hwdew");
        if (optVerify) {
            // Hash password
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            // Create User
            const user = await UserModel.create({
                firstName, lastName, email, phone,
                password: hashedPassword
            })

            if (user) {
                return res.status(201).json({
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phone: user.phone,
                    token: generateTocken(user._id)
                })
            }
        } else {
            return res.status(400).json({ message: 'Invalid OTP' })

        }
    } catch (error) {
      return  res.status(500).json({ message: error.message });
    }


}

//login user
export const loginUser = async (req, res) => {

    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ username: username ,block:false})

        if (user) {
            const validity = await bcrypt.compare(password, user.password)

            if (!validity) {
                res.status(400).json({message:"Wrong password"})
            } else {
                //jwt create
                const token = jwt.sign({
                    username: user.username, id: user._id
                }, process.env.JWT, { expiresIn: "5h" })
                res.status(200).json({ user, token ,message:"success"})

            }



        } else {
            res.status(400).json({message:"User Does not exists"})
            console.log("user blocked");
           
        }
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
   
}