import {useEffect, useState} from "react";
import { graphqlOperation, API } from "aws-amplify";
import { listCompanyNames } from "./graphql/queries";
import { createCompanyName } from "./graphql/mutations";

const Admin =() => {
    const [orgName, setOrgName] = useState()
    const [dbOrgName, setDbOrgName] = useState()

    useEffect(()=>{
        getOrgData()
    },[])

    const getOrgData = async () => {
        const values = await API.graphql(graphqlOperation(listCompanyNames))
        console.log("admin CompData", values);
        const newOrgName = values.data.listCompanyNames.items[0].companyName
        setDbOrgName(newOrgName)
    }

    const sendOrgData=()=>{
        API.graphql(graphqlOperation(createCompanyName, 
            {input:{companyName:orgName}}))
            .then(()=>{console.log("送信成功")})
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>本ページにて組織名の入力をします</h2>
            <p>データベースに保持されている組織名を不要なものを削除、次に行うものを入力します</p>
            <p>本作業で別の組織名や、２つ以上の組織名がある場合、処理に誤りが生じますので注意ください</p>
            <form>
                <h3>組織名の略称を記載</h3>
                <input
                    className="inputText" type="string" placeholder="組織名略称"
                    onChange={(e) => setOrgName(e.target.value)}>
                </input>
                <p>確認: {orgName}</p>
                <button onClick={sendOrgData}>組織名をDBに送信</button>
                
                <h3>データベース上の組織名(ここが正しければ問題ない）</h3>
                <p style={{color:"red"}}>確認: {dbOrgName}</p>
            </form>
           
        </div>
    )
}

export default Admin;