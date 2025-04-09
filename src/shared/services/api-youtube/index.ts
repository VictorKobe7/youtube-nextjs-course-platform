import { youtube } from "@googleapis/youtube";

const YoutubeAPIClient = youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY
});

export const APIYoutube = {
  course: {
    getAll: async () => {
      const { data } = await YoutubeAPIClient.playlists.list({
        maxResults: 50,
        part: ["snippet"],
        channelId: process.env.YOUTUBE_CHANNEL_ID
      });

      const courses = (data.items || []).map((playlistItem) => ({
        id: playlistItem.id || "",
        title: playlistItem.snippet?.title || "",
        description: playlistItem.snippet?.description || "",
        image: playlistItem.snippet?.thumbnails?.medium?.url || ""
      }));

      return courses.filter((course) => course.description.includes("#CODARSE"));
    }
  }
}
