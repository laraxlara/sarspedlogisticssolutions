// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "../../config/nodemailer";

type Data = {
  name: string;
  surname: string;
  nameRequest: string;
  email: string;
  emailRequest: string;
  phone: number;
  company: string;
  companyAdress: string;
  subject: string;
  message: string;
  request: string;
};

type Response = {
  error?: string;
  status?: string;
  message?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const {
    name,
    surname,
    nameRequest,
    email,
    emailRequest,
    phone,
    company,
    companyAdress,
    subject,
    message,
    request,
  } = req.body as Data;

  if (req.method !== "POST") {
    return res.status(404).send({ status: "fail", error: "Begone." });
  }

  try {
    // if (!subject || !subject.trim()) {
    //   throw new Error("Please provide a valid name.");
    // }

    // if (!email || !email.trim()) {
    //   throw new Error("Please provide a valid email address.");
    // }

    // if (!message || !message.trim()) {
    //   throw new Error("Please provide a valid email message.");
    // }

    await transporter.sendMail({
      to: "laraxlara97@gmail.com",
      from: `${email}`,
      replyTo: email,
      subject: `${subject ? `${subject}` : `Onesped website`}`,
      text: message,
      html: `
      <body style="background-color:#d18c9b; margin:0; padding:0;-webkit-font-smoothing:antialiased;width:100% !important;-webkit-text-size-adjust:none;" topmargin="0">
    <table width="100%" bgcolor="#E4E4E4" style="background-color:#e6dfe0;" border="0" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td>
          <table class="full-width" align="center" width="900" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;margin:2rem auto;">
            <tr>
              <td bgcolor="#ffffff" style="border-top:4px solid #ED224F; background-color:#ffffff; padding-bottom:60px;">

                <!-- pod1 -->
                <table class="email-width" align="center" width="500" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:500px;">
                  <tr>
                    <td style="color:#EB1000; font-family:adobe-clean, Helvetica Neue, Helvetica, Verdana, Arial, sans-serif; font-size:12px; line-height:18px; padding-top:50px;"><img alt="Adobe" src="http://landing.adobe.com/dam/global/images/adobe-logo.420x110.png" width="108" height="auto" border="0" hspace="0" vspace="0" style="color:#EB1000; font-family:adobe-clean, Helvetica Neue, Helvetica, Verdana, Arial, sans-serif; font-size:12px; line-height:18px; display:block; vertical-align:top;" /></td>
                  </tr>
                  <tr>
                  ${
                    name
                      ? `<td style="color:#505050; font-family:adobe-clean, Helvetica Neue, Helvetica, Verdana, Arial, sans-serif; font-size:28px; line-height:30px; padding-top:65px;"><strong>Ime:</strong> ${name} </td>`
                      : nameRequest
                      ? `<td style="color:#505050; font-family:adobe-clean, Helvetica Neue, Helvetica, Verdana, Arial, sans-serif; font-size:28px; line-height:30px; padding-top:65px;"><strong>Ime:</strong> ${nameRequest} </td>`
                      : ""
                  }
                    
                  </tr>
                  <tr>
                  ${
                    surname
                      ? `<td style="color:#505050; font-family:adobe-clean, Helvetica Neue, Helvetica, Verdana, Arial, sans-serif; font-size:18px; line-height:26px; padding-top:40px;"><strong>Prezime:</strong> ${surname}</td>`
                      : ""
                  }
                  </tr>
                  <tr>
                  ${
                    email
                      ? `<td style="color:#505050; font-family:adobe-clean, Helvetica Neue, Helvetica, Verdana, Arial, sans-serif; font-size:18px; line-height:26px; padding-top:40px;"><strong>Poslato sa email-a:</strong> ${email}</td>`
                      : emailRequest
                      ? `<td style="color:#505050; font-family:adobe-clean, Helvetica Neue, Helvetica, Verdana, Arial, sans-serif; font-size:18px; line-height:26px; padding-top:40px;"><strong>Poslato sa email-a:</strong> ${emailRequest}</td>`
                      : ""
                  }

                  </tr>
                  <tr>
                  ${
                    phone
                      ? `<td style="color:#505050; font-family:adobe-clean, Helvetica Neue, Helvetica, Verdana, Arial, sans-serif; font-size:18px; line-height:26px; padding-top:40px;"><strong>Broj telefona:</strong> ${phone}</td>`
                      : ""
                  }
                  </tr>
                  <tr>
                  ${
                    company
                      ? `<td style="color:#505050; font-family:adobe-clean, Helvetica Neue, Helvetica, Verdana, Arial, sans-serif; font-size:18px; line-height:26px; padding-top:40px;"><strong>Naziv kompanije:</strong> ${company}</td>`
                      : ""
                  }
                  </tr>
                  <tr>
                  ${
                    companyAdress
                      ? `<td style="color:#505050; font-family:adobe-clean, Helvetica Neue, Helvetica, Verdana, Arial, sans-serif; font-size:18px; line-height:26px; padding-top:40px;"><strong>Adresa kompanije:</strong> ${companyAdress}</td>`
                      : ""
                  }
                  </tr>
                  <tr>
                  ${
                    message
                      ? `<td style="color:#505050; font-family:adobe-clean, Helvetica Neue, Helvetica, Verdana, Arial, sans-serif; font-size:18px; line-height:26px; padding-top:40px;"><strong>Poruka:</strong> ${message}</td>`
                      : ""
                  }
                  </tr>
                  <tr>
                  ${
                    request
                      ? `<td style="color:#505050; font-family:adobe-clean, Helvetica Neue, Helvetica, Verdana, Arial, sans-serif; font-size:18px; line-height:26px; padding-top:40px;"><strong>Upit:</strong> ${request}</td>`
                      : ""
                  }
                  </tr>
                  <tr>
                    <td style="color:#747474; font-family:adobe-clean, Helvetica Neue, Helvetica, Verdana, Arial, sans-serif; font-size:16px; line-height:20px; padding-top:40px;">

                      
                    </td>
                  </tr>   
                </table>
              </td>
            </tr>          
          </table>
        </td>
      </tr>
    </table>
  </body>
      `,
    });

    res.status(200).send({ status: "done", message: "message has been sent" });
  } catch (error) {
    res.status(500).send({ status: "fail" });
  }
};

export default handler;
