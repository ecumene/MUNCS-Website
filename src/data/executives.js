import JAHARRHY from "../../public/assets/execs/jaharrhy.jpg";

function cleanJacksNameLol(input) {
	input = input.replace(/&/g, "&amp;");
	input = input.replace(/</g, "&lt;");
	input = input.replace(/>/g, "&gt;");
	return input;
}

// TODO executive avatars
// TODO previous executives
export const EXECUTIVES = [
	{
		name: "Madison Emshey",
		roles: ["President"],
		username: "mbemshey",
		discord: {
			username: "Modstrosus",
			discriminator: "0001",
		},
	},
	{
		name: "Jack Harrhy",
		roles: ["Vice President"],
		username: "jaharrhy",
		discord: {
			username: cleanJacksNameLol("<i>jack arthur null</i>"),
			discriminator: "7539",
		},
		// picture: JAHARRHY,
	},
	{
		name: "David Chicas",
		roles: ["Executive Assistant"],
		username: "dchicasduena",
		discord: {
			username: "dech",
			discriminator: "0089",
		},
	},
	{
		name: "Ripudaman Singh",
		roles: ["Treasurer"],
		username: "ripudamans",
		discord: {
			username: "Hubris",
			discriminator: "1909",
		},
	},
	{
		name: "Zach Vaters",
		roles: ["Tech Officer"],
		username: "zcvaters",
		discord: {
			username: "zach.",
			discriminator: "8828",
		},
	},
	{
		name: "Rishi Gandhi",
		roles: ["International Student Representative"],
		username: "rrgandhi",
		discord: {
			username: "R1SH1",
			discriminator: "6363",
		},
	},
	{
		name: "Gizem Ensari",
		roles: ["International Student Representative"],
		username: "gensari",
		discord: {
			username: "Gizem Ensari",
			discriminator: "7063",
		},
	},
	{
		name: "Vilakshan Khanna",
		roles: ["Social Representative"],
		username: "vkhanna",
		discord: {
			username: "Vilakshan",
			discriminator: "6171",
		},
	},
	{
		name: "Leah Murphy",
		roles: ["Social Representative"],
		username: "lmurphy19",
		discord: {
			username: "pornosynthesis",
			discriminator: "3869",
		},
	},
	{
		name: "Zac Batten",
		roles: ["Event Coordinator"],
		username: "zbatten",
		discord: {
			username: "Dr.Swag",
			discriminator: "9148",
		},
	},
	{
		name: "Mohammed Balfaqih",
		roles: ["Event Coordinator"],
		username: "mbalfaqih",
		discord: {
			username: "HaMoOoOd25",
			discriminator: "0001",
		},
	},
	{
		name: "Genadi V",
		roles: ["Computer Science Undergraduate Committee Representative"],
	},
	{
		name: "Kanika Mathur",
		username: "kmathur",
		roles: ["Science Society Representative", "Representative-at-Large"],
		discord: {
			username: "Kanika Mathur",
			discriminator: "5966",
		},
	},
	{
		name: "Abdulrahman Marwan Mahmood",
		roles: ["First Year Representative"],
		username: "ammahmood",
		discord: {
			username: "PunkBat",
			discriminator: "4481",
		},
	},
	{
		name: "Colton Fridgen",
		roles: ["First Year Representative"],
		username: "csttfridgen",
		discord: {
			username: "ColtonFridgen",
			discriminator: "8506",
		},
	},
	{
		name: "Mathew Emshey",
		roles: ["Representative-at-Large"],
		username: "memshey",
		discord: {
			username: "maegpi",
			discriminator: "5707",
		},
	},
	{
		name: "Abhijeet Singh",
		roles: ["Representative-at-Large"],
		username: "abhijeets",
		discord: {
			username: "kratosonspeed",
			discriminator: "8931",
		},
	},
];
