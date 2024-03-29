function contact(req, res) {
  require("dotenv").config()

  let nodemailer = require("nodemailer")
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "toandummymail@gmail.com",
      pass: process.env.APP_PASSWORD,
    },
    secure: true,
  })
  const mailData = {
    from: req.body.email,
    to: "toantdfu@gmail.com",
    subject: `Message From ${req.body.name}: ${req.body.subject}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  }
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err)
    else console.log(info)
  })
  res.status(200).send("OK")
  res.end()
}

export default contact
