// import { withIronSessionApiRoute } from "iron-session/next";

// import { sessionOptions } from "@/app/lib/session"; // Adjust if in different location
// import type { NextApiRequest, NextApiResponse } from "next";
// import svgCaptcha from "svg-captcha";

// export default withIronSessionApiRoute(handler, sessionOptions);

// async function handler(req: NextApiRequest, res: NextApiResponse) {
//   // Generate a new CAPTCHA
//   const captcha = svgCaptcha.create({
//     size: 5,
//     noise: 2,
//     color: true,
//     background: "#f9f9f9",
//     width: 150,
//     height: 50,
//   });

//   // Store the CAPTCHA text in the session
//   req.session.captcha = captcha.text;
//   await req.session.save();

//   // Return the SVG image as a string
//   res.status(200).json({ data: captcha.data });
// }
