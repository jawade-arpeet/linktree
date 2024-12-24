import Button from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className={"h-screen w-screen"}>
      {/* HEADER */}

      <header className={"max-w-screen-md mx-auto rounded-full px-6 py-4"}>
        <nav className={"flex items-center justify-between"}>
          <Link href={"/"} className={"text-2xl font-semibold"}>
            linktree
          </Link>
          <Button>Sign up</Button>
        </nav>
      </header>

      {/* HERO */}

      <div className={"px-6 mt-20 md:mt-24"}>
        <h1
          className={
            "text-5xl md:text-7xl md:max-w-screen-md md:mx-auto font-bold text-center tracking-tight"
          }
        >
          Everything you are. In one, simple link in bio.
        </h1>
        <p
          className={
            "text-stone-200 text-center mt-2 md:max-w-screen-md md:mx-auto"
          }
        >
          Join 50M+ people using Linktree for their link in bio. One link to
          help you share everything you create, curate and sell from your
          Instagram, TikTok, Twitter, YouTube and other social media profiles.
        </p>
      </div>
    </main>
  );
};

export default HomePage;
