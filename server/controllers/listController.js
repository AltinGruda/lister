const List = require('../models/List')
const { google } = require("googleapis");
const apiKey = "AIzaSyD9LZZy5X7R1-huEvofB_TQYOQXL77W5_A";
const youtube = google.youtube({
  version: "v3",
  auth: apiKey,
});

module.exports = {
    /* 
    - Get all lists (lists of channels)
    */
    getLists: async(req, res) => {
        try {
            const lists = await List.find();
            res.json(lists);
        } catch (error) {
            console.log(error);
        }
    },
    /* 
    - Create a list (list of channels)
    */
    createList: async(req, res) => {
        try {
            await List.create({
                title: req.body.title,
                description: req.body.description,
                channel: req.body.channel,
            })
            res.json('List has been created!')
        } catch (error) {
            console.log(error);
        }
    },
    search: async (req, res) => {
        try {
            const searchQuery = req.query.search_query;
            //search videos
            const response = await youtube.search.list({
                part: "snippet",
                q: searchQuery,
                type: 'channel',
                maxResults: 10
            });
            const titles = response.data.items.map((item) => item.snippet.title);
            const ids = response.data.items.map((item) => item.snippet.channelId);
            res.send({ ids, titles });
        } catch (error) {
            console.log(error);
        }
    },
    getListVideos: async (req, res) => {
        try {
            const data = await List.findById(req.params.listId);
            if (!data) {
                return res.status(404).json({ message: 'List not found' });
            }
            const CHANNEL_IDS = data.channel.map(channel => channel.id);
            let allVideos = [];
            
            for (const channelId of CHANNEL_IDS) {
              const response = await youtube.search.list({
                channelId: channelId,
                part: 'id,snippet',
                maxResults: 1, // Set the number of videos you want to retrieve per request, CHANGE LATER
                order: 'date' // Get the newest videos
              });
            
              const videos = response.data.items;
            
              // You can access video information in each item
              videos.forEach((video) => {
                const channelName = video.snippet.channelTitle;
                const videoThumbnail = video.snippet.thumbnails.medium.url;
                const videoId = video.id.videoId;
                const title = video.snippet.title;
                const description = video.snippet.description;
                const publishedAt = video.snippet.publishedAt;
            
                // console.log(`Channel ID: ${channelId}`);
                // console.log(`Video ID: ${videoId}`);
                // console.log(`Title: ${title}`);
                // console.log(`Description: ${description}`);
                // console.log('--------------------------------------');            
                allVideos.push({
                    channelName: channelName,
                    videoThumbnail: videoThumbnail,
                    publishedAt: publishedAt,
                    channelId: channelId,
                    videoId: videoId,
                    title: title,
                    description: description,
                });
            });
            }
            
            // Send the array of all videos as the response
            res.json(allVideos);        
        } catch (error) {
            console.log(error);
        }
    }
}
