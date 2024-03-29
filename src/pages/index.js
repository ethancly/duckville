import Main from "../components/Main.js";

export default function Home() {
  return (
    <Main>

      <div className="flex m-auto">
          <h2 className={`mb-3 text-5xl font-semibold`}>
            What Da Duck!
          </h2>
      </div>

      <div className="flex grid items-center justify-center m-auto gap-4 lg:grid-cols-2">
        <Item path="/pond" title="To the pond" desc="maybe here is where you show who is coming"/>
        <Item path="/register" title="What say you?" desc="this is where you put down their responds"/>
      </div>

    </Main>
  );
}

function Item({path, title, desc}) {
  return (
        <a
          href={path}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {title}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {desc}
          </p>
        </a>
  )
}