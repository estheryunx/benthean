import Image from "next/image";

export default function Home() {
  return (
   <div className="px-10" >

  <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-header">
    Thean 
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">▶︎ •၊၊||၊|။||||။‌‌‌‌‌၊|• 0:10</div>
  <div className="chat-footer opacity-50">Delivered</div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-header">
    Esther
    <time className="text-xs opacity-50">11:04</time>
  </div>
  <div className="chat-bubble">I love you!</div>
  <div className="chat-footer opacity-50">Seen at 12:46</div>
</div>
   </div>
  );
}
