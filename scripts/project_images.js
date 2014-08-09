var today = new Date();
var jran = today.getTime();
var number = 70;
var image =" ";
var text_color = "";
var ia = 9301;
var ic = 49297;
var im = 233280;
jran = (jran*ia+ic) % im;
var imageSrc;
var imageSrc_a;
var altText = "";

function ranpic()
{

/* first image */

var sp1 = document.createElement("div");
sp1.setAttribute("id", "org_div");
var random_number = Math.ceil( (jran/(im*1.0)) * number);
if (random_number < 10) 
	{imageSrc = "images/projects/DFL_00"+random_number+".jpg";}
else 
	{imageSrc = "images/projects/DFL_0"+random_number+".jpg";}
var newImage = document.createElement("img");
newImage.setAttribute('src', imageSrc);
var n = random_number;
switch(n) 
{
case 1:
altText="Sketch perspective for Chengdu Panda Breeding Center";
break;

case 2:
altText="Sketch perspective for Chengdu Panda Breeding Center";
break;

case 3:
altText="Sketch perspective for Chengdu Panda Breeding Center";
break;

case 4:
altText="Sketch perspective for Chengdu Panda Breeding Center";
break;

case 5:
altText="Sketch perspective for Chengdu Panda Breeding Center";
break;

case 6:
altText="Sketch perspective for Chengdu Panda Breeding Center";
break;

case 7:
altText="Plan, Macau Cotai Strip mini zoo";
break;

case 8:
altText="Sections, Macau Cotai Strip mini zoo";
break;

case 9:
altText="Plan, Macau Cotai Strip mini zoo";
break;

case 10:
altText="Plan, Macau Cotai Strip mini zoo";
break;

case 11:
altText="Plan, Safari Nusantara, Bintan";
break;

case 12:
altText="Plan, Safari Nusantara, Bintan";
break;

case 13:
altText="Sketch perspective for Chengdu Panda Breeding Center";
break;

case 14:
altText="Sketch perspective for Chengdu Panda Breeding Center";
break;

case 15:
altText="Plan, Albustan Wildlife Breeding Centre";
break;

case 16:
altText="Plan, Dubai Zoo at Mushrif";
break;

case 17:
altText="Part plan, Dubai Zoo at Mushrif";
break;

case 18:
altText="Schematic plan, Night Safari India, Greater Noida";
break;

case 19:
altText="Schematic plan, Night Safari India, Greater Noida";
break;

case 10:
altText="Schematic plan, Night Safari India, Greater Noida";
break;

case 21:
altText="Master plan, Dubai zoo at Dubailand";
break;

case 22:
altText="Schematic plan, Night Safari India, Greater Noida";
break;

case 23:
altText="Concept plan, Lahore Zoo";
break;

case 24:
altText="Concept plan, Mumbai Zoo";
break;

case 25:
altText="Concept plan, Naypyitaw Zoo";
break;

case 26:
altText="Concept plan, Naypyitaw Zoo";
break;

case 27:
altText="Concept plan, Naypyitaw Zoo";
break;

case 28:
altText="Concept plan, walking trail for Naypyitaw Zoo";
break;

case 29:
altText="Concept plan, entry to Naypyitaw Zoo";
break;

case 30:
altText="Concept plan, Naypyitaw Zoo";
break;

case 31:
altText="Concept plan, Night Safari at Naypyitaw Zoo";
break;

case 32:
altText="Concept plan, The Unzoo, Nusajaya, Malaysia";
break;

case 33:
altText="Section, Rabat Zoo, Morocco";
break;

case 34:
altText="Plan, Rabat Zoo, Morocco";
break;

case 35:
altText="Plan, Rabat Zoo, Morocco";
break;

case 36:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 37:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 38:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 39:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 40:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 41:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 42:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 43:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 44:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 45:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 46:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 47:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 48:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 49:
altText="3D model for a mini zoo at Sentosa";
break;

case 50:
altText="3D model for a mini zoo at Sentosa";
break;

case 51:
altText="3D model for a mini zoo at Sentosa";
break;

case 52:
altText="3D model for a mini zoo at Sentosa";
break;

case 53:
altText="3D model for Equatorial Rainforest zone at Taipei City Zoo";
break;

case 54:
altText="3D model for Equatorial Rainforest zone at Taipei City Zoo";
break;

case 55:
altText="3D model for Equatorial Rainforest zone at Taipei City Zoo";
break;

case 56:
altText="Photoshop rendering for Indoor Rainforest exhibit at Taipei City Zoo";
break;

case 57:
altText="Sketch plan, Elephant exhibit, Twycross Zoo, England";
break;

case 58:
altText="Sketch plan, Elephant exhibit, Twycross Zoo, England";
break;

case 59:
altText="Section for Chengdu Panda Breeding Center";
break;

case 60:
altText="Sketch perspective for Chengdu Panda Breeding Center";
break;

case 61:
altText="Axonometric sketch, Veterinary Hospital at Singapore Zoo";
break;

case 62:
altText="Concept plan, Australian exhibit at Singapore Zoo";
break;

case 63:
altText="Photo, flying fox in Fragile Forest, Singapore Zoo";
break;

case 64:
altText="Plan, Kaziranga zone, Hyderabad Zoo, India";
break;

case 65:
altText="Concept plan, Dizze World Zoo, Chennai, India";
break;

case 66:
altText="Photo, Elephant exhibit, Twycross Zoo, England";
break;

case 67:
altText="Plan, Dubai Zoo core zoo, Dubailand, UAE";
break;

case 68:
altText="Photoshop rendering for a rainforest ride";
break;

case 69:
altText="Photo, fishing cat in Night Safari, Singapore";
break;

case 70:
altText="Section through Giant Panda exhibit, Chengdu Panda Breeding Center";
break;

case 71:
altText="Axonometric, Indoor Rainforest exhibit at Taipei City Zoo";
break;

case 72:
altText="Section, pygmy hippo exhibit, Singapore Zoo";
break;

case 73:
altText="Perspective, Polar bear, Singapore Zoo";
break;

case 74:
altText=" ";
break;

case 75:
altText=" ";
break;

case 76:
altText=" ";
break;

case 77:
altText=" ";
break;

case 78:
altText=" ";
break;

case 79:
altText=" ";
break;

case 80:
altText=" ";
break;

case 81:
altText=" ";
break;

case 82:
altText=" ";
break;

case 83:
altText=" ";
break;

case 84:
altText=" ";
break;

case 85:
altText=" ";
break;

case 86:
altText=" ";
break;

case 87:
altText=" ";
break;

case 88:
altText=" ";
break;

case 89:
altText=" ";
break;

case 90:
altText=" ";
break;

case 91:
altText=" ";
break;

case 92:
altText=" ";
break;

case 93:
altText=" ";
break;

case 94:
altText=" ";
break;

case 95:
altText=" ";
break;

case 96:
altText=" ";
break;

case 97:
altText=" ";
break;

case 98:
altText=" ";
break;

case 99:
altText=" ";
break;

default:
altText="";
break;
}
newImage.setAttribute('alt', altText);
newImage.style.width = '225px';
newImage.style.height = '230px';
newImage.style.margin = "0 2px 6px 0";
newImage.style.padding = '5px';
newImage.style.borderStyle = 'solid';
newImage.style.borderWidth = '1px'; 
newImage.style.borderColor = '#55ff55';
sp1.appendChild(newImage);
var sp2 = document.getElementById("org_div");
var parentdiv = sp2.parentNode;
parentdiv.replaceChild(sp1, sp2);

/* second image */

var sp1_a = document.createElement("div");
sp1_a.setAttribute("id", "org_div_a");
var random_number_a = (random_number + 3);
if (random_number_a < 10) 
	{imageSrc_a = "images/projects/DFL_00"+random_number_a+".jpg";}
else 
	{imageSrc_a = "images/projects/DFL_0"+random_number_a+".jpg";}
var newImage_a = document.createElement("img");
newImage_a.setAttribute('src', imageSrc_a);
n = random_number_a;
switch(n) 
{
case 1:
altText="Sketch perspective for Chengdu Panda Breeding Center";
break;

case 2:
altText="Sketch perspective for Chengdu Panda Breeding Center";
break;

case 3:
altText="Sketch perspective for Chengdu Panda Breeding Center";
break;

case 4:
altText="Sketch perspective for Chengdu Panda Breeding Center";
break;

case 5:
altText="Sketch perspective for Chengdu Panda Breeding Center";
break;

case 6:
altText="Sketch perspective for Chengdu Panda Breeding Center";
break;

case 7:
altText="Plan, Macau Cotai Strip mini zoo";
break;

case 8:
altText="Sections, Macau Cotai Strip mini zoo";
break;

case 9:
altText="Plan, Macau Cotai Strip mini zoo";
break;

case 10:
altText="Plan, Macau Cotai Strip mini zoo";
break;

case 11:
altText="Plan, Safari Nusantara, Bintan";
break;

case 12:
altText="Plan, Safari Nusantara, Bintan";
break;

case 13:
altText="Sketch perspective for Chengdu Panda Breeding Center";
break;

case 14:
altText="Sketch perspective for Chengdu Panda Breeding Center";
break;

case 15:
altText="Plan, Albustan Wildlife Breeding Centre";
break;

case 16:
altText="Plan, Dubai Zoo at Mushrif";
break;

case 17:
altText="Part plan, Dubai Zoo at Mushrif";
break;

case 18:
altText="Schematic plan, Night Safari India, Greater Noida";
break;

case 19:
altText="Schematic plan, Night Safari India, Greater Noida";
break;

case 10:
altText="Schematic plan, Night Safari India, Greater Noida";
break;

case 21:
altText="Master plan, Dubai zoo at Dubailand";
break;

case 22:
altText="Schematic plan, Night Safari India, Greater Noida";
break;

case 23:
altText="Concept plan, Lahore Zoo";
break;

case 24:
altText="Concept plan, Mumbai Zoo";
break;

case 25:
altText="Concept plan, Naypyitaw Zoo";
break;

case 26:
altText="Concept plan, Naypyitaw Zoo";
break;

case 27:
altText="Concept plan, Naypyitaw Zoo";
break;

case 28:
altText="Concept plan, walking trail for Naypyitaw Zoo";
break;

case 29:
altText="Concept plan, entry to Naypyitaw Zoo";
break;

case 30:
altText="Concept plan, Naypyitaw Zoo";
break;

case 31:
altText="Concept plan, Night Safari at Naypyitaw Zoo";
break;

case 32:
altText="Concept plan, The Unzoo, Nusajaya, Malaysia";
break;

case 33:
altText="Section, Rabat Zoo, Morocco";
break;

case 34:
altText="Plan, Rabat Zoo, Morocco";
break;

case 35:
altText="Plan, Rabat Zoo, Morocco";
break;

case 36:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 37:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 38:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 39:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 40:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 41:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 42:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 43:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 44:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 45:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 46:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 47:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 48:
altText="Photo, Nature Interpretive Centre, Shangri-La Hotel, Kota Kinabalu";
break;

case 49:
altText="3D model for a mini zoo at Sentosa";
break;

case 50:
altText="3D model for a mini zoo at Sentosa";
break;

case 51:
altText="3D model for a mini zoo at Sentosa";
break;

case 52:
altText="3D model for a mini zoo at Sentosa";
break;

case 53:
altText="3D model for Equatorial Rainforest zone at Taipei City Zoo";
break;

case 54:
altText="3D model for Equatorial Rainforest zone at Taipei City Zoo";
break;

case 55:
altText="3D model for Equatorial Rainforest zone at Taipei City Zoo";
break;

case 56:
altText="Photoshop rendering for Indoor Rainforest exhibit at Taipei City Zoo";
break;

case 57:
altText="Sketch plan, Elephant exhibit, Twycross Zoo, England";
break;

case 58:
altText="Sketch plan, Elephant exhibit, Twycross Zoo, England";
break;

case 59:
altText="Section for Chengdu Panda Breeding Center";
break;

case 60:
altText="Sketch perspective for Chengdu Panda Breeding Center";
break;

case 61:
altText="Axonometric sketch, Veterinary Hospital at Singapore Zoo";
break;

case 62:
altText="Concept plan, Australian exhibit at Singapore Zoo";
break;

case 63:
altText="Photo, flying fox in Fragile Forest, Singapore Zoo";
break;

case 64:
altText="Plan, Kaziranga zone, Hyderabad Zoo, India";
break;

case 65:
altText="Concept plan, Dizze World Zoo, Chennai, India";
break;

case 66:
altText="Photo, Elephant exhibit, Twycross Zoo, England";
break;

case 67:
altText="Plan, Dubai Zoo core zoo, Dubailand, UAE";
break;

case 68:
altText="Photoshop rendering for a rainforest ride";
break;

case 69:
altText="Photo, fishing cat in Night Safari, Singapore";
break;

case 70:
altText="Section through Giant Panda exhibit, Chengdu Panda Breeding Center";
break;

case 71:
altText="Axonometric, Indoor Rainforest exhibit at Taipei City Zoo";
break;

case 72:
altText="Section, pygmy hippo exhibit, Singapore Zoo";
break;

case 73:
altText="Perspective, Polar bear, Singapore Zoo";
break;

case 74:
altText=" ";
break;

case 75:
altText=" ";
break;

case 76:
altText=" ";
break;

case 77:
altText=" ";
break;

case 78:
altText=" ";
break;

case 79:
altText=" ";
break;

case 80:
altText=" ";
break;

case 81:
altText=" ";
break;

case 82:
altText=" ";
break;

case 83:
altText=" ";
break;

case 84:
altText=" ";
break;

case 85:
altText=" ";
break;

case 86:
altText=" ";
break;

case 87:
altText=" ";
break;

case 88:
altText=" ";
break;

case 89:
altText=" ";
break;

case 90:
altText=" ";
break;

case 91:
altText=" ";
break;

case 92:
altText=" ";
break;

case 93:
altText=" ";
break;

case 94:
altText=" ";
break;

case 95:
altText=" ";
break;

case 96:
altText=" ";
break;

case 97:
altText=" ";
break;

case 98:
altText=" ";
break;

case 99:
altText=" ";
break;

default:
altText="";
break;
}
newImage_a.setAttribute('alt', altText);
newImage_a.style.width = '225px';
newImage_a.style.height = '230px';
newImage.style.margin = "0 2px 10px 0";
newImage_a.style.padding = '5px';
newImage_a.style.borderStyle = 'solid';
newImage_a.style.borderWidth = '1px'; 
newImage_a.style.borderColor = '#55ff55';
sp1.appendChild(newImage_a);
var sp2_a = document.getElementById("org_div_a");
var parentdiv_a = sp2_a.parentNode;
parentdiv_a.replaceChild(sp1_a, sp2_a);
}
