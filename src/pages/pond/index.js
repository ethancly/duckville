import Image from "next/image";
import Main from "../../components/Main.js";
import { getAllReplies } from '../../utils.js';

import POND from "./pond.jpg"
import DUCK from "../../components/duck-sm.png"

export default function Pond({ replies }) {
  return (
    <Main>
        <Image className="flex flex-grow w-full" style={{height: 'calc(100vh - 40px'}} src={POND}/>
        <div  className="absolute bottom-0" style={{left: '10vw'}}>
          <ul className="flex flex-row flex-wrap">
            {replies.map((reply) => (
                <Duck key={reply.id} reply={reply}/>
            ))}
          </ul>
        </div>
    </Main>
  );
}

function Duck({reply}) {
    const stz = reply.reply === 'No' ? {filter: 'grayscale(1)'} : {};
    return (
      <li title={reply.comment} key={reply.id} className="relative flex-none w-auto mr-4 mb-4">
       <Image src={DUCK} className="w-56" style={stz}/>
        <div className="absolute inset-0 flex items-center justify-center p-2">
          <div className="text-center  mt-8">
            <strong>{reply.name}</strong> <br/>
            <div className="max-w-[9em] overflow-hidden whitespace-nowrap overflow-ellipsis">
                {reply.comment}
            </div>
          </div>
        </div>
      </li>
    )
}

export async function getStaticProps() {
  const replies = getAllReplies();
  return {
    props: {
      replies,
    },
  };
}