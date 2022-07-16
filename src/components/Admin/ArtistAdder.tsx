import {useState, useEffect} from 'react';

export default function AristAdder(){
  const [Items, setItems] = useState<string[]>([]);
  return (
    <>
      <div className='h-4'></div>
      <div className="rounded p-2">
        <div className='flex flex-row justify-center'>
          <div className='flex flex-col'>
            {Items.map((item, index) => (
              <div className='text-xl text-zinc-300'>Artist {index}</div>
            ))}
          </div>
        </div>

        <div className='flex flex-row justify-center my-2'>
          <div onClick={() => setItems(current => [...current, "Artist"])} className='select-none rounded-full transition hover:bg-zinc-800 cursor-pointer flex flex-col text-xl justify-center text-center align-middle text-white w-10 h-10'>+</div>
        </div>
      </div>
    </>
  )
}
