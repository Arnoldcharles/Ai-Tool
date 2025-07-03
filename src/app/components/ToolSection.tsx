"use client";

import { useState } from "react";
import ToolCard from "./ToolCard";
import { ChevronDown, ChevronUp } from "lucide-react";

type Tool = {
  name: string;
  icon?: React.ReactNode;
  link?: string;
};

type Props = {
  title: string;
  tools: Tool[];
  searchTerm: string;
};

export default function ToolSection({ title, tools, searchTerm }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredTools.length === 0) return null;

  return (
    <div className="mb-6">
      <div
        className="bg-gradient-to-r from-purple-500 to-purple-700 text-white text-lg px-6 py-3 rounded-t-xl font-semibold flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>

      {isOpen && (
        <div className="bg-[#12141e] p-6 rounded-b-xl grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 animate-fadeIn">
          {filteredTools.map((tool, i) => (
            <ToolCard
              key={i}
              name={tool.name}
              icon={tool.icon}
              link={tool.link}
            />
          ))}
        </div>
      )}
    </div>
  );
}
