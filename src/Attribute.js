import {API, graphqlOperation} from "aws-amplify";
import {createAttributeData} from "./graphql/mutations";

const Attribute = (props) => {
    console.log("check",props.attributeData[0])

    const jobOption=(event)=>{
        const newAttribute = [...props.attributeData]
        newAttribute[0] = event.target.value
        props.setAttributeData(newAttribute)
    }

    const ageOption=(event)=>{
        const newAttribute = [...props.attributeData]
        newAttribute[1] = event.target.value
        props.setAttributeData(newAttribute)
    }

    const genderOption=(event)=>{
        const newAttribute = [...props.attributeData]
        newAttribute[2] = event.target.value
        props.setAttributeData(newAttribute)
    }

    const sendData=()=>{
        API.graphql(graphqlOperation(createAttributeData, 
            {input:{personId:props.personId, companyName:props.customerName, attributeData:props.attributeData}}))
            .then(()=>{console.log("送信成功")})
        props.setQuestionState(props.questionState+1);
    }

    return (
        <div className="App">
        <h4>あなたの属性について教えてください</h4>
        <p htmlFor="dropdown">職種</p>
            <select id="dropdown" 
                value={props.attributeData[0]} 
                onChange={jobOption} 
                style={{width:"200px", textAlign:"center", fontSize:"15px"}}
                >
                <option value="">選択してください</option>
                <option value="技術・エンジニア">技術・エンジニア</option>
                <option value="営業・接客">営業・接客</option>
                <option value="専門職、管理">専門職、管理</option>
            </select>
         <p style={{fontSize:"10px"}}>  {props.attributeData[0]}</p>

        <p htmlFor="dropdown">年齢（年代）</p>
            <select id="dropdown" 
                value={props.attributeData[1]} 
                onChange={ageOption}
                style={{width:"200px", textAlign:"center", fontSize:"15px"}}
                >
                <option value="">選択してください</option>
                <option value="20代以下">20代以下</option>
                <option value="30代">30代</option>
                <option value="40代">40代</option>
                <option value="50代">50代</option>
                <option value="60代以上">60代以上</option>
            </select>
            <p style={{fontSize:"10px"}}>  {props.attributeData[1]}</p>

         <p htmlFor="dropdown">性別</p>
            <select id="dropdown" 
                value={props.attributeData[2]} 
                onChange={genderOption}
                style={{width:"200px", textAlign:"center", fontSize:"15px"}}
                >
                <option value="">選択してください</option>
                <option value="女性">女性</option>
                <option value="男性">男性</option>
                <option value="その他・回答しない">その他・回答しない</option>
            </select>
         <p style={{fontSize:"10px"}}>{props.attributeData[2]}</p>

        <h3>入力が完了したら、下記のボタンを押して次へ進んでください</h3>
        <button onClick={sendData}>次へ</button>
        </div>
     )
    }

export default Attribute;