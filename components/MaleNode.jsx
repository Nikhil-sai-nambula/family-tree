import Image from "next/image";

const MaleNode = () => (
  <div style={{ width: 60, height: 60 }}>
    <p className="text-2xl">Nikhil</p>
    <img
      src="/Male.png"
      alt="Male"
      width={60}
      height={60}
      className="h-full w-full"
    />
  </div>
);

export default MaleNode;
