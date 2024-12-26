import Link from "next/link";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    name: "Facebook",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
  },
  {
    name: "Youtube",
    icon: FaYoutube,
  },
];

const ProfilePage = () => {
  return (
    <main className={"max-w-screen-sm mx-auto flex flex-col items-center p-6"}>
      <div className={"size-16 bg-red-700 rounded-full"}></div>
      <h1 className={"text-lg font-medium mt-2"}>@jawade_arpeet</h1>
      <section className={"flex items-center gap-x-8 mt-6"}>
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link
              key={index}
              href={`https://${social.name.toLowerCase()}.com`}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <Icon size={32} />
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default ProfilePage;
