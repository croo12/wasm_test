// import Image from 'next/image'
import { Inter } from 'next/font/google'
// import BasicHome from '@/components/useless/originHome'
import init, { greet, get_rust_data } from '../rust/pkg/rust.js';

import {useRef, useState, useEffect} from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // const wasmWorkerRef = useRef<Worker | null>();
  // const tsWorkerRef = useRef<Worker | null>();

  // const [wasmWorkerMessages, setWasmWorkerMessages] = useState<String[]>([]);
  // const [tsWorkerMessages, setTsWorkerMessages] = useState<String[]>([]);

  useEffect(() => {
    init();
    // init().then(() => {
    //   greet("WebAssembly");
    // })

    // // From https://webpack.js.org/guides/web-workers/#syntax
    // wasmWorkerRef.current = new Worker(
    //   new URL('../wasm.worker.ts', import.meta.url)
    // );
    // tsWorkerRef.current = new Worker(
    //   new URL('../ts.worker.ts', import.meta.url)
    // );

    // wasmWorkerRef.current.addEventListener('message', (evt) => {
    //   console.log('Message from wasm worker:', evt.data);
    //   const newMessages = [...wasmWorkerMessages, evt.data];
    //   setWasmWorkerMessages(newMessages);
    // });

    // tsWorkerRef.current.addEventListener('message', (evt) => {
    //   console.log('Message from TS worker:', evt.data);
    //   const newMessages = [...tsWorkerMessages, evt.data];
    //   setTsWorkerMessages(newMessages);
    // });

    // wasmWorkerRef.current.postMessage({ type: 'start' });
    // tsWorkerRef.current.postMessage({ type: 'start' });
  }, []);

  const clickEvent = (evt: any) => {
    greet("둘리");
  }

  return (
    <div>
      <h1>Welcome to the WASM</h1>
      {/* <h2>Wasm worker messages:</h2>
      <pre>
        {wasmWorkerMessages
          .map((msg) => JSON.stringify(msg, null, 2))
          .join('\n\n')}
      </pre>
      <h2>TS worker messages:</h2>
      <pre>
        {tsWorkerMessages
          .map((msg) => JSON.stringify(msg, null, 2))
          .join('\n\n')}
      </pre> */}
      <button onClick={clickEvent}>Hello Rust!</button>
    </div>
  )
}
