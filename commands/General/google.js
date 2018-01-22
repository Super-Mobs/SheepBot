const cheerio = require('cheerio'),
      snekfetch = require('snekfetch'),
      querystring = require('querystring');
exports.run = async (client, msg) => {
        // These are our two variables. One of them creates a message while we preform a search,
        // the other generates a URL for our crawler.
        let searchMessage = await msg.reply('Searching... Sec.');
        let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(msg.content)}`;
     
        // We will now use snekfetch to crawl Google.com. Snekfetch uses promises so we will
        // utilize that for our try/catch block.
        return snekfetch.get(searchUrl).then((result) => {
     
           // Cheerio lets us parse the HTML on our google result to grab the URL.
           let $ = cheerio.load(result.text);
     
           // This is allowing us to grab the URL from within the instance of the page (HTML)
           let googleData = $('.r').first().find('a').first().attr('href');
      
           // Now that we have our data from Google, we can send it to the channel.
           googleData = querystring.parse(googleData.replace('/url?', ''));
           searchMessage.edit(`Result found!\n${googleData.q}`);
     
       // If no results are found, we catch it and return 'No results are found!'
       }).catch((err) => {
          searchMessage.edit('No results found!');
       });
     }
 
  
  
  exports.conf = {
    enabled: true,
    runIn: ["text", "dm", "group"],
    aliases: [],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
  };
  
  exports.help = {
    name: "google",
    description: "Google whatever you wanna google.",
    usage: "",
    usageDelim: "",
  };
  