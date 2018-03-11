
<script>
/*
function csvJSON(csv){

  var lines=csv.split("\n");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

	  var obj = {};
	  var currentline=lines[i].split(",");

	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }

	  result.push(obj);

  }
  
  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}

function reqListener () {
  console.log(this.responseText);
}

"https://www.sony.pl/electronics/support/audio-components-receivers-amplifiers/str-de245"
*/

var oReq = new XMLHttpRequest();
//oReq.addEventListener("load", reqListener);

const array = ["https://www.sony.es/electronics/support/understanding-digital-audio",
"https://www.sony.com.tr/electronics/support/devices-to-your-tv-via-hdmi",
"https://www.sony.co.uk/electronics/support/laptop-pc-vgn-series/vgn-fz19vn#downloads",
"https://www.sony.be/nl/electronics/support/memory-camcorders-hdrcx-series/hdr-cx450#manuals",
"https://www.sony.ru/electronics/support/vpc-series-vpcz13-series/vpcz13s9r/downloads/Z0001023",
"https://www.sony.fr/electronics/support/home-theater-blu-ray-home-theater-systems/bdv-n5200w#downloads",
"https://www.sony.ru/electronics/support/peripherals-not-charging"];

for(i=0; i<array.length;i ++ ) {
oReq.open("GET", array[i]);
console.log(array[i]);
oReq.send();
}

oReq.onload = function () {
  console.log('DONE', oReq.status);
};

</script>

