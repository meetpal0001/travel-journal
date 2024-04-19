import Page from './Page';
import Cover from './Cover';
import "./styles.css"
import Data from './Data'



export default function Book(props) {

    let x = 1

    console.log(Data[1])

    let ind
    const view = Data.map((data, i, arr) => {
        ind = -3 - i
        return (<Page
            style={ind}
            data={data}
            data2={Data[i + 1]}
            flip={props.flip[x++]}
            curPage={props.curPage} />)
    })



    console.log(props.flip[0])


    return (
        <div className='book'>
            <Cover txt="My travel Journal" />
            <div className="dummyPage"></div>
            <div className="dummyPage"></div>
            <div className="dummyPage"></div>
            <div className="dummyPage"></div>
            <div className={`dummyPage`}>
            </div>
            <Page style={-2}
                curPage={props.curPage}
                flip={props.flip[0]}
                data2={Data[0]} />
            {view}

            <Cover index={ind - 1} />
        </div>
    )
}