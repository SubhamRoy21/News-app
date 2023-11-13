import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps={
    country:"in",
    category:"general"
    
  }
  static propTypes={
    country:PropTypes.string,
    category:PropTypes.string
  }
    articles =[
        
        {
          "source": { "id": "espn", "name": "ESPN" },
          "author": "Adam Rittenberg",
          "title": "Sherrone Moore guides Michigan through emotional 24 hours - ESPN - ESPN",
          "description": "A look behind the scenes at a roller-coaster day for third-ranked Michigan on its way to a win over No. 10 Penn State.",
          "url": "https://www.espn.com/college-football/story/_/id/38876756/sherrone-moore-guides-michigan-emotional-24-hours",
          "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1112%2Fr1252047_1296x729_16%2D9.jpg",
          "publishedAt": "2023-11-12T04:45:00Z",
          "content": "STATE COLLEGE, Pa. -- At 3:18 p.m. Saturday, almost exactly 24 hours after news dropped that the Big Ten had suspended Michigan coach Jim Harbaugh, the final seconds ticked off the third-ranked Wolve… [+6737 chars]"
        },
        {
          "source": { "id": "cbs-news", "name": "CBS News" },
          "author": "Joseph Buczek",
          "title": "Suspect released in murder of Detroit synagogue president Samantha Woll - CBS News",
          "description": "A suspect in the murder of Detroit synagogue president Samantha Woll has been released, the suspect's attorney confirmed Saturday.",
          "url": "https://www.cbsnews.com/detroit/news/suspect-released-in-murder-of-detroit-synagogue-president-samantha-woll/",
          "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/10/23/7e01ea24-806d-45ab-a8bb-972ef3cfac85/thumbnail/1200x630/34b09bddf40420337e87e5485a1bf8c9/woll.jpg?v=8afad5e29ac9a704fff9d98ba34d3649",
          "publishedAt": "2023-11-12T04:36:00Z",
          "content": "(CBS DETROIT) - A suspect in the murder of Detroit synagogue president Samantha Woll has been released, the suspect's attorney confirmed Saturday. \r\nAn attorney for the suspect declined to comment fu… [+1092 chars]"
        },
        {
          "source": { "id": "buzzfeed", "name": "Buzzfeed" },
          "author": "Rebecca O'Connell",
          "title": "30 Products I Wish Everyone Knew About - BuzzFeed",
          "description": "Things so nice, they're worth sharing with everyone.",
          "url": "https://www.buzzfeed.com/bekoconnell/products-wish-everyone-knew-about-an",
          "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2023-11/2/18/campaign_images/5237f0d1603d/30-products-i-wish-everyone-knew-about-3-1219-1698949231-0_dblbig.jpg",
          "publishedAt": "2023-11-12T04:31:02Z",
          "content": "It comes with a lid to help maintain freshness and keep out odors. It's made of food-safe silicone that's BPA-free and dishwasher-safe. It's great for little sides of beans, sauces, soups, and more. … [+1031 chars]"
        },
       
        {
          "source": { "id": null, "name": "DawgNation" },
          "author": "Mike Griffith",
          "title": "Kirby Smart, Carson Beck react to 52-17 blowout win over Ole Miss, clinching SEC East Division - DawgNation",
          "description": "",
          "url": "https://www.DawgNation.com/gameday/kirby-carson/5Y2SVJ7ZXRF4XEGKXOZ34PMBIE/",
          "urlToImage": "https://www.dawgnation.com/resizer/aJvjFbM3V7vesMDbqAxqnl72J1o=/1280x673/smart/cloudfront-us-east-1.images.arcpublishing.com/ajc/VMGTEXJNUBHMTM6Q3IQRRV2EQU.jpg",
          "publishedAt": "2023-11-12T03:37:07Z",
          "content": "ATHENS Georgia coach Kirby Smart completed the SEC circuit on Saturday night with a 52-17 win over Ole Miss.\r\nThe Rebels were the one team in the league Smart hadnt defeated as a head coach entering … [+1880 chars]"
        },
        {
          "source": { "id": null, "name": "CBS Sports" },
          "author": "",
          "title": "Oregon vs. USC live stream, how to watch, TV channel, prediction, expert picks, kickoff time - CBS Sports",
          "description": "The Ducks look to make a statement on a big late-night stage in Eugene, Oregon",
          "url": "https://www.cbssports.com/college-football/news/oregon-vs-usc-live-stream-how-to-watch-tv-channel-prediction-expert-picks-kickoff-time/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/11/09/defa11f5-0941-4163-9366-fa0f48ddd508/thumbnail/1200x675/73d71902b55981edf6475b7ed38fcea9/bo-nix-2-1.jpg",
          "publishedAt": "2023-11-12T03:15:00Z",
          "content": "It's always exciting when programs the caliber of No. 6 Oregon and USC meet this late in the season when the stakes are raised. However, Saturday's late-night contest between the Ducks and Trojans ca… [+4509 chars]"
        },
        {
          "source": { "id": null, "name": "Ca.gov" },
          "author": null,
          "title": "Governor Newsom Proclaims State of Emergency in Los Angeles County Due to I-10 Freeway Fire | California Governor - Office of Governor Gavin Newsom",
          "description": "SACRAMENTO — Governor Gavin Newsom today proclaimed a state of emergency in Los Angeles County to support the state’s response to the fire beneath the I-10 freeway near downtown Los Angeles.",
          "url": "https://www.gov.ca.gov/2023/11/11/governor-newsom-proclaims-state-of-emergency-in-los-angeles-county-due-to-i-10-freeway-fire/",
          "urlToImage": "https://www.gov.ca.gov/wp-content/uploads/2019/02/GovernorSeal.png",
          "publishedAt": "2023-11-12T02:58:17Z",
          "content": "SACRAMENTO  Governor Gavin Newsom today proclaimed a state of emergency in Los Angeles County to support the states response to the fire beneath the I-10 freeway near downtown Los Angeles.The state i… [+747 chars]"
        },
        {
          "source": { "id": "the-hill", "name": "The Hill" },
          "author": "Tara Suter",
          "title": "UCLA faculty call on school to condemn protests, speech ‘crossing the line’ - The Hill",
          "description": "A group of over 300 faculty at the University of California, Los Angeles (UCLA) signed a letter calling on the school to condemn protests “crossing the line from protected speech to unlawful incitement” amid the ongoing Israel-Hamas war. “We were horrified to…",
          "url": "https://thehill.com/homenews/education/4305783-ucla-faculty-call-condemn-protests-crossing-the-line/",
          "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/07/GettyImages-143309512-e1689881656577.jpg?w=1280",
          "publishedAt": "2023-11-12T02:01:00Z",
          "content": "Skip to content\r\nA group of over 300 faculty at the University of California, Los Angeles (UCLA) signed a letter calling on the school to condemn protests “crossing the line from protected speech to … [+2346 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Catherine Thorbecke",
          "title": "The wildest moments of WeWork’s rise - CNN",
          "description": "WeWork officially filed for bankruptcy this week, an all-but-expected development for the coworking startup that has been slowly unraveling for years but once promised to revolutionize office work as we know it.",
          "url": "https://www.cnn.com/2023/11/11/tech/wework-adam-neumann-wildest-moments/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1145667877.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-11-12T01:22:00Z",
          "content": "WeWork officially filed for bankruptcy this week, a seemingly inevitable development for the coworking startup which once promised to revolutionize office work but has been slowly unraveling for year… [+6160 chars]"
        },
        {
          "source": { "id": "reuters", "name": "Reuters" },
          "author": "Nidal Al-Mughrabi, Emily Rose, Maayan Lubell",
          "title": "Israel says it's ready to evacuate babies from Gaza hospital as fighting rages - Reuters",
          "description": "Israel's military said it was ready to evacuate babies from Gaza's <a href=\"/world/middle-east/al-shifa-gazas-largest-hospital-headlines-2023-11-10/\">largest hospital</a> on Sunday, where Palestinian officials said two newborns died and dozens more were at ri…",
          "url": "https://www.reuters.com/world/middle-east/fighting-rages-israel-says-ready-evacuate-babies-gazas-main-hospital-2023-11-11/",
          "urlToImage": "https://www.reuters.com/resizer/IiQRI24Zz0JA7GK_qz1rgNlIXb8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6EJSOIAHXFOAXKJ4HJIVXDZICA.jpg",
          "publishedAt": "2023-11-12T00:45:00Z",
          "content": "GAZA/JERUSALEM, Nov 12 (Reuters) - Israel's military said it was ready to evacuate babies from Gaza's largest hospital on Sunday, where Palestinian officials said two newborns died and dozens more we… [+6883 chars]"
        },
        {
          "source": { "id": "abc-news", "name": "ABC News" },
          "author": "Patricio Chile, Meredith Deliso",
          "title": "3 dead, including SWAT officer, following hostage incident in Austin: Police - ABC News",
          "description": "Officers responded to a 911 caller who said she was being stabbed, police said.",
          "url": "https://abcnews.go.com/US/1-officer-killed-1-injured-austin-shooting/story?id=104818603",
          "urlToImage": "https://i.abcnewsfe.com/a/90143029-3f53-4887-9bb1-261215da26d7/police-officer-shot-austin-02-ht-jt-231111_1699718099800_hpMain_16x9.jpg?w=992",
          "publishedAt": "2023-11-12T00:45:00Z",
          "content": "Three people are dead after a hostage situation unfolded in Austin, Texas, early Saturday, including a responding SWAT officer who was shot and killed in a shootout with the suspect, police said.\r\nA … [+3478 chars]"
        },
        {
          "source": { "id": null, "name": "Suntimes.com" },
          "author": "Georgia Nicols",
          "title": "Horoscope for Saturday, Nov. 11, 2023 - Chicago Sun-Times",
          "description": null,
          "url": "https://chicago.suntimes.com/2023/11/11/23953039/horoscopes-today-saturday-nov-11-2023",
          "urlToImage": "https://cst.brightspotcdn.com/dims4/default/8196f38/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2Fd6sUG69hh0AAxdsnoeKEI80k-KQ%3D%2F0x0%3A870x630%2F870x630%2Ffilters%3Afocal%28435x315%3A436x316%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F25069303%2FGeorgia_mug.jpeg",
          "publishedAt": "2023-11-11T23:55:00Z",
          "content": "Moon Alert\r\nAvoid shopping or major decisions from 9 a.m. to 2 p.m. Chicago time. After that, the moon moves from Libra into Scorpio.\r\nAries (March 21-April 19)\r\nPostpone important decisions about in… [+3941 chars]"
        },
        {
          "source": { "id": "the-washington-post", "name": "The Washington Post" },
          "author": "A. Camden Walker",
          "title": "PM Update: Dipping into the 30s tonight. Sunday's a bit cooler than today. - The Washington Post",
          "description": "Clouds and breezes have a slight uptick tonight into tomorrow morning.",
          "url": "https://www.washingtonpost.com/weather/2023/11/11/weather-sunday-cooler/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5725OWFGORDB7MQX2FEPZ3C3UQ.jpg&w=1440",
          "publishedAt": "2023-11-11T23:11:00Z",
          "content": "Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nWhat fantastic weather for Veterans Day! Agree? Only a few clouds and breezes with temperatures beautifully average for this time of y… [+2060 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Annie Grayer, Lauren Fox",
          "title": "House GOP pursuing two-step plan to avert government shutdown - CNN",
          "description": "House Republicans are pursuing a two-step plan for funding the government, three sources familiar with the matter told CNN.",
          "url": "https://www.cnn.com/2023/11/11/politics/house-speaker-mike-johnson-pitches/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231031153254-mike-johnson-102523-kfile.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-11-11T23:09:00Z",
          "content": "House Republicans are pursuing a two-step plan for funding the government, three sources familiar with the matter told CNN, as Congress barrels toward another spending deadline next Friday.\r\nNewly el… [+3497 chars]"
        },
        {
          "source": { "id": null, "name": "Vox" },
          "author": "Ellen Ioanes",
          "title": "Israel-Hamas war: Israel’s humanitarian pauses in Gaza, explained - Vox.com",
          "description": "Civilians continue to flee south as fighting around hospitals increases",
          "url": "https://www.vox.com/world-politics/2023/11/11/23956555/israel-hamas-war-gaza-humanitarian-pauses-explained-hospitals-shifa",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/xOsFDptmYV9dPriRXAQhygkC4Sk=/0x412:5760x3428/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25077094/1786001062.jpg",
          "publishedAt": "2023-11-11T22:26:29Z",
          "content": "Israel has agreed to four-hour daily humanitarian pauses in areas of northern Gaza as US officials announced Thursday. The pauses, meant to allow civilians to safely leave for southern Gaza, comes am… [+9406 chars]"
        },
        {
          "source": { "id": null, "name": "Forbes" },
          "author": "William Skipworth",
          "title": "Northern Lights Forecast: How To See Tonight’s Aurora - Forbes",
          "description": "The aurora is expected to be over some big U.S. cities — but so are clouds.",
          "url": "https://www.forbes.com/sites/willskipworth/2023/11/11/northern-lights-forecast-how-to-see-tonights-aurora/",
          "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/654ff97346759d607a7b26a2/0x0.jpg?format=jpg&crop=2054,1154,x0,y40,safe&height=900&width=1600&fit=bounds",
          "publishedAt": "2023-11-11T22:01:23Z",
          "content": "Meteorologists expect the aurora borealis to be visible tonight from parts of the northern U.S. and Canada, so those looking to watch should hope for clear dark skies.\r\nThe Aurora Borealis appears in… [+2928 chars]"
        },
        {
          "source": { "id": null, "name": "YouTube" },
          "author": null,
          "title": "London police arrest counterprotesters at pro-Palestinian march - NBC News",
          "description": "Police officers arrested dozens of counterprotesters after scuffles erupted alongside a pro-Palestinian march in central London. Many counterprotesters mainl...",
          "url": "https://www.youtube.com/watch?v=svU-bvcKY74",
          "urlToImage": "https://i.ytimg.com/vi/svU-bvcKY74/maxresdefault.jpg",
          "publishedAt": "2023-11-11T21:30:06Z",
          "content": null
        }
      ]
    constructor(){
        super();
        console.log("hello I am a constructor");
        this.state={
            articles:[],
            loading: false,
            page: 1
        };
    }
    async componentDidMount(){
        this.props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4b0a0c1933874673a3e11d023361db95&page=1`;
        let data= await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles});
        this.props.setProgress(100);

    }
     handlePreviousClick=async()=>{
        console.log("hi");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4b0a0c1933874673a3e11d023361db95&page=${this.state.page-1}`;
        this.setState({loading:true})
        let data= await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        
        

        this.setState({
            page:this.state.page-1,
            articles: parsedData.articles,
            loading:false
        })

    }
     handleNextClick=async()=>{
        console.log("hi");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4b0a0c1933874673a3e11d023361db95&page=${this.state.page+1}`;
        this.setState({loading:true})
        let data= await fetch(url);
        let parsedData=await data.json();
        this.setState({loading:false})
        
        

        this.setState({
            page:this.state.page+1,
            articles: parsedData.articles
        })
    }
  render() {
    return (
    <>
        <div className="container my-3">
            <h2>News app - Top Headlines</h2>
            {this.state.loading && <Spinner/>}
            <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                 return <div className="col-md-4" key={element.url}>
                   <NewsItem  title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url}/> 
                </div>
            })}
            </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
            <button type="button" class="btn btn-dark " onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
        </div>  
    </>
    )
  }
}

export default News
