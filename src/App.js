import { useEffect, useState } from 'react';
import _ from 'lodash';
import { AppContext } from './context/app-context';
import data from './data/fe_data.json'
import './App.css';
import Header from './components/Header/Header';
import Tabs from './components/Tabs/Tabs';

const types = {
  REQUEST: "request",
  RESPONSE: "response"
};

function App() {
  const [type, setType] = useState(types.REQUEST);
  const [filteredData, setFilteredData] = useState([]);

  const filterTheData = (phrase, isPii) => {
    const dataByType = data[type];
    
    if (phrase === '' && !isPii) {
      return dataByType;
    }

    return _.mapValues(dataByType, (value) => {
      return _.filter(value, item => {
        let isPhraseExist = false;

        if (phrase !== '') {
          isPhraseExist = _.includes(item.name, phrase) || _.includes(item.type, phrase);
        }
        console.log('isPhraseExist', isPhraseExist);
        return (isPhraseExist || (isPii && item.pii));
      });
    })
  };

  useEffect(() => {
    const tempData = data[type];
    setFilteredData(tempData);
  }, [type]);


  const handleSearch = (phrase, isPii) => {
    const newData = filterTheData(phrase, isPii);

    console.log(newData);

    setFilteredData(newData);
  }

  const setPageType = (newType) => {
    setType(newType);
  };

  return (
    <div className="App">
      <AppContext.Provider value={{
        methods: {
          onApply: handleSearch,
          setPageType
        },
        data: {
          filteredData
        },
        consts: {
          types
        }
      }}>
        <Header data={data} />
        <Tabs />
      </AppContext.Provider>
    </div>
  );
}

export default App;
