exports.getRestaurant = async function (ctx) {
  const str = await ctx.curl('https://www.ele.me/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=yb4h78m43x2&latitude=45.74887&limit=24&longitude=126.72324&offset=0&terminal=web',{
    dataType: 'json', //取回来的数据是buffer，设置取回来的是json字符串
  });//一定要写await 不然取不回来
  // console.log(str);
  ctx.body = str;
}