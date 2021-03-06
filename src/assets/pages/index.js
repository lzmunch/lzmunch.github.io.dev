// export {default as MiiPage} from './mii';


const code = ["white", "create-lab", "imaging-research", "virtual-cmu-fence", "3d-shadow-anim"];
const fun = ["white", "test", "sneeple", "mii"];
const art = ["white", "drunko-brunko", "gnomes-in-a-robe", "grasshopper", "voices-of-belfast", "ems", "traditional", "digital"];
const home = ["drunko-brunko", "gnomes-in-a-robe", "imaging-research", "virtual-cmu-fence", "create-lab", , "grasshopper", "3d-shadow-anim"];
let all = new Set();
code.concat(fun).concat(art.concat(home)).forEach(x => all.add(x));

export const galleryCategories = { 
	"code" : code,
    "fun" : fun,
    "art" : art,
    "home" : home,
    "all" : Array.from(all)
};

// const resumeLink = "https://docs.google.com/document/d/e/2PACX-1vTXxkb2OZLoH1P1nq28pMjGIp_--eJyJep3qC8vsTO67oX8AoxtgkAHmE-KShgOwuDFXW4Y2hDdb4Ro/pub";
export const resumeLink = "https://drive.google.com/file/d/1zaWOj4gcUEn0fyXEKrqQgwa-tArcW12K/view?usp=sharing";

export const lastUpdateTime = "02/10/2021"

// for adding gallery boxes and linking project pages
// used in Content.js and Gallery.js
export const projectInfos = [
	{
		link: "gnomes-in-a-robe",
		filetype: ".jpg",
		desc: "Gnomes in a Robe: Unity Game",
	},
	{
		link: "drunko-brunko",
		filetype: ".jpg",
		desc: "Drunko Brunko: Unity Game",
	},
	{
		link: "imaging-research",
		filetype: ".jpg",
		desc: "Accessible Imaging Platform (Research)",
		//redirect: "https://lzmunch.github.io/beaglebone-imaging/"
	},
	{
		link: "mii",
		filetype: ".png",
		desc: "Mii Simulator (Unity Game)"
	},
    {
		link: "virtual-cmu-fence",
		filetype: ".jpg",
		desc: "Virtual CMU Fence (Web App)"
	},
	{
		link: "create-lab",
		filetype: ".png",
		desc: "CMU Create Lab (Internship)"
	},
	{
		link: "grasshopper",
		filetype: ".png",
		desc: "Grasshopper Experiments"
	},
	{
		link: "3d-shadow-anim",
		filetype: ".jpg",
		desc: "3D Shadow Puppets (Experimental Animation)"
	},
	{
		link: "ems",
		filetype: ".png",
		desc: "Interactivity and Computation"
	},
	{
		link: "map-voices",
		filetype: ".png",
		desc: "Map Voices"
	},
	{
		link: "voices-of-belfast",
		filetype: ".jpg",
		desc: "Voices of Belfast"
	},
	{
		link: "sneeple",
		filetype: ".png",
		desc: "The Sneeple Project",
		redirect: "https://lzmunch.github.io/the-sneeple-project/"
	},
	{
		link: "traditional",
		filetype: ".png",
		desc: "Traditional Art",
		redirect: "https://zhauren.wixsite.com/home/traditional-art"
	},
	{
		link: "digital",
		filetype: ".png",
		desc: "Digital Illustration",
		redirect: "https://zhauren.wixsite.com/home/digital-illustration"
	},
	{
		link: "test",
		filetype: ".jpg",
		desc: "Dead Mii"
	}
];