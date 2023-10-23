const jwt = require('jsonwebtoken')
const User = require('../models/User')

const generateToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, proccess.env.JWT_SECRET, {expiresIn: '1h'}, (err, token) => {
      if(err){
        reject(err)
      }
      resolve(token)
    })
  })
}

class AuthController{
  async Register(req, res, next) {
    const { email, password, fullName, birthDate, cellphone } = req.body
    try {
      let userEmail = User.findOne({email})
      if (userEmail) {
        return (res.status(400).json({message:'User already exists'}))
      }
      const user = new User({
        email,
        password,
        fullName,
        birthDate,
        cellphone
      })

      await user.save()

      const payload = {
        userId: user.id
      }

      const token = generateToken(payload)

      res.status(201).json({ email, password, fullName, birthDate, cellphone, token })


    } catch (error) {
      console.log(error);
      console.log(error.message);
      res.status(500).send('server error')
    }
  }
  async login(req, res, next) {
    const { email, password } = req.body
    try {
      let user = await User.findOne({ email })
      if (!user) {
        return res.status(400).json({ message: 'User does not exist' })
      }
      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' })
      }
      const payload = {
        userId: user.id,
        email: user.email,
        fullName: user.fullname,
        birthDate: user.birthdate
      }

      const token = generateToken({ userId: user.id })

      res.json({token, ...payload})

    } catch (error) {

    }
  }
}

module.exports = new AuthController()
