const Conditions= (props) => {

    const sholderPainOption=(event)=>{
        const newConditions = [...props.conditionData]
        newConditions[0] = event.target.value
        props.setConditionData(newConditions)
    }
    const sleepConditionOption=(event)=>{
        const newConditions = [...props.conditionData]
        newConditions[1] = event.target.value
        props.setConditionData(newConditions)
    }

    const mindConditionOption=(event)=>{
        const newConditions = [...props.conditionData]
        newConditions[2] = event.target.value
        props.setConditionData(newConditions)
    }

    const focusConditionOption=(event)=>{
        const newConditions = [...props.conditionData]
        newConditions[3] = event.target.value
        props.setConditionData(newConditions)
    }

    const relationshipOption=(event)=>{
        const newConditions = [...props.conditionData]
        newConditions[4] = event.target.value
        props.setConditionData(newConditions)
    }

    console.log(props.conditionData)

    return (
    <div className="App">
    <h3>あなたの心身の状態について教えてください</h3>
      <h4>1. 肩こり・変頭痛</h4>
        <p>
            <input
            type="radio"
            value="ひどく痛む"
            checked={props.conditionData[0] === 'ひどく痛む'}
            onChange={sholderPainOption}
            />
            ひどく痛む
        </p>
        <p>
            <input
            type="radio"
            value="少し痛む"
            checked={props.conditionData[0]=== '少し痛む'}
            onChange={sholderPainOption}
            />
            少し痛む
        </p>
        <p>
            <input
            type="radio"
            value="ほとんど感じない"
            checked={props.conditionData[0] === 'ほとんど感じない'}
            onChange={sholderPainOption}
            />
            ほとんど感じない
        </p>

        <h4>2.睡眠の状態</h4>
        <p>
            <input
            type="radio"
            value="あまり眠れない"
            checked={props.conditionData[1] === 'あまり眠れない'}
            onChange={sleepConditionOption}
            />
            あまり眠れない
        </p>
        <p>
            <input
            type="radio"
            value="夜中に時々起きてしまう"
            checked={props.conditionData[1]=== '夜中に時々起きてしまう'}
            onChange={sleepConditionOption}
            />
            夜中に時々起きてしまう
        </p>
        <p>
            <input
            type="radio"
            value="問題を感じない"
            checked={props.conditionData[1] === '問題を感じない'}
            onChange={sleepConditionOption}
            />
            問題を感じない
        </p>

    <h4>3.こころの状態</h4>
        <p>
            <input
            type="radio"
            value="すぐに起こったりイライラする"
            checked={props.conditionData[2] === 'すぐに起こったりイライラする'}
            onChange={mindConditionOption}
            />
            すぐに起こったりイライラする
        </p>
        <p>
            <input
            type="radio"
            value="怒りやイライラが起こるが外に表すことはない"
            checked={props.conditionData[2]=== '怒りやイライラが起こるが外に表すことはない'}
            onChange={mindConditionOption}
            />
            怒りやイライラが起こるが外に表すことはない
        </p>
        <p>
            <input
            type="radio"
            value="ほどんと怒りやイライラを感じない"
            checked={props.conditionData[2] === 'ほどんと怒りやイライラを感じない'}
            onChange={mindConditionOption}
            />
            ほどんと怒りやイライラを感じない
        </p>

    <h4>4.集中力の状態</h4>
        <p>
            <input
            type="radio"
            value="集中しようとしても出来ないことが多い"
            checked={props.conditionData[3] === '集中しようとしても出来ないことが多い'}
            onChange={focusConditionOption}
            />
            集中しようとしても出来ないことが多い
        </p>
        <p>
            <input
            type="radio"
            value="集中することは出来るが長続きしない"
            checked={props.conditionData[3]=== '集中することは出来るが長続きしない'}
            onChange={focusConditionOption}
            />
            集中することは出来るが長続きしない
        </p>
        <p>
            <input
            type="radio"
            value="集中したい時は、多くの場合、集中することが出来る"
            checked={props.conditionData[3] === '集中したい時は、多くの場合、集中することが出来る'}
            onChange={focusConditionOption}
            />
            集中したい時は、多くの場合、集中することが出来る
        </p>

    <h4>5.人間関係の状態</h4>
        <p>
            <input
            type="radio"
            value="親しい人にも会うのが億劫に感じる"
            checked={props.conditionData[4] === '親しい人にも会うのが億劫に感じる'}
            onChange={relationshipOption}
            />
            親しい人にも会うのが億劫に感じる
        </p>
        <p>
            <input
            type="radio"
            value="あまり親しくない人には、出来るだけ会いたくない"
            checked={props.conditionData[4]=== 'あまり親しくない人には、出来るだけ会いたくない'}
            onChange={relationshipOption}
            />
            あまり親しくない人には、出来るだけ会いたくない
        </p>
        <p>
            <input
            type="radio"
            value="人と会うことを苦痛に感じない"
            checked={props.conditionData[4] === '人と会うことを苦痛に感じない'}
            onChange={relationshipOption}
            />
            人と会うことを苦痛に感じない
        </p>
  
        <h3>入力が完了したら、下記のボタンを押して次へ進んでください</h3>
        <button onClick={props.nextPage}>次へ</button>
    </div>
    )
}

export default Conditions;