import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import LinkedInIcon from "~/utils/linkedin";
import GithubIcon from "~/utils/github";
import MailIcon from "~/utils/mail";
import WebIcon from "~/utils/web";
import ResumeIcon from "~/utils/resume";

export const meta: MetaFunction = () => {
  return [
    { title: "Debert Jamie Chanderson" },
    {
      name: "description",
      content:
        "Undergraduate student, tech enthusiast, learning more about the world",
    },
    { name: "og:type", content: "website" },
  ];
};

export default function Index() {
  return (
    <div className="space-y-16 mx-auto max-w-4xl h-full bg-neutral-950 px-8 py-4 rounded-xl overflow-y-scroll">
      <div className="space-y-4">
        <h1 className="text-3xl text-center md:text-5xl font-bold md:leading-[3rem] md:tracking-tight lg:text-5xl">
          DEBERT JAMIE CHANDERSON
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <div className="rounded-lg bg-blue-800 space-y-2 px-4 py-2 shadow-md shadow-blue-400">
            <p className="text-xl">
              👋 Hi, I&#39;m Debert Jamie C, a student from Indonesia with a
              passion in coding and technology. I love to learn new things and
              explore more about life and the world.
            </p>
          </div>
          <div className="rounded-lg bg-emerald-800 space-y-2 px-4 py-2 shadow-md shadow-emerald-400">
            <div className="text-base">
              <p>🧐 Currently pursuing my undergraduate studies</p>
              <p>😄 Will respond faster through email</p>
              <p>😬 Crafting my coding and photography skills</p>
            </div>
          </div>
          <div className="bg-teal-950 space-y-2 rounded-lg px-4 py-2 shadow-md shadow-teal-400">
            <p className="text-lg">Drop me a line below 👇</p>
            <div className="grid grid-cols-3 gap-2">
              <Link
                className="flex flex-col rounded-md bg-red-800 hover:bg-red-600 focus:bg-red-600 duration-300 delay-75 px-2 py-1 items-center"
                to="mailto:debertchanderson@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MailIcon width="2rem" height="2rem" />
                <p>Email</p>
              </Link>
              <Link
                className="flex flex-col rounded-md bg-zinc-900 hover:bg-zinc-700 focus:bg-zinc-700 duration-300 delay-75 px-2 py-1 items-center"
                to="https://github.com/debertjamie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon width="2rem" height="2rem" />
                <p>GitHub</p>
              </Link>
              <Link
                className="flex flex-col rounded-md bg-cyan-900 hover:bg-cyan-700 focus:bg-cyan-700 duration-300 delay-75 px-2 py-1 items-center"
                to="https://linkedin.com/in/debertjamie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon width="2rem" height="2rem" />
                <p>LinkedIn</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-amber-800 space-y-2 rounded-lg px-4 py-2 shadow-md shadow-amber-400">
            <p className="text-lg">🔗 Links from Me</p>
            <div className="grid grid-rows-2 gap-2">
              <Link
                className="block relative group font-semibold text-xl h-fit shadow-lg rounded-md overflow-hidden"
                to="https://debertjamie.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="absolute bottom-0 z-20 w-full h-0.5 bg-purple-600 duration-150 delay-75 transition-all ease-in-out group-hover:h-full" />
                <div className="relative px-4 py-2 z-30">
                  <WebIcon
                    width="2rem"
                    height="2rem"
                    className="inline mr-2 -mt-1"
                  />
                  My Website
                </div>
              </Link>
              <Link
                className="block relative group font-semibold text-xl h-fit shadow-lg rounded-md overflow-hidden"
                to="/Resume_Debert Jamie Chanderson.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="absolute bottom-0 z-20 w-full h-0.5 bg-green-600 duration-150 delay-75 transition-all ease-in-out group-hover:h-full" />
                <div className="relative px-4 py-2 z-30">
                  <ResumeIcon
                    width="2rem"
                    height="2rem"
                    className="inline mr-2 -mt-1"
                  />
                  My Resume
                </div>
              </Link>
            </div>
          </div>
          <div className="bg-violet-900 space-y-2 rounded-lg px-4 py-2 shadow-md shadow-violet-400">
            <p className="text-lg">🎮 Entertainments and Stuff</p>
            <p className="text-lg">
              I usually don&#39;t have much free time, but when I do I either
              listen to music, do some coding, or watch movies and series.
            </p>
          </div>
          <div className="bg-lime-900 space-y-2 rounded-lg px-4 py-2 shadow-md shadow-lime-400">
            <p className="text-lg">About This Site</p>
            <div className="text-base">
              <div className="flex flex-wrap justify-between">
                <p>&#169; 2024 Debert Jamie Chanderson</p>
                <Link
                  to="https://github.com/debertjamie/vercel-deploy"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-semibold"
                >
                  Source Code
                </Link>
              </div>
              <p>Made with Remix and TailwindCSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
