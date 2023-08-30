import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className="bg-blue-400   p-1 text-1.5xl font-bold underline">Hello</h1>
      {/* ○○-[]*/}
      <a href="#" className="text-[22px]">
        test
      </a>

      <br />
      <div className="prose mx-auto">
        <h1>タイトル</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minima, magnam assumenda, accusantium quo
          commodi porro hic sed ratione, aperiam esse quia reiciendis? Id saepe, sequi vitae dolore suscipit ullam?
        </p>

        <ul>
          <li>aaaaaaaa</li>
          <li>aaaaaaaa</li>
          <li>aaaaaaaa</li>
          <li>aaaaaaaa</li>
          <li>aaaaaaaa</li>
        </ul>
        <code>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident saepe ea cupiditate nam unde ad repellendus
          odit maiores. Perspiciatis ut maiores nihil repudiandae voluptates reiciendis sunt assumenda? Officiis,
          veritatis est!
        </code>
      </div>
    </div>
  );
}
