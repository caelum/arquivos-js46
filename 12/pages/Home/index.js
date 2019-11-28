import React , {Fragment, useState, useEffect} from 'react';
import Cabecalho from '../../components/Cabecalho';
import Dashboard from '../../components/Dashboard';
import Widget from '../../components/Widget';
import TrendsArea from '../../components/TrendsArea';
import Tweet from '../../components/Tweet';
import NavMenu from '../../components/NavMenu';

function Home() {

  const [tweet, setTweet] = useState('');
  const [tweetList, setTweetList] = useState([]);

  useEffect(()=> {
    //console.log(tweet);
  })

  const adicionaTweet = (event) => {
    event.preventDefault();
    if(tweet){
      setTweetList([tweet, ...tweetList]);
      setTweet('');
    }
  }

  return (
    <Fragment>
      <Cabecalho>
        <NavMenu usuario="@caelum"/>
      </Cabecalho>
      <div className="container">
        <Dashboard>
          <Widget>
            <form className="novoTweet" onSubmit={adicionaTweet}>
              <div className="novoTweet__editorArea">
                <span className={`novoTweet__status ${tweet.length > 140 ? 'novoTweet__status--invalido' : '' }`}>
                  {tweet.length}/140
                </span>
                <textarea 
                  autoFocus
                 value={tweet}
                 onChange={ event => setTweet(event.target.value) }
                 className="novoTweet__editor" placeholder="O que está acontecendo?">
                </textarea>
              </div>
              <button 
                disabled={tweet.length > 140 || tweet.length < 1 ? true : false}
              type="submit" className="novoTweet__envia">Tweetar</button>
            </form>
          </Widget>
          <Widget>
            <TrendsArea />
          </Widget>
        </Dashboard>
        <Dashboard posicao="centro">
          <Widget>
            <div className="tweetsArea">
            {
              tweetList.length <= 0 ? 
                <p>Oops! Você ainda não tuitou!</p>
              :
                tweetList.map((tweet, index) => {
                  return <Tweet key={index} texto={tweet} />
                })
            }
            </div>
          </Widget>
        </Dashboard>
      </div>
    </Fragment>
  );
}

export default Home;
