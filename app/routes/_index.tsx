import type { MetaFunction } from "@remix-run/node";
import { json, Link, useLoaderData } from "@remix-run/react";
import CPPIcon from "~/utils/cpp";
import DenoIcon from "~/utils/deno";
import DiscordIcon from "~/utils/discord";
import GithubIcon from "~/utils/github";
import GoIcon from "~/utils/go";
import InstaIcon from "~/utils/insta";
import JavascriptIcon from "~/utils/javascript";
import MailIcon from "~/utils/mail";
import NodeIcon from "~/utils/nodejs";
import { randomFact } from "~/utils/randomfact.server";
import ReactIcon from "~/utils/react";
import TailwindIcon from "~/utils/tailwind";
import TwitterIcon from "~/utils/twitter";
import TypescriptIcon from "~/utils/typescript";

export const meta: MetaFunction = () => {
  return [
    { title: "Debert Jamie" },
    { name: "description", content: "Student, Code Enthusiast" },
    { name: "og:type", content: "website" },
  ];
};

export async function loader() {
  const facts = randomFact();
  return json(facts);
}

export default function Index() {
  const facts = useLoaderData<typeof loader>();
  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold leading-[3rem] tracking-tight lg:w-[55%] lg:text-5xl">
          DEBERT JAMIE C | 陈宥维
        </h1>
        <p className="text-3xl">Student, code enthusiast</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <div className="rounded-lg bg-blue-800 space-y-2 px-4 py-2 shadow-md shadow-blue-400">
            <p className="text-xl">
              👋 Hi, I&#39;m Debert Jamie, a student from Indonesia. Currently
              pursuing secondary education. Likes coding, reading, playing
              games, you name it 😄
            </p>
          </div>
          <div className="rounded-lg bg-violet-900 space-y-2 px-4 py-2 shadow-md shadow-violet-400">
            <p className="text-xl">Currently learning:</p>
            <div className="flex flex-row flex-wrap gap-2">
              <div className="bg-slate-500 rounded-md p-2 flex gap-2 items-center">
                <JavascriptIcon width="1rem" height="1rem" />
                <p className="font-semibold">Javascript</p>
              </div>
              <div className="bg-slate-500 rounded-md p-2 flex gap-2 items-center">
                <TypescriptIcon width="1rem" height="1rem" />
                <p className="font-semibold">Typescript</p>
              </div>
              <div className="bg-slate-500 rounded-md p-2 flex gap-2 items-center">
                <CPPIcon width="1rem" height="1rem" />
                <p className="font-semibold">C++</p>
              </div>
              <div className="bg-slate-500 rounded-md p-2 flex gap-2 items-center">
                <GoIcon width="1.5rem" height="1rem" />
                <p className="font-semibold">GO</p>
              </div>
              <div className="bg-slate-500 rounded-md p-2 flex gap-2 items-center">
                <NodeIcon width="1rem" height="1rem" />
                <p className="font-semibold">NodeJS</p>
              </div>
              <div className="bg-slate-500 rounded-md p-2 flex gap-2 items-center">
                <DenoIcon width="1rem" height="1rem" />
                <p className="font-semibold">Deno</p>
              </div>
              <div className="bg-slate-500 rounded-md p-2 flex gap-2 items-center">
                <TailwindIcon width="1rem" height="1rem" />
                <p className="font-semibold">TailwindCSS</p>
              </div>
              <div className="bg-slate-500 rounded-md p-2 flex gap-2 items-center">
                <ReactIcon width="1rem" height="1rem" />
                <p className="font-semibold">ReactJS</p>
              </div>
            </div>
          </div>
          <div className="bg-red-900 space-y-2 rounded-lg px-4 py-2 shadow-md shadow-red-400">
            <p className="text-lg">Random information</p>
            <div className="h-[5rem]">
              <p className="font-semibold">{facts.title}</p>
              <p className="text-sm">{facts.fact}</p>
            </div>
          </div>
          <div className="bg-teal-950 space-y-2 rounded-lg px-4 py-2 shadow-md shadow-teal-400">
            <p className="text-lg">My Socials</p>
            <div className="grid grid-cols-3 gap-2">
              <Link
                className="flex flex-col rounded-md bg-violet-700 px-2 py-1 items-center"
                to="mailto:debert123@protonmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MailIcon width="2rem" height="2rem" />
                <p>Email</p>
              </Link>
              <Link
                className="flex flex-col rounded-md bg-zinc-700 px-2 py-1 items-center"
                to="https://github.com/debertjamie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon width="2rem" height="2rem" />
                <p>Github</p>
              </Link>
              <Link
                className="flex flex-col rounded-md bg-blue-700 px-2 py-1 items-center"
                to="https://twitter.com/debertjamie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon width="2rem" height="2rem" />
                <p>Twitter (X)</p>
              </Link>
              <Link
                className="flex flex-col rounded-md bg-fuchsia-700 px-2 py-1 items-center"
                to="https://instagram.com/debertjamieeee_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstaIcon width="2rem" height="2rem" />
                <p>Instagram</p>
              </Link>
              <Link
                className="flex flex-col rounded-md bg-cyan-700 px-2 py-1 items-center"
                to="https://discordapp.com/users/755773452756975646"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordIcon width="2rem" height="2rem" />
                <p>Discord</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-amber-800 space-y-2 rounded-lg px-4 py-2 shadow-md shadow-amber-400">
            <p className="text-lg">🎶 Music doesn&#39;t lie</p>
            <div className="grid grid-rows-2 gap-2">
              <Link
                className="flex flex-row gap-x-4 items-center p-2 rounded-md hover:bg-slate-600 focus:bg-slate-600 bg-opacity-10 transition duration-300 delay-75"
                to={"https://music.youtube.com/watch?v=blCNvso3UDU"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/TakeMeHome.png"
                  alt="One Direction"
                  className="w-12"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    Live While We&#39;re Young
                  </h3>
                  <p className="text-sm font-light text-gray-400">
                    One Direction
                  </p>
                </div>
              </Link>
              <Link
                className="flex flex-row gap-x-4 items-center p-2 rounded-md hover:bg-slate-600 focus:bg-slate-600 bg-opacity-10 transition duration-300 delay-75"
                to={"https://music.youtube.com/watch?v=9lybsz-7TFM"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/Love.png"
                  alt="Jennifer Lopez"
                  className="w-12"
                />
                <div>
                  <h3 className="text-lg font-semibold">On The Floor</h3>
                  <p className="text-sm font-light text-gray-400">
                    Jennifer Lopez, Pitbull
                  </p>
                </div>
              </Link>
              <Link
                className="flex flex-row gap-x-4 items-center p-2 rounded-md hover:bg-slate-600 focus:bg-slate-600 bg-opacity-10 transition duration-300 delay-75"
                to={"https://music.youtube.com/watch?v=lLwuuLIs-H0"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/WorldWarJoy.png"
                  alt="The Chainsmokers"
                  className="w-12"
                />
                <div>
                  <h3 className="text-lg font-semibold">Takeaway</h3>
                  <p className="text-sm font-light text-gray-400">
                    The Chainsmokers, Lennon Stella
                  </p>
                </div>
              </Link>
              <Link
                className="flex flex-row gap-x-4 items-center p-2 rounded-md hover:bg-slate-600 focus:bg-slate-600 bg-opacity-10 transition duration-300 delay-75"
                to={"https://music.youtube.com/watch?v=9DyTU26FQlk"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/onerepublic.png"
                  alt="OneRepublic"
                  className="w-12"
                />
                <div>
                  <h3 className="text-lg font-semibold">I Ain&#39;t Worried</h3>
                  <p className="text-sm font-light text-gray-400">
                    OneRepublic
                  </p>
                </div>
              </Link>
              <Link
                className="flex flex-row gap-x-4 items-center p-2 rounded-md hover:bg-slate-600 focus:bg-slate-600 bg-opacity-10 transition duration-300 delay-75"
                to={"https://music.youtube.com/watch?v=r2H-M3ZqaGw"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/Wonder.png"
                  alt="Shawn Mendes"
                  className="w-12"
                />
                <div>
                  <h3 className="text-lg font-semibold">Wonder</h3>
                  <p className="text-sm font-light text-gray-400">
                    Shawn Mendes
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="bg-green-900 space-y-2 rounded-lg px-4 py-2 shadow-md shadow-green-400">
            <p className="text-lg">🎮 What&#39;s life without a little game?</p>
            <p className="text-lg">
              Recently played: TheoTown, Liftlands (DEMO), Call of Duty®:
              Mobile, Among Us, Call of Duty®: Warzone™ Mobile
            </p>
          </div>
          <div className="bg-lime-900 space-y-2 rounded-lg px-4 py-2 shadow-md shadow-lime-400">
            <p className="text-lg">About This Site</p>
            <p className="text-base">© 2024 Debert Jamie Chanderson</p>
            <p className="text-base">Made with RemixJS and TailwindCSS</p>
            <p className="text-base">Powered by Vercel</p>
          </div>
        </div>
      </div>
    </div>
  );
}
