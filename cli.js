#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:yanruzika@mestisukses.com");
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            // {
            //     name: `Download my ${chalk.magentaBright.bold("Resume")}?`,
            //     value: () => {
            //         // cliSpinners.dots;
            //         const loader = ora({
            //             text: ' Downloading Resume',
            //             spinner: cliSpinners.material,
            //         }).start();
            //         let pipe = request('https://anmolsingh.me/api/resume').pipe(fs.createWriteStream('./anmol-resume.html'));
            //         pipe.on("finish", function () {
            //             let downloadPath = path.join(process.cwd(), 'anmol-resume.html')
            //             console.log(`\nResume Downloaded at ${downloadPath} \n`);
            //             open(downloadPath)
            //             loader.stop();
            //         });
            //     }
            // },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Hatur Nuhun");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("Yan Ruzika"),
    handle: chalk.white("@mestisukses"),
    work: `${chalk.white("Software Engineer at")} ${chalk
        .hex("#2b82b2")
        .bold("Mesti Sukses")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("mesti_sukses"),
    github: chalk.gray("https://github.com/") + chalk.green("mestisukses"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("yanruzika"),
    web: chalk.cyan("https://mestisukses.com"),
    npx: chalk.red("npx") + " " + chalk.white("mestisukses"),

    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "Some people think this post is just bullshit,"
        )}`,
        `${chalk.italic("Some others can change their lives by reading")}`,
        `${chalk.italic(
            "this article. How about you.....?"
        )}`,
        `${chalk.italic(
            "Just try it yourself"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());