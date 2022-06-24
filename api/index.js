//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn, Diet } = require("./src/db.js");
const { API_PORT } = process.env;
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(API_PORT, () => {
    console.log(`%s listening at ${API_PORT}`); // eslint-disable-line no-console
    // const predata = [
    //   { name: "Gluten Free" },
    //   { name: "Ketogenic" },
    //   { name: "Vegetarian" },
    //   { name: "Lacto-Vegetarian" },
    //   { name: "Ovo-Vegetarian" },
    //   { name: "Vegan" },
    //   { name: "Pescetarian" },
    //   { name: "Paleo" },
    //   { name: "Primal" },
    //   { name: "Low FODMAP" },
    //   { name: "Whole 30" },
    // ];

    // Diet.bulkCreate(predata);
    console.log("Diets habe been pre-loaded");
  });
});
