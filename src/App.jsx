import React, { useState } from 'react';

    const passages = [
      "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. - John 3:16",
      "I can do all things through him who strengthens me. - Philippians 4:13",
      "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. - Romans 8:28",
      "The Lord is my shepherd; I shall not want. - Psalm 23:1",
      "Trust in the Lord with all your heart, and do not lean on your own understanding. - Proverbs 3:5",
      "And we know that we are of God, and the whole world lies in the power of the evil one. - 1 John 5:19",
      "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness. - Galatians 5:22",
      "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go. - Joshua 1:9"
    ];

    const App = () => {
      const [passage, setPassage] = useState('');

      const getRandomPassage = () => {
        const randomIndex = Math.floor(Math.random() * passages.length);
        setPassage(passages[randomIndex]);
      };

      return (
        <div>
          <h1>Bible Study</h1>
          <button onClick={getRandomPassage}>Get Random Passage</button>
          <p>{passage}</p>
        </div>
      );
    };

    export default App;
