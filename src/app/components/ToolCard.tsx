type ToolCardProps = {
  name: string;
  icon?: React.ReactNode;
  link?: string;
};

export default function ToolCard({ name, icon, link }: ToolCardProps) {
  return (
    <a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#1a1c29] rounded-lg p-4 flex flex-col items-center justify-center gap-3 border border-[#2a2c3f] hover:scale-[1.02] transition"
    >
      <div className="text-3xl text-purple-400">{icon ?? "🎯"}</div>
      <p className="text-white font-medium text-center">{name}</p>
      <button className="bg-[#2a2c3f] text-white text-sm py-1.5 px-4 rounded-md hover:bg-[#383a50] transition">
        Open Tool
      </button>
    </a>
  );
}
