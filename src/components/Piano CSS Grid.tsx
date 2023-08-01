import { h } from "preact";

const PianoGrid = () => {
  return (
    <div className="grid grid-cols-40 grid-rows-5 gap-x-0 gap-y-0">
      <div className="col-span-2 row-span-5 bg-white">hi</div>
      <div className="col-span-1 row-span-5 bg-black">ho</div>
      <div className="col-span-2 row-span-5 bg-white"></div>
      <div className="col-span-2 row-span-3 col-start-4"></div>
      <div className="col-span-2 row-span-3 col-start-7"></div>
      <div className="col-span-3 row-span-5 col-start-10"></div>
      <div className="col-span-3 row-span-5 col-start-13"></div>
      <div className="col-span-2 row-span-3 col-start-12"></div>
      <div className="col-span-3 row-span-5 col-start-16"></div>
      <div className="col-span-2 row-span-3 col-start-15"></div>
      <div className="col-span-3 row-span-5 col-start-19"></div>
      <div className="col-span-2 row-span-3 col-start-18"></div>
      <div className="col-span-3 row-span-5 col-start-22"></div>
      <div className="col-span-3 row-span-5 col-start-25"></div>
      <div className="col-span-2 row-span-3 col-start-24"></div>
      <div className="col-span-3 row-span-5 col-start-28"></div>
      <div className="col-span-2 row-span-3 col-start-27"></div>
      <div className="col-span-3 row-span-5 col-start-31"></div>
      <div className="col-span-3 row-span-5 col-start-34"></div>
      <div className="col-span-2 row-span-3 col-start-33"></div>
    </div>
  );
};

export default PianoGrid;

// .parent {
//     display: grid;
//     grid-template-columns: repeat(40, 1fr);
//     grid-template-rows: repeat(5, 1fr);
//     grid-column-gap: 0px;
//     grid-row-gap: 0px;
//     }
//     .div1 { grid-area: 1 / 1 / 6 / 4; }
//     .div2 { grid-area: 1 / 4 / 6 / 7; }
//     .div3 { grid-area: 1 / 7 / 6 / 10; }
//     .div4 { grid-area: 1 / 3 / 4 / 5; }
//     .div5 { grid-area: 1 / 6 / 4 / 8; }
//     .div6 { grid-area: 1 / 10 / 6 / 13; }
//     .div7 { grid-area: 1 / 13 / 6 / 16; }
//     .div8 { grid-area: 1 / 12 / 4 / 14; }
//     .div9 { grid-area: 1 / 16 / 6 / 19; }
//     .div10 { grid-area: 1 / 15 / 4 / 17; }
//     .div11 { grid-area: 1 / 19 / 6 / 22; }
//     .div12 { grid-area: 1 / 18 / 4 / 20; }
//     .div13 { grid-area: 1 / 22 / 6 / 25; }
//     .div14 { grid-area: 1 / 25 / 6 / 28; }
//     .div15 { grid-area: 1 / 24 / 4 / 26; }
//     .div16 { grid-area: 1 / 28 / 6 / 31; }
//     .div17 { grid-area: 1 / 27 / 4 / 29; }
//     .div18 { grid-area: 1 / 31 / 6 / 34; }
//     .div19 { grid-area: 1 / 34 / 6 / 37; }
//     .div20 { grid-area: 1 / 33 / 4 / 35; }
