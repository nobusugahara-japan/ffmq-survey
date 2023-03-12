const secondTime = async () => {
    
    setFirstSecondTime("2回目以降です")
    const opt = {
      filter:{personId:{eq:personId}
    }};
    const lastData = []
    await API.graphql(graphqlOperation(listFfmq2Data, opt)).then(values => {
      console.log("fetch data", values);
      console.log("fetch data2", values.data.listFfmq2Data.items[0].Ffmq2Data);
      lastData = JSON.parce(values.data.listFfmq2Data.items);
      console.log(lastData)
      // const data = values.data.listFfmq2Data.items;
      console.log(lastData);
      var mostRecentDate = "";
      var mostRecentId = 0;
      for (let i = 0; i < lastData.length; i++) {
        if (i===0){
          mostRecentDate = lastData[0].createdAt
          mostRecentId = 0
        }
        if (i>=1){
          if (lastData[i].createdAt > mostRecentDate){
            console.log("1(2)番目");
            mostRecentDate = lastData[i].createdAt;
            mostRecentId = i
          } else if (lastData[i].createdAt < mostRecentDate) {
            console.log("2(3)番目")
            mostRecentDate = mostRecentDate
            mostRecentId = mostRecentId
          }
        }}
      setLastAnswerList(JSON.parce(lastData[mostRecentId].Ffmq2Data))
      console.log("last FFMQ Score", lastData[mostRecentId].Ffmq2Data)
    })
    };