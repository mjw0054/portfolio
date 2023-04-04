const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  res.write("<html>");
  res.write("<head>");
  res.write('<meta charset="utf-8"/>');
  res.write("<title>Kakao 지도 시작하기</title>");
  res.write("</head>");
  res.write("<body>");
  res.write('<div id="map" style="width:500px;height:400px;"></div>');
  res.write(
    '<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=121dd739ce760b5a8b6b13be460f16b2"></script>'
  );
  res.write("<script>");
  res.write("var container = document.getElementById(`map`);");
  res.write("var options = {");
  res.write("center: new kakao.maps.LatLng(33.450701, 126.570667),");
  res.write("level: 3");
  res.write("};");

  res.write("var map = new kakao.maps.Map(container, options);");
  res.write("</script>");
  res.write("</body>");
  res.write("</html>");

  /*res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');*/
  return res.end();
};
exports.handler = requestHandler;
exports.someText = "Some hard coded text";
