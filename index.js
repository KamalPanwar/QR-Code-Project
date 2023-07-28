import inquirer from "inquirer";
import { url } from "inspector";
import qr from 'qr-image';
import fs from 'fs'
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

inquirer
  .prompt([
    /* Pass your questions in here */
    { message: "type in your Url", name: "Url" },
  ])
  .then((answers) => {
    const Url = answers.Url;
    var qr_svg = qr.image(Url);
    qr_svg.pipe(fs.createWriteStream("r_image.png"));
    fs.writeFile('URL.txt', Url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
   
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error.isTtyError);
    } else {
      console.log('dont know');
    }
  });
