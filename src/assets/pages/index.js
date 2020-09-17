// export {default as MiiPage} from './mii';


const code = ["white", "ems", "mii", "create-lab", "imaging-research", "voices-of-belfast", "virtual-cmu-fence", "3d-shadow-anim"];
const fun = ["white", "test", "sneeple", "traditional", "digital"];
const art = ["white", "grasshopper", "mii", "voices-of-belfast", "3d-shadow-anim", "ems"];
const home = ["imaging-research", "virtual-cmu-fence", "create-lab", "mii", "grasshopper", "3d-shadow-anim"];
let all = new Set();
code.concat(fun).concat(art.concat(home)).forEach(x => all.add(x));

export const galleryCategories = { 
	"code" : code,
    "fun" : fun,
    "art" : art,
    "home" : home,
    "all" : Array.from(all)
};

// for adding gallery boxes and linking project pages
// used in Content.js and Gallery.js
export const projectInfos = [
	{
		link: "imaging-research",
		filetype: ".jpg",
		desc: "Accessible Imaging Platform",
		redirect: "https://lzmunch.github.io/beaglebone-imaging/"
	},
	{
		link: "mii",
		filetype: ".png",
		desc: "Mii Simulator"
	},
    {
		link: "virtual-cmu-fence",
		filetype: ".jpg",
		desc: "Virtual CMU Fence"
	},
	{
		link: "create-lab",
		filetype: ".png",
		desc: "CMU Create Lab"
	},
	{
		link: "grasshopper",
		filetype: ".png",
		desc: "Grasshopper Experiments"
	},
	{
		link: "3d-shadow-anim",
		filetype: ".jpg",
		desc: "3D Shadow Puppets"
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