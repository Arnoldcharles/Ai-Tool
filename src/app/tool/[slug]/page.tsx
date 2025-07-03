// app/tools/[slug]/page.tsx
import YouTubeMP3Downloader from "../youtube-mp3/page";
import ChatGPTTool from "../chatgpt/page";

interface Props {
  params: { slug: string };
}

export default function ToolPage({ params }: Props) {
  const { slug } = params;

  switch (slug) {
    case "youtube-mp3":
      return <YouTubeMP3Downloader />;
    case "chatgpt": 
      return <ChatGPTTool />;
  }
}
