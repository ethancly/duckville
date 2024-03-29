import { useState, useEffect } from 'react';
import Image from "next/image";
import Main from "../../components/Main.js";

import DUCK from "../../components/duck-sm.png"

export default function Pond() {
    const [replies, setReplies] = useState(null);
    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/replies');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const replies = await response.json();
                setReplies(replies);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData(); // Call the async function inside useEffect
    }, []);
  if (!replies) return null;
  return (
    <Main>
        <div className="pond flex bg-fixed bg-cover bg-center" style={{minHeight: 'calc(100vh - 40px'}}>
            <div className="flex items-end w-full mx-[10vw]">
              <ul className="flex flex-row flex-wrap">
                {replies.map((reply) => (
                    <Duck key={reply.id} reply={reply}/>
                ))}
              </ul>
            </div>
        </div>
    </Main>
  );
}

function Duck({reply}) {
    const stz = reply.reply === 'No' ? {filter: 'grayscale(1)'} : {};
    return (
      <li title={reply.comment} key={reply.id} className="relative flex-none w-auto mr-4 mb-4 text-sm md:text-base lg:text-lg xl:text-xl">
       <Image src={DUCK} className="w-36 md:w-48 lg:w-56 xl:w-64" style={stz}/>
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
