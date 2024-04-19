import "./styles.css"

export default function Page(props) {
    return (
        <div className={`page ${props.flip ? 'flipped' : ''}`} style={{ zIndex: props.style }} >
            <div className={`rightPage ${props.curPage === -2 - props.style ? 'active' : ''}`}>
                {props.style === -2 ? <div>
                    <h1>Welcome to My Travel Adventures!</h1>
                    <p className="desc entry">Hey there, fellow explorer! Welcome to my travel journal, the chronicle of my escapades across this beautiful planet we call home. Grab a comfy seat, pour yourself a cup of your favorite brew, and let me regale you with tales of wanderlust, discovery, and the occasional misadventure.

                        First things first, let's talk about this journal book. Picture it: a weathered leather cover, adorned with stamps from far-flung destinations and creased pages filled with scribbles and sketches. It's like a passport for the soul, a treasure trove of memories waiting to be unlocked.

                        Now, about my travels. Oh, where do I even begin? From the bustling streets of Paris to the serene temples of Kyoto, each journey has been a rollercoaster ride of emotions and experiences. There have been moments of sheer awe, like standing beneath the towering Eiffel Tower or gazing upon the majestic Colosseum in Rome. And then there have been moments of pure hilarity, like getting lost in the labyrinthine alleys of Prague's Old Town or attempting to speak Japanese with a thick Texan accent in Kyoto (spoiler alert: it didn't go well).

                        But you know what? That's the beauty of travel – it's unpredictable, it's exhilarating, and it's downright addictive. It's about stepping out of your comfort zone, embracing the unknown, and coming back home with a heart full of memories and a suitcase full of souvenirs (and maybe a few extra pounds from all the delicious food).

                        So, whether you're a seasoned globetrotter or an armchair adventurer, I invite you to join me on this journey. Let's swap stories, share tips, and maybe even plan our next great escapade together. After all, the world is our oyster, and there's no shortage of pearls waiting to be discovered.

                        Here's to many more adventures, my fellow traveler. Cheers to life, love, and the pursuit of wanderlust!

                        Yours in curiosity and wanderlust, <br></br>
                        Meetpal Singh</p> </div> :

                    <div> <h1 >{props.data.title}</h1>
                        <p className="date">{new Date(props.data.startDate).toDateString()} - {new Date(props.data.endDate).toDateString()}</p>
                        <p className="desc">
                            {props.data.description}
                        </p>
                    </div>}

            </div>
            <div className={`leftPage ${props.curPage === -1 - props.style ? 'active' : ''}`} >
                {props.data2 && (<div className="imageDet">
                    <a href={props.data2.mapLink} target="_blank" rel="noreferrer" className={props.curPage === -1 - props.style ? '' : 'disabled'}><img src={"../images/" + props.data2.imageUrl} alt="" />
                    </a>
                    <h2>{props.data2.location}</h2>
                </div>)}

            </div>
        </div>
    )
}