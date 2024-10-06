import React, { Component } from 'react'
import DisposeItem from './DisposeItem'
import './App1.css';

export class Methods extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "Kevin Lynch",
            "title": "How to watch Man United vs Everton: Live stream Premier League football onl",
            "description": "With questions once again being asked about Ole Gunnar Solskjaer's suitability for the Old Trafford hot seat, the Norwegian boss will be looking for a positive result today at home against an improving Toffees side- read on to find out how to get a Man United…",
            "url": "https://www.androidcentral.com/man-united-vs-everton-live-stream-how-watch-premier-league-match-online-anywhere",
            "urlToImage": "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/images/cover/cover-ac.jpg",
            "publishedAt": "2021-10-02T10:30:02Z",
            "content": "With questions once again being asked about Ole Gunnar Solskjaer's suitability for the Old Trafford hot seat, the Norwegian boss will be looking for a positive result today at home against an improvi… [+5149 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "Jerry Hildenbrand",
            "title": "AI is the controversial future of tech whether we like it or not",
            "description": "Artificial Intelligence is the best and worst thing that's ever happened to our daily lives.\n\nI'm what a lot of people used to call a futurist. Not the science fiction writer kind of futurist, but the guy who recognized early on that when technology really st…",
            "url": "https://www.androidcentral.com/ai-controversial-future-tech-whether-we-it-or-not",
            "urlToImage": "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2020/09/google-assistant-routines.jpg",
            "publishedAt": "2021-10-02T12:00:02Z",
            "content": "Source: Jerry Hildenbrand / Android Central\r\nI'm what a lot of people used to call a futurist. Not the science fiction writer kind of futurist, but the guy who recognized early on that when technolog… [+8082 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Alys Fowler",
            "title": "Smashing pumpkins: how to cure and store squash for winter",
            "description": "A properly home-cured squash will taste delicious and last for months. But they need careful handling …I creep through my pumpkin patch, peering under leaves to see the swelling, ripening fruit, counting my bounty for the months ahead. But now the frosts are …",
            "url": "https://amp.theguardian.com/lifeandstyle/2021/oct/02/smashing-pumpkins-how-to-cure-and-store-squash-for-winter",
            "urlToImage": "https://i.guim.co.uk/img/media/04606fd14edc2f9323ae6ce3d157b956aca48419/0_0_5616_3370/master/5616.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=40d1d4f261ba25d45db94bec5ffda493",
            "publishedAt": "2021-10-02T10:00:07Z",
            "content": "I creep through my pumpkin patch, peering under leaves to see the swelling, ripening fruit, counting my bounty for the months ahead. But now the frosts are approaching these need moving indoors to cu… [+2954 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Mark Sweney",
            "title": "‘Odds are against you’: the problem with the music streaming boom",
            "description": "As dust from the gold rush settles, big record companies and elite artists emerge firmly on topWith the streaming revolution breathing new life into a once-moribund music industry collapsing under plummeting CD sales and rampant piracy, the world’s biggest re…",
            "url": "https://amp.theguardian.com/music/2021/oct/02/odds-are-against-you-the-problem-with-the-music-streaming-boom",
            "urlToImage": "https://i.guim.co.uk/img/media/0a93069e4cba4c549ec476c558f0b22cd9b05d3c/0_248_4840_2903/master/4840.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=08035f74aeff989aa7461a3ec38e6fc0",
            "publishedAt": "2021-10-02T06:00:02Z",
            "content": "With the streaming revolution breathing new life into a once-moribund music industry collapsing under plummeting CD sales and rampant piracy, the worlds biggest record companies Universal Music, Sony… [+7103 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "MacRumors Staff",
            "title": "Top Stories: iOS 15 Bugs, iPhone 13 Teardowns, iPad Mini Jelly Scrolling, and More",
            "description": "The flurry of activity following Apple's event and the launches of iOS 15 and the iPhone 13 has started to calm down, but that doesn't mean there hasn't continued to be a ton of news out there.\n\n\n\n\n\nWith almost two weeks out in the public, iOS 15 has proven t…",
            "url": "https://www.macrumors.com/2021/10/02/top-stories-ios-15-bugs/",
            "urlToImage": "https://images.macrumors.com/t/-9qSN6I5_7GCtvzMTEJGjV4qIew=/1920x/https://images.macrumors.com/article-new/2021/10/Top-Stories-78-Thumbnail.jpg",
            "publishedAt": "2021-10-02T13:00:00Z",
            "content": "The flurry of activity following Apple's event and the launches of iOS 15 and the iPhone 13 has started to calm down, but that doesn't mean there hasn't continued to be a ton of news out there.\r\nWith… [+3876 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gadgets Now"
            },
            "author": "Gadgets Now",
            "title": "7 biggest problems that iPhone users are complaining of after downloading iOS 15 - Gadgets Now",
            "description": "7 biggest problems that iPhone users are complaining of after downloading iOS 15  Gadgets Now\r\n</li><li>iOS 15's 'Unlock with Apple Watch' bug fix for iPhone 13 is now available  MobileSyrup\r\n</li><li>Apple Watch Series 7 Release Date Confirmed! Plus …",
            "url": "https://www.gadgetsnow.com/slideshows/7-biggest-problems-that-iphone-users-are-complaining-of-after-downloading-ios-15/photolist/86683530.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-86683542,width-800,resizemode-4,imgsize-25842/share.jpg",
            "publishedAt": "2021-10-02T03:37:00Z",
            "content": "Soon after iOS 15 was released, Twitter and Apple Support Forums were flooded with complaints from users and the most widespread issue was around the wrong storage warning. Users report they are gett… [+218 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tom's Guide"
            },
            "author": "Kate Kozuch",
            "title": "The best Samsung watch in 2021 - Tom's Guide",
            "description": "The best Samsung watch in 2021  Tom's Guide\r\n</li><li>Samsung's 6.1-inch Galaxy S22 will reportedly make up more than half the series' production - GSMArena.com news  GSMArena.com\r\n</li><li>I was excited for the Samsung Galaxy Z Flip3, but then I actu…",
            "url": "https://www.tomsguide.com/best-picks/best-samsung-watch",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/RHk9nSH3HgtSAUiGwW3SDD-1200-80.jpg",
            "publishedAt": "2021-10-02T05:00:00Z",
            "content": "What is the best Samsung watch? The answer depends on what you’re looking for out of a smartwatch for Samsung users. Whether you’re looking for a device for fitness tracking, an extension of your sma… [+8928 chars]"
        },
        /*{
            "source": {
                "id": null,
                "name": "Boing Boing"
            },
            "author": "Boing Boing's Shop",
            "title": "Master the world's leading graphic design suite with 40% off these Adobe Creative Cloud training packages",
            "description": "For years now, Adobe has been the gold standard for image editing software. The company dominates the worldwide graphics market with its Creative Cloud Suite, which includes programs like Photoshop, Lightroom, and Illustrator, to name a few. Experts and amate…",
            "url": "https://boingboing.net/2021/10/01/master-the-worlds-leading-graphic-design-suite-with-40-off-these-adobe-creative-cloud-training-packages.html",
            "urlToImage": "https://i1.wp.com/boingboing.net/wp-content/uploads/2021/09/sale_27793_article_image.jpeg?fit=1200%2C800&ssl=1",
            "publishedAt": "2021-10-02T03:17:00Z",
            "content": "For years now, Adobe has been the gold standard for image editing software. The company dominates the worldwide graphics market with its Creative Cloud Suite, which includes programs like Photoshop, … [+4595 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Víctor Millán",
            "title": "De ‘Ted Lasso’ a ‘Fundación’: Apple TV+ se hace grande en las guerras del ‘streaming’",
            "description": "Con una audiencia aún pequeña en comparación con Netflix o Disney Plus, la plataforma de Apple cuenta con dinero y cada vez con mayores aciertos para hacerse su propio hueco.",
            "url": "https://hipertextual.com/2021/10/apple-tv-plus-streaming-wars",
            "urlToImage": "https://i2.wp.com/hipertextual.com/wp-content/uploads/2021/08/ted_lasso_bill_lawrence_brendan_hunt_joe_kelly_jason_sudeikis_2.jpg?fit=1600%2C1067&ssl=1",
            "publishedAt": "2021-10-02T06:29:00Z",
            "content": "Cuando en marzo de 2019 Apple anunció el lanzamiento de Apple TV Plus, se cumplieron uno de esos rumores que unos meses antes parecían un tanto desorbitados.\r\nCon una apuesta de fondo de referencia, … [+5923 chars]"
        },
        {
            "source": {
                "id": "the-next-web",
                "name": "The Next Web"
            },
            "author": "The Markup",
            "title": "There’s a multibillion-dollar market for your phone’s location data",
            "description": "Companies that you likely have never heard of are hawking access to the location history on your mobile phone. An estimated $12 billion market, the location data industry has many players: collectors, aggregators, marketplaces, and location intelligence firms…",
            "url": "https://thenextweb.com/news/multibillion-dollar-market-phones-location-data-syndication",
            "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F10%2FThe-Markup-phone-data-illustration-hed.jpg&signature=6c861e851466bd6cbf19dcd48e49cff1",
            "publishedAt": "2021-10-02T10:00:22Z",
            "content": "Companies that you likely have never heard of are hawking access to the location history on your mobile phone. An estimated $12 billion market, the location data industry has many players: collectors… [+15714 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Freakonomics.com"
            },
            "author": "Steven D. Levitt",
            "title": "Robert Axelrod on Why Being Nice, Forgiving, and Provokable are the Best Strategies for Life (People I (Mostly) Admire, Ep. 47)",
            "description": "The prisoner’s dilemma is a classic game-theory problem. Robert, a political scientist at the University of Michigan, has spent his career studying it — and the ways humans can cooperate, or betray each other, for their own benefit. He and Steve talk about th…",
            "url": "https://freakonomics.com/podcast/pima-robert-axelrod/",
            "urlToImage": "https://freakonomics.com/wp-content/uploads/2020/08/pima.fbthumbnail.630px.png",
            "publishedAt": "2021-10-02T03:00:39Z",
            "content": "The prisoners dilemma is a classic game-theory problem. Robert, a political scientist at the University of Michigan, has spent his career studying it and the ways humans can cooperate, or betray each… [+507 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Boing Boing"
            },
            "author": "Boing Boing's Shop",
            "title": "Grab a pair of Apple AirPods Pro and all the accessories you'll need for 15% off",
            "description": "It's no secret that Apple AirPods are the most sought-after earbuds on the market However, you may need a few accessories to really outfit them in the way that works best for you. These selections will make sure your AirPods, AirPods Pro, and AirPods Max stay…",
            "url": "https://boingboing.net/2021/10/02/grab-a-pair-of-apple-airpods-pro-and-all-the-accessories-youll-need-for-15-off.html",
            "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2021/09/sale_26463_article_image.jpeg?fit=1200%2C800&ssl=1",
            "publishedAt": "2021-10-02T13:00:00Z",
            "content": "It's no secret that Apple AirPods are the most sought-after earbuds on the market However, you may need a few accessories to really outfit them in the way that works best for you. These selections wi… [+6228 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Boing Boing"
            },
            "author": "Boing Boing's Shop",
            "title": "Which AirTag accessory is right for you? Check out these five different options, all on sale",
            "description": "An Apple AirTag prevents you from losing your valuables, so why not protect it from everyday wear, accidents, and weather, while adding a new favorite fashion accessory to your lineup? Gone are the days of bulky, boring tech cases and questionable carrying me…",
            "url": "https://boingboing.net/2021/10/01/which-airtag-accessory-is-right-for-you-check-out-these-five-different-options-all-on-sale.html",
            "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2021/09/sale_295537_article_image.jpeg?fit=1200%2C800&ssl=1",
            "publishedAt": "2021-10-02T05:19:00Z",
            "content": "An Apple AirTag prevents you from losing your valuables, so why not protect it from everyday wear, accidents, and weather, while adding a new favorite fashion accessory to your lineup? Gone are the d… [+2515 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Yúbal Fernández",
            "title": "Notificaciones en iOS 15: cómo personalizarlas al máximo, silenciarlas y decidir cuales ver",
            "description": "Te traemos una pequeña guía con todo lo que debes saber para configurar y personalizar las notificaciones en iOS 15, la última versión del sistema operativo móvil de Apple. La mayoría de opciones ya llevan estando desde hace varias versiones, pero en esta iOS…",
            "url": "https://www.xataka.com/basics/notificaciones-ios-15-como-personalizarlas-al-maximo-silenciarlas-decidir-cuales-ver",
            "urlToImage": "https://i.blogs.es/308a05/notificaciones-ios/840_560.jpg",
            "publishedAt": "2021-10-02T10:00:13Z",
            "content": "Te traemos una pequeña guía con todo lo que debes saber para configurar y personalizar las notificaciones en iOS 15, la última versión del sistema operativo móvil de Apple. La mayoría de opciones ya … [+14600 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daringfireball.net"
            },
            "author": "John Gruber",
            "title": "★ The Tragedy of Safari 15 for Mac’s ‘Tabs’",
            "description": "Change for change’s sake alone is masturbatory. That with Safari 15 it actually makes usability *worse*, solely for flamboyant cosmetic reasons, is downright perverse.",
            "url": "https://daringfireball.net/2021/10/the_tragedy_of_safari_15_quote_unquote_tabs",
            "urlToImage": "https://daringfireball.net/graphics/df-square-1024.png",
            "publishedAt": "2021-10-02T00:04:44Z",
            "content": "Our long national iOS 15 Safari nightmare ended last month, praise be, but the lesser of the two bad Safari designs unveiled at WWDC persists and actually shipped: the new tabs in Safari 15 for Mac. … [+12724 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Leo Becker",
            "title": "iOS 15.0.1: Apple geht Probleme in iOS und iPadOS 15 an",
            "description": "Das erste Update für iOS 15 bringt wenige, aber wichtige Bugfixes für iPhones und iPads. Das iPhone 13 soll sich so wieder per Apple Watch entsperren lassen.",
            "url": "https://www.heise.de/news/iOS-15-0-1-Apple-geht-Probleme-in-iOS-und-iPadOS-15-an-6206689.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/1/7/7/5/2/0/tre210928_231_iPhone-13-pro-front-922ce1f42b9a7ddc.jpeg",
            "publishedAt": "2021-10-02T07:38:00Z",
            "content": "Apple hat am Freitagabend iOS 15.0.1 und iPadOS 15.0.1 zum Download freigegeben. Die Betriebssystem-Updates sind über die integrierte Software-Aktualisierung direkt auf den Geräten (Einstellungen / A… [+2296 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Bradley Chambers",
            "title": "Apple @ Work: Does ‘BYOD’ make sense for remote organizations who use Apple?",
            "description": "Apple @ Work is brought to you by Kandji, a modern, cloud-based platform to manage and secure your Mac, iPhone, iPad, and Apple TV devices. Kandji saves IT teams hours of manual work with features like one-click compliance templates and 150+ pre-built automat…",
            "url": "https://9to5mac.com/2021/10/02/byod-apple/",
            "urlToImage": "https://i1.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/08/Apple-Macbook.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2021-10-02T11:20:00Z",
            "content": "Apple @ Work is brought to you by Kandji, a modern, cloud-based platform to manage and secure your Mac, iPhone, iPad, and Apple TV devices. Kandji saves IT teams hours of manual work with features li… [+4346 chars]"
        },*/
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "José Adorno",
            "title": "Poll: Would you buy an iPhone with 2TB of storage?",
            "description": "Apple just released an iPhone with 1TB of storage, which some people already think it’s too much. Now, a new report suggests that the iPhone 14 could feature twice the storage available today. Would you buy one?\n more…\nThe post Poll: Would you buy an iPhone w…",
            "url": "https://9to5mac.com/2021/10/02/poll-would-you-buy-an-iphone-with-2tb-of-storage/",
            "urlToImage": "https://i1.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/09/iPhone-13-Pro-camera.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2021-10-02T12:04:14Z",
            "content": "Apple just released an iPhone with 1TB of storage, which some people already think it’s too much. Now, a new report suggests that the iPhone 14 could feature twice the storage available today. Would … [+2142 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Seth Kurkowski",
            "title": "9to5Mac Happy Hour 349: Hands-on with iPhone 13 Pro, new iPad mini impressions, iTunes DRM struggles",
            "description": "This week on Happy Hour, Zac gives his thoughts after a week with the iPhone 13 Pro and trying a new iPad mini at Best Buy. There’s also some news about Apple TV+ and a ‘High Power Mode’ for Mac. Plus, Zac and Benjamin explore how antiquated DRM of the iTunes…",
            "url": "https://9to5mac.com/2021/10/01/9to5mac-happy-hour-349-hands-on-with-iphone-13-pro-new-ipad-mini-impressions-itunes-drm-struggles/",
            "urlToImage": "https://i2.wp.com/9to5mac.com/wp-content/uploads/sites/6/2018/04/9to5mac-happy-hour-lead1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2021-10-02T03:17:28Z",
            "content": "This week on Happy Hour, Zac gives his thoughts after a week with the iPhone 13 Pro and trying a new iPad mini at Best Buy. Theres also some news about Apple TV+ and a High Power Mode for Mac. Plus, … [+1118 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "José Adorno",
            "title": "Roundup: AirPods 3 could launch this month; here’s what we know so far",
            "description": "After a year of potential release dates, it seems that AirPods 3 could finally launch in October. Whether it will be in a rumored new event or via a press release, as the last few AirPods were, Apple’s third-generation true wireless earbuds are coming. Here’s…",
            "url": "https://9to5mac.com/2021/10/02/roundup-airpods-3-what-we-know/",
            "urlToImage": "https://i2.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/05/airpods-3-dummy-2.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2021-10-02T11:15:01Z",
            "content": "After a year of potential release dates, it seems that AirPods 3 could finally launch in October. Whether it will be in a rumored new event or via a press release, as the last few AirPods were, Apple… [+3285 chars]"
        }
    ]

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className='container my-3'><h2>
                Today's News</h2>
                <p>Latest and new updates till now...</p>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}> 
                            <DisposeItem title={element.title.slice(0,45)} description={element.description.slice(0,80)} ImgUrl={element.urlToImage} NewUrl={element.url}/>
                        </div>
                    })}
                </div>
            </div>
            /* <div className="row">
                    <div className="col md-4">
                        <DisposeItem title='mytitle' description='mydesc' ImgUrl="data:image/jpeg;base64,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" />
                    </div>
                    <div className="col md-4">
                        <DisposeItem title='mytitle' description='mydesc' ImgUrl="http://www.takepart.com/sites/default/files/clothing-donation-MAIN2.jpg" />
                    </div>
                    <div className="col md-4">
                        <DisposeItem title='mytitle' description='mydesc' />
                    </div>
                    <div className="col md-4">
                        <DisposeItem title='mytitle' description='mydesc' />
                    </div>
                </div>}*/
        )
    }
}

export default Methods
