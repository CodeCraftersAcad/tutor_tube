// const { fetchData } = require('../utils/fetchData');
const { fetchData } = require('../utils/fetchData');
exports.getHome = async (req, res) => {
  const search = req.params.search;
  try {
    const getYoutube = async (url) => {
      const yt = await fetchData(url);
      const tube = yt("body").children()[9].children[0].data.split("var ytInitialData = ")[1];
      const parsed = JSON.parse(tube.slice(0, -1));
      const vid_arr = parsed.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents
      const vids = vid_arr.filter(item => item.hasOwnProperty("videoRenderer"))
      return vids
    }
    res
      .status(200)
      .json({
        msg: "Found Videos",
        vids: await getYoutube(`https://www.youtube.com/results?search_query=tutorial+${search}`)
      })
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Something went wrong" })
  }
}