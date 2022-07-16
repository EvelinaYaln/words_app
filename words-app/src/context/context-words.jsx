import React, {useState, useEffect} from "react";
const WordsContext = React.createContext();

function WordsContextProvider (props) {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(true);

    useEffect(()=>{
        getWords();
    }, []);

    const getWords = () => {
        setLoading(true);
        fetch('itgirlschool/api/words')
          .then((response) => response.json())
          .then((response) => {
            setWords(response);
          })
          .catch((errors) => setError(errors))
          .finally(() => {
            setLoading(false);
          });
      };

      const editWords = (word) => {
        fetch(`itgirlschool/api/words/${word.id}/update`, {
          method: 'POST', 
          body: JSON.stringify(word), 
        })
          .then(() => {
            getWords();
          })
          .catch((errors) => setError(errors));
      };

      const deleteWords = (word) => {
        fetch(`itgirlschool/api/words/${word.id}/delete`, {
          method: 'POST',
          body: JSON.stringify(word),
        })
          .then(() => {
            getWords();
          })
          .catch((errors) => setError(errors));
      };

      const addWords = () => {
        fetch(` http://itgirlschool.justmakeit.ru/api/words/add`, {
            method: 'POST',
            body: JSON.stringify(),
          })
            .then(() => {
              getWords();
            })
            .catch((errors) => setError(errors));
      };

    return (
        <WordsContext.Provider value={{words, loading, editWords, error, deleteWords, addWords}}>
            {props.children}
        </WordsContext.Provider>
    );
}


export {WordsContext, WordsContextProvider};